function lastMonth([day, month, year]) {
    var d = new Date(year, month - 1, 0);
    return d.getDate();
}