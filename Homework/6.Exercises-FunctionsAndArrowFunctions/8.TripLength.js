function tripLength([x1, y1, x2, y2, x3, y3]) {
    [x1,y1,x2,y2,x3,y3] = [x1,y1,x2,y2,x3,y3].map(Number);
    let path1 = singlePath(x1,y1,x2,y2) + singlePath(x2,y2,x3,y3)
    let path2 = singlePath(x1,y1,x3,y3) + singlePath(x3,y3,x2,y2)
    let path3 = singlePath(x2,y2,x1,y1) + singlePath(x1,y1,x3,y3)

    let optimal = Math.min(path1,path2,path3);
    if (path1==optimal){
        console.log(`1->2->3: ${optimal}`)
    }
    else if (path3 == optimal){
        console.log(`2->1->3: ${optimal}`)
    }
    else if (path2 == optimal){
        console.log(`1->3->2: ${optimal}`)
    }

    function  singlePath(x1,y1,x2,y2) {
        let distance = Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2))
        return distance;
    }
}