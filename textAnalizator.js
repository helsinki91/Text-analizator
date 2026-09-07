const textAnalizator = () => {
    let askText = prompt("Введите текст");

    let charCount = askText.length;

    let spaceCount = 0;

    for(let i = 0; i < askText.length; i++) {
        if(askText[i] === " ") {
            spaceCount++;
        }
    }

    let words = askText.split(" ");
    let wordCount = words.length;

    let longestWord = "";

    for(let i = 0; i < wordCount; i++) {
        if(words[i].length > longestWord.length) {
            longestWord = words[i];
        } 
    }
    return {
        longestWord, 
        charCount, 
        spaceCount, 
        wordCount
    };
}

console.log(textAnalizator());
