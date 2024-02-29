// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0, 2);
};

let arr=["aa", "Amari", "Mo"];
console.log(returnFirstTwoDrivers(arr)); // Output: ["aa", "bb"]

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
};

console.log(returnLastTwoDrivers(arr));

const selectingDrivers = [
    returnFirstTwoDrivers,returnLastTwoDrivers
];


function createFareMultiplier(integer) {
    return function(fare) {
        return fare * integer;
    };
}


const fareQuadrupler = createFareMultiplier(4);
console.log(fareQuadrupler(10)); 

const fareDoubler =createFareMultiplier(2);
console.log(fareQuadrupler(10)); 

const fareTripler = createFareMultiplier(3);
console.log(fareTripler(10));

function selectDifferentDrivers(drivers,returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers);
}
console.log(selectDifferentDrivers(drivers));