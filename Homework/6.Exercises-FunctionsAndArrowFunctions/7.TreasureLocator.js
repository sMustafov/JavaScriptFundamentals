function treasureLocator(input) {
    let samoa = { x1: 5, x2: 7, y1: 3, y2: 6 };
    let tuvalu = { x1: 1, x2: 3, y1: 1, y2: 3 };
    let tokelao = { x1: 8, x2: 9, y1: 0, y2: 1 };
    let tonga = { x1: 0, x2: 2, y1: 6, y2: 8 };
    let cook = { x1: 4, x2: 9, y1: 7, y2: 8 };

    for (let i = 0; i < input.length; i+=2) {
        let x = Number(input[i]);
        let y = Number(input[i + 1]);

        if(x >= samoa.x1 && x <= samoa.x2 && y >= samoa.y1 && y <= samoa.y2){
            console.log('Samoa');
        }else if(x >= tuvalu.x1 && x <= tuvalu.x2 && y >= tuvalu.y1 && y <= tuvalu.y2){
            console.log('Tuvalu');
        }else if(x >= tokelao.x1 && x <= tokelao.x2 && y >= tokelao.y1 && y <= tokelao.y2){
            console.log('Tokelau');
        }else if(x >= tonga.x1 && x <= tonga.x2 && y >= tonga.y1 && y <= tonga.y2){
            console.log('Tonga');
        }else if(x >= cook.x1 && x <= cook.x2 && y >= cook.y1 && y <= cook.y2){
            console.log('Cook');
        }else{
            console.log('On the bottom of the ocean');
        }
    }
}