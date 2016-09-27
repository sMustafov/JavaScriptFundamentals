function distanceOverTime([v1, v2, t]){
    v1 = Number(v1);
    v2 = Number(v2);
    t = Number(t);

    let v = Math.abs(v1 - v2);
    t = t / 3600;

    console.log(t * v * 1000);
}