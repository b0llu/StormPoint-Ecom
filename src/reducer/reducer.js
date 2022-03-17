import { useCartContext } from "../context/Cart.context";

export const reducer = (state, action) => {

  const initialState = {
    loading: false,
    sidebar: false,
    sort: null,
    price: 100000,
    categories: {},
    brands: {},
    outOfStock: true,
    forToast: { text: "", trigger: false, selector: "" },
    products: state.products,
  };

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

    // storing cart
    case "INITIALIZE_CART":
      return {
        ...state,
        cart: [...state.cart],
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
          ...state.categories,
          [action.payload]: !state.categories[action.payload],
        },
      };

    // brand filter
    case "BRAND_FILTER":
      return {
        ...state,
        brands: {
          ...state.brands,
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

    // add to cart
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    // success toast
    case "SUCCESS_TOAST":
      return {
        ...state,
        forToast: {
          text: action.payload,
          trigger: !state.forToast.trigger,
          selector: "success",
        },
      };

    // error toast
    case "ERROR_TOAST":
      return {
        ...state,
        forToast: {
          text: action.payload,
          trigger: !state.forToast.trigger,
          selector: "error",
        },
      };

    // toast state handler
    case "TOAST_STATE_CLEAN":
      return {
        ...state,
        forToast: {
          text: "",
          trigger: false,
          selector: "",
        },
      };

    // reset
    case "RESET":
      return initialState;

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
