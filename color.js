var numSquares = 6;
var colors = generateRandomColor(numSquares);
var squares=document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn"); 
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function()
{
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected"); 
    numSquares = 3;
    colors = generateRandomColor(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i<squares.length; i++)
    {
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function()
{
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected"); 
    numSquares = 6;
    colors = generateRandomColor(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i<squares.length; i++)
    {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function(){
    //generate all new colors
    colors = generateRandomColor(numSquares);
    //pick new random color from array
    pickedColor = pickColor();
    //change color display to match picked color
    colorDisplay.text = pickedColor;
    this.textContent = "New Colors";
    messageDisplay.textContent ="";
    //change color of squares
    for(var i=0; i<squares.length; i++)
    {
    squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    colorDisplay.textContent = pickedColor;
});
colorDisplay.textContent = pickedColor;

for(var i=0; i<squares.length; i++)
{
    //Add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //Add click events to squares
    squares[i].addEventListener("click", function(){
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color to picked color
        if(clickedColor === pickedColor)
        {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?"
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }
        else
        {
            this.style.backgroundColor ="#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color)
{
    //loop throughr all squares
    for(var i=0; i<squares.length; i++)
    {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor()
{
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColor(num)
{
    var arr = [];

    for(var i=0; i<num; i++)
    {
        arr.push(randomColor());
    }

    return arr;
}

function randomColor()
{
    //pick red from 0-255
    var r = Math.floor(Math.random() * 256);
    //pick green from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick blue from 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}