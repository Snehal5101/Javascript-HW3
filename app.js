// section1
let car ={type:"Hyundai Creta", version:'EX',price:"11-18 lakh",color:"white"}

document.querySelector(".type").innerHTML=car.type;
document.querySelector(".version").innerHTML=car.version;
document.querySelector(".price").innerHTML=car.price;
document.querySelector(".color").innerHTML=car.color;

// section2
var x= 25+30;
document.querySelector(".add").innerHTML=x;

// var x="55"
// document.write("25+30 = "+x);


// section3


var result = document.querySelector(".para1").innerHTML;
document.querySelector(".para2").innerHTML=( "This is combined paragraph of javascript and HTML. "+ result );
