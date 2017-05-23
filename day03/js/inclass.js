var usernameArray = [];
var usernames = "";

function getUser(){
    usernames = prompt('Please Enter Another Username.');

    usernameArray.push(usernames);
    console.log(usernameArray);
}

function removeUser(){
  usernameArray.shift();
  console.log(usernameArray);
}
