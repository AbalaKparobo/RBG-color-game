var square = document.querySelectorAll('.square');
var displayColor = document.getElementById('color')
var message = document.getElementById('message')
var header = document.querySelector('h1')
var resetbtn = document.querySelector('.reset')
var easybtn = document.getElementById('easybtn') 
var hardbtn = document.getElementById('hardbtn') 
// generate random colorsvar btn = 
var mode, colors, displayMix;  

// // assign random colrs to the differnt boxes
// for (var i = 0; i < square.length; i++) {
//     square[i].style.backgroundColor = colors[i];
//  }


init();
function init() {
    // generate random colors
    mode = 6;
    colors = generatedColor(mode); // tested with an array of 6 predefined rbg colors
    
    // assign random colrs to the differnt boxes
    for (var i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = colors[i];
        //update the heeader to show the color
        displayMix = randomColor();
        displayColor.textContent = displayMix;
        // set header bg to normal and other 
        header.style.backgroundColor = "rgb(13, 39, 61)";
        resetbtn.textContent = "New Colors";
        message.textContent = ""  
        
        //update the squares to show the colors
        for (var i = 0; i < colors.length; i++) {
            square[i].style.backgroundColor = colors[i];
            
        }
    }
}    
// setting initializing function
resetbtn.addEventListener("click", function() {
    init();
});
easybtn.addEventListener("click", function() {
    //add active class
    hardbtn.classList.remove('active');
    easybtn.classList.add('active')
    
    //generate three colors and guess color header
    mode = 3;
    colors = generatedColor(mode);
    displayMix = randomColor();
    displayColor.textContent = displayMix;
    
    header.style.backgroundColor = "rgb(13, 39, 61)";
    message.textContent = ""  
    resetbtn.textContent = "New Colors";
    
    // assign random colrs to the differnt boxes
    for (var i = 0; i < square.length; i++) {
        if (colors[i]) {
            square[i].style.backgroundColor = colors[i];
        } else {
            square[i].style.display = "none";
        }
    }
    
});

hardbtn.addEventListener("click", function() {
    //add active class
    easybtn.classList.remove('active');
    hardbtn.classList.add('active')
    
    //generate three colors and guess color header
    mode = 6;
    colors = generatedColor(mode);
    displayMix = randomColor();
    displayColor.textContent = displayMix;
    
    header.style.backgroundColor = "rgb(13, 39, 61)";
    message.textContent = ""  
    resetbtn.textContent = "New Colors";
    
    // assign random colrs to the differnt boxes
    for (var i = 0; i < colors.length; i++) {
        square[i].style.backgroundColor = colors[i];
        square[i].style.display = "block";
    }
    
});

// listen to the squares
for (var i = 0; i < colors.length; i++) {
    square[i].style.backgroundColor = colors[i];
square[i].addEventListener("click", function() {

   
    var clickedColor = this.style.backgroundColor
    // check if clicked color matches display color
    if ( clickedColor === displayMix) {
        message.textContent = "Correct!!";    // display winner message
        win(clickedColor);
        header.style.backgroundColor = clickedColor;
        resetbtn.textContent = "Play Again"
    } else {
        message.textContent = "no! Try Again"         //display loser message
        this.style.backgroundColor = "black";     // fadeout color
    }
});
}
// turn all color to picked color
function win(color) {
    for (var i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = color;
    }
}

//  generate a random color
function randomColor() {
    var random = Math.floor(Math.random ()* colors.length);
    return colors[random]
}

// generate  an array filled with colors
function generatedColor(num) {
    var coloring = []
    // fill the array with colors
    for (var i = 0; i < num; i++) {
        coloring.push(generatingColors());
    }
    return coloring
}
//generate random colors {
//generate RED
function generatingColors() {
    var r = Math.ceil(Math.random() * 255);
    //generate GREEN
    var g = Math.ceil(Math.random() * 255);
    //generate BLUE
    var b = Math.ceil(Math.random() * 255);
    var rgb = "rgb(" + r +", " + g + ", " + b + ")";
    
    return rgb;
}