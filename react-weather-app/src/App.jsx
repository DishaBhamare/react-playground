import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  function searchCity() {
    setError('');
    setLoading(true);
    const data = `https://geocoding-api.open-meteo.com/v1/search?name=${city}`;
    fetch(data)
      .then((res) => res.json())
      .then((data) => {
        if (data.results.length === 0) {
          setError('City not found');
          setLoading(false);
          return;
        }
        const latitude = data.results[0].latitude;
        const longitude = data.results[0].longitude;

        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`;

        fetch(weatherUrl)
          .then((res) => res.json())
          .then((weatherData) => {
            setWeather(weatherData.current);
            setLoading(false);
          })
          .catch(() => {
            setError('Something went wrong!');
            setLoading(false);
          });
      })
      .catch(() => {
        setError('Something went wrong!');
        setLoading(false);
      });
  }

  function getWeatherCondition(code) {
    switch (true) {
      case code === 0:
        return 'Clear Sky';

      case code >= 1 && code <= 3:
        return 'Cloudy';

      case code >= 51 && code <= 57:
        return 'Drizzle';

      case code >= 61 && code <= 67:
        return 'Rain';

      default:
        return 'Unknown';
    }
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-6">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Weather App 🌤️
          </h1>

          {/* Search */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="flex-1 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              onClick={searchCity}
              className="bg-blue-500 hover:bg-blue-600 text-white px-5 rounded-xl font-semibold"
            >
              Search
            </button>
          </div>

          {/* Error */}
          {error && (
            <p className="text-red-500 text-center mt-4 font-medium">{error}</p>
          )}

          {/* Loading */}
          {loading && (
            <p className="text-blue-500 text-center mt-6 font-medium">
              Loading...
            </p>
          )}

          {/* Weather */}
          {weather && (
            <div className="mt-6">
              <div className="text-center">
                <p className="text-6xl font-bold text-gray-800">
                  {weather.temperature_2m}°
                </p>

                <p className="text-xl text-gray-500 mt-2">
                  {getWeatherCondition(weather.weather_code)}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-blue-50 rounded-2xl p-4 text-center">
                  <p className="text-2xl">💧</p>
                  <p className="text-gray-500 text-sm">Humidity</p>
                  <p className="font-bold text-lg">
                    {weather.relative_humidity_2m}%
                  </p>
                </div>

                <div className="bg-blue-50 rounded-2xl p-4 text-center">
                  <p className="text-2xl">💨</p>
                  <p className="text-gray-500 text-sm">Wind</p>
                  <p className="font-bold text-lg">
                    {weather.wind_speed_10m} km/h
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
