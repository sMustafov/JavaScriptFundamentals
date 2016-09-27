function moviePrices([movieName, day]) {
    movieName = movieName.toLowerCase();
    day = day.toLowerCase();
    if(movieName.toLowerCase() == "The Godfather".toLowerCase()){
        switch (day){
            case "monday" : return 12;
            case "tuesday" : return 10;
            case "wednesday" : return 15;
            case "thursday" : return 12.50;
            case "friday" : return 15;
            case "saturday" : return 25;
            case "sunday" : return 30;
            default :
                return 'error';
        }
    }else if(movieName == "Schindler's List".toLowerCase()){
        switch (day){
            case "monday" :
            case "tuesday" :
            case "wednesday" :
            case "thursday" :
            case "friday" :
                return 8.50;
            case "saturday" :
            case "sunday" :
                return 15;
            default :
                return 'error';
        }
    }else if(movieName == "Casablanca".toLowerCase()){
        switch (day){
            case "monday" :
            case "tuesday" :
            case "wednesday" :
            case "thursday" :
            case "friday" :
                return 8;
            case "saturday" :
            case "sunday" :
                return 10;
            default :
                return 'error';
        }
    }else if(movieName == "The Wizard of Oz".toLowerCase()){
        switch (day){
            case "monday" :
            case "tuesday" :
            case "wednesday" :
            case "thursday" :
            case "friday" :
                return 10;
            case "saturday" :
            case "sunday" :
                return 15;
            default :
                return 'error';
        }
    }
    else{
        return "error";
    }
}

console.log(moviePrices(["casablanca", "sunday"]));
console.log(moviePrices(["The Godfather", "Friday"]));
console.log(moviePrices(["Schindler's LIST", "monday"]));
console.log(moviePrices(["SoftUni", "Nineday"]));