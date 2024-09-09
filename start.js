export function startGame(element) {
  const tablero = document.querySelector("#game")
  const app = document.querySelector("#app")
  function setGame() {
    tablero.className = "show"
    app.className = "displayNone"
    }
  
  element.addEventListener('click', () =>
    setGame()
  )
}
