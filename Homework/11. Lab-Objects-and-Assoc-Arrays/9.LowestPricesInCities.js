function lowestPricesInCities(input) {
    let cities = new Map();
    for(let sale of input){
        let [town, product, price] = sale.split(/\s*\|\s*/);
        price = Number(price);

        if (!cities.has(product)){
            cities.set(product, new Map());
        }

        cities.get(product).set(town, price);
    }

    for (let [prod, town] of cities)
    {
        let lowest = 0;
        let i = 0;
        let forRes = '';
        let res = '';
        res += prod + " -> ";
        for (let [t, price] of town) {
            if(i == 0){
                lowest = Number(price);
                forRes += price + " (" + t + ")";
            }else{
                if(lowest > Number(price)){
                    lowest = Number(price);
                    forRes = '';
                    forRes += price + " (" + t + ")";
                }
            }
            i++;
        }

        res += forRes;
        console.log(res);
    }
}


/*lowestPricesInCities(['Sample Town | Sample Product | 1000', 'Sample Town | Orange | 2',
'Sample Town | Peach | 1', 'Sofia | Orange | 3', 'Sofia | Peach | 2',
'New York | Sample Product | 1000.1', 'New York | Burger | 10']);*/

lowestPricesInCities(['Sofia City | Audi | 100000', 'Sofia City | BMW | 100000',
'Sofia City | Mitsubishi | 10000', 'Sofia City | Mercedes | 10000',
'Sofia City | NoOffenseToCarLovers | 0', 'Mexico City | Audi | 1000',
'Mexico City | BMW | 99999', 'New York City | Mitsubishi | 10000',
'New York City | Mitsubishi | 1000', 'Mexico City | Audi | 100000',
'Washington City | Mercedes | 1000'])