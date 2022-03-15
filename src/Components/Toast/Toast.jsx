import { useEffect } from "react";
// import { useEcom } from "../../Context/useEcomReducer.context";
import "./Toast.css";

export const Toast = () => {
  // const { toastTrigger, forToast, dispatch } = useEcom();

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     dispatch({ type: "TOAST_STATE_CLEAN" });
  //   }, 1000);
  //   return () => clearTimeout(timeout);
  // }, [forToast.trigger]);

  return (
    <div
      // className={` ${
      //   forToast.selector === "success" ? "toast-success" : "toast-error"
      // } ${forToast.text !== "" ? "open" : "close"}`}
    >
      {/* {forToast.text} */}
    </div>
  );
};
