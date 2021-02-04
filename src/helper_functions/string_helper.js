//  String

function reverseString(string) {
    let newArray = string.split(" ")
    console.log(newArray)
    let reverseArray = [];
    let length = newArray.length
    for (let i = 0; i < length; i++) {
        if (newArray[i] == newArray[length - 1]) {
            let word = newArray[length-1].slice(0, -1)
            reverseArray.unshift(word)
        } else {
            reverseArray.unshift(newArray[i])
        }
    }
    reverseArray.push(newArray[length - 1].slice(-1))
    return(reverseArray.join(" "))

}

console.log(reverseString('Hello there how are you today?'))