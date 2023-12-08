import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_BASE_FORECAST_URL, API_KEY } from 'shared/const/api';

export const fetchForecast = createAsyncThunk('forecast/fetchForecast', async (
    { lat, lon }: { lat: number, lon: number }
) => {
    const link = `${API_BASE_FORECAST_URL}lat=${(lat)}&lon=${lon}&appid=${API_KEY}`;
    const response = await axios.get(link);

    return response.data;
});
