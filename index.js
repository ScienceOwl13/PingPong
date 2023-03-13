// Got from https://www.w3schools.com/js/tryit.asp?filename=tryjs_function_counter3



var p1counter = 0;

    function player1AddFunction(){
        p1counter += 1;
        document.getElementById("demo1").innerHTML = p1counter;
    }
    function player1SubFunction(){
        p1counter -= 1;
        document.getElementById("demo1").innerHTML = p1counter;
    }


//Player 2

var p2counter = 0;

    function player2AddFunction(){
        p2counter += 1;
        document.getElementById("demo2").innerHTML = p2counter;
    }

    function player2SubFunction(){
        p2counter -= 1;
        document.getElementById("demo2").innerHTML = p2counter;
    }