import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from 'app/providers/StoreProvider/config/store';
import { getInputValue } from '../selectors/getModalAndInputSelectors';
import { fetchCities } from '../services/fetchCities';
import { citiesActions } from '../slices/citiesSlice';

interface useValidateTypes {
    validateInput: () => void
}

const useValidateInput = (): useValidateTypes => {
    const dispatch = useDispatch<AppDispatch>();
    const inputValue = useSelector(getInputValue);

    const validateInput = (): void => {
        const validateResult = validateValue(inputValue);

        if (!validateResult) {
            dispatch(fetchCities(inputValue));
        }
    }

    function validateValue(value: string): boolean {
        if (value === '') {
            dispatch(citiesActions.changeError(true));
            dispatch(citiesActions.changeErrorsText('EmptyField'));
            return true;
        }

        if (value.length > 70) {
            dispatch(citiesActions.changeError(true));
            dispatch(citiesActions.changeErrorsText('LongCityName'));
            return true;
        }

        dispatch(citiesActions.changeError(false));
        return false;
    }

    return {
        validateInput
    }
};

export default useValidateInput;
