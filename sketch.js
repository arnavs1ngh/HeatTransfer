var angle = 30;
let w = 20
let theta;
let strength;



function setup() {
  // put setup code here
  createCanvas(800,800, WEBGL);
  background(155);
  //colorMode(HSL);

  theta = atan(1/sqrt(2))

  strength = 10

}

function draw() {
  // put drawing code here
  background(155);
  ortho(-600,600,-600,600,-1000,1000);
  ambientLight(255,255,255,0,-1,0)
  //translate(width/2,height/2);
  translate(0,-80,200)
  rotateX(-theta);
  rotateY(-PI/4);

  //rotateX(angle*0.1)

  //let offset = 0;
  for (var z = 0; z < height; z+=w) {
  	for (var x = 0; x < width; x+=w) {
	  	push();
	  	let d = dist(x,z,width/2,height/2);
	  	let offset = map(d,0,800*sqrt(2),-strength,strength)
	  	let col = map(d,0,800*sqrt(2),255,0)
	  	let a = angle + offset;
	 	  let h = map(sin(a),-1,1,30,255)
	  	fill(h%255);
	  	translate(x-width/2,0,z-height/2);
	  	//ambientMaterial(col,100,100);
	  	box(w,h,w);
	  	//rect(x-width/2 + w/2,0,w-2,h);
	  	pop();
  	}
  	//offset+=0.1
  }
  
  angle -= 0.1;


}