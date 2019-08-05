import React from "react"
import * as THREE from "three"
import MTLLoader from "three-mtl-loader";
import OBJLoader from "three-obj-loader-es6-module"
import OrbitControls from "three-orbitcontrols"

var scene;

class ThreeD extends React.Component {
  // constructor(props) {
  //   super(props)
    // this.state = {
    //   molecule: props.molecule,
    //   mo_no: props.mo_no,
    //   new_mo: props.new_mo,
    //   load: true
    // }
  // }


  componentDidMount() {
    this.sceneSetup()
    this.addMolecule()
    this.startAnimationLoop();
    window.addEventListener("resize", this.handleWindowResize);
    // this.setState({load: false})
  }

  
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
    window.cancelAnimationFrame(this.requestID);
    this.controls.dispose();
  }

  componentDidUpdate(prevProps) {
    const mo = scene.getObjectByName("molecular-orbital")
    if (typeof mo !== undefined && this.props.mo_no !== prevProps.mo_no) {
      scene.remove(mo)
      this.addMo()
    }
    // if (this.props.mo_no !== prevProps.mo_no) {
    //   this.addMo()
    // }
  }

// This creates the 3D scene and ensures it renders to the right size and aspect ratio when page loads.
// Camera, lighting and background color can be changed here.
  sceneSetup() {
    let width = document.getElementsByClassName("molecule-canvas")[0].offsetWidth;
    let height = document.getElementsByClassName("molecule-canvas")[0].offsetHeight;
    scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 1000);
    this.camera.position.z = 10;
    let controls = new OrbitControls(this.camera, this.canvas)
    controls.minDistance = 8
    controls.maxDistance = 12
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor("#d4d4d4");
    this.renderer.setSize(width, height);
    this.canvas.appendChild(this.renderer.domElement); // mount using React ref
    var lights = [];
    lights[0] = new THREE.PointLight(0xffffff, 0.6, 0);
    lights[1] = new THREE.PointLight(0xffffff, 0.6, 0);
    lights[2] = new THREE.PointLight(0xffffff, 0.6, 0);
    lights[0].position.set(0, 200, 0);
    lights[1].position.set(100, 200, 100);
    lights[2].position.set(-100, -200, -100);
    scene.add(lights[0]);
    scene.add(lights[1]);
    scene.add(lights[2]);
  }


  addMolecule() {
    const path_mol = this.props.molecule
    const mtlLoader = new MTLLoader();
    mtlLoader.setPath("./assets/molecules/");
    mtlLoader.load(path_mol+".mtl", function(materials){
      materials.preload();
      console.log("loaded material");
      var objLoader = new OBJLoader();
      objLoader.setPath('./assets/molecules/')
      objLoader.setMaterials(materials);
      objLoader.load(path_mol+".obj", function(object){
        // const molecule = object;
       object.scale.set(2,2,2);
        scene.add(object)
      })
    })
  }
  addMo () {
    const path_mo = this.props.molecule + "_mo" + this.props.mo_no 
    const mtlLoader = new MTLLoader();
    mtlLoader.setPath("./assets/mos/");
    mtlLoader.setMaterialOptions( { side: THREE.DoubleSide} );
    mtlLoader.load(path_mo+".mtl", function(materials){
      materials.preload();
      console.log("loaded material");
      var objLoader = new OBJLoader();
      objLoader.setPath('./assets/mos/')
      objLoader.setMaterials(materials);
      objLoader.load(path_mo+".obj", function(object){
        object.name = "molecular-orbital"
        object.scale.set(2,2,2);
        scene.add(object)
      })
    })
  }

  startAnimationLoop = () => {
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

// class Container extends React.Component {
//   state = { isMounted: true };

//   render() {
//     const { isMounted = true } = this.state;
//     return (
//       <>
//         <button
//           onClick={() =>
//             this.setState(state => ({ isMounted: !state.isMounted }))
//           }
//         >
//           {isMounted ? "Unmount" : "Mount"}
//         </button>
//         {isMounted && <ThreeD />}
//         {isMounted && <div>Scroll to zoom, drag to rotate</div>}
//       </>
//     );
//   }
// }

export default ThreeD