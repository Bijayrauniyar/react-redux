import {SIMPLE_ACTION} from './type'
export const simpleAction = () => dispatch => {
    dispatch({
     type: SIMPLE_ACTION,
     payload: 'result_of_simple_action'
    })
   }