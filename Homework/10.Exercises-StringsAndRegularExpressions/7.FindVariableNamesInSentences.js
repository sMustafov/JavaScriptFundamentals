function findVariableNamesInSentences(input) {
    let text = input[0].split(' ');
    let words = [];
    for (let i = 0; i < text.length; i++) {
        if(text[i].match(/^_[A-Za-z0-9]+$/g) != null){
            words.push(text[i].match(/[A-Za-z0-9]+/g));
        }
    }

    console.log(words.join(','));
}