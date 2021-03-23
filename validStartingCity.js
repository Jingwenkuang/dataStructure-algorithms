/*Valid Starting City
Write a funtion that returns the index of the valid starting city
sample input:
  distance = [5, 25, 15, 10, 15],
  fule = [1, 2, 1, 0, 3],
  mpg = 10
  OUPUT: 4
*/
//time o(n^2), space o(n)
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


//solution2 - greedy
//time o(n), space o(1)
function validStartingCity(distances, fuel, mpg) {
	let startIdx = 0; 
	let min = 0; 
	let remainder = 0;
	
	for (let i = 1; i < distances.length; i++) {
		let distFromPrev = distances[i - 1] //5
	  remainder += fuel[i - 1] * mpg - distFromPrev;
		// console.log(remainder, i)
		if (remainder < min) {
			min = remainder;
			startIdx = i;
		}
	}
	return startIdx;
}
