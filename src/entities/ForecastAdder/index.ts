export { ForecastAdder } from './ui/ForecastAdder';
export { forecastsActions, forecastsReducer } from './model/slices/forecastsSlice';
export type { ForecastsSchema } from './model/types/ForecastsSchema';
export {
    getModalIsOpen,
    getModalText
} from './model/selectors/getForecastsSelectors';
