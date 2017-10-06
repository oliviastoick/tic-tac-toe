let player = 'playerX'
let cubes = document.querySelectorAll('.c')


$(document).ready(function(){
    //if td is clicked
    $("td").click(function(){
        //input X
        if (player == 'playerX')
        {
        $(this).text('X')
        $(this).addClass('X')
         player = 'playerO'
      }
      //input O
      else
      {
        $(this).text('O')
        $(this).addClass('O')
        player = 'playerX'
      }
     win();
    });
});


function win(){
    if (cubes[0].innerText === ('X') && cubes[1].innerText === ('X') && cubes[2].innerText === ('X')) {
        alert("Player X Wins!")
    }
    if (cubes[3].innerText === ('X') && cubes[4].innerText === ('X') && cubes[5].innerText === ('X')) {
        alert("Player X Wins!")
    }
    if (cubes[6].innerText === ('X') && cubes[7].innerText === ('X') && cubes[8].innerText === ('X')) {
        alert("Player X Wins!")
    }
    if (cubes[0].innerText === ('X') && cubes[3].innerText === ('X') && cubes[6].innerText === ('X')) {
        alert("Player X Wins!")
    }
    if (cubes[1].innerText === ('X') && cubes[4].innerText === ('X') && cubes[7].innerText === ('X')) {
        alert("Player X Wins!")
    }
    if (cubes[2].innerText === ('X') && cubes[5].innerText === ('X') && cubes[8].innerText === ('X')) {
        alert("Player X Wins!")
    }
    if (cubes[2].innerText === ('X') && cubes[4].innerText === ('X') && cubes[6].innerText === ('X')) {
        alert("Player X Wins!")
    }
    if (cubes[0].innerText === ('X') && cubes[4].innerText === ('X') && cubes[8].innerText === ('X')) {
        alert("Player X Wins!")
    }
    if (cubes[0].innerText === ('O') && cubes[1].innerText === ('O') && cubes[2].innerText === (')')) {
        alert("Player O Wins!")
    }
    if (cubes[3].innerText === ('O') && cubes[4].innerText === ('O') && cubes[5].innerText === ('O')) {
        alert("Player O Wins!")
    }
    if (cubes[6].innerText === ('O') && cubes[7].innerText === ('O') && cubes[8].innerText === ('O')) {
        alert("Player O Wins!")
    }
    if (cubes[0].innerText === ('O') && cubes[3].innerText === ('O') && cubes[6].innerText === ('O')) {
        alert("Player O Wins!")
    }
    if (cubes[1].innerText === ('O') && cubes[4].innerText === ('O') && cubes[7].innerText === ('O')) {
        alert("Player O Wins!")
    }
    if (cubes[2].innerText === ('O') && cubes[5].innerText === ('O') && cubes[8].innerText === ('O')) {
        alert("Player O Wins!")
    }
    if (cubes[2].innerText === ('O') && cubes[4].innerText === ('O') && cubes[6].innerText === ('O')) {
        alert("Player O Wins!")
    }
    if (cubes[0].innerText === ('O') && cubes[4].innerText === ('O') && cubes[8].innerText === ('O')) {
        alert("Player O Wins!")
    }

};




//if player = to player x set function x... else do this. 0 and set player to player x
