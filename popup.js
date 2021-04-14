
function randPosX(){
      return Math.floor(Math.random()*window.innerHeight/1.75 + 150);
    };

function randPosY(){
      return Math.floor(Math.random()* ((window.innerWidth * .8) + 200));
    };

function randomFont()
{
  let fonts = ['Arial', 'Verdana', 'Helvetica', 'Tahoma', 'Trebuchet MS',
  'Times New Roman', 'Georgia','Garamond', 'Courier New', 'Brush Script MT'];
  var randFont = Math.floor(Math.random() * fonts.length);
  console.log(randFont);
  return (fonts[randFont]);
}

// var test = document.getElementById("buttonSmallID");
// console.log(test);
// console.log("woos");
//
// test.onmouseover = function(){
// test.style.backgroundColor = "#964B00";
// };
//
// test.onmouseout = function(){
//   setTimeout(function() {
//     test.style.backgroundColor = "brown";
//   }, 100);
//
// };








function myFunction() {
  var s =   document.getElementById("theMessage").value;
  console.log( s );

  var myDiv = document.createElement("div");

  myDiv.id = 'div_id';


  myDiv.innerHTML = s;
  var fontSize = Math.floor(Math.random()*40);
  var x =  randPosX();
  var xString = x.toString() + "px";
  var y =  randPosY();
  var yString = y.toString() + "px";
  console.log("x= " + x);
  console.log("y= " + y);
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  console.log(randomColor);
  myDiv.style.color= "#" + randomColor ;
  myDiv.style.fontSize= fontSize + "px" ;
  myDiv.style.position="absolute";
  myDiv.style.top = xString;
  myDiv.style.left = yString;
  myDiv.style.fontFamily = randomFont();
  // myDiv.style.visibility = "hidden";



  document.body.appendChild(myDiv);


  var delayInMilliseconds = (2000 + Math.floor(Math.random()*15000));

  setTimeout(function() {
    myDiv.remove();
  }, delayInMilliseconds);



}
