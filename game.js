import "./style.css"

var turns = 0


document.querySelector("#game").innerHTML = `
<div id="board" class="container-fluid vh-100 vw-100">
        <div class="row h-25 w-100">
            <div class="col border p-0">
                <div class="square h-100 w-100 hide"></div>
            </div>
            <div class="col border p-0">
                <div class="square h-100 w-100 hide"></div>
            </div>
            <div class="col border p-0">
                <div class="square h-100 w-100 hide"></div>
            </div>   
        </div>
        <div class="row h-25 w-100">
            <div class="col border p-0">
                <div class="square h-100 w-100 hide"></div>
            </div>
            <div class="col border p-0">
                <div class="square h-100 w-100 hide"></div>
            </div>
            <div class="col border p-0">
                <div class="square h-100 w-100 hide"></div>
            </div>   
        </div>
        <div class="row h-25 w-100">
            <div class="col border p-0">
                <div class="square h-100 w-100 hide"></div>
            </div>
            <div class="col border p-0">
                <div class="square h-100 w-100 hide"></div>
            </div>
            <div class="col border p-0">
                <div class="square h-100 w-100 hide"></div>
            </div>   
        </div>
        <div class="row h-25 w-100">
            <div class="col border p-0">
                <div class="square h-100 w-100 hide"></div>
            </div>
            <div class="col border p-0">
                <div class="square h-100 w-100 hide"></div>
            </div>
            <div class="col border p-0">
                <div class="square h-100 w-100 hide"></div>
            </div>   
        </div>
</div>

<h2 id="endGame" class="hide">Congratulations! You finished the game in <strong> </strong> turns.</h2>
`
//----------------------------------------------------------------------------------------------------//

const $allSquares = document.querySelectorAll(".square")
const $game = document.querySelector("#game")
const $board = document.querySelector("#board")
const $endGame = document.querySelector("#endGame")
let $firstSquare = null

function setGame(){
    const colours = [ "yellow", "red", "blue", "green", "black", "magenta"]
    const doubleColours = colours.concat(colours)

    setSquares($allSquares, doubleColours)
    handleEvents($game)
}

function handleEvents($game){
    $game.onclick = function(e) {
    const $element = e.target
        if($element.classList.contains("square")){
        handleClickOnSquare($element)
        }
    }
}

function handleClickOnSquare($squareClicked){
    showSquare($squareClicked)

    if($firstSquare === null) {
        $firstSquare = $squareClicked
    } else {
        if($firstSquare === $squareClicked){
            return
        }
        if($firstSquare.className === $squareClicked.className){
            squareDisabled($firstSquare)
            squareDisabled($squareClicked)
            isGameOver()
        } else {
            hideSquare($firstSquare)
            hideSquare($squareClicked)
        }
        turns++
        $firstSquare = null
    }
}


function setSquares(squares, colours){
    colours.sort(() => .5 - Math.random())

    squares.forEach((square, i) => {
        square.classList.add(colours[i])
    })

}

function showSquare($square){
    $square.classList.remove("hide")
    $square.classList.add("show")
}

function hideSquare($square){
    setTimeout(function() {
    $square.classList.remove("show")
    $square.classList.add("hide")
    }, 1000 )
}

function squareDisabled($square){
    setTimeout(function() {
    $square.parentElement.classList.add("squareDisabled")
    $square.remove()
    }, 1500 )

}

function isGameOver(){
    setTimeout(function() {
    if(document.querySelectorAll(".square").length === 0){
        $board.style.display = "none"
        $endGame.querySelector("strong").textContent = turns.toString()
        $endGame.classList.remove("hide")
        $endGame.classList.add("show")
         }}, 1500 )
}

setGame()