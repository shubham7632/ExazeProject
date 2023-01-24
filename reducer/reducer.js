import { COUNTER_CHANGE } from '../constants/constant';
const initialState = {
    username: ''
};
const userNameReducer = (state = initialState, action) => {
    switch (action.type) {
        case COUNTER_CHANGE:
            return {
                ...state,
                username: action.payload
            };
        default:
            return state;
    }
}
export default userNameReducer;