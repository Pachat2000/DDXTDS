let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
ctx.imageSmoothingEnabled= false;

var uksound = new Audio("../assets/ksound1.wav");
var dksound = new Audio("../assets/ksound2.wav");
var lksound = new Audio("../assets/ksound3.wav");
var rksound = new Audio("../assets/keysound4.wav");

let all_arrow = [];
let arrow = new Image();
arrow.src = "../assets/arrow_buttons.png";

let back_img = [];
let background = new Image();
background.src = "../assets/background.png";

let mount_img = [];
let montagne = new Image();
montagne.src = "../assets/mountain.png";

let kirbo_img = [];
let kirbo = new Image();
kirbo.src = "../assets/kirbo.png";
let tab_kirbo = [];

let sol_img = [];
let sol = new Image();
sol.src = "../assets/sol.png";

let bugs_img = [];
let bug = new Image();
bug.src = "../assets/bug.png";
let tab_bug = [];

let marx_img = [];
let marx = new Image();
marx.src = "../assets/marx.png";
let tab_marx = []; 

let tab_clus = [];
let reussi = true;
let fight = new SAT.Box(new SAT.Vector(220,540), 50, 50).toPolygon();

let tab = new Array();
for(let i = 0; i < 4; i++){
    tab.push(new Array());
}

let up = false;
let right = false;
let down = false;
let left = false;

let score = 0;
let combo = 0;
let vitesse = 40;

let star_img = [];
let tab_particule = [];
let star = new Image();
star.src = "../assets/star.png";


/*              INIT IMAGE                  */

marx.onload = function() {
    let canvas1 = document.createElement("canvas");
    canvas1.width = 69*3;
    canvas1.height = 35*4;
    let context1 = canvas1.getContext("2d");
    context1.drawImage(marx, 0,0,69*3,35*4);    
    for(let t = 0; t < 4; t += 1) {
	let imax = 3;
	if(t == 0 || t == 3) {
	    imax = 2;
	}
	for(let j = 0; j < imax; j += 1) {
	    let canvasImageData1 = context1.getImageData(j*69, t*35, 69, 35);
	    let canvas2 = document.createElement("canvas");
	    canvas2.width = 69;
	    canvas2.height = 35;
	    let context2 = canvas2.getContext("2d");
	    context2.putImageData(canvasImageData1, 0,0);
	    marx_img.push(canvas2);
	}    
    }
};


star.onload = function() {
    let canvas1 = document.createElement("canvas");
    canvas1.width = 6;
    canvas1.height = 6;
    let context1 = canvas1.getContext("2d");
    context1.drawImage(star, 0,0,6,6);
    for(let t = 0; t < 1; t += 1) {
	for(let j = 0; j < 1; j += 1) {
	    let canvasImageData1 = context1.getImageData(j*6, t*6, 6, 6);
	    let canvas2 = document.createElement("canvas");
	    canvas2.width = 6;
	    canvas2.height = 6;
	    let context2 = canvas2.getContext("2d");
	    context2.putImageData(canvasImageData1, 0,0);
	    star_img.push(canvas2);
	}    
    }
};



arrow.onload = function() {
    let canvas1 = document.createElement("canvas");
    canvas1.width = 24*4;
    canvas1.height = 24*3;
    let context1 = canvas1.getContext("2d");
    context1.drawImage(arrow, 0,0,24*4,24*3);
    for(let t = 0; t < 3; t += 1) {
	for(let j = 0; j < 4; j += 1) {
	    let canvasImageData1 = context1.getImageData(24*j, t*24, 24, 24);
	    let canvas2 = document.createElement("canvas");
	    canvas2.width = 24;
	    canvas2.height = 24;
	    let context2 = canvas2.getContext("2d");
	    context2.putImageData(canvasImageData1, 0,0);
	    all_arrow.push(canvas2);
	}    
    }
};

montagne.onload = function() {
    let canvas1 = document.createElement("canvas");
    canvas1.width = 254;
    canvas1.height = 60;
    let context1 = canvas1.getContext("2d");
    context1.drawImage(montagne, 0,0,254,60);
    for(let t = 0; t < 1; t += 1) {
	for(let j = 0; j < 4; j += 1) {
	    let canvasImageData1 = context1.getImageData(j*63.5, 0, 63.5, 60);
	    let canvas2 = document.createElement("canvas");
	    canvas2.width = 63.5;
	    canvas2.height = 60;
	    let context2 = canvas2.getContext("2d");
	    context2.putImageData(canvasImageData1, 0,0);
	    mount_img.push(canvas2);
	}    
    }
};


background.onload = function() {
    let canvas1 = document.createElement("canvas");
    canvas1.width = 260;
    canvas1.height = 192;
    let context1 = canvas1.getContext("2d");
    context1.drawImage(background, 0,0,260,192);
    for(let t = 0; t < 1; t += 1) {
	for(let j = 0; j < 4; j += 1) {
	    let canvasImageData1 = context1.getImageData(j*65, 0, 65, 192);
	    let canvas2 = document.createElement("canvas");
	    canvas2.width = 65;
	    canvas2.height = 192;
	    let context2 = canvas2.getContext("2d");
	    context2.putImageData(canvasImageData1, 0,0);
	    back_img.push(canvas2);
	}    
    }
};

