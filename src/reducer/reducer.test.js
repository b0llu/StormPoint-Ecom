import { reducer } from "./reducer";

const initialState = {
  loading: false,
  sidebar: false,
  sort: null,
  price: 100000,
  categories: {},
  brands: {},
  outOfStock: true,
  searchTerm: "",
  forToast: { text: "", trigger: false, selector: "" },
  cart: [],
  products: [],
};

describe("testing reducer", () => {
  test("should toggle loading state", () => {
    const action = {
      type: "LOADING",
    };

    const finalState = {
      ...initialState,
      loading: !initialState.sidebar,
    };

    const loadingState = reducer(initialState, action);

    expect(loadingState).toEqual(finalState);
  });

  test("should toggle sidebar state", () => {
    const action = {
      type: "SIDEBAR",
    };

    const finalState = {
      ...initialState,
      sidebar: !initialState.sidebar,
    };

    const sidebarState = reducer(initialState, action);

    expect(sidebarState).toEqual(finalState);
  });

  test("should initialize products", () => {
    const action = {
      type: "INITIALIZE_PRODUCTS",
      payload: [{ name: "msi", price: 500 }],
    };

    const finalState = {
      ...initialState,
      products: action.payload,
    };

    const productsState = reducer(initialState, action);

    expect(productsState).toEqual(finalState);
  });

  test("should initialize cart", () => {
    const action = {
      type: "INITIALIZE_CART",
    };

    const finalState = {
      ...initialState,
      cart: [...initialState.cart],
    };

    const cartState = reducer(initialState, action);

    expect(cartState).toEqual(finalState);
  });

  test("should add slider range", () => {
    const action = {
      type: "SLIDER",
      payload: 500,
    };

    const finalState = {
      ...initialState,
      price: action.payload,
    };

    const sliderState = reducer(initialState, action);

    expect(sliderState).toEqual(finalState);
  });

  test("should change the category state", () => {
    const action = {
      type: "CATEGORY_FILTER",
      payload: "processor ",
    };

    const finalState = {
      ...initialState,
      categories: {
        ...initialState.categories,
        [action.payload]: !initialState.categories[action.payload],
      },
    };

    const categoryFilterState = reducer(initialState, action);

    expect(categoryFilterState).toEqual(finalState);
  });

  test("should change the brand state", () => {
    const action = {
      type: "BRAND_FILTER",
      payload: "asus",
    };

    const finalState = {
      ...initialState,
      brands: {
        ...initialState.brands,
        [action.payload]: !initialState.brands[action.payload],
      },
    };

    const brandFilterState = reducer(initialState, action);

    expect(brandFilterState).toEqual(finalState);
  });

  test("should toggle out of stock state", () => {
    const action = {
      type: "TOGGLE_STOCK",
    };

    const finalState = {
      ...initialState,
      outOfStock: !initialState.outOfStock,
    };

    const outOfStockState = reducer(initialState, action);

    expect(outOfStockState).toEqual(finalState);
  });

  test("should change sort state (high-to-low)", () => {
    const action = {
      type: "PRICE_HIGH_TO_LOW",
    };

    const finalState = {
      ...initialState,
      sort: "High-to-Low",
    };

    const sortState = reducer(initialState, action);

    expect(sortState).toEqual(finalState);
  });

  test("should change sort state (low-to-high)", () => {
    const action = {
      type: "PRICE_LOW_TO_HIGH",
    };

    const finalState = {
      ...initialState,
      sort: "Low-to-High",
    };

    const sortState = reducer(initialState, action);

    expect(sortState).toEqual(finalState);
  });

  test("should add to cart", () => {
    const action = {
      type: "ADD_TO_CART",
      payload: { name: "msi", price: 500 },
    };

    const finalState = {
      ...initialState,
      cart: [...initialState.cart, action.payload],
    };

    const cartState = reducer(initialState, action);

    expect(cartState).toEqual(finalState);
  });

  test("should return success toast", () => {
    const action = {
      type: "SUCCESS_TOAST",
      payload: "text on the toast",
    };

    const finalState = {
      ...initialState,
      forToast: {
        text: action.payload,
        trigger: !initialState.forToast.trigger,
        selector: "success",
      },
    };

    const toastState = reducer(initialState, action);

    expect(toastState).toEqual(finalState);
  });

  test("should return error toast", () => {
    const action = {
      type: "ERROR_TOAST",
      payload: "text on the toast",
    };

    const finalState = {
      ...initialState,
      forToast: {
        text: action.payload,
        trigger: !initialState.forToast.trigger,
        selector: "error",
      },
    };

    const toastState = reducer(initialState, action);

    expect(toastState).toEqual(finalState);
  });

  test("should reset the toast state", () => {
    const action = {
      type: "TOAST_STATE_CLEAN",
    };

    const finalState = {
      ...initialState,
      forToast: {
        text: "",
        trigger: false,
        selector: "",
      },
    };

    const toastState = reducer(initialState, action);

    expect(toastState).toEqual(finalState);
  });

  test("should change the search bar state", () => {
    const action = {
      type: "SEARCH_BAR",
      payload: "ram",
    };

    const finalState = {
      ...initialState,
      searchTerm: action.payload,
    };

    const searchState = reducer(initialState, action);

    expect(searchState).toEqual(finalState);
  });

  test("should return unhandled action type", () => {
    const action = {
      type: "UNHANDLED",
    };

    expect(() => {
      reducer(initialState, action);
    }).toThrow(`Unhandled action type: ${action.type}`);
  });
});
