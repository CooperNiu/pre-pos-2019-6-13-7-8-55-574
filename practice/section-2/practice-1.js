'use strict';

function countSameElements(collection) {
  const resultArray = [];
  collection.forEach(element => {
     const findObj = resultArray.find(item => item.key === element);
     if (findObj) {
       findObj.count += 1;
     } else {
       resultArray.push({ key: element, count: 1});
     }
  });
  return resultArray;
}
