const returnFirstTwoDrivers = function(){
    let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
    return drivers.slice(0,2)
}
const returnLastTwoDrivers = function(){
    let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
    return drivers.slice(2,4)
}
 let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
 
 function createFareMultiplier(n) {
    const fareMultiplier = function(b) {
        return n * b;
    }
    return fareMultiplier;
} 

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

 const selectDifferentDrivers = function(returnFirstTwoDrivers, returnLastTwoDrivers)
 {
    return returnLastTwoDrivers(returnFirstTwoDrivers)
 }
