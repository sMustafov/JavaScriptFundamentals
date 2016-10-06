function fromJSONToHTMLTable(input) {
    let html = "<table>\n";
    let arr = JSON.parse(input);
    html += "  <tr>";
    for (let key of Object.keys(arr[0])) {
        html += `<th>${htmlEscape(key)}</th>`;
    }
    html += "</tr>\n";


    for (let i = 0; i < arr.length; i++) {
        html += `  <tr>`;
        for (let key of Object.keys(arr[i])) {
            html += `<td>${htmlEscape(arr[i][key].toString())}</td>`;
        }
        html += `</tr>\n`;
    }


    return html + "</table>";

    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}

console.log(fromJSONToHTMLTable(['[{"Name":"Tomatoes & Chips","Pricea":42232,"Pricwe":2.3435,"Priace":222,"Price":44},{"Name":"J&B Chocolate","Pricea":0.96,"Pricwe":0.96,"Priace":0.96,"Price":0.96}]']));




