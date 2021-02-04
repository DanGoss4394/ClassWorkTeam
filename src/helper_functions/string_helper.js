export const capitalizer = (sentence) => {
    const divSen = sentence.split(" ")
    return divSen.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1)
    }).join(" ")
}

console.log(capitalizer("this sentance should return a string of capitalized words"))