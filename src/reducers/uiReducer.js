import { types } from "types/types";

const initialState = {
  menuSidebarCollapse: localStorage.getItem("menuSidebarCollapse")
    ? localStorage.getItem("menuSidebarCollapse") === "true"
      ? true
      : false
    : false,
};
export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.toggleMenuSidebar:
      return {
        ...state,
        menuSidebarCollapse: !state.menuSidebarCollapse,
      };

    default:
      return state;
  }
};
