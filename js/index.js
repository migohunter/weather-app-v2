$(document).ready(function(){
  $("input").geocomplete({details: "form"});

  $("#findWeather").click(function(){   
  $('#weather').empty();
  var long = document.getElementById('longitude').value;    
  var lat = document.getElementById('latitude').value;
  var location = document.getElementById('address').value;
  var imageHead = document.getElementById("image-head");
  var fTemp;
  var cTemp;
  var isFah = true;
  var i = 0;
  var api = 'https://api.darksky.net/forecast/5245df37a800c4125588a2124d21790d/'+lat+','+long;
      var proxy = "https://cors-anywhere.herokuapp.com/";
  $("#location").html(location);

  
  $.getJSON(proxy + api, function(data){
    var weatherType = data.currently.icon;
    var fTemp = data.currently.temperature;
    cTemp = (fTemp - 32) * (5/9);
    cTemp = cTemp.toFixed(1);
    
    $("#temperature").html(fTemp+" °F");
    if (weatherType == 'clear-day') {
      $('#weather').prepend('<img src="http://res.cloudinary.com/dcceoafyr/image/upload/v1525926476/clear-day.png">')
      imageHead.style.backgroundImage = "url(https://res.cloudinary.com/dcceoafyr/image/upload/v1525927475/seabackground.jpg)";
    }
    else if (weatherType == 'clear-night') {
      $('#weather').prepend('<img src="http://res.cloudinary.com/dcceoafyr/image/upload/v1525926367/clear-night.png">')
      imageHead.style.backgroundImage = "url(https://res.cloudinary.com/dcceoafyr/image/upload/e_brightness:120/v1526181353/nightbackground.jpg)";
    }
    else if (weatherType == 'cloudy') {
      $('#weather').prepend('<img src="http://res.cloudinary.com/dcceoafyr/image/upload/v1525926186/cloudy.png">')
      imageHead.style.backgroundImage = "url(https://res.cloudinary.com/dcceoafyr/image/upload/v1526178786/cloudybackground.jpg)";
    }
    else if (weatherType == 'fog') {
      $('#weather').prepend('<img src="http://res.cloudinary.com/dcceoafyr/image/upload/v1525926567/fog.png">') 
      imageHead.style.backgroundImage = "url(https://res.cloudinary.com/dcceoafyr/image/upload/v1526179593/foggybackground.jpg)";
    }
    else if (weatherType == 'partly-cloudy-day') {
      $('#weather').prepend('<img src="http://res.cloudinary.com/dcceoafyr/image/upload/v1525926631/partly-cloudy-day.png">')
      imageHead.style.backgroundImage = "url(https://res.cloudinary.com/dcceoafyr/image/upload/v1526178786/cloudybackground.jpg)";
    }
    else if (weatherType == 'partly-cloudy-night') {
      $('#weather').prepend('<img src="https://res.cloudinary.com/dcceoafyr/image/upload/v1525926748/partly-cloudy-night.png">')
      imageHead.style.backgroundImage = "url(https://res.cloudinary.com/dcceoafyr/image/upload/e_brightness:120/v1526181353/nightbackground.jpg)";
    }
    else if (weatherType == 'rain') {
      $('#weather').prepend('<img src="https://res.cloudinary.com/dcceoafyr/image/upload/v1525926857/rain.png">')
      imageHead.style.backgroundImage = "url(https://res.cloudinary.com/dcceoafyr/image/upload/v1526180085/rainybackground.jpg)";
    }
    else if (weatherType == 'snow') {
      $('#weather').prepend('<img src="https://res.cloudinary.com/dcceoafyr/image/upload/v1525926920/snow.png">')
      imageHead.style.backgroundImage = "url(https://res.cloudinary.com/dcceoafyr/image/upload/v1526179865/snowybackground.jpg)";
    }
    else if (weatherType == 'wind') {
      $('#weather').prepend('<img src="https://res.cloudinary.com/dcceoafyr/image/upload/v1525926998/wind.png">')
      imageHead.style.backgroundImage = "url(https://res.cloudinary.com/dcceoafyr/image/upload/v1526179940/windybackground.jpg)";
    }
    else if (weatherType == 'sleet') {
      $('#weather').prepend('<img src="https://res.cloudinary.com/dcceoafyr/image/upload/v1525927067/sleet.png">') 
      imageHead.style.backgroundImage = "url(https://res.cloudinary.com/dcceoafyr/image/upload/v1526179865/snowybackground.jpg)";
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
});