kirbo.onload = function() {
    let canvas1 = document.createElement("canvas");
    canvas1.width = 16*8;
    canvas1.height = 16*6;
    let context1 = canvas1.getContext("2d");
    context1.drawImage(kirbo, 0,0,16*8,16*6);
    for(let t = 0; t < 5; t += 1) {
	let imax = 2;
	if(t == 1){
	    imax = 3;
	}
	if(t == 2){
	    imax = 8;
	}
	if(t == 3){
	    imax = 5;
	}
	if(t ==4){
	    imax = 8;
	}
	for(let j = 0; j < imax; j += 1) {
	    if(t ==4 && j == 2){
		let canvasImageData1 = context1.getImageData(j*16, t*16, 22, 16);
		let canvas2 = document.createElement("canvas");
		canvas2.width = 22;
		canvas2.height = 16;
		let context2 = canvas2.getContext("2d");
		context2.putImageData(canvasImageData1, 0,0);
		kirbo_img.push(canvas2);
	    }
	    else if(t ==4 && (j == 3 ||j == 4 || j==6)){

	    }
	    else if(t ==4 && j == 5){

		let canvasImageData1 = context1.getImageData(j*16, (t-1)*16, 18, 32);
		let canvas2 = document.createElement("canvas");
		canvas2.width = 18;
		canvas2.height = 32;
		let context2 = canvas2.getContext("2d");
		context2.putImageData(canvasImageData1, 0,0);
		kirbo_img.push(canvas2);
	    }
	    else if(t ==4 && j == 7){

		let canvasImageData1 = context1.getImageData(j*16, t*16, 16, 22);
		let canvas2 = document.createElement("canvas");
		canvas2.width = 16;
		canvas2.height = 22;
		let context2 = canvas2.getContext("2d");
		context2.putImageData(canvasImageData1, 0,0);
		kirbo_img.push(canvas2);
	    }
	    else{
		let canvasImageData1 = context1.getImageData(j*16, t*16, 16, 16);
		let canvas2 = document.createElement("canvas");
		canvas2.width = 16;
		canvas2.height = 16;
		let context2 = canvas2.getContext("2d");
		context2.putImageData(canvasImageData1, 0,0);
		kirbo_img.push(canvas2);
	    }
	}    
    }
};

sol.onload = function() {    
    let canvas1 = document.createElement("canvas");
    canvas1.width = 16;
    canvas1.height = 32;
    let context1 = canvas1.getContext("2d");
    context1.drawImage(sol, 0,0,16,32);
    for(let t = 0; t < 1; t += 1) {
	for(let j = 0; j < 1; j += 1) {
	    let canvasImageData1 = context1.getImageData(j*16, t*32, 16, 32);
	    let canvas2 = document.createElement("canvas");
	    canvas2.width = 16;
	    canvas2.height = 32;
	    let context2 = canvas2.getContext("2d");
	    context2.putImageData(canvasImageData1, 0,0);
	    sol_img.push(canvas2);
	}    
    }
};

bug.onload = function() {
    let canvas1 = document.createElement("canvas");
    canvas1.width = 20*3;
    canvas1.height = 20*2;
    let context1 = canvas1.getContext("2d");
    context1.drawImage(bug, 0,0,20*3,20*2);
    for(let t = 0; t < 2; t += 1) {
	let imax = 3;
	if (t == 1) imax = 1;
	for(let j = 0; j < imax; j += 1) {
	    let canvasImageData1 = context1.getImageData(j*20, t*20, 20, 20);
	    let canvas2 = document.createElement("canvas");
	    canvas2.width = 20;
	    canvas2.height = 20;
	    let context2 = canvas2.getContext("2d");
	    context2.putImageData(canvasImageData1, 0,0);
	    bugs_img.push(canvas2);
	}    
    }
};



/*                      END IMAGE                               */

/*                        CLASS                                 */

class Cluster{
    constructor(tab,boss){
	if(boss){
	    this.pv = 100;
	    this.box = new SAT.Box(new SAT.Vector(600, 380), 200, 200).toPolygon();
	}
	else{
	    this.pv = tab.length;
	    this.box = new SAT.Box(new SAT.Vector(700, 540), 50, 200).toPolygon();
	}	
    }
}


class Bug{
    constructor(x,y){
	this.x = x;
	this.y =y;
	this.anim_id = 0;
	this.death = false;
    }
    draw(tab){
	if(tab.length != 0){	    
	    ctx.drawImage(tab[this.anim_id], this.x  , this.y,
			  50, 50);
	    this.anim_id++;
	    if(this.death) {
		this.x += 2;
		this.y -= 2;
		if(this.x > 900) depopEnem();
		this.anim_id = 3;
	    }
	    else{
		if(this.anim_id ==3) this.anim_id = 0;
	    }	   	    	    
	}
    }
    drawpos(tab){
	if(tab.length != 0){	    
	    ctx.drawImage(tab[this.anim_id], this.x  , this.y,
			  50, 50);		 
	}
    }
    dead(){
	this.anim_id = 3;
	this.death = true;
    }
}

