export const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: !state.loading,
      };

    case "INITIALIZE_PRODUCTS":
      return {
        ...state,
        product: action.payload,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
