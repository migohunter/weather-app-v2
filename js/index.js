$(document).ready(function(){
  $("input").geocomplete({details: "form"});

  $("#findWeather").click(function(){   
  $('#weather').empty();
  var long = document.getElementById('longitude').value;    
  var lat = document.getElementById('latitude').value;
  console.log(long);
  var fTemp;
  var cTemp;
  var isFah = true;  
    $("#location").html("latitude: " + lat + "<br>longitude: " + long);
      var api = 'https://api.darksky.net/forecast/5245df37a800c4125588a2124d21790d/'+lat+','+long;
      var proxy = "https://cors-anywhere.herokuapp.com/";
  
  
  $.getJSON(proxy + api, function(data){
    var weatherType = data.currently.icon;
    var fTemp = data.currently.temperature;
    var timezone = data.timezone;
    cTemp = (fTemp - 32) * (5/9);
    cTemp = cTemp.toFixed(1);
    
    $("#temperature").html(fTemp+" °F");
    if (weatherType == 'clear-day') {
      $('#weather').prepend('<img src="https://s21.postimg.org/smcb8qrav/clear-day.png">')
    }
    else if (weatherType == 'clear-night') {
      $('#weather').prepend('<img src="https://s22.postimg.org/3nwdvog0x/clear-night.png">')
    }
    else if (weatherType == 'cloudy') {
      $('#weather').prepend('<img src="https://s22.postimg.org/78s9ewkkh/cloudy.png">')
    }
    else if (weatherType == 'fog') {
      $('#weather').prepend('<img src="https://s22.postimg.org/cghxx3qjl/fog.png">')      
    }
    else if (weatherType == 'partly-cloudy-day') {
      $('#weather').prepend('<img src="https://s22.postimg.org/lghy3jx9d/partly-cloudy-day.png">')      
    }
    else if (weatherType == 'partly-cloudy-night') {
      $('#weather').prepend('<img src="https://s22.postimg.org/ki1l19jxd/partly-cloudy-night.png">') 
    }
    else if (weatherType == 'rain') {
      $('#weather').prepend('<img src="https://s22.postimg.org/aw80kysrl/rain.png">')      
    }
    else if (weatherType == 'snow') {
      $('#weather').prepend('<img src="https://s22.postimg.org/f9b5h4qw1/snow.png">')      
    }
    else if (weatherType == 'wind') {
      $('#weather').prepend('<img src="https://s22.postimg.org/u3v5hkb35/wind.png">')      
    }
    else if (weatherType == 'sleet') {
      $('#weather').prepend('<img src="https://s22.postimg.org/jd7ivvxgh/sleet.png">')      
    }
   
    $(".convert-temp").click(function(){
    if (isFah == true) {
      $("#temperature").html(cTemp+" °C");
      isFah = false;
    }
    else {
      $("#temperature").html(fTemp+" °F");
      isFah = true;
    }
    });

    
  });
  });
  //});
 //}               
});