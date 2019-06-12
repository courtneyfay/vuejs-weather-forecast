import axios from "axios";

export default {
  getWeather: async (city, days) => {
    const apiKey = process.env.VUE_APP_KEY;
    const location = `${city},us`;
    const url = `http://api.openweathermap.org/data/2.5/forecast?APPID=${apiKey}&cnt=${days}&q=${location}`;
    const results = await axios.get(url);

    return results && results.data;
  }
};
