// Write your JavaScript code here!


//const { addDestinationInfo } = require("./scriptHelper");

//const { pickPlanet } = require("./scriptHelper");

//const { formSubmission } = require("./scriptHelper");

//const { validateInput } = require("./scriptHelper");



console.log("script.js")
window.addEventListener("load", function() {
    //come back to find form element 
    const form = document.getElementById('testForm');
    form.addEventListener('submit', (event) =>{
        event.preventDefault();
        validateInput();
    });

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse= myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result
   }).then(function () {
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      pickPlanet(listedPlanets)
      let randomPlanetIndex = pickPlanet(listedPlanets)
      let randomPlanet = listedPlanets[randomPlanetIndex]
      console.log(randomPlanet.diameter)
      addDestinationInfo(document , randomPlanet.name, randomPlanet.diameter, randomPlanet.star, randomPlanet.distance, randomPlanet.moons, randomPlanet.image)
    })
});
