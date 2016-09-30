function rotateArray(input) {
    let n = Number(input[input.length - 1]);
    let arr = new Array();
    let len = input.length - 1;

    for (let i = 0; i < input.length - 1; i++) {
        arr[(i + n) % len] = input[i];
    }

    console.log(arr.join(' '));
}

function main(input) {
    let n = input.pop() % input.length;

    for (let i = 0; i < n; i++) {
        input.unshift(input.pop());
    }

    console.log(input.join(" "));
}

rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);