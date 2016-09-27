function multiplicationTable([n]) {
    n = Number(n);
    let row = 1;
    console.log('<table border="1">');
    let firstRow = ' <tr><th>x</th>';
    for (let i = 1; i <= n; i++) {
        firstRow += '<th>'+ i +'</th>';
    }
    firstRow += '</tr>';
    console.log(firstRow);

    for (let i = 1; i <= n; i++) {
        let row = ' <tr><th>' + i + '</th>';
        for (let j = i; j <= n * i; j+=i) {
            row += '<td>' + j + '</td>';
        }
        row += '</tr>';
        console.log(row);
    }
    console.log('</table>');
}

multiplicationTable(['5']);