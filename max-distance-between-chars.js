let str = 'the adam street is near the sea and it is adjoin by the sacred place of the sorcerers'
let dist= 0,temp = 0, currDist = -1,letter = '1'

function getMaxDistanceBetweenChar(str,letter){
    if(typeof(letter) !== 'string' || typeof(str) !== 'string'){
        throw new Error('Input should be of type string');
    }
    if(!str.includes(letter)){
        return -1
    }
    for(let i = 0; i < str.length; i++) {
        if(str[i] == letter){
            currDist = i - temp
            dist = currDist > dist ? currDist : dist;
            temp = i;
        }
    }
    
    return dist
}

console.log(getMaxDistanceBetweenChar(str,letter));