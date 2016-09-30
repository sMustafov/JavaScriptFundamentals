function keplersProblem([M, e]){
    let error = 0.000000001;

    let E = M - e / 2;

    let ratio = 1;
    while( Math.abs(ratio) > error) {
        ratio = (E - e * Math.sin(E) - M) / (1 - e * Math.cos(E));
        E = E - ratio;
    }

    console.log(E);
    console.log(Math.round(E * 1000000000) / 1000000000);
}

//http://courses.washington.edu/aa31008/AA310TextAppendixD.pdf