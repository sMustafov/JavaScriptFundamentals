function JSONsTable(input) {
    let html = "<table>\n";
    for (let i = 0; i < input.length; i++) {
        let arr = JSON.parse(input[i]);
        html += "   <tr>\n";
        html += `        <td>${arr['name']}` +
            `</td>\n    <td>${arr['position']}</td>\n    <td>${arr['salary']}</td>\n`;
        html += "  <tr>\n";
    }

    return html + "</table>";
}