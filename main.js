import './style.css'
import linkedinLogo from './linkedin.svg'
import githubLogo from '/github.svg'
import { startGame } from './start.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://github.com/BernardoFarias" target="_blank">
      <img src="${githubLogo}" class="logo" alt="github logo" />
    </a>
    <a href="https://www.linkedin.com/in/bernardoefarias/" target="_blank">
      <img src="${linkedinLogo}" class="logo vanilla" alt="linkedin logo" />
    </a>
    <h1>Welcome to Memotest</h1>
    <p>Click on the button below to start the game!</p>

    <div class="card">
      <button id="start" type="button">Start</button>
    <p class="read-the-docs">
      Developed by Bernardo Farias
    </p>
  </div>
`

startGame(document.querySelector('#start'))
