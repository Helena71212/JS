

const arrPairs = ["red", "green", "red", "red","red","red","red","red",];
function countPairGloves (arr) {
  const sumGloves = arr.reduce((acc, element) => {
        acc[element] = (acc[element] || 0) + 1;
        return acc;
    }, {})

    let result = 0;
  Object.keys(sumGloves).forEach(
    (el) => (result += Math.floor(sumGloves[el] / 2))
  );
  return result; 
}

console.log(countPairGloves(arrPairs));




