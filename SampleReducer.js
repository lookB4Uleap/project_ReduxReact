import { combineReducers } from 'redux';

const INITIAL_STATE = {
    current: 0,
  };
  
const SampleReducer = (state = INITIAL_STATE, action) => {
    
    switch (action.type) {
      case 'ADD':
        console.log(state);  
        return ({ 
          current: state.current + 1
        });

      case 'SUB':
        return ({ 
          current: state.current - 1 
        });

      default:
        return state;
    }
  };
  
  
  export default SampleReducer;