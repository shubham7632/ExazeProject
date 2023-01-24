import { COUNTER_CHANGE } from '../constants/constant';


export function userName(username) {
    return {
        type: COUNTER_CHANGE,
        payload: username
    }
}