//  Duncan Vaughan
// 	10/4/19
var list = [];

function setup(){
  var cnv=createCanvas(800,800);
  cnv.position((windowWidth-width)/2,30);
  background(235);
  for (var i = 0; i < 10; i++){
    list[i]= int(random(10));
  }
}
function swap(list,a,b){
  var temp = list[a];
  list[a] = list[b];
  list[b] = list[temp];
}
function insertionsort(){
  for(var i=1; i<list.length; i++){
    for(var j=i; j>0; j--){
      if(list[j] < list[j-1]){
        swap(list,j,j-1);
      }
    }
  }
  console.log(list);
}
function draw(){
  insertionsort();
}
