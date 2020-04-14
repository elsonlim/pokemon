import { UPDATE_FILTER } from "../actions";

const initState = {
  searchText: "",
};

export default function (state = initState, action) {
  switch (action.type) {
    case UPDATE_FILTER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
