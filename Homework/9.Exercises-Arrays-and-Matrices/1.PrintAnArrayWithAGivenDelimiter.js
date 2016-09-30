function printAnArrayWithAGivenDelimiter(input) {
    let delimiter = input[input.length - 1];

    let result = '';

    for (let i = 0; i < input.length - 1; i++) {
        if(i == 0){
            result += input[i];
        }else{
            result += delimiter + input[i];
        }
    }

    console.log(result);
}

printAnArrayWithAGivenDelimiter(['One', 'Two', 'Three', 'Four', 'Five', '-']);
printAnArrayWithAGivenDelimiter(['How', 'about', 'no?', 'I', 'will','not', 'do', 'it!', '_']);