class Kirbo{
    constructor(x,y,anim_id){
	//this.popdepartx = random(0,600);
	//this.popdepartx = random(0,600);
	this.posdepx = getRandomIntInclusive(0,600);
	this.posdepy = getRandomIntInclusive(300,600);
	this.init = true;
	this.x = x;
	this.y = y;
	this.dead = false;
	this.initdead = true;
	this.anim_id = anim_id;
	this.stand = true;
	this.run = false;
	this.fall = false;
    }
    draw(tab){

	if(tab.length != 0){
	    if(this.init){
		ctx.drawImage(tab[this.anim_id],this.posdepx, this.posdepy,
			      50, 50);
	    }
	    else{
		ctx.drawImage(tab[this.anim_id],this.x, this.y,
			      50, 50);
	    }
	}
    }
    drawpos(tab){
	if(this.init && tab.length != 0){
	    ctx.drawImage(tab[this.anim_id],this.posdepx, this.posdepy,
			  50, 50);
	    this.anim_id++;
	    if(this.x > this.posdepx){
		this.posdepx += 10;
	    }
	    else{
		this.posdepx -= 10;
	    }
	    if(this.y > this.posdepy){
		this.posdepy += 10;
	    }
	    else{
		this.posdepy -= 10;
	    }
	    if(this.anim_id == 18){
		this.anim_id = 13;
	    }
	    if((this.x-10 <= this.posdepx  && this.x+10 >= this.posdepx) && (this.y -10 <= this.posdepy && this.y +10 >=this.posdepy)){
		this.init = false;
	    }
	    
	}
	if(tab.length != 0 && !this.init){
	    
	    ctx.drawImage(tab[this.anim_id],this.x, this.y,
			  50, 50);
	    this.anim_id++;
	    if(this.dead){
		this.anim_id = 18;		
		this.x -= 10;
		this.y -= 5;
		if(this.x < -50){		    
		    if(this.initdead){
			this.initdead = false;
			killKirbo();

		    }
		}
	    
	    }

	    else if(this.run && this.anim_id  > 5 && !this.figth){
		this.anim_id = 2;
	    }	    
	    else if(this.fall && this.anim_id >12  && !this.figth){
		this.anim_id = 5;
	    }
	    else if(this.stand && this.anim_id > 2  && !this.figth){
		this.anim_id = 0;
	    }
	    else if(this.figth && this.anim_id >22){
		this.figth = false;
		this.anim_id--;
	    }
	}
    }
    rune(){
	if(!this.run && !this.init){
	    this.anim_id = 2;
	    this.run = true;
	    this.stand = false;
	    this.fall = false;
	}
    }
    falle(){
	if(!this.fall && !this.init){
	    this.anim_id = 5;
	    this.run = false;
	    this.stand = false;
	    this.fall = true;
	}
    }
    stande(){
	if(!this.stand && !this.init){
	    this.anim_id = 0;
	    this.run = false;
	    this.stand = true;
	    this.fall = false;
	}
    }
    combat(){
	if(!this.figth && !this.init){
	    this.figth= true;
	    this.anim_id = 19;
	}
    }

}


class particule{
    constructor(x, y, vx, vy, text_put,color){
	this.tmpy = y;
	this.color = color;
	this.tmpx = x;
	this.text_put = text_put;
	this.vx = vx;
	this.vx2 = -vx;
	this.vy = vy;
	this.x = x;
	this.y = y;
	this.x1 = x;
	this.y1 = y;
	this.x2 = x;
	this.y2 = y-20;
	this.x3 = x;
	this.y3 = y-20;
	this.end = false;
    }
    draw(){

	ctx.font = '37px serif';
	ctx.fillStyle = this.color;
	ctx.fillText(this.text_put, this.tmpx -37, this.y);
	
	ctx.drawImage(star_img[0], this.x, this.y,
		      20, 20);

	ctx.drawImage(star_img[0], this.x1, this.y1,
		      20, 20);

	ctx.drawImage(star_img[0], this.x2, this.y2,
		      20, 20);

	ctx.drawImage(star_img[0], this.x3, this.y3,
		      20, 20);
	this.y += this.vy;
	this.x += this.vx;
	this.y1 += this.vy;
	this.x1 += this.vx2;
	this.y2 += this.vy;
	this.x2 += this.vx2;
	this.y3 += this.vy;
	this.x3 += this.vx;
	this.vx2 -= 1.0;
	this.vx += 1.0;
	this.vy += 3.0;
	if(this.y > this.tmpy){
	    this.end = true;
	}
    }
    getend(){
	return this.end;
    }
}
class Marx{
    constructor(){
	this.x = 600;
	this.y = 380;
	this.anim_id  = 2;
	this.stand = true;
	this.hit = false;
	this.attack = false;
	this.dead = false;
	this.boxlaser = new SAT.Box(new SAT.Vector(this.x-20, this.y), 10, 200).toPolygon();
	this.laser = 1;
    }
    draw(tab){	
	if(tab.length != 0){
	    ctx.drawImage(tab[this.anim_id],this.x, this.y,
			  200, 200);
	    if(this.attack){
		for(let i = 0; i < this.laser; i++){
		    if(i == this.laser-1){
			ctx.drawImage(tab[8],(this.x - i *10)-40, this.y,
				      30, 200);
		    }
		    ctx.drawImage(tab[9],(this.x - i *10)-10, this.y,
				  10, 200);
		}
		
	    }
	}
    }
    drawpos(tab){
	if(tab.length != 0){
	    
	    ctx.drawImage(tab[this.anim_id],this.x, this.y,
			  200, 200);

	    if(this.attack){
		for(let i = 0; i < this.laser; i++){
		    if(i == this.laser-1){
			ctx.drawImage(tab[8],(this.x - i *10)-40, this.y,
				      30, 200);
		    }
		    ctx.drawImage(tab[9],(this.x - i *10)-10, this.y,
				  10, 200);
		}
	    }
	    this.anim_id++;

	    if(this.dead){
		this.x+=50;
		this.y-=50;
		this.anim_id = 7;
		if(this.x > 900){
		    killmarx();
		    vague3_fini = true;
		}
		
	    }
	    else if(this.hit  && this.anim_id > 7){
	
		this.hit = false;
		this.stand = true;
		this.anim_id = 2;
	    }
	    else if(this.stand && this.anim_id > 4){

		this.anim_id = 2;
	    }	   
	    else if(this.attack  && this.anim_id >1){
		this.anim_id = 1;
	    }
	}
    }
}

