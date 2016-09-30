function addAndRemoveElementsFromArray(input) {
    let arr = new Array();
    let num = 1;
    for (let i = 0; i < input.length; i++) {
        let command = input[i];

        if(command == 'add'){
            arr.push(num);
        }else if(command == 'remove'){
            arr.pop();
        }
        num++;
    }

    if(arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
    }else{
        console.log('Empty');
    }
}

addAndRemoveElementsFromArray(['add', 'add', 'add', 'add']);
addAndRemoveElementsFromArray(['add', 'add','remove', 'add', 'add']);
addAndRemoveElementsFromArray(['remove', 'remove','remove']);