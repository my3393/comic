 import {INPUTVALCHANGE,SETBOOKDATA} from './actionTypes'
const defaultState = {
  list:[],
  inputVal:'',
  pageNum:1,
  pageSize:1,
  total:1
}

export default (state = defaultState,action ) => {
  let newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
  
    case INPUTVALCHANGE:
      // console.log(action)
      newState.inputVal = action.value;
      // console.log(newState.inputVal)
      break;
    case SETBOOKDATA:
      newState.list = action.data.list;
      newState.total = action.data.total;
      break;

    default:
      break;
  }

 // console.log(newState)
  return newState;
}