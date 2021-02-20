var numPairsDivisibleBy60 = function(time) {
    //time = [30,20,150,100,40]
    let hashMap = new Array(60).fill(0);
    let count = 0; 
    
    for (let i = 0; i < time.length; i++) {
        let t = time[i]% 60; // t = 30, 20, 30, 40, 40
        
        let remain = (60 - t)%60;  // remain = 30, 40, 30, 20, 20
        
        count += hashMap[remain]; // count += hashMap[30] = 0, 
                                 //count += hashMap[40] = 0,
                                //count += hashMap[30] = 1,
                                //count += hashMap[20] = 1 + 1 = 2,
                                //count += hashMap[20] = 2 + 1 = 3,
        
        hashMap[t] += 1; //hashMap[30] = 1, 
                        //hashMap[20] = 1,
                        //hashMap[30] = 2,
                        //hashMap[40] = 1,
                        //hashMap[40] = 2,
    }
    return count;
};