/*              Function                               */

function killmarx(){
    tab_marx.pop();
}


function init_cluster(nb,boss){
    if(boss){
	tab_marx.push(new Marx());
	let cluster = new Cluster(tab_marx,true);
	tab_clus.push(cluster);
    }
    else{
	let Renemies = getRandomIntInclusive(1, nb);
	for(let i = 0; i < Renemies; i++){
	    tab_bug.push(new Bug(getRandomIntInclusive(700,900),530));
	}
	let cluster = new Cluster(tab_bug,false);
	tab_clus.push(cluster);
    }
}



function particuler(){
    if(tab_particule.length != 0){
	for(let i = 0; i < tab_particule.length ; i++){
	    tab_particule[i].draw();	    
	    if(tab_particule[i].getend() == true){
		tab_particule.splice(i,1);		
	    }
	}
    }
}

window.addEventListener("keydown", keydown_fun, false);

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function draw_note_drop(){
    for(let j = 0; j < tab.length; j++){
	for(let i = 0; i < tab[j].length;i++){
	    if(all_arrow.length != 0){
		ctx.drawImage(all_arrow[tab[j][i][0]],tab[j][i][1], tab[j][i][2],
			      50, 50);
		tab[j][i][2] += 10;
		if(tab[j][i][2] > 640){
		    tab[j].splice(i,1);
		    combo = 0;
		    reussi = false;
		}
	    }
	}
    }    
}

function update_arrow_touch(){
    if(all_arrow.length >0){
	if(up == false){
	    ctx.drawImage(all_arrow[0],985, 550,
			  50, 50);
	}
	else{
	    ctx.drawImage(all_arrow[4],985, 550,
			  50, 50);
	    up = false;
	}
	if(right == false){
	   ctx.drawImage(all_arrow[1],1085, 550,
		      50, 50); 
	}
	else{
	    ctx.drawImage(all_arrow[5],1085, 550,
			  50, 50);
	    right = false;
	}
	if(down == false){
	    ctx.drawImage(all_arrow[2],1185, 550,
		      50, 50);
	}
	else{
	    ctx.drawImage(all_arrow[6],1185, 550,
			  50, 50);
	    down = false;
	}
	if(left == false){
	    ctx.drawImage(all_arrow[3],1285, 550,
		      50, 50);
	}
	else{
	    ctx.drawImage(all_arrow[7],1285, 550,
			  50, 50);
	    left = false;
	}
    }
}

function nexanim(){
    for(let i = 0; i < tab_kirbo.length; i++){
	if(combo/2 == 0){	
	    tab_kirbo[i].stande();
	}
	if(combo/2> 0 && combo/2 < 8){
	    tab_kirbo[i].rune();
	}
	if(combo/2> 8){
	    tab_kirbo[i].falle();
	}
    }    
}

function popKirbo(){
    tab_kirbo.push( new Kirbo(getRandomIntInclusive(0,250),540,13));
}

function depopEnem (){
    tab_bug.splice(0,1);
}

function draw() {
    
    ctx.beginPath();
    ctx.fillStyle = "#000000";
	ctx.fillRect(955, 0,
		     400,640);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(955, 0,
		     10,640);
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(1055, 0,
		     10,640);
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(1155, 0,
		     10,640);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(1255, 0,
		     10,640);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(1355, 0,
		     10,640);
    ctx.closePath();    
}

let tmp1 = [];
let tmp2 = [];
let tmp3 = [];
function initTile(tab,nb,longueur, background, nb2, lng, montagne, nb3, lng2){
    for(let i= 0; i< nb; i++){
	tab.push([i*longueur,590]);
    }
    for(let i = 0; i < nb2; i++){
	background.push([i*lng]);
    }
    for(let i = 0; i < nb3; i ++){
	montagne.push([i*lng2]);
    }    
    
}

function keydown_fun(e) {
    switch(e.code) {
    case "ArrowUp":
	if(touche && pages == 0) pages = 1;
	else if(!touche && pages == 0) pages = 2;
	else if(touche && pages == 3) pages = 0;
	else if(!touche && pages == 3) pages = 0;
	else if(pages ==1){
	    uksound.play();
	    up = true;	
	    press(0);
	}
	break;
    case "ArrowRight":
	if(pages ==1){
	    right = true ;
	    press(1);
	    rksound.play();
	}
	else{
	    touche = false;
	}
	
	break;
    case "ArrowDown":
	if(touche && pages == 0) pages = 1;
	else if(!touche && pages == 0) pages = 2;
	else if(touche && pages == 3) pages = 0;
	else if(!touche && pages == 3) pages = 0;
	else if(pages ==1){
	    dksound.play();
	    down = true;
	    press(2);
	}
	break;
    case "ArrowLeft":
	if(pages ==1){
	    lksound.play();
	    left = true;
	    press(3);
	}
	else{
	    touche = true;
	}
	break;
    }
    
}

let vague1 = 0;
let vague1_fini =false;
let vague2 = 0;
let vague2_fini =false;
let vague3 = 0;
let vague3_fini =false;
function affiche_score(){
    ctx.font = '48px serif';
    ctx.fillText(score, 10, 50);
    ctx.fillText(combo, 10, 100);
    
    ctx.beginPath();
    ctx.fillStyle = "#000000";
	ctx.fillRect(300, 50,
		     400,15);
    ctx.closePath();
    
    var jauge = combo * 80 %400;

    if(jauge == 400 ) jauge = 0;
    
    ctx.beginPath();
    ctx.fillStyle = "#ffff00";
	ctx.fillRect(305, 52.5,
		     jauge ,10);
    ctx.closePath();
    if( kirbo_img.length != 0)    ctx.drawImage(kirbo_img[0], 700, 30, 50, 50);
    
    
    
    ctx.beginPath();
    ctx.fillStyle = "#000000";
    ctx.fillRect(300, 100,
		     100,15);
    ctx.closePath();
    if(vague1 >9) vague1 = 9;
    var jauge2 = vague1 * 10 %100;
    
    
    ctx.beginPath();
    ctx.fillStyle = "#ffff00";
	ctx.fillRect(305, 102.5,
		     jauge2 ,10);
    ctx.closePath();
    
    
    if( bugs_img.length != 0)    ctx.drawImage(bugs_img[0], 400, 80, 50, 50);

    
    ctx.beginPath();
    ctx.fillStyle = "#000000";
    ctx.fillRect(460, 100,
		 100,15);
    ctx.closePath();

    if(vague2 >=14){
	var jauge3 =90;
    }else{
	var jauge3 = vague2 * 6.66666666667;
    }
    
    ctx.beginPath();
    ctx.fillStyle = "#ffff00";
	ctx.fillRect(465, 102.5,
		     jauge3 ,10);
    ctx.closePath();
    
    if( bugs_img.length != 0)    ctx.drawImage(bugs_img[0], 560, 80, 50, 50);

    
    ctx.beginPath();
    ctx.fillStyle = "#000000";
    ctx.fillRect(620, 100,
		     100,15);
    ctx.closePath();
    
    if(vague3 >=29){
	var jauge4 = 90;
    }
    else{
	var jauge4 = vague3 *3.33333333333;
    }
    ctx.beginPath();
    ctx.fillStyle = "#ffff00";
	ctx.fillRect(625, 102.5,
		     jauge4 ,10);
    ctx.closePath();
    
    
    if( marx_img.length != 0)    ctx.drawImage(marx_img[3], 725, 80, 50, 50);
}


function press(id){
    if(id == 0){
	if(tab[0].length != 0){
	    if(tab[0][0][2]>= 610){

		tab_particule.push(new particule(985.0,550.0, -20,-20, 'Fail', "#ff0000"));
		reussi = false;
		combo = 0;
	    }
	    if(tab[0][0][2] < 440){
	
		tab_particule.push(new particule(985.0,550.0, -20,-20, 'Too early',"#00ff00"));
		reussi = false;
		combo = 0;
	    }
	    if(tab[0][0][2]>= 440  &&  tab[0][0][2] < 540){
		tab_particule.push(new particule(985.0,550.0, -20,-20, 'Good',"#0000ff"));
	
		combo+=1;
		reussi = true;
		score+= 10 + combo * 5;
		vague1++;
		if(vague1_fini) vague2++;
		if(vague2_fini) vague3++;
	    }
	    if(tab[0][0][2]>= 540 && tab[0][0][2] < 610){
		tab_particule.push(new particule(985.0,550.0, -20,-20, 'Perfect',"#ffe5cc"));
		combo+= 1;
		vague1++;
		if(vague1_fini) vague2++;
		if(vague2_fini) vague3++;
		reussi = true;
		score+= 10 + combo * 10;
	
	    }
	    tab[0].splice(0,1);
	}
    }
    if(id == 1){
	if(tab[1].length != 0){
	    if(tab[1][0][2]>= 610){
		tab_particule.push(new particule(1085.0,550.0, -20,-20, 'Fail', "#ff0000"));
		reussi = false;
	
		combo = 0;
	    }
	    if(tab[1][0][2] < 440){
		tab_particule.push(new particule(1085.0,550.0, -20,-20, 'Too early', "#00ff00"));
	
		reussi = false;
		combo = 0;
		
	    }
	    if(tab[1][0][2]>= 440  &&  tab[1][0][2] < 540){
		tab_particule.push(new particule(1085.0,550.0, -20,-20, 'Good', "#0000ff"));
		vague1++;
		if(vague1_fini) vague2++;
		if(vague2_fini) vague3++;
		reussi = true;
		combo+= 1;
		score+= 10 + combo * 5;
	    }
	    if(tab[1][0][2] >= 540 && tab[1][0][2]< 610){
		tab_particule.push(new particule(1085.0,550.0, -20,-20, 'Perfect', "#ffe5cc"));
		vague1++;
		if(vague1_fini) vague2++;
		if(vague2_fini) vague3++;
		reussi = true;
		combo+= 1;
		score+= 10 + combo * 10;
	    }
	    tab[1].splice(0,1);
	}
    }
    if(id == 2){
	if(tab[2].length != 0){
	    if(tab[2][0][2] >= 610){
		tab_particule.push(new particule(1185.0,550.0, -20,-20, 'Fail', "#ff0000"));
		reussi = false;
		
		combo = 0;
	    }
	    if(tab[2][0][2] < 440 ){
		tab_particule.push(new particule(1185.0,550.0, -20,-20, 'Too early', "#00ff00"));
	
		reussi = false;
		combo =0;
	    }
	    if(tab[2][0][2]>= 440  &&  tab[2][0][2] < 540){
		tab_particule.push(new particule(1185.0,550.0, -20,-20, 'Good', "#0000ff"));
		vague1++;
		if(vague1_fini) vague2++;
		if(vague2_fini) vague3++;
		combo+= 1;
		reussi = true;
		score+= 10 + combo * 5;
	    }
	    if(tab[2][0][2]>= 540  && tab[2][0][2]< 610){
		tab_particule.push(new particule(1185.0,550.0, -20,-20, 'perfect', "#ffe5cc"));
		vague1++;
		if(vague1_fini) vague2++;
		if(vague2_fini) vague3++;
		reussi = true;
		combo+= 1;
		score+= 10 + combo * 10;
	    }
	    
	    tab[2].splice(0,1);
	}
    }
    if(id == 3){
	if(tab[3].length != 0){
	    
	    if(tab[3][0][2] < 440){
		tab_particule.push(new particule(1285.0,550.0, -20,-20, 'Too early', "#00ff00"));
		reussi = false;
	
		combo = 0;
	    }
	    if (tab[3][0][2]>= 440 &&  tab[3][0][2] < 540){
		tab_particule.push(new particule(1285.0,550.0, -20,-20, 'Good', "#0000ff"));
		reussi = true;
		vague1++;
		if(vague1_fini) vague2++;
		if(vague2_fini) vague3++;
		combo += 1;
	    }
	    if(tab[3][0][2]>= 540  &&  tab[3][0][2] < 610){
		tab_particule.push(new particule(1285.0,550.0, -20,-20, 'Perfect', "#ffe5cc"));
		vague1++;
		if(vague1_fini) vague2++;
		if(vague2_fini) vague3++;
		reussi = true;
		combo+= 1;
		score+= 10 + combo * 5;
	    }
	    if(tab[3][0][2]>= 610 ){
		tab_particule.push(new particule(1285.0,550.0, -20,-20, 'Fail', "#ff0000"));
	
		reussi = false;
		combo = 0;
		score+= 10 + combo * 10;
	    }
	    tab[3].splice(0,1);
	}
			
    }
    if (50 - combo < 20){
	vitesse = 30;
    }
    else{
	vitesse = 50 - combo;
    }
    if(combo%5 ==0 && combo !=0){	
	popKirbo();
    }
}



