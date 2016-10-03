function findOccurrencesOfWordInSentence([str, word]) {
    let text = str.split(/\s+/);
    let counter = 0;

    let pattern = word ;
    let reg = new RegExp(pattern, "gi");

    for (let i = 0; i < text.length; i++) {
        if(text[i].match(reg) != null){
            if(text[i][word.length] <= 'z' && text[i][word.length] >= 'a'){

            }else {
                counter++;
            }
        }
    }

    console.log(counter);
}