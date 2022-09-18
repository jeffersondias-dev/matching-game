import EndGame from '../EndGame';
import './style.css';
let points = 0;

function Points(elements) {
    if (elements == true) {
        points++;
    }

    setInterval(() => {
        const display = document.querySelector('#points');
        display.textContent = points;
        EndGame(points);
    }, 1000);

    return /*html*/` 
    <div class="pointsContainer">
        <span class="points" id="points">0</span>
    </div>
    `;
}


export default Points;