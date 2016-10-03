function capitalizeTheWords([input]) {
    let res = '';
    let arr = input.split(' ');

    for (let i = 0; i < arr.length; i++) {
        let word = arr[i].toLowerCase();
        let w = word[0].toUpperCase() + word.substr(1);

        res += ' ' + w;
    }

    console.log(res);
}