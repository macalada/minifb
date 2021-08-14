var database = [
    {
        username: "baby",
        password: "babysecret"
    },
    {
        username: "coco",
        password: "melon"
    },
    {
        username: "hide",
        password: "seeksecret"
    },
];
var newsfeed = [
    {
        username:"Bobby",
        timeline:"So tired from all that learning"
    },
    {
        username:"Caca",
        timeline:"Nice day today"
    },
    {
        username:"Chuck",
        timeline:"Sleep my baby"
    },
];
function isUserValid(username, password){
    for ( var i = 0; i < database.length;i++ ){
        if (database[i].username ===username && database[i].password===password){
            return true;
        }
    }return false;
}
function signIn(username, password) {
    if (isUserValid(username, password)){
        console.log(newsfeed);
    }else {
        alert("Unknown user")
    }


}

var userNamePrompt = prompt ("What is your username?");
var passPrompt = prompt ("What is your passoword?")

signIn(userNamePrompt, passPrompt);