import React from "react"
import * as THREE from "three"
import MTLLoader from "three-mtl-loader";
import OBJLoader from "three-obj-loader-es6-module"
import OrbitControls from "three-orbitcontrols"

// This component deals with the rendering of the 3d models of the molecules and MOs.
// It is class-based although it doesn't have state so could potentially be rewritten as functional?
// It is class-based at the moment because it relies on some lifecycle methods.


//In this component, OrbitControls are used. These are camera controls which mean that the scene always has an "up" direction
//See here for an example https://threejs.org/examples/#misc_controls_orbit
//This isn't the case with molecules however, so it would be better to implement TrackballControls
//https://threejs.org/examples/#misc_controls_trackball
//However, I cannot get these to work with this component, so I'm using the principal rotation axis as the "up" direction
//To hopefully make the controls make a bit of sense 

//Declaring these variables outside of the class so they can be accessed within all of the class methods
//If a variable is declared within a class method it is only available within that method.
var scene;
var controls;
var lights;
var light_holder;

class ThreeD extends React.Component {
  //this method runs when the ThreeD component is initially mounted to the page
  //ie. when AppContainer has state => intro: false and menu: false
  //it simply calls two other class methods and then starts the animation loop
  //the lasts line makes sure the aspect ratio stays correct when the window is resized
  componentDidMount() {
    this.sceneSetup()
    this.addMolecule()
    this.startAnimationLoop();
    window.addEventListener("resize", this.handleWindowResize);
    // this.setState({load: false})
  }

  //This removes the event listener and cancels the animation loop when the ThreeD component is unmounted
  //Removing event listener keeps things tidy
  //Cancelling animation loop means less CPU usage when user is on another tab etc.
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
    window.cancelAnimationFrame(this.requestID);
    controls.dispose();
  }

  //This method runs when one of the props is changed.
  //The props are all coming from state of AppContainer, so if another component triggers change in state of AppContainer
  //then this method will run in this component.
  componentDidUpdate(prevProps) {
    const mo = scene.getObjectByName("molecular-orbital")
    //This block is run if the MO number is changed in the drop-down menu
    if (typeof mo !== undefined && this.props.mo_no !== prevProps.mo_no) {
      scene.remove(mo)
      this.addMo()
    }
  }

// This creates the 3D scene and ensures it renders to the right size and aspect ratio when page loads.
// Camera, lighting and background color can be changed here.
  sceneSetup() {
    let width = document.getElementsByClassName("molecule-canvas")[0].offsetWidth;
    let height = document.getElementsByClassName("molecule-canvas")[0].offsetHeight;
    scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 1000);
    this.camera.position.z = 10;
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    // Change the background color here
    this.renderer.setClearColor("#dbf5fc");
    this.renderer.setSize(width, height);
    controls = new OrbitControls(this.camera, this.canvas)
    controls.minDistance = 8
    controls.maxDistance = 20
    this.canvas.appendChild(this.renderer.domElement); // mount using React ref
    light_holder = new THREE.Group();
    lights = [];
    lights[0] = new THREE.AmbientLight(0xffffff, 0.45 );
    lights[1] = new THREE.PointLight(0xffffff, 0.15);
    lights[1].position.set(-2, 0, 10);
    lights[2] = new THREE.PointLight(0xffffff, 0.10);
    lights[2].position.set(10, 20, 10)
    light_holder.add(lights[0]);
    light_holder.add(lights[1]);
    light_holder.add(lights[2]);
    scene.add(light_holder);
  }

  //This adds a molecule .obj file from the public folder
  addMolecule() {
    const path_mol = this.props.molecule
    const mtlLoader = new MTLLoader();
    mtlLoader.setPath("./assets/molecules/");
    mtlLoader.load("molecule.mtl", function(materials){
      materials.preload();
      var objLoader = new OBJLoader();
      objLoader.setPath('./assets/molecules/')
      objLoader.setMaterials(materials);
      objLoader.load(path_mol+".obj", function(object){
        object.name = "molecule"
        scene.add(object)
      })
    })
  }
    //This adds a mo .obj file from the public folder
  addMo () {
    const mol = this.props.molecule
    const path_mo = this.props.molecule + "_mo" + this.props.mo_no 
    const mtlLoader = new MTLLoader();
    mtlLoader.setPath("./assets/mos/");
    // mtlLoader.setMaterialOptions( { side: THREE.BackSide} );
    mtlLoader.load("mo.mtl", function(materials){
      materials.preload();
      var objLoader = new OBJLoader();
      objLoader.setPath('./assets/mos/' + mol + "/")
      objLoader.setMaterials(materials);
      objLoader.load(path_mo+".obj", function(object){
        object.name = "molecular-orbital"
        // object.scale.set(2,2,2);
        scene.add(object)
      })
    })
  }

  startAnimationLoop = () => {
    light_holder.quaternion.copy(this.camera.quaternion);
    this.renderer.render(scene, this.camera);
    this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
  };

  handleWindowResize = () => {
    const width = document.getElementsByClassName("molecule-canvas")[0].offsetWidth;
    const height = document.getElementsByClassName("molecule-canvas")[0].offsetHeight;
    this.renderer.setSize(width, height);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  };

  render() {
    return <div ref={ref => (this.canvas = ref)} />;
  }
}

export default ThreeD