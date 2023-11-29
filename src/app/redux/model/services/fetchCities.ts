import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCities = createAsyncThunk('cities/fetchCities', async (city: string) => {
    const API_BASE_GEO_URL = 'http://api.openweathermap.org/geo/1.0';
    const API_KEY = 'b218321600f23970f780231bf8e68548';
    const link = `${API_BASE_GEO_URL}/direct?q=${city}&limit=5&appid=${API_KEY}`;

    const response = await axios.get(link);

    return response.data;
});
