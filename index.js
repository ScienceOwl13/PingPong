// Got from https://www.w3schools.com/js/tryit.asp?filename=tryjs_function_counter3

var addCounter1 = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

function addCounter1(){
    document.getElementById("demo1").innerHTML = add();
}

var subCounter1 = (function () {
    var counter = 0;
    return function () {return counter -= 1;}
})();

function subCounter1(){
    document.getElementById("demo2").innerHTML = add();
}