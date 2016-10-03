function extractTheLinks(input) {
    for (let i = 0; i < input.length; i++) {
        let words = input[i].match(/(www)\.([A-Za-z0-9-]+)(\.[a-z]+)+/g);
        if(words != null) {
            console.log(words.join('\n'));
        }
    }
} 