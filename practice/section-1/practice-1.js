'use strict';

function collectSameElements(collectionA, collectionB) {
  const resultArray = [];
  collectionA.forEach(elementA => {
     if (collectionB.includes(elementA)) {
      resultArray.push(elementA);
     }
  });
  return resultArray;
}
