

const arrPairs = ["red", "green", "red", "red","red","red","red","red","red","red","red",]


const countColorPair =(arr) => {
 const countGloves = {}
 
 for (let i = 0; i < arr.length; i++) {
  if (!countGloves[arr[i]]) countGloves[arr[i]] = 1 
  else countGloves[arr[i]] = countGloves[arr[i]]+1 ;
 }
 let pairs = 0
 for(key in countGloves){
 if (countGloves[key] % 2 === 0) pairs += Math.floor (countGloves[key] / 2)
 }
return pairs;
}

console.log(countColorPair(arrPairs));


