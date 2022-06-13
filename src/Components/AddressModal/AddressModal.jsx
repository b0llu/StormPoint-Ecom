import { useState } from "react";
import { useAuthContext } from "../../context/Auth.context";
import { useFilterReducerContext } from "../../context/FilterReducer.context";
import "./AddressModal.css";

export const AddressModal = ({ amount, setAddressModal }) => {
  const { dispatch } = useFilterReducerContext();
  const { userState } = useAuthContext();
  const [address, setAddress] = useState({ name: "", address: "", number: "" });

  const handleSubmit = () => {
    if (address.number.length <= 12 && address.number.length >= 10) {
      var options = {
        key: process.env.REACT_APP_RAZORPAY_KEY,
        key_secret: process.env.REACT_APP_RAZORPAY_SECRET,
        amount: Number((amount += "00")),
        currency: "INR",
        name: "StormPoint",
        description: "Thanks for shopping with us",
        handler: function (response) {
          dispatch({
            type: "SUCCESS_TOAST",
            payload: `Order Successful, Payment ID: ${response.razorpay_payment_id}`,
          });
        },
        prefill: {
          name: address.name,
          email: userState.email,
          contact: address.number,
        },
        notes: {
          address: address.address,
        },
        theme: {
          color: "#000000",
        },
      };
      var pay = new window.Razorpay(options);
      pay.open();
      setAddressModal((prev) => !prev);
    } else if (
      address.name !== "" &&
      address.address !== "" &&
      address.number !== ""
    ) {
      address.name !== "" && address.address !== "" && address.number !== "";
      dispatch({ type: "ERROR_TOAST", payload: "Please Enter Correct Number" });
    } else {
      dispatch({ type: "ERROR_TOAST", payload: "Fill all address fields" });
    }
  };

  return (
    <div
      onClick={() => setAddressModal((prev) => !prev)}
      className="address-modal-wrapper"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="address-modal-container"
      >
        <label htmlFor="name">
          Name
          <input
            value={address.name}
            onChange={(e) => setAddress({ ...address, name: e.target.value })}
            type="text"
          />
        </label>
        <label htmlFor="address">
          Address
          <textarea
            value={address.address}
            onChange={(e) =>
              setAddress({ ...address, address: e.target.value })
            }
            rows="5"
          ></textarea>
        </label>
        <label htmlFor="number">
          Number
          <input
            value={address.number}
            onChange={(e) => setAddress({ ...address, number: e.target.value })}
            type="number"
          />
        </label>
        <button onClick={handleSubmit}>Check Out</button>
      </div>
    </div>
  );
};
