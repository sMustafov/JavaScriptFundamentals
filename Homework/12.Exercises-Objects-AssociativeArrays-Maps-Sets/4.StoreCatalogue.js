function storeCatalogue(input) {
    let map = new Map();
    for (let i = 0; i < input.length; i++) {
        let [product, price] = input[i].split(" : ");
        let firstLetter = product[0];
        price = Number(price);

        if(!map.has(firstLetter)){
            map.set(firstLetter, new Map);
        }

        map.get(firstLetter).set(product, price);
    }
    
    let mapAsc = new Map([...map.entries()].sort());

    for (let [key, product] of mapAsc) {
        console.log(key);
        let m = new Map([...mapAsc.get(key).entries()].sort());
        for (let [product, price] of m) {
            console.log("  " + product + ": " + price);
        }
    }
}