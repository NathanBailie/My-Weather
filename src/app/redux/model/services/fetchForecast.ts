import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchForecast = createAsyncThunk('forecast/fetchForecast', async (
    { lat, lon }: { lat: number, lon: number }
) => {
    const API_BASE_FORECAST_URL = 'http://api.openweathermap.org/data/2.5/forecast?';
    const API_KEY = 'b218321600f23970f780231bf8e68548';
    const link = `${API_BASE_FORECAST_URL}lat=${(lat)}&lon=${lon}&appid=${API_KEY}`;

    const response = await axios.get(link);

    return response.data;
});
