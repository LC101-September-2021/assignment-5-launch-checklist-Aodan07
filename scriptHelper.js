// Write your helper functions here!
require('isomorphic-fetch');

function validateInput() {
    let pilotsName = document.querySelector("input[name=pilotName]");
    let pilot = pilotsName.value;
    let pTest = Number(pilot);
    
    let coPilotsName = document.querySelector("input[name=copilotName]");
    let coPilot = coPilotsName.value;
    let coPTest = Number(coPilot);
    
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let fuelValue = fuelLevel.value;
    let fuelTest = Number(fuelValue);
    
    let cargoMass = document.querySelector("input[name=cargoMass]");
    let cargoValue = cargoMass.value;
    let cargoTest = Number(cargoValue);
    
    

        if(pilot === '' || coPilot === '' || fuelValue === '' || cargoValue === '') {
             alert("Empty please fill out all info")
          } else if (isNaN(pTest) === false || isNaN(coPilot)=== false) {
             alert("pilot and copilot should be letters")
          } else if (isNaN(fuelTest) || isNaN(cargoTest)) {
           alert("Fuel and cargo should be a number")
       }
       else {
       
        pilotStatus.innerHTML = `${pilot} is ready for launch!`
        copilotStatus.innerHTML = `${coPilot} is ready for launch!`
       }
        if(fuelValue < 10000) {
          
           faultyItems.style.visibility = 'visible';
           fuelStatus.innerHTML = `${fuelValue}  there is not enough fuel for the journey.`;
           launchStatus.innerHTML = `Shuttle not ready for launch`;
           launchStatus.style.color = 'red';
    
        } else if (cargoValue > 10000) {
           
           faultyItems.style.visibility = 'visible';
           launchStatus.innerHTML = `Shuttle not ready for launch`;
           launchStatus.style.color = 'red';
           cargoMass.innerHTML = `${cargoValue} there is too much mass for the shuttle to take off. Make sure cargo weighs less than 10,000 kg.`;
          
        } else {
           faultyItems.style.visibility = 'visible';
           launchStatus.innerHTML = `Shuttle is ready for launch.`;
           launchStatus.style.color = `green`;
        }
     
    };
    
    function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
     
       }
       

      
       
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let mission = document.querySelector('#missionTarget');
    console.log(imageUrl)
    let template =
    `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
`
mission.innerHTML = template;

}

async function myFetch(){
    let planetsReturned;
console.log("my fetch")
    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        return response.json()
      });

    return planetsReturned;
};

function pickPlanet(planets) { 
    let list = Math.floor(Math.random() * planets.length)
    return list
};

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
