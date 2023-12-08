import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_BASE_FORECAST_URL, API_KEY } from 'shared/const/api';

export const updateForecast = createAsyncThunk('forecast/updateForecast', async (
    { lat, lon, id }: { lat: number, lon: number, id: string }
) => {
    const link = `${API_BASE_FORECAST_URL}lat=${(lat)}&lon=${lon}&appid=${API_KEY}`;
    const response = await axios.get(link);

    return [response.data, id];
});
