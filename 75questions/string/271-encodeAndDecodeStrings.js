/*271. Encode and Decode Strings
Design an algorithm to encode a list of strings to a string. 
The encoded string is then sent over the network and is decoded 
back to the original list of strings.

Machine 1 (sender) has the function:
*/
    var encode = function(strs){
        if (!strs.length) return null;
        return strs.join('-encode-');
    }
    
    var decode = function(s) {
        if (s === null) return [];
        return s.split('-encode-');
    }