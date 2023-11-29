import { createSlice } from '@reduxjs/toolkit';
import type { ModalAndInputSchema } from '../types/ModalAndInputSchema';

const initialState: ModalAndInputSchema = {
    modalIsOpen: false,
    inputValue: ''
};

export const modalAndInputSlice = createSlice({
    name: 'modalAndInput',
    initialState,
    reducers: {
        openModal: (state) => {
            state.modalIsOpen = true;
        },
        closeModal: (state) => {
            state.modalIsOpen = false;
            state.inputValue = '';
        },
        changeInputValue: (state, action) => {
            state.inputValue = action.payload;
        },
        cleanInputValue: (state, action) => {
            state.inputValue = '';
        }
    }
});

export const { actions: modalAndInputActions } = modalAndInputSlice;
export const { reducer: modalAndInputReducer } = modalAndInputSlice;