function note_drop(){
//    console.log(vitesse);
    let rand_arrow = getRandomIntInclusive(0,3);
    switch(rand_arrow){
    case 0:
	tab[0].push([8,985,0]);
	break;
    case 1:
	tab[1].push([9,1085,0]);
	break;
    case 2:
	tab[2].push([10,1185,0]);
	break;
    case 3:
	tab[3].push([11,1285,0]);
	break;
    }    
}

let passed = vitesse+1;


function drawbackground(){
   
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    if(back_img.length != 0){
	ctx.drawImage(back_img[0], 900  , 0,
			  300, 610);
	for(let i = 0; i < back_img.length; i++){
	    ctx.drawImage(back_img[i], tmp2[i]  , 0,
			  300, 610);
	    if(combo!= 0) tmp2[i] -= 0.25;
	    if(tmp2[i]  <-300){
		tmp2[i] = 899.75;
	    }
	}
	
    }

    if(mount_img.length != 0){
	for(let i = 0; i < mount_img.length; i++){
	    ctx.drawImage(mount_img[i], tmp3[i]  , 300,
			  300,300);
	    if(combo != 0) tmp3[i] -= 0.50;
	    if(tmp3[i]  <-300){
		tmp3[i] = 1200;
	    }
	}
    }
   
    if(sol_img.length != 0){
	for(let i = 0; i < tmp1.length; i++){

	    if(tmp1[i][0] < -50){
		tmp1.push([tmp1[tmp1.length-1][0] + 50, 590]);
		tmp1.splice(0,1);
	    }
	    
	    ctx.drawImage(sol_img[0],tmp1[i][0], tmp1[i][1],
			  50, 50);
	    
	    if(combo  < 9) {
		tmp1[i][0] -= combo/2;
	    }
	    else{
		tmp1[i][0] -= 16/2;
	    }
	    
	}
    }
}

function retry(){
//    console.log(tab_kirbo.length);
    if(tab_kirbo.length == 0 || vague3_fini){
	pages = 3;
    }
}

