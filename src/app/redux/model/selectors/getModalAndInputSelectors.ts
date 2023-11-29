import { type StateSchema } from 'app/providers/StoreProvider';

export const getModalIsOpen = (state: StateSchema) => state.modalAndInput.modalIsOpen;
export const getInputValue = (state: StateSchema) => state.modalAndInput.inputValue;
