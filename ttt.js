


$(function() {

  var turn = 0;
  var bob = 0
  var sally = 0


  $('td').on('click', function() {
     if ( turn % 2 === 0) {
      $(this).html('X');
      bob = parseInt($(this).attr('id')) + bob;
      checkWin('X');
      turn++;

    } else  {
      $(this).html('O');
       sally = parseInt($(this).attr('id')) + sally;
       checkWin('O');
       turn++;
}

//Checking win conditions of players
//This needs modifying - not complete.  Player win won't be recognized if 4 moves have been played. Bug fix TBD.
  function checkWin(player) {
    if (bob === 15) {
      alert("Big win TicTacToe Superstar!");
      location.reload(true);

  } else if (sally === 15) {
      alert("Big win TicTacToe Superstar!");
      location.reload(true);

  } else if (turn === 9) {
      alert('Tie game! If you wish to play again, reset.');
      location.reload(true);
    }
};
});
});
