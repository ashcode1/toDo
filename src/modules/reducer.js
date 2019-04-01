import ACTIONS from "./action";
import _ from "lodash";
const defaultState = {
  items: [],
  nextId: 1,
  currentUser: { 
    userName: 'SomeGuy',
    password: 'password' 
  }
};
const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.CREATE_ITEM: {
      console.log(action);
      let item = action.payload.item;
      let category = action.payload.category;
      let newItem = { id: state.nextId, description: item, category };
      let newState = _.cloneDeep(state);
      newState.items.push(newItem);
      newState.nextId = state.nextId + 1
      return newState;
    }
    case ACTIONS.Types.DELETE_ITEM: {
      let newState = _.cloneDeep(state);
      let index = _.findIndex(newState.items, { id: action.payload });
      newState.items.splice(index, 1);
      return newState;
    }
    default:
      return state;
  }
};
export default todoReducer;