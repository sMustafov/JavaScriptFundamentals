function matchMultiplication(input){
    let text = input[0];
    text = text.replace(/(\d+)/g, (match,num,offset)=>Number(num) * offset);

    console.log(text);
}