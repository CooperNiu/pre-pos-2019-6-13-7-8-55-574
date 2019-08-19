'use strict';

function parseElement(element) {
  const regax = /[a-z0-9]+/g;
  const matchRes = element.match(regax);
  if (matchRes.length === 2) {
    return { key: matchRes[0], count: parseInt(matchRes[1])}
  }
  return matchRes[0];
}

function countSameElements(collection) {
  const resultArray = [];
  collection.forEach(element => {
     const parsedItem = parseElement(element);
     if (parsedItem instanceof Object) {
       resultArray.push(parsedItem);
     } else {
        const findObj = resultArray.find(item => item.key === element);
        if (findObj) {
          findObj.count += 1;
        } else {
          resultArray.push({ key: element, count: 1});
        }
     }
  });
  return resultArray;
}
