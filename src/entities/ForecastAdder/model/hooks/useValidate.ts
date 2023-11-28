import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from 'app/providers/StoreProvider/config/store';
import { getInputValue } from '../selectors/getForecastsSelectors';
import type { CitiesErrorsText, ErrorField, ErrorTextField } from '../types/ForecastsSchema';
import { forecastsActions } from '../slices/forecastsSlice';
import { fetchCities } from '../services/fetchCities';

interface useValidateTypes {
    validateInput: () => void
}

const useValidateInput = (): useValidateTypes => {
    const dispatch = useDispatch<AppDispatch>();
    const inputValue = useSelector(getInputValue);

    const validateInput = (): void => {
        const validateResult = validateValue(inputValue, 'citiesError');

        if (!validateResult) {
            dispatch(fetchCities(inputValue));
        }
    }

    function validateValue(value: string, errorField: ErrorField): boolean {
        if (value === '') {
            changErrorsFieldCondition(errorField, true);
            changErrorsFieldsText('citiesErrorText', 'EmptyField');
            return true;
        }

        if (value.length > 70) {
            changErrorsFieldCondition(errorField, true);
            changErrorsFieldsText('citiesErrorText', 'LongCityName');
            return true;
        }

        changErrorsFieldCondition(errorField, false);
        return false;
    }

    function changErrorsFieldCondition(fieldName: ErrorField, condition: boolean): void {
        dispatch(forecastsActions.changeErrorsCondition({ fieldName, condition }))
    }

    function changErrorsFieldsText(fieldName: ErrorTextField, text: CitiesErrorsText): void {
        dispatch(forecastsActions.changeErrorsText({ fieldName, text }))
    }

    return {
        validateInput
    }
};

export default useValidateInput;
