'use strict';

function parseElement(element) {
  const regax = /[a-z0-9]+/g;
  const matchRes = element.match(regax);
  if (matchRes.length === 2) {
    return { name: matchRes[0], summary: parseInt(matchRes[1])}
  }
  return { name : matchRes[0], summary: 1 };
}

function countSameElements(collection) {
  const resultArray = [];
  collection.forEach(element => {
      const parsedItem = parseElement(element);
      const findObj = resultArray.find(item => item.name === parsedItem.name);
      if (findObj) {
        findObj.summary = findObj.summary + parsedItem.summary;
      } else {
        resultArray.push(parsedItem);
      }
  });
  return resultArray;
}
