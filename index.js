const form = document.getElementById('form');
const treasurePositionContainer = document.getElementById('treasure-position-container');

let playerCoords = { x: 0, z: 0 };
const onFormSubmit = (e) => {
    e.preventDefault();
    const inputs = [e.target.elements['x'], e.target.elements['z']];

    inputs.forEach((input) => {
        if (input.value === '') { // if the input is not a number, the input returns an empty string
            playerCoords[input.name] = 0;
        } else if (typeof parseInt(input.value) === 'number') {
            playerCoords[input.name] = parseInt(input.value);
        }
        input.value = playerCoords[input.name];
    });
    treasurePositionContainer.style.visibility = 'visible';
    updateTreasurePositionElement(playerCoords);
};

const calculateTreasureCoords = (currentLocation) => {
    const chunkPosition = {
        x: Math.floor(currentLocation.x / 16) * 16,
        z: Math.floor(currentLocation.z / 16) * 16,
    };
    return {
        x: chunkPosition.x + 8,
        z: chunkPosition.z + 8,
    };
};

const updateTreasurePositionElement = () => {
    const treasurePosition = calculateTreasureCoords(playerCoords);
    const treasurePositionElement = document.getElementById('treasurePosition');
    console.log(treasurePosition);
    treasurePositionElement.innerHTML =
        treasurePosition.x + ', ?, ' + +treasurePosition.z;
};

form.onsubmit = onFormSubmit;