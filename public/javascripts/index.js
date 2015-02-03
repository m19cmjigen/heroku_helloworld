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

function render(x, y) {
//    requestAnimationFrame(render);
    cube.rotation.x = x;
    cube.rotation.y = y;
    renderer.render(scene, camera);
}
render(0, 0);

/* debug 
for( i = 0 ; i<100 ; i++) {
    setInterval( function(){ render(i, i);}, 500);
}
*/

	window.addEventListener("devicemotion", function(event){
		ctx.clearRect(0, 0, 300, 400);
		var x_a = event.acceleration.x;
		var y_a = event.acceleration.y;
		var z_a = event.acceleration.z;
		var x_g = event.accelerationIncludingGravity.x;
		var y_g = event.accelerationIncludingGravity.y;
		var z_g = event.accelerationIncludingGravity.z;
		ctx.fillText("X : "+x_a, 20, 20);
		ctx.fillText("Y : "+y_a, 20, 40);
		ctx.fillText("Z : "+z_a, 20, 60);
		ctx.fillText("X傾き : "+x_g, 20, 80);
		ctx.fillText("Y傾き : "+y_g, 20, 100);
		ctx.fillText("Z傾き : "+z_g, 20, 120);
        render(x_g, y_g);
	}, true);

