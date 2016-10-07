var rainToday = function(data){
   return data.some(function(thisWeather){
        return thisWeather.icon == "rain";
   })
};

var rainInEightHours = function(data){
    var filterByHours = data.filter(function(timeStamp){
        console.log(timeStamp.time < (1467990000 + (3600 * 8)));
        return timeStamp.time < (1467990000 + (3600 * 8));
    })
    return filterByHours.some(function(thisWeather){
        return thisWeather.icon == "rain";
   });
}

var getAllTemps = function(data){
    var hourlyTemps = [];
    data.forEach(function(temp){
        hourlyTemps.push(temp.temperature);
    });
    return hourlyTemps;
}

var whenWillItRain = function(data){
    
    var rainHours = data.filter(function(weather){
        return weather.icon == "rain";
    })
    
    var rainHourTimesArray = [];
 
    rainHours.forEach(function(hours){
        rainHourTimesArray.push({[new Date(hours.time*1000)] : "rain"});
    });
    
    return rainHourTimesArray;
}

var sunnyWeek = function(data){
    var dayWords = [];
    data.forEach(function(days){
        dayWords.push(days.summary.split(" "));
    });
    console.log(dayWords);
    var lookForWord = [];
    dayWords.forEach(function(x){
        var filteredWords =  x.some(function(y){
            return y == "rain";
            });
        lookForWord.push(filteredWords);
        });
    
    console.log(lookForWord);
    return lookForWord.every(function(x){
        return x;
    });
}


var hottestTemp = function(data){
    var theHottest = -Infinity;
    data.forEach(function(x){
        // console.log(x.temperature);
       if (x.temperature > theHottest){
           theHottest = x.temperature;
       }
    //   console.log("the hottest: " + theHottest);
    });
    return theHottest;
}


var iconCount = function(data){
    var icons = {};
        
    data.forEach(function(data){

        if (icons[data.icon]){
            icons[data.icon] += 1;
        }
        else{
            icons[data.icon] = 1;
        }
    });
        
    
    return icons;
}


var peopleFinder = function(data){

    var bizEmails = data.filter(function(data) {
        var splitArray = data.email.split('.');
        return splitArray[splitArray.length-1] == "biz";
    });


    var cities = [];
    bizEmails.forEach(function(x) {
        cities.push(x.address.city);
    });
    
    console.log(cities);
    
    var uniqueCities = {};
    cities.forEach(function(y){
        if (uniqueCities[y]){
            console.log("city exists: " + y);
        }
        else{
            uniqueCities[y] = "city";
            console.log("new city: " + y)
        }
    });
    console.log(uniqueCities)
        
}


/*
})
.INSERT_ARRAY_METHOD_HERE(function() {

})
.forEach(function() {

});

*/

module.exports = {
    rainToday: rainToday,
    rainInEightHours: rainInEightHours,
    getAllTemps: getAllTemps,
    whenWillItRain: whenWillItRain,
    sunnyWeek: sunnyWeek,
    hottestTemp: hottestTemp,
    iconCount: iconCount,
    peopleFinder: peopleFinder
}