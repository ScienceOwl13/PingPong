// Arrow Keys for P1
    document.addEventListener("keydown", function(event) {
        if (event.keyCode === 87 || event.which === 87) {
            player1AddFunction();
        }
    });

    document.addEventListener("keydown", function(event) {
        if (event.keyCode === 83 || event.which === 83) {
            player1SubFunction();
        }
    });

// Arrow Keys for P2
    document.addEventListener("keydown", function(event) {
        if (event.keyCode === 38 || event.which === 38) {
            player2AddFunction();
        }
    });

    document.addEventListener("keydown", function(event) {
        if (event.keyCode === 40 || event.which === 40) {
            player2SubFunction();
        }
    });


var winner = false;
function p1Win() {
    if (p1counter >= 11 && p2counter <= p1counter - 2 && winner === false)  {
        setTimeout(() => {
            window.alert("Player 1 wins!");
        }, 1);

        winner = true;
    }
    else if (p1counter === 5 && p2counter === 0 && winner === false) {
        setTimeout(() => {
            window.alert("Player 1 wins!");
        }, 1);

        winner = true;
    }
}

function p2Win() {
    if (p2counter >= 11 && p1counter <= p2counter - 2 && winner === false)  {
        setTimeout(() => {
            window.alert("Player 2 wins!");
        }, 1);

        winner = true;
    }
    else if (p2counter === 5 && p1counter === 0 && winner === false) {
        setTimeout(() => {
            window.alert("Player 2 wins!");
        }, 1);

        winner = true;
    }
}

// Player 1
var p1counter = 0;

    function player1AddFunction(){
        p1counter += 1;
        document.getElementById("demo1").innerHTML = p1counter;
        
        p1Win()
        p2Win()

    }
    function player1SubFunction(){
        p1counter -= 1;
        document.getElementById("demo1").innerHTML = p1counter;

        p1Win()
        p2Win()

    }

//Player 2
var p2counter = 0;

    function player2AddFunction(){
        p2counter += 1;
        document.getElementById("demo2").innerHTML = p2counter;
        
        p1Win()
        p2Win()
}

    function player2SubFunction(){
        p2counter -= 1;
        document.getElementById("demo2").innerHTML = p2counter;

        p1Win()
        p2Win()
}




const devButton = document.querySelector('#dev1');

devButton.addEventListener('click', () => {
    winner = false;
});

const devButton2 = document.querySelector('#dev2');

devButton2.addEventListener('click', () => {
    p1counter = 0;
    p2counter = 0;
    winner = false;

    document.getElementById('demo1').innerHTML = p1counter;
    document.getElementById('demo2').innerHTML = p2counter;
})