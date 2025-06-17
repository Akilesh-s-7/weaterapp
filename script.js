
    const tnCities = [
      "Chennai","Coimbatore","Madurai","Tiruchirappalli","Salem",
      "Tiruppur","Erode","Tirunelveli","Vellore","Thoothukkudi",
      "Dindigul","Thanjavur","Nagercoil","Pudukkottai","Hosur",
      "Ambattur","Avadi","Tiruvottiyur","Cuddalore","Kancheepuram",
      "Alandur","Tambaram","Madavaram","Kumbakonam","Rajapalayam",
      "Neyveli","Nagapattinam","Ranipet","Sivakasi","Karur",
      "Udhagamandalam"
    ];

    const datalist = document.getElementById('tn-cities');
    tnCities.forEach(city => {
      const opt = document.createElement('option');
      opt.value = city;
      datalist.appendChild(opt);
    });




function getweather() {
    let city = document.getElementById('searchTN').value;
     let resultDiv = document.getElementById('result');

      if (!city) {
                resultDiv.innerHTML = "Please enter a city name";
                return;
            }

             resultDiv.innerHTML = 'Loading weather data...';
             
    let API_KEY = 'YOUR_API_KEY';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`)
    .then(response => response.json()) 
    .then(data => {
        if (data.main) {
             const temp = Math.round(data.main.temp);
                        const feelsLike = Math.round(data.main.feels_like);
                        const weatherDesc = data.weather[0].description;
                        
                        resultDiv.innerHTML = `
                            <div>
                                <div class="temperature-display">${temp}°C</div>
                                <div class="city-name">${city.charAt(0).toUpperCase() + city.slice(1)}</div>
                               
                            </div>
                        `;
        } else {
           resultDiv.innerHTML = "City not found. Please check the spelling.";
        }
    })
    .catch(err => {
       console.error(err);
                    resultDiv.innerHTML = "Unable to fetch weather data. Please try again.";
    });
}
