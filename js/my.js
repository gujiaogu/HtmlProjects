function alertDialog() {
    var content = document.getElementById("content3").innerHTML;
    alert(content);
}

function test() {
    var co = document.getElementById("content3").style.color;
    var test = new Number;
    alert("test");
}

var ageA = 10;
var ageB = 5;

function swap(){
    var tmp = 0;
    if (ageA > ageB) {
        tmp = ageA;
        ageA = ageB;
        ageB = tmp;
    }

    console.log(ageA);
    console.log(ageB);
}
