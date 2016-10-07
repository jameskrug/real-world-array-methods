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
        rainHourTimesArray.push(new Date(hours.time*1000));
    });
    
    return rainHourTimesArray;
}






module.exports = {
    rainToday: rainToday,
    rainInEightHours: rainInEightHours,
    getAllTemps: getAllTemps,
    whenWillItRain: whenWillItRain
}