function forward(){
    let length = tab_bug.length;
    let nbvalide = 0;
    for(let i = 0 ;i < length; i++){
	if(!tab_bug[i].death) {
	    nbvalide++;
	}
    }
    //console.log("valide",nbvalide, tab_clus.length);
    if( tab_kirbo.length !=0 && tab_clus.length != 0 && tab_marx.length !=0){
	if(tab_clus[0].pv <=0){
	    tab_clus.pop();
	    vague3_fini = true;
	}
	if(reussi){	    
	    tab_marx[0].attack = false;
	    tab_marx[0].x--;
	    tab_marx[0].boxlaser.translate(-1,0);
	    tab_clus[0].box.translate(-1, 0);	    	    
	    let collided = SAT.testPolygonPolygon(fight, tab_clus[0].box);		
	    if(collided) {
		for(let t = 0; t < tab_kirbo.length; t++){
		    tab_kirbo[t].combat();
		    
		}
		tab_clus[0].pv =tab_clus[0].pv - tab_kirbo.length;
		if(tab_clus[0].pv <=0){
		    if(!tab_marx[0].dead) tab_marx[0].dead = true;
		    tab_clus.pop();
		}else{
		   
		    tab_clus[0].box.translate(700 -tab_marx[0].x ,0);
		    tab_marx[0].boxlaser.translate((700 -tab_marx[0].x)-20,0);
		    tab_marx[0].x =700;
		    tab_marx[0].stand =false;
		    tab_marx[0].hit =true;
		    tab_marx[0].anim_id = 5;
		}
	    }
	}
	else{	      
	    let collided = SAT.testPolygonPolygon(fight, tab_marx[0].boxlaser);		
	    if(collided) {	
		let dommage = 5;
		for(let i = 0; i < tab_kirbo.length; i++){
		    if(!tab_kirbo[i].dead && dommage != 0)
		    {
			tab_kirbo[i].dead = true;
			dommage--;
		    }
		}
		reussi =true;
		tab_clus[0].box.translate(700-tab_marx[0].x, 0);		

		
		tab_marx[0].x = 700;
		let nb = tab_marx[0].x -20;
		tab_marx[0].boxlaser.translate(700-220-20,0);
		tab_marx[0].laser= 1;
		return;
	    }
	    
	    
	    tab_marx[0].laser+= 1;
	    tab_marx[0].boxlaser.translate(-10,0);
	    tab_marx[0].attack = true;	  
	}
    }
    
    if(nbvalide != 0 && tab_clus.length != 0 && tab_kirbo.length !=0 ){
	 if(tab_clus[0].pv <=0){
	     tab_clus.pop();
	     if(!vague2_fini && vague1_fini) vague2_fini = true;
	     if(!vague1_fini) vague1_fini = true;
	 }
	if(reussi){
	    for(let i = 0; i < length; i++){
		tab_bug[i].x--;		
	    }
	    tab_clus[0].box.translate(-1, 0);
	    let collided = SAT.testPolygonPolygon(fight, tab_clus[0].box);		
	    if(collided) {
		for(let t = 0; t < tab_kirbo.length; t++){
		    tab_kirbo[t].combat();
		    
		}
		tab_clus[0].pv =tab_clus[0].pv - tab_kirbo.length;
		if(tab_clus[0].pv <=0){
		    for(let t =0; t < tab_bug.length; t++){
			if(!tab_bug[t].death) tab_bug[t].dead();	
		    }
		    if(!vague2_fini && vague1_fini) vague2_fini = true;
		    if(!vague1_fini) vague1_fini = true;
		    tab_clus.pop();
		}else{
		    let kill = tab_kirbo.length;
		    for(let t = 0; t < tab_bug.length; t++){
			if(!tab_bug[t].death && kill !=0){
			    tab_bug[t].dead();
			    kill--;
			}
			else if(!tab_bug[t].death && kill ==0){
			    tab_bug[t].x += 500;
			}
		    }
		    tab_clus[0].box.translate(500,0);
		}
		
	    }
	}
	else{
	    
	    for(let i = 0; i < length; i++){
		tab_bug[i].x-= 10;		
	    }
	    tab_clus[0].box.translate(-10, 0);
	    let collided = SAT.testPolygonPolygon(fight, tab_clus[0].box);		
	    if(collided) {
		for(let i = 0; i < tab_kirbo.length; i++){
		    if(!tab_kirbo[i].dead && nbvalide != 0)
		    {
			tab_kirbo[i].dead = true;
			nbvalide--;
		    }
		}
		for(let i = 0; i < length; i++){
		    tab_bug[i].x+= 500;		
		}
		tab_clus[0].box.translate(500, 0);
		reussi =true;
	    }
	}
    }
}

let frame = 1.0;
function drawperso(){
    if(frame >= 1.0){
	for(let i = 0; i < tab_kirbo.length; i++){
	    tab_kirbo[i].drawpos(kirbo_img);
	}
	
	for(let i = 0; i < tab_bug.length; i++){
	    tab_bug[i].drawpos(bugs_img);
	}
	for(let i = 0; i < tab_marx.length; i++){
	    tab_marx[i].drawpos(marx_img);
	}
	frame = 0.0;	
    }
    else{
	for(let i = 0; i < tab_kirbo.length; i++){
	    tab_kirbo[i].draw(kirbo_img);
	}
	for(let i = 0; i < tab_bug.length; i++){
	    tab_bug[i].draw(bugs_img);
	}
	for(let i = 0; i < tab_marx.length; i++){
	    tab_marx[i].draw(marx_img);
	}
    }
    frame+= 0.1; 
}

function killKirbo(){
    if(tab_kirbo.length !=0){	
	for(let i =0;i<tab_kirbo.length;i++){
	    if(!tab_kirbo[i].initdead){
		//console.log("kill",i);
		tab_kirbo.splice(i,1);
		i--;
	    }
	}
    }
}

let init = 0;
function spawEnemies(){
    //console.log("chrono",vague1, init);
    if(vague1 == 10 && init ==0){
	init_cluster(3,false);
	init = 1;
    }
   else if(vague2 == 15 && init ==1){

	init_cluster(9,false);
	init = 2;
    }
    else if(vague3 == 30 && init == 2){
	init_cluster(0,true);	
	init = 3;
    }
}


