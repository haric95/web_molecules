// import React from "react"
// import * as THREE from "three"
// import MTLLoader from "three-mtl-loader";
// import OBJLoader from "three-obj-loader-es6-module"
// import OrbitControls from "three-orbitcontrols"

// const scene = new THREE.Scene();

// function sceneSetup () {
//     const width = document.getElementsByClassName("molecule-canvas")[0].offsetWidth;
//     const height = document.getElementsByClassName("molecule-canvas")[0].offsetHeight;
//     var scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 1000);
//     camera.position.z = 10;
//     const controls = new OrbitControls(camera, canvas)
//     controls.minDistance = 8
//     controls.maxDistance = 12
//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setClearColor("#d4d4d4");
//     renderer.setSize(width, height);
//     canvas.appendChild(this.renderer.domElement); // mount using React ref
//     var lights = [];
//     lights[0] = new THREE.PointLight(0xffffff, 0.6, 0);
//     lights[1] = new THREE.PointLight(0xffffff, 0.6, 0);
//     lights[2] = new THREE.PointLight(0xffffff, 0.6, 0);
//     lights[0].position.set(0, 200, 0);
//     lights[1].position.set(100, 200, 100);
//     lights[2].position.set(-100, -200, -100);
//     scene.add(lights[0]);
//     scene.add(lights[1]);
//     scene.add(lights[2]);
//     renderer.render(scene, camera)
//     var requestID = window.requestAnimationFrame(sceneSetup)
// }

// function addMolecule() {
//     const path_mol = this.props.molecule
//     var mtlLoader = new MTLLoader();
//     mtlLoader.setPath("./assets/molecules/");
//     mtlLoader.load(path_mol+".mtl", function(materials){
//         materials.preload();
//         console.log("loaded material");
//         var objLoader = new OBJLoader();
//         objLoader.setPath('./assets/molecules/')
//         objLoader.setMaterials(materials);
//         objLoader.load(path_mol+".obj", function(object){
//           const molecule = object;
//         molecule.scale.set(2,2,2);
//         scene.add(molecule)
//         })
//     })
// }

// function ThreeDFunctional (props) {
//     return <div></div>
// }

// export default ThreeDFunctional