import {SIMPLE_ACTION} from '../actions/type'

const initialState={
    arr:[],
    obj:{},
    result:''
}

export default (state = initialState, action) => {
    switch (action.type) {
     case SIMPLE_ACTION:
      return {
          ...state,
       result: action.payload
      }
     default:
      return state
    }
   }