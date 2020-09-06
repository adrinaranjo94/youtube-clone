import { types } from "types/types";

export const uiReducer = (state = {}, action) => {
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
