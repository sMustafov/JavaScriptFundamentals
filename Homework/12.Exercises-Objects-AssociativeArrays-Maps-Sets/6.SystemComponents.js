function systemComponents(input) {
    let map = new Map();

    for (let i = 0; i < input.length; i++) {
        let [systemName, componentName, subcomponentName] = input[i].split(" | ");

        if(!map.has(systemName)){
            map.set(systemName, new Map());
            map.get(systemName).set(componentName,[]);
        }else if (!map.get(systemName).has(componentName)){
            map.get(systemName).set(componentName,[]);
        }
        map.get(systemName).get(componentName).push(subcomponentName);
    }

    let sortedMap = [...map].sort((a,b) => {
        let result = b[1].size - a[1].size;
        if (result==0){
            result = a[0].localeCompare(b[0]);
        }
        return result;
    });

    for (let [systemName, componentName] of sortedMap){
        console.log(systemName);
        let sortedComponents = [...componentName].sort((a,b) => b[1].length - a[1].length);
        for (let [key,value] of sortedComponents){
            console.log(`|||${key}`);
            for (let subcomponent of value){
                console.log(`||||||${subcomponent}`)
            }
        }
    }
}