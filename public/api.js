"use strict";

var weather_image;

(function(){
    console.log('data is locked and loaded')
    $(':submit').click(function(event){


        var showCity = $(".search").val();
        console.log("CLICK CLICK CLICK!")

        var url = "http://api.openweathermap.org/data/2.5/weather"

        event.preventDefault();
        $.ajax({
            url: url,
            type:"GET",
            data:{"q":showCity,
            "units":"imperial",
            "appid":"5f3a6c71267fa25de4c154c1abbf3cc2"
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

