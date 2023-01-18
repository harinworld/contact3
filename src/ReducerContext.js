import {useReducer, createContext} from 'react';
export const RC = createContext(null);

const reducerFn = (state, action)=>{
    switch(action.type){
      case 'plus':
        return state = {list: [...state.list,{a:action.value}]};
      default : return state;
    }
  }

const ReducerContext = ({children}) => {
  const init = {list:[]}
    const [data,dispatch] = useReducer(reducerFn, init);

    return (
        <RC.Provider value={    {data,dispatch}  }>
            {children}
        </RC.Provider>
    )
  }
  
  export default ReducerContext