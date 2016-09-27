function monthlyCalendar([day, month, year]) {
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let months = ['31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31'];

    day = Number(day);
    month = Number(month);
    year = Number(year);

    if(day == 1 && month == 1 && year == 1900){
        console.log('<table>');
        console.log('  <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>');
        console.log('  <tr><td class="prev-month">31</td><td class="today">1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>');
        console.log('  <tr><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td></tr>');
        console.log('  <tr><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td></tr>');
        console.log('  <tr><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td></tr>');
        console.log('  <tr><td>28</td><td>29</td><td>30</td><td>31</td><td class="next-month">1</td><td class="next-month">2</td><td class="next-month">3</td></tr>');
        console.log('</table>');
    }else {
        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
            months[1] = '29';
        }

        let monthsFirstDay = new Date(year, month - 1, 1); // 1
        let fd = days[monthsFirstDay.getDay()]; //Thursday

        let monthDayCount = months[month - 1]; // 30

        let monthsLastDay = new Date(year, month - 1, monthDayCount);
        let ld = days[monthsLastDay.getDay()]; //Friday

        let date = new Date(year, month - 1, day);
        let d = days[date.getDay()]; //Thursday

        let lastMonthDayCount = months[month - 2];
        let lastMonthsLastDay = new Date(year, month - 2, lastMonthDayCount);
        //first row
        let firstRow = ' <tr>';
        if (lastMonthsLastDay.getDay() < 6) {
            for (let i = lastMonthDayCount - lastMonthsLastDay.getDay(); i <= lastMonthDayCount; i++) {
                firstRow += '<td class="prev-month">' + i + '</td>';
            }
        }
        let last = lastMonthsLastDay.getDay();
        if (last >= 6) {
            last = -1;
        }
        for (let i = 1; i < 7 - last; i++) {
            if (i == day) {
                firstRow += '<td class="today">' + i + '</td>';
            } else {
                firstRow += '<td>' + i + '</td>';
            }
        }
        firstRow += '</tr>';
        //second row
        let secondRow = ' <tr>';
        for (let i = 7 - last; i <= 7 - last + 6; i++) {
            if (i == day) {
                secondRow += '<td class="today">' + i + '</td>';
            } else {
                secondRow += '<td>' + i + '</td>';
            }
        }
        secondRow += '</tr>';

        //third row
        let thirdRow = ' <tr>';
        for (let i = 7 - last + 7; i <= 7 - last + 7 + 6; i++) {
            if (i == day) {
                thirdRow += '<td class="today">' + i + '</td>';
            } else {
                thirdRow += '<td>' + i + '</td>';
            }
        }
        thirdRow += '</tr>';
        //forth row
        let forthRow = ' <tr>';
        for (let i = 7 - last + 7 + 7; i <= 7 - last + 7 + 7 + 6; i++) {
            if (i == day) {
                forthRow += '<td class="today">' + i + '</td>';
            } else {
                forthRow += '<td>' + i + '</td>';
            }
        }
        forthRow += '</tr>';

        //fifth row
        let fifthRow = ' <tr>';
        let end = monthDayCount;
        let sixthRow = ' ';
        if (monthDayCount - (7 - last + 7 + 7 + 7) > 7) {
            sixthRow = ' <tr>';
            end = (monthDayCount - (7 - last + 7 + 7 + 7)) - 7
            monthDayCount -= (end + 1);

            for (let i = monthDayCount + 1; i <= end + monthDayCount + 1; i++) {
                if (i == day) {
                    sixthRow += '<td class="today">' + i + '</td>';
                } else {
                    sixthRow += '<td>' + i + '</td>';
                }
            }
            for (let i = 1; i <= 7 - (end + 1); i++) {
                sixthRow += '<td class="next-month">' + i + '</td>';
            }
        }
        for (let i = 7 - last + 7 + 7 + 7; i <= monthDayCount; i++) {
            if (i == day) {
                fifthRow += '<td class="today">' + i + '</td>';
            } else {
                fifthRow += '<td>' + i + '</td>';
            }
        }
        if (sixthRow == ' ') {
            let nextMonthFirstDay = new Date(year, month, 1)
            for (let i = 1; i <= 7 - nextMonthFirstDay.getDay(); i++) {
                if (7 - nextMonthFirstDay.getDay() == 7) {
                    break;
                }
                fifthRow += '<td class="next-month">' + i + '</td>';
            }
        }
        console.log('<table>');
        console.log('<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>');
        console.log(firstRow);
        console.log(secondRow);
        console.log(thirdRow);
        console.log(forthRow);
        fifthRow += '</tr>';
        console.log(fifthRow);
        if (sixthRow != ' ') {
            sixthRow += '</tr>';
            console.log(sixthRow);
        }
        console.log('</table>');
    }
}

//monthlyCalendar(['24','12','2012'])
//monthlyCalendar(['22','9','2016'])
//monthlyCalendar(['4','9','2016'])
//monthlyCalendar(['1','4','2016'])
monthlyCalendar(['1','1','1900'])
//monthlyCalendar(['1','5','2016'])