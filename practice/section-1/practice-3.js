'use strict';

function collectSameElements(collectionA, objectB) {
  const resultArray = [];
  collectionA.forEach(elementA => {
     if (objectB.value.flat().includes(elementA)) {
      resultArray.push(elementA);
     }
  });
  return resultArray;
}
