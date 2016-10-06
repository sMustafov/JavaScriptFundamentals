function heroicInventory(input) {
    let arr = [];
    for (let i = 0; i < input.length; i++) {
        let [name, level, items] = input[i].split(" / ");
        let item = items.split(", ");

        let obj = { name: name, level: Number(level),items: item};
        arr.push(obj);
    }

    console.log(JSON.stringify(arr));
}