let touche = true;
let pages = 0;

function Fin(scr){
    ctx.beginPath();
    ctx.fillStyle = "#6e2c00";
    ctx.fillRect(0, 0,
		 1364,640);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "#dc7633";
    ctx.fillRect((1364/2) -100 -15, 640/2 -45,
		 200,60);
    ctx.closePath();
    console.log(score)
    if(scr < 1000){
	ctx.font = '100px serif';
	ctx.fillStyle = "#000000";
	ctx.fillText('F', (1364/2) -60, 640/2-100);		
    }
    if(scr >= 1000 && scr < 2000){
	ctx.font = '100px serif';
	ctx.fillStyle = "#000000";
	ctx.fillText('D', (1364/2) -60, 640/2-100);
	

    }
    if(scr >= 2000 && scr < 3000){
	ctx.font = '100px serif';
	ctx.fillStyle = "#000000";
	ctx.fillText('C', (1364/2) -60, 640/2-100);
	

    }
    if(scr >= 3000 && scr < 4000){
	ctx.font = '100px serif';
	ctx.fillStyle = "#000000";
	ctx.fillText('B', (1364/2) -60, 640/2-100);
	

    }
    if(scr >= 4000 && scr < 5000){
	ctx.font = '100px serif';
	ctx.fillStyle = "#000000";
	ctx.fillText('A', (1364/2) -60, 640/2-100);
	

    }
    if(scr >= 5000 && scr < 6000){
	ctx.font = '100px serif';
	ctx.fillStyle = "#000000";
	ctx.fillText('S', (1364/2) -60, 640/2-100);
	

    }
    if( scr >= 6000){
	ctx.font = '100px serif';
	ctx.fillStyle = "#000000";
	ctx.fillText('SSS', (1364/2) -60, 640/2-100);
	
    }
    ctx.font = '50px serif';
    ctx.fillStyle = "#000000";
    ctx.fillText('Retour', (1364/2) -100, 640/2);
    
}

function demo(){
    if(tab[0].length != 0){
	if(tab[0][0][2]>= 540){
	    press(0);
	    up = true;
	}
    }
    if(tab[1].length != 0){
	if(tab[1][0][2]>= 540){
	    press(1);
	    right= true;
	}
    }
    if(tab[2].length != 0){
	if(tab[2][0][2]>= 540){
	    press(2);
	    down = true;
	}
    }
    if(tab[3].length != 0){
	if(tab[3][0][2]>= 540){
	    press(3);
	    left = true;
	}
    }    
}

function Home() {
    ctx.beginPath();
    ctx.fillStyle = "#6e2c00";
    ctx.fillRect(0, 0,
		 1364,640);
    ctx.closePath();
    console.log(touche);
    if(touche){
	ctx.beginPath();
	ctx.fillStyle = "#dc7633";
	ctx.fillRect((1364/2) -300 -15, 640/2 -45,
		     160,60);
	ctx.closePath();
    }
    else{
	ctx.beginPath();
	ctx.fillStyle = "#dc7633";
	ctx.fillRect((1364/2) +100 -5, 640/2 - 50,
		     160,60);
	ctx.closePath();
    }
    
    ctx.font = '50px serif';
    ctx.fillStyle = "#000000";
    ctx.fillText('Jouer', (1364/2) -300, 640/2);
    ctx.fillText('Demo', (1364/2) +100, 640/2);

    
}

function reessayer(){
    popKirbo();
    score = 0;
    combo = 0;
    tab_kirbo = [];
    tab_kirbo.push(new Kirbo(getRandomIntInclusive(90,110),540,13));
    tab = new Array();
    for(let i = 0; i < 4; i++){
	tab.push(new Array());
    }
    tab_marx = [];
    tab_clus = [];
    tab_bug = [];
    vague1 = 0;
    vague2 = 0;
    vague3 = 0;
    vague1_fini = false;
    vague2_fini = false;
    vague3_fini = false;
    vitesse = 40;
    passed = vitesse +1;
    up = false;
    right = false;
    down = false;
    left = false;
    frame = 1.0;
    init = 0;
}

var restart = true;
let scr = 0;
function update(timestamp) {

    if(pages == 0){
	restart = true;
	Home();
    }
    if(pages == 1){
	if(passed > vitesse) {
            passed = 0;
	    note_drop();	
	}
	drawbackground();
	spawEnemies();
	nexanim();
	drawperso();
	forward();
	draw();
	retry();
	draw_note_drop();
	update_arrow_touch();
	affiche_score();
	particuler();
	passed ++;
    }
    if(pages == 2){
        if(passed > vitesse) {
            passed = 0;
	    note_drop();	
	}	
	drawbackground();
	demo();
	spawEnemies();
	nexanim();
	drawperso();
	forward();
	draw();
	retry();
	draw_note_drop();
	update_arrow_touch();
	affiche_score();
	particuler();
	passed ++;
    }
    if(pages == 3){
	if(restart){
	    scr = score;
	    restart  = false;
	    reessayer();
	}	
	Fin(scr);
    }
    requestAnimationFrame(update);
}

let kirboss = new Kirbo(getRandomIntInclusive(90,110),540,13);
tab_kirbo.push(kirboss);
initTile(tmp1,20,50, tmp2, 6,300, tmp3, 4,300);
requestAnimationFrame(update);

