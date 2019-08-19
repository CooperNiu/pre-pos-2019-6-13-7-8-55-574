'use strict';

function collectSameElements(collectionA, objectB) {
  const resultArray = [];
  collectionA.map(elementA => elementA.key)
      .forEach(elementA => {
        if (objectB.value.flat().includes(elementA)) {
          resultArray.push(elementA);
        }
      });
  return resultArray;
}
