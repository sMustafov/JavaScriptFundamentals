function usernames(input) {
    let arr = [];
    let set = new Set();

    for (let i = 0; i < input.length; i++) {
        set.add(input[i]);
    }

    for (let i = 0; i < set.size; i++) {
        arr.push(input[i]);
    }

    function length_alpha_sort(astr, bstr) {
        if (astr.length != bstr.length) {
            return astr.length - bstr.length;
        }
        return (astr < bstr) ? -1 : (astr > bstr) ? 1 : 0;
    }

    function length_alpha_sort2(astr, bstr) {
        astr += '';
        bstr += '';
        if (astr.length != bstr.length) {
            return astr.length - bstr.length;
        }
        return (astr < bstr) ? -1 : (astr > bstr) ? 1 : 0;
    };

    arr.sort(length_alpha_sort2);
    arr.sort(length_alpha_sort);


    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}