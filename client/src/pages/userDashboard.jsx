import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import {
  auth_user,
  get_forms,
  get_user_det_by_id,
  delete_form,
  get_forms_by_formid,
  edit_form,
} from "../controllers/user";
import "../styles/index.css";

export default function DashboardUser() {
  const navigate = useNavigate();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [forms, setForms] = useState([]);
  const [isEditable, setIsEditable] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [budget, setBudget] = useState("");
  const [formid, setFormId] = useState("");
  const [isPaying, setIsPaying] = useState(false);
  const [form_budget_pay, setForm_budget_pay] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("user_token")) {
      let obj = {
        token: localStorage.getItem("user_token"),
      };
      auth_user(obj).then((data) => {
        if (data.tag) {
          setIsUserLoggedIn(true);
          let obj = {
            id: JSON.parse(
              atob(localStorage.getItem("user_token").split(".")[1])
            ).id,
          };
          get_user_det_by_id(obj).then((data) => {
            setName(data.message.user_name);
            setEmail(data.message.user_email);
          });
          get_forms(obj).then((data) => {
            setForms(data.message);
          });
        } else {
          setIsUserLoggedIn(false);
        }
      });
    }
  }, []);

  const handleChange = async (e) => {
    e.preventDefault();

    if (!title || !desc || !budget) {
      alert("Please fill out all fields.");
      return;
    }

    let obj = {
      formid,
      form_title: title,
      form_desc: desc,
      form_budget: budget,
    };

    try {
      const data = await edit_form(obj);
      console.log(data);
      window.location.reload();
    } catch (error) {
      console.error("Error editing form:", error);
    }
  };

  const handlePay = async (e) => {
    e.preventDefault();
    let formid = e.target.value;

    try {
      let obj = { id: formid };
      const data = await get_forms_by_formid(obj);
      setForm_budget_pay(data.message[0].form_budget);
      setIsPaying(true);
    } catch (error) {
      console.error("Error fetching form details:", error);
    }
  };

  // const createOrder = (data, actions) => {
  //   return actions.order.create({
  //     purchase_units: [
  //       {
  //         amount: {
  //           currency_code: "USD",
  //           value: form_budget_pay,
  //         },
  //       },
  //     ],
  //   }).then((orderID) => {
  //     setOrderID(orderID);
  //     return orderID;
  //   });
  // };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      console.log("Payment successful:", payer);
    });
  };

  const onError = (data, actions) => {
    console.error("Payment error:", data);
  };

  return (
    <>
      <Navbar />
      <div className="dashbg p-16 flex flex-col items-center">
        <div className="userdetails bg-[#e6e6e6] w-3/5 rounded-lg shadow-2xl p-16 mt-20 flex justify-between items-center">
          <div>
            <h1 className="text-2xl m-2 p-2 text-black">Name: {name}</h1>
            <h1 className="text-2xl m-2 p-2 text-black">Email: {email}</h1>
          </div>
          <div>
          <button
              className="p-4 rounded-lg"
              onClick={() => navigate("/requestservice")}
            >
              Request A Service
            </button>
          </div>
        </div>
        {isEditable && (
          <div className="edit-form-section">
            <h2 className="text-4xl font-bold mb-4">Edit Form</h2>
            <form onSubmit={handleChange}>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Form Title"
              />
              <textarea
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder="Form Description"
              ></textarea>
              <input
                type="number"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                placeholder="Form Budget"
              />
              <button type="submit">Save Changes</button>
            </form>
          </div>
        )}
        <div className="responses-section">
          <h2 className="text-5xl font-semibold m-10 text-white">My Forms</h2>
          {forms.length > 0 ? (
            forms.map((form) => (
              <div className="rounded flex flex-row" key={form._id}>
                <div className="dashcard p-10 mt-5 mb-5 w-full rounded-lg text-white flex flex-row">
                  <div className="data-container flex flex-col">
                    <h3 className="form-title text-3xl text-red font-bold">
                      {form.form_title}
                    </h3>
                    <p className="form-desc text-2xl text-red mt-2 mb-2 text-wrap w-1/2">
                      {form.form_desc}
                    </p>
                    <p className="form-desc text-2xl text-red text-wrap w-1/ font-semibold">
                      Budget: ${form.form_budget}
                    </p>
                  </div>
                  <div className="data-container-button flex flex-row">
                    <button
                      className="m-2 p-2 edit-dash rounded-lg"
                      onClick={() => {
                        setIsEditable(true);
                        setFormId(form._id);
                        setTitle(form.form_title);
                        setDesc(form.form_desc);
                        setBudget(form.form_budget);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="m-2 p-2 delete-dash rounded-lg"
                      onClick={() => delete_form({ formid: form._id })}
                    >
                      Delete
                    </button>
                    <button
                      className="m-2 p-2 pay-dash rounded-lg"
                      onClick={handlePay}
                      value={form._id}
                    >
                      Pay Now
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-2xl text-white mt-5">No forms found!</p>
          )}
        </div>
        {/* {isPaying && (
          <PayPalScriptProvider options={{ "client-id": "your-client-id" }}>
            <PayPalButtons
              createOrder={createOrder}
              onApprove={onApprove}
              onError={onError}
            />
          </PayPalScriptProvider>
        )} */}
      </div>
      <Footer />
    </>
  );
}
