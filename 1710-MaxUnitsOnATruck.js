var maximumUnits = function(boxTypes, truckSize) {
    let sorted = boxTypes.sort((a, b) => b[1] - a[1]);
    // sorted = [[1, 3], [2, 2], [3, 1]];
    
    let max = 0;
    let remainder = truckSize;
    
    for (let i = 0; i < sorted.length; i++) {
     
        let box = sorted[i][0];
        let unit = sorted[i][1];
        
        if (box < 0 || remainder < 0) {
            break;
        } else if (box < remainder) {
            max += (box * unit);
            remainder = remainder - box;
        } else if (box >= remainder) {
            max += remainder * unit; 
            remainder = remainder - box;
        }
    }
       
   return max;
};