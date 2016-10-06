function populationsInTowns(input) {
    let populationCount = new Map();
    for (let word of input) {
        let [town, population] = word.split(/\s*<->\s*/);
        population = Number(population);

        if (populationCount.has(town)){
            populationCount.set(town, populationCount.get(town) + population);
        }else {
            populationCount.set(town, population);
        }
    }

    let allWords = Array.from(populationCount.keys());
    allWords.forEach(w =>
        console.log(`${w} : ${populationCount.get(w)}`));
}


populationsInTowns(['B<->20', 'A<->30', 'B<->5']);
