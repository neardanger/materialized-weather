"use strict";

var weather_image;

(function(){
    console.log('data is locked and loaded')
    $(':submit').click(function(event){


        var showCity = $(".search").val();
        console.log("CLICK CLICK CLICK!")

        var url = "http://api.openweathermap.org/data/2.5/weather?"

        event.preventDefault();
        $.ajax({
            url: url,
            type:"GET",
            data:{"q":showCity,
            "units":"imperial",
            "appid":"7d3e21a2db51b463cc37a42000a06ee4"
            },

            error:function(){
                alert(url)
            },

            success:function(data){

            var weather = data.weather
            var description = weather[0].description
            var name = data.name
            var temp = data.main.temp 
            
            $('#forecast').text("The temperature in " + name + " is currently at " + temp + " degrees farenheit with " + description + "!")

            }
        })

    })

})()

