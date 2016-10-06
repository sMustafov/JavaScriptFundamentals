function uniqueSequences(input) {
    let arrays = [];
    for (let i = 0; i < input.length; i++) {
        let str = JSON.parse(input[i]);
        str.sort(function sortNumber(a,b) {
            return a - b;
        }).reverse();
        arrays.push(str);
    }

    arrays.sort(function sortArr(a, b) {
        return a.length - b.length;
    });

    let set = new Set();
    for (let i = 0; i < arrays.length; i++) {
        let res = '[';
        res += arrays[i].join(', ');
        res += ']';
        set.add(res);
    }

    set.forEach(function(value) {
        console.log(value);
    });
}