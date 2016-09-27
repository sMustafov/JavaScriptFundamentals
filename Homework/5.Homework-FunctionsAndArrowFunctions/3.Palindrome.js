function palindrome([str]) {
    for (let i = 0; i < str.length / 2; i++) {
        if(str[i] != str[str.length - i - 1]){
            return false;
        }
    }

    return true;
}

console.log(palindrome(['haha']));
console.log(palindrome(['racecar']));
console.log(palindrome(['unitinu']));