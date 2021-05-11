document.addEventListener("DOMContentLoaded", () => {
  let noteList = new Notelist();
  }

//   const thermostat = new Thermostat();
//   updateTemperature();

//   document.querySelector('#temperature-up').addEventListener('click', () => {
//     thermostat.up();
//     updateTemperature();
//   });

//   document.querySelector('#temperature-down').addEventListener('click', () => {
//     thermostat.down();
//     updateTemperature();
//   });

//   document.querySelector('#temperature-reset').addEventListener('click', () => {
//     thermostat.resetTemperature();
//     updateTemperature();
//   });

//   document.querySelector('#powersaving-on').addEventListener('click', () => {
//     thermostat.switchPowerSavingModeOn();
//     document.querySelector('#power-saving-status').innerText = 'on';
//     updateTemperature();
//   })

//   document.querySelector('#powersaving-off').addEventListener('click', () => {
//     thermostat.switchPowerSavingModeOff();
//     document.querySelector('#power-saving-status').innerText = 'off';
//     updateTemperature();
//   })
// });

// document.getElementById("getCity").addEventListener("click", () => {
//   const citySearch = document.getElementById("getCityText").value;
//   document.getElementById("getCityText").value = '';

document.getElementById("submitButton").addEventListener("click", () => {
  const title = document.getElementById("titleBox").value;
  const body = document.getElementById("bodyBox").value;
  let note = new Note();
  Note.notes 
  
});