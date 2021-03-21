/*sample input:
  distance = [5, 25, 15, 10, 15],
  fule = [1, 2, 1, 0, 3],
  mpg = 10
  OUPUT: 4
*/

function validStartingCity(distances, fuel, mpg) { 
	/*  
	"distances": [5, 25, 15, 10, 15],
  "fuel": [1, 2, 1, 0, 3],
  "mpg": 10
 */
 const numOfCities = distances.length; //5
	
	for (let i = 0; i < numOfCities; i++) { //i = 0, 1
		let milesRemaining = 0; //5
		
		for (let currentCityIdx = i; currentCityIdx < i + numOfCities; currentCityIdx++) {
			if (milesRemaining < 0) continue;  //skip
			
			const currentCityIdxRotated = currentCityIdx % numOfCities; //0 
			// using module to get back to the first idx
			const fuelFromCurrentCity = fuel[currentCityIdxRotated];//1
			const distanceToNextCity = distances[currentCityIdxRotated];//5
			milesRemaining += fuelFromCurrentCity * mpg - distanceToNextCity;//5
		}
		if (milesRemaining >= 0) return i;
	}

}
