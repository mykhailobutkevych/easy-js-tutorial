function uniqValues(array) {
    // return Array.from(new Set(array))
    return [...new Set(array)]
}

console.log(uniqValues([1,1,1,3,4,4,5]));