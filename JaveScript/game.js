function game ('tehseen', 'jawed', 3) => {
  var user1 = [];
  var user2 = [];
  var results = [];
  var name1 = this.name1;
  var name2 = this.name1;
  var games = this.name1;
  console.log(name1);
  for (var a = 0; a < games; a++) {
    var input_1 = prompt("Enter player1 Value");
    user1.push(input_1);

    var input_2 = prompt("Enter player2 Value");
    user2.push(input_2);
  }
  for (var a = 0; a < games; a++) {
    if (user1[a] == "paper" && user2[a] == "paper") {
      results.push("draw");
    } else if (user1[a] == "rock" && user2[a] == "rock") {
      results.push("draw");
    } else if (user1[a] == "scissor" && user2[a] == "scissor") {
      results.push("draw");
    } else if (user1[a] == "rock" && user2[a] == "scissor") {
      results.push("user1");
    } else if (user1[a] == "rock" && user2[a] == "paper") {
      results.push("user2");
    } else if (user1[a] == "scissor" && user2[a] == "rock") {
      results.push("user2");
    } else if (user1[a] == "scissor" && user2[a] == "paper") {
      results.push("user1");
    } else if (user1[a] == "paper" && user2[a] == "rock") {
      results.push("user1");
    } else if (user1[a] == "paper" && user2[a] == "scissor") {
      results.push("user1");
    }
  }
  var ahad = 0;
  var tehseen = 0;
  for (var a = 0; a < games; a++) {
    if (results[a] == "user1") {
      var ahad = ahad + 1;
    } else if (results[a] == "user2") {
      var tehseen = tehseen + 1;
    }
  }
  if (ahad < tehseen) {
    document.write(name1, " You Wins. ");
    document.write(" Your Score ", tehseen);
  } else {
    document.write(name2, " You Wins. ");
    document.write(" Your Score ", ahad);
  }
};
// var player1 = document.getElementById('player1')
// var player2 = document.getElementById('player2').value
// var noGame = document.getElementById('noGame').value
// var messages = document.createTextNode(player1.value);
// console.log(document.createTextNode(messages))
