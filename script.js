//Scene
var scene = new THREE.Scene();

//Camera
var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 0.1, 1000);

//Renderer
var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Objects
var geometry = new THREE.BoxGeometry( 2, 2, 2);

//Materials
var material = new THREE.MeshBasicMaterial( { color: 0x00ffff } );

//Mesh
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

//Animate
function animate() {
    //Call animate again on the next frame
    requestAnimationFrame( animate );

    //Update objects
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    //Render
    renderer.render( scene, camera );
}
animate();