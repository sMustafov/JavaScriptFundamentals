function htmlList(items) {
    return "<ul>\n" +
        items.map(htmlEscape).map(
            item => `  <li>${item}</li>`).join("\n") +
        "\n</ul>";
    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}