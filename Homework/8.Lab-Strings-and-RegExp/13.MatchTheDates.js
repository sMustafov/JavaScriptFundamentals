function getDates(input) {
    let pattern = /[0-9]{2}-[A-Z][a-z]{2}-[0-9]{4}/g;
    let dates = [];
    for(let currentSentence of input) {
        let match = pattern.exec(currentSentence);
        while(match) {
            dates.push(match[0]);
            match = pattern.exec(currentSentence);
        }
    }
    console.log(dates.join("\n"));
}