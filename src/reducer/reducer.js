export const reducer = (state, action) => {
  switch (action.type) {
    // loading case
    case "LOADING":
      return {
        ...state,
        loading: !state.loading,
      };

    // sidebar toggle for mobile
    case "SIDEBAR":
      return {
        ...state,
        sidebar: !state.sidebar,
      };

    // storing products
    case "INITIALIZE_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };

    // slider sorting
    case "SLIDER":
      return {
        ...state,
        price: action.payload,
      };

    // category filter
    case "CATEGORY_FILTER":
      return {
        ...state,
        categories: {
          ...state["categories"],
          [action.payload]: !state.categories[action.payload],
        },
      };

    // brand filter
    case "BRAND_FILTER":
      return {
        ...state,
        brands: {
          ...state["brands"],
          [action.payload]: !state.brands[action.payload],
        },
      };

    // outofstock filter
    case "TOGGLE_STOCK":
      return {
        ...state,
        outOfStock: !state.outOfStock,
      };

    // sort of high to low
    case "PRICE_HIGH_TO_LOW":
      return {
        ...state,
        sort: "High-to-Low",
      };

    // sort of low to high
    case "PRICE_LOW_TO_HIGH":
      return {
        ...state,
        sort: "Low-to-High",
      };

    // reset
    case "RESET":
      return {
        loading: false,
        sidebar: false,
        sort: null,
        price: 100000,
        categories: {
          processor: false,
          ram: false,
          graphicsCard: false,
          liquidCooler: false,
          keyboardAndMouse: false,
          speaker: false,
          motherBoard: false,
          cabinet: false,
        },
        brands: {
          intel: false,
          amd: false,
          nvidia: false,
          coolerMaster: false,
          corsair: false,
          logitech: false,
          asus: false,
          msi: false,
        },
        outOfStock: true,
        products: state.products,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
