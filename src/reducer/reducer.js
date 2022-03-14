export const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: !state.loading,
        product: action.payload,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
