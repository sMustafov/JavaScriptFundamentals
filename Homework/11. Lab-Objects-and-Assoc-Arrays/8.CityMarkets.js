function cityMarkets(input) {
    let markets = new Map();
    for(let sale of input){
        let [town, product, quantity] = sale.split(/\s*->\s*/);
        let [amountOfSales, priceForOneUnit] = quantity.split(/s*:s*/);
        amountOfSales = Number(amountOfSales);
        priceForOneUnit = Number(priceForOneUnit);

        if (!markets.has(town)){
            markets.set(town, new Map());
        }
        let income = amountOfSales * priceForOneUnit;
        let oldIncome = markets.get(town).get(product);
        if (oldIncome){
            income += oldIncome;
        }
        markets.get(town).set(product, income);
    }

    for (let [town, product] of markets)
    {
        console.log("Town - " + town);
        for (let [prod, price] of product) {
            console.log("$$$"+ prod +" : " + price);
        }
    }
}


cityMarkets(['Sofia -> Laptops HP -> 200 : 2000', 'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000', 'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2', 'Montana -> Chereshas -> 1000 : 0.3']);








