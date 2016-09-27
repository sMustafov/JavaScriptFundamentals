function DistanceIn3D([x1, y1, z1, x2, y2, z2]){
    x1 = Number(x1);
    y1 = Number(y1);
    z1 = Number(z1);

    x2 = Number(x2);
    y2 = Number(y2);
    z2 = Number(z2);

    x = Math.abs(x1 - x2);
    y = Math.abs(y1 - y2);
    z = Math.abs(z1 - z2);

    let d = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2))

    return d;
}