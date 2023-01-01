
var i = 0;

while(i < document.querySelectorAll(".drum").length){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        // var current = document.getElementsByClassName("pressed");
        // if(current.length > 0){
        //     current[0].className = current[0].className.replace(" pressed", "");
        // }
        // this.className += " pressed";

        playSound(this.innerHTML);

        addEffect(this.innerHTML);

    });
    i++;
}

document.addEventListener("keydown",function(event){

    playSound(event.key);

    addEffect(event.key);
});

function addEffect(key){

    document.querySelector("." + key).classList.add("pressed");
    
    setTimeout(function(){
        document.querySelector("." + key).classList.remove("pressed");
    },200);

}

function playSound (key){
    switch (key) {
        case "w": {
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        }

        case "a": {
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        }

        case "s":{
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        }
        case "d":{
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        }
        case "j": {
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        }
        case "k": {
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        }
        case "l": {
            var kick_bass = new Audio("sounds/kick-bass.mp3");
            kick_bass.play();
            break;
        }

        default: {
            console.log(this.innerHTML);
            break;
        }
    }
}