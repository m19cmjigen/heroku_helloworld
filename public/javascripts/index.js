var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// var geometry = new THREE.CubeGeometry(1,1,1);
// var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

var material = new THREE.MeshBasicMaterial({map: THREE.ImageUtils.loadTexture('/images/oyaji.jpg')});
var geometry = new THREE.PlaneGeometry(200, 200);
// var material = THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture('/images/oyaji.jpg')});
// var material = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture('images/oyaji.jpg') } );
var cube = new THREE.Mesh( geometry, material );
cube.overdraw=true;
scene.add( cube );
camera.position.z = 500;

function render() {
        requestAnimationFrame(render);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
}
render();

