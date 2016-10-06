function autoEngineeringCompany(input) {
    let map = new Map();
    for (let i = 0; i < input.length; i++) {
        let [carBrand, carModel, producedCars] = input[i].split(" | ");
        producedCars = Number(producedCars);

        if(!map.has(carBrand)){
            map.set(carBrand, new Map());
        }

        let oldProducedCars = map.get(carBrand).get(carModel);
        if (oldProducedCars){
            producedCars += oldProducedCars;
        }

        map.get(carBrand).set(carModel, producedCars)
    }

    for (let [carBrand, carModel] of map)
    {
        console.log(carBrand);
        for (let [model, producedCars] of carModel) {
            console.log("###"+ model +" -> " + producedCars);
        }
    }
}