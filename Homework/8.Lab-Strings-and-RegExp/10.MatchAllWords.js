function matchAllWords(input){
    let text = input[0];
    let words = text.match(/\w+/g);
    
    console.log(words.join('|'));
}