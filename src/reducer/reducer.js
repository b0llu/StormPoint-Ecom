export const reducer = (state, action) => {
  switch (action.type) {
    // loading case
    case "LOADING":
      return {
        ...state,
        loading: !state.loading,
      };

    // storing products
    case "INITIALIZE_PRODUCTS":
      return {
        ...state,
        product: action.payload,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
