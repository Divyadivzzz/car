data1 = document.getElementById("img");
function blue(){
    document.getElementById("img").src="blue.jpeg";
    document.getElementById("cary").style='background-color:blue';
    document.getElementById("final").style='background-color:blue';
}
function grey(){
    data1.src="ash.jpeg";
    document.getElementById("cary").style='background-color:grey';
    document.getElementById("final").style='background-color:grey';
}
function grey1(){
    data1.src="black.jpeg";
    document.getElementById("cary").style='background-color:black';
    document.getElementById("final").style='background-color:black';
}
function add(){
    document.getElementById("final").innerHTML = 'Your Item added to cart';
}



