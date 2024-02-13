var num = document.querySelectorAll("button").length;

// For Detecting Button Press
for(var i=0; i<num; i++)
{
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        var buttonText = this.innerHTML;
        makeSound(buttonText);
        buttonAnimation(buttonText);
        
        }
    );
}

// For Detecting Keyboard Press
document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})

// Function used to play the sound
function makeSound(key)
{
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            break;
}
}

// Function to add animation on a button when it gets clicked
function buttonAnimation(currentKey)
{
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    // This function performs a function after specific milliseconds of time
    setTimeout(function()
    {
        activeButton.classList.remove("pressed"); // After 100 ms we will remove the class so that button return to original state
    }, 100);
}