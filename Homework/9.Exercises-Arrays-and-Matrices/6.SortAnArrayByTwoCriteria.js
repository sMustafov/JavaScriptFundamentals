function sortAnArrayByTwoCriteria(input) {
    let myArray = new Array();
    for (let i = 0; i < input.length; i++) {
        myArray.push(input[i]);
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

    myArray.sort(length_alpha_sort);
    myArray.sort(length_alpha_sort2);

    for (let i = 0; i < myArray.length; i++) {
        console.log(myArray[i]);
    }
}

//sortAnArrayByTwoCriteria(['alpha', 'beta', 'gamma']);
//sortAnArrayByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
sortAnArrayByTwoCriteria(['test', 'Deny', 'omen', 'Default']);