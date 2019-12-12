//  Duncan Vaughan
// 	10/4/19
var list = [];
var checks = 0;
var swaps = 0;

function setup(){
  var cnv=createCanvas(800,800);
  cnv.position((windowWidth-width)/2,30);
  background(235);
  loadnumbers();
  mysort();
}
function swap(list,a,b){
  var temp = list[a];
  list[a] = list[b];
  list[b] = list[temp];
}
function mysort(){
  var t1 = millis();
  for(var i=0; i<list.length-1; i++){
    var index = i;
    for(var j=i+1; j<list.length; j++){
      checks = checks+1
      if(list[j] < list[index]){
        index = j;
      }
    }
    swap(list,index,i);
    swaps = swaps + 1
  }
  var t2 = millis();
  var seconds = ((t2-t1)/1000);
  console.log(list);
  //console.log(checks);
  //console.log(swaps);
  //console.log(seconds);
}
function loadnumbers(){
  for (var i = 0; i < 11; i++){
    list[i]= int(random(1,100));
  }
}
