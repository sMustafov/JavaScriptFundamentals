function cappyJuice(arr) {
    let storage = new Map();
    let juicesBeforeLittre = new Map();

    for (let i=0;i<arr.length;i++){
        let [juice, quantity] = arr[i].split(/\s*=>\s*/g);
        if (!juicesBeforeLittre.has(juice)){
            juicesBeforeLittre.set(juice, 0);
        }
        juicesBeforeLittre.set(juice,juicesBeforeLittre.get(juice)+Number(quantity));
        if (juicesBeforeLittre.get(juice)>=1000){
            storage.set(juice, juicesBeforeLittre.get(juice));
        }
    }
    for (let [key,value] of storage){
        console.log(`${key} => ${Math.floor(value/1000)}`)
    }
}

/*
cappyJuice(['Orange => 2000', 'Peach => 1432',
    'Banana => 450', 'Peach => 600', 'Strawberry => 549']);
*/

cappyJuice(['Kiwi => 1234', 'Pear => 2345', 'Watermelon => 3456',
    'Kiwi => 4567', 'Pear => 5678', 'Watermelon => 6789']);