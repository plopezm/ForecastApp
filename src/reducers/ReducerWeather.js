/**
 * Created by pablolm on 30/10/16.
 */
import { FETCH_WEATHER } from '../actions/index';


export default function(state = [], action){
    switch (action.type){
        case FETCH_WEATHER:
            return [action.payload.data, ...state]; //Returns new state array with new data and previous state
    }
    return state;
}