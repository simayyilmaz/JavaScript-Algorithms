const cloneArray= (array) => {
    return [...array];
};

console.log(cloneArray[1,2,3,4]);



const getFirstItems = (array, n=1) => {
    return array.slice(0,n);
};  

console.log(getFirstItems[1,2,3,4])


const swapCaseOfEachCharacter = input => {
    return input 
    .split ("")
    .map((item) =>
    item===item.toUpperCase() ? item.toLowerCase():item.toUpperCase()
    )

.join("");
};

