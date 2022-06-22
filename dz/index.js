

const gloves= ["red", "green", "red", "red","red","red","red","red","green", "white"];

const findPairs =(gloves) => {
  const countColorGloves = gloves.reduce((result,glove) => {
    if( result[glove]) {result[glove] += 1;
    }
    else {result[glove] = 1;
    }
    return result;
    },{})
    console.log(countColorGloves);

    return Object.values(countColorGloves).reduce((totalPairs,glovesAmount) => {
      const whilePairs = Math.floor(glovesAmount/2);
      return totalPairs+whilePairs;
    },0)
}
console.log(findPairs(gloves));




