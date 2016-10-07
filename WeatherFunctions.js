var rainToday = function(data){
   return data.some(function(thisWeather){
        return thisWeather.icon == "rain";
   })
};

var rainInEightHours = function(data){
    var filterByHours = data.filter(function(timeStamp){
        return timeStamp.time < (1467990000 + (3600 * 8));
    })
    return filterByHours.some(function(thisWeather){
        return thisWeather.icon == "rain";
   });

    
}

module.exports = {
    rainToday: rainToday,
    rainInEightHours: rainInEightHours
}