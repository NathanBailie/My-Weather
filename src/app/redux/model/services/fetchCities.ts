import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_BASE_GEO_URL, API_KEY } from 'shared/const/api';

export const fetchCities = createAsyncThunk('cities/fetchCities', async (city: string) => {
    const link = `${API_BASE_GEO_URL}/direct?q=${city}&limit=5&appid=${API_KEY}`;
    const response = await axios.get(link);

    return response.data;
});
