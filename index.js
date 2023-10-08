function receivesaFuncton(){
    console.log("Go for a five mile run");
    console.log("Jump rope");
}
function Tuesday(){
    console.log("Go for a five mile run");
    console.log("Swim 40 laps");
}
function Wednesday(){
    console.log("Go for a five mile run");
    console.log("Go for a five miles run");
}
function Thursday(){
    console.log("Go for a five mile run");
    console.log("Jump rope");
}
function Friday(){
    console.log("Go for a five mile run");
    console.log("Swim 40 laps");
}
function runFivemiles(){
    console.log("Go for a five mile run");
}
function liftWeights(){
    console.log("Jump rope");
}
function swim40Laps(){
    console.log("Swim 40 laps");
}
function receivesaFuncton() {
    runFivemiles();
    liftWeights();
}
function receivesaFuncton() {
 exerciseRoutine(liftWeights);

}
function exerciseRoutine(postRunActivity) {
    runFivemiles();
  postRunActivity();
}

exerciseRoutine();
receivesaFuncton();
Tuesday();
postRunActivity();

function returnsANamedFunction(postRunActivity){
runFivemiles();
postRunActivity();
}
