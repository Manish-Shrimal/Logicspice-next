import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";
import BaseAPI from "../BaseAPI/BaseAPI";
import ReCAPTCHA from "react-google-recaptcha";

const Billing = ({ billingInitials }) => {
  const recaptchaKey = "6Lep5B8qAAAAABS1ppbvL1LHjDXYRjPojknlmdzo";
  const [productDetails, setProductDetails] = useState([]);
  const [formData, setFormData] = useState({
    billing_name: "",
    billing_email: "",
    billing_address: "",
    billing_city: "",
    billing_state: "",
    billing_country: "",
    billing_postcode: "",
    billing_phone: "",
    domain_name: "",
    cost: "",
    discount: "0.00",
    total_cost: "",
    currencySym: billingInitials?.currencyDetail.currency_symbol || "",
    currency: billingInitials?.currencyDetail.name || "",
    product_name_new: billingInitials?.productType || "",
    payment_gateway: "paypal",
  });
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const [errors, setErrors] = useState({
    billing_name: "",
    billing_email: "",
    billing_address: "",
    billing_city: "",
    billing_state: "",
    billing_country: "",
    billing_postcode: "",
    billing_phone: "",
    domain_name: "",
    cost: "",
    discount: "0.00",
    total_cost: "",
    // currencySym: productDetails?.currencyDetail.currency_symbol || "",
    // currency: productDetails?.currencyDetail.name || "",
    captcha: "",
  });

  const [paymentModal, setPaymentModal] = useState(false);
  const [message, setMessage] = useState("");
  const [errormessage, setErrorMessage] = useState({});

  const [couponDiscount, setCouponDiscount] = useState({
    coupon_code: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const recaptchaChange = (token) => {
    setIsCaptchaVerified(true);
    setErrors({ ...errors, captcha: "" });
  };

  const handleClose = (e) => {
    e.preventDefault();
    setPaymentModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.billing_name) {
      newErrors.billing_name = "Name is required";
    }

    if (!formData.billing_email) {
      newErrors.billing_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.billing_email)) {
      newErrors.billing_email = "Email is invalid";
    }

    if (!formData.billing_address) {
      newErrors.billing_address = "Address is required";
    }

    if (!formData.billing_city) {
      newErrors.billing_city = "City is required";
    }

    if (!formData.billing_state) {
      newErrors.billing_state = "State is required";
    }

    if (!formData.billing_country) {
      newErrors.billing_country = "Country is required";
    }

    if (!formData.billing_postcode) {
      newErrors.billing_postcode = "Postcode is required";
    } else if (!/^\d{5}$/.test(formData.billing_postcode)) {
      newErrors.billing_postcode = "Postcode is invalid";
    }

    if (!formData.billing_phone) {
      newErrors.billing_phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.billing_phone)) {
      newErrors.billing_phone = "Phone number is invalid";
    }
    if (!isCaptchaVerified) {
      newErrors.captcha = "Please verify Recaptcha";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      if (!isCaptchaVerified) {
        return;
      }
      try {
        // let totalPrice;
        // let basePrice = billingInitials?.currencyDetail.price;
        // if(billingInitials?.addArray.length > 0){
        //   billingInitials.addArray.forEach((ele) => {
        //     let id = addArray[ele];
        //     billingInitials.additionalPoints.forEach((element) => {
        //       if (element.id === id) {
        //         totalPrice = basePrice + element.price;
        //       }
        //     })
        //   })
        // }

        let totalPrice = billingInitials?.currencyDetail.price || 0;

        if (billingInitials?.addArray.length > 0) {
          billingInitials.addArray.forEach((ele) => {
            // Convert the string to a number
            let id = parseInt(ele, 10);

            // Find the matching additional point
            let selectedPoint = billingInitials.additionalPoints.find(
              (point) => point.id === id
            );

            // If a matching point is found, add its price to the total price
            if (selectedPoint) {
              totalPrice += selectedPoint.price;
            }
          });
        }

        console.log("Total Price:", totalPrice);

        setFormData((prevData) => ({
          ...prevData,
          total_cost: totalPrice,
        }));
        // console.log(formData, "form data");
        // console.log(totalPrice, "total price");
        const response = await axios.post(
          BaseAPI + "/softwares/savebilling",
          formData
        );
      } catch (error) {
        console.log(error.message);
      }
    }

    // Handle form submission
  };

  const applyDiscount = (e) => {
    e.preventDefault();
    // Handle promo code submission
  };

  console.log(billingInitials, "here");

  // if (!productDetails) {
  //   return null;
  // }

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("object");
        // Replace `injectedConstants.API_PATH` with your API path
        const response = await axios.post(
          "https://lswebsitedemo.logicspice.com/logicspice/api/softwares/billing"
        );

        console.log(response.data, "data heers");
        setProductDetails(response.data);
        const { currencyDetail, additionalPoints, addArray, productType } =
          response.data;

        let newTotalPrice = [currencyDetail.price];

        additionalPoints.forEach((ele) => {
          if (addArray.includes(ele.id.toString())) {
            newTotalPrice.push(ele.price);
          }
        });

        if (
          [
            "Food Ordering & Delivery Script",
            "WhatsApp Clone",
            "Chat Room Script",
            "Classified Ads Script",
            "Logistic Marketplace Software",
            "Job Portal PHP Script",
            "Fiverr Clone",
            "Grocery Store Script",
            "PHP Business Directory Script",
            "Groupon Clone Script",
            "Udemy Clone",
            "Freelancer Clone",
            "Service Marketplace Script",
          ].includes(productType) &&
          addArray.includes("android")
        ) {
          newTotalPrice.push(585.0);
          setIsAndroid(true);
        }

        if (
          [
            "Food Ordering & Delivery Script",
            "WhatsApp Clone",
            "Chat Room Script",
            "Classified Ads Script",
            "Logistic Marketplace Software",
            "Job Portal PHP Script",
            "Fiverr Clone",
            "Grocery Store Script",
            "PHP Business Directory Script",
            "Groupon Clone Script",
            "Udemy Clone",
            "Freelancer Clone",
            "Service Marketplace Script",
          ].includes(productType) &&
          addArray.includes("iphone")
        ) {
          newTotalPrice.push(585.0);
          setIsIphone(true);
        }

        if (isAndroid && isIphone) {
          setSubtotalPrice(585.0 + 585.0);
          setSubtotalDiscountPrice((subtotalPrice * 15) / 100);
        }

        const sum = newTotalPrice.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          0
        );
        const finalTotal = sum - subtotalDiscountPrice;

        setTotal(
          newTotalPrice.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0
          ) - subtotalDiscountPrice
        );
        setTotalPrice(newTotalPrice);

        // Set form data
        setFormData({
          cost: total,
          discount: 0.0,
          total_cost: total,
          currencySym: currencyDetail.currency_symbol,
          currency: currencyDetail.name,
          product_name: productType,
        });

        // Set promocode form
        setPromocodeForm({
          product_name: productType,
          currencySym: currencyDetail.currency_symbol,
          currency: currencyDetail.name,
          total_amount: total,
        });

        // Initialize reCAPTCHA
        setTimeout(() => {
          const recaptchaContainer = document.getElementById("recaptchaBuy");
          if (recaptchaContainer) {
            grecaptcha.render(recaptchaContainer, {
              sitekey: injectedConstants.RECAPTCHA,
              callback: (response) => methods.onRecaptchaVerify(response),
              expiredCallback: () => methods.onRecaptchaExpired(),
            });
          }
        }, 500);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <>
      <form
      // onSubmit={submitForm}
      // id="paymentForm"
      // encType="multipart/form-data"
      // method="post"
      // acceptCharset="utf-8"
      // noValidate
      >
        <div style={{ display: "none" }}>
          <input type="hidden" name="_method" value="POST" />
        </div>
        <div className="order_title mobile-none">
          <h4 className="titke">Billing Information</h4>
        </div>

        <div className="order_summarty_left">
          <div className="oder_inner">
            <div className="form_wrap">
              <div className="oder_row">
                <div className="oder_form">
                  <label>Name*</label>
                  <div className="oder_dfied">
                    <input
                      placeholder="Name"
                      type="text"
                      id="PaymentBillingName"
                      name="billing_name"
                      value={formData.billing_name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="errorValidation">{errors.billing_name}</div>
                </div>
                <div className="oder_form">
                  <label>Email Address*</label>
                  <div className="oder_dfied">
                    <input
                      placeholder="Email"
                      type="text"
                      id="PaymentBillingEmail"
                      name="billing_email"
                      value={formData.billing_email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="errorValidation">{errors.billing_email}</div>
                </div>
              </div>
              <div className="oder_row">
                <div className="oder_form">
                  <label>Address*</label>
                  <div className="oder_dfied">
                    <input
                      placeholder="Address"
                      type="text"
                      id="PaymentBillingAddress"
                      name="billing_address"
                      v-model={formData.billing_address}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="errorValidation">
                    {errors.billing_address}
                  </div>
                </div>
                <div className="oder_form">
                  <label>City*</label>
                  <div className="oder_dfied">
                    <input
                      placeholder="City"
                      type="text"
                      id="PaymentBillingCity"
                      name="billing_city"
                      value={formData.billing_city}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="errorValidation">{errors.billing_city}</div>
                </div>
              </div>
              <div className="oder_row">
                <div className="oder_form">
                  <label>State*</label>
                  <div className="oder_dfied">
                    <input
                      placeholder="State"
                      type="text"
                      id="PaymentBillingState"
                      name="billing_state"
                      value={formData.billing_state}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="errorValidation">{errors.billing_state}</div>
                </div>
                <div className="oder_form">
                  <label>Country*</label>
                  <div className="oder_dfied">
                    <span className="drop_icon">
                      <select
                        id="PaymentBillingCountry"
                        name="billing_country"
                        value={formData.billing_country}
                        onChange={handleChange}
                      >
                        <option selected value="">
                          Select Country
                        </option>
                        {billingInitials.countries.map((country) => (
                          <option value={country.id} key={country.id}>
                            {country.name}
                          </option>
                        ))}
                      </select>
                    </span>
                  </div>
                  <div className="errorValidation">{errors.billing_state}</div>
                </div>
              </div>
              <div className="oder_row">
                <div className="oder_form">
                  <label>Postal Code*</label>
                  <div className="oder_dfied">
                    <input
                      placeholder="Postal Code"
                      type="text"
                      id="PaymentBillingPostcode"
                      name="billing_postcode"
                      value={formData.billing_postcode}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="errorValidation">
                    {errors.billing_postcode}
                  </div>
                </div>
                <div className="oder_form">
                  <label>Phone*</label>
                  <div className="oder_dfied">
                    <input
                      placeholder="Phone"
                      type="text"
                      id="PaymentBillingPhone"
                      name="billing_phone"
                      value={formData.billing_phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="errorValidation">{errors.billing_phone}</div>
                </div>
              </div>
              <div className="oder_row">
                <div className="oder_form">
                  <label>Domain Name</label>
                  <div className="oder_dfied">
                    <input
                      placeholder="Domain Name"
                      type="text"
                      id="PaymentDomainName"
                      name="domain_name"
                      value={formData.domain_name}
                      onChange={handleChange}
                    />
                    <span className="help_txt">
                      The licenced code will be provided for this domain only
                      and the domain name could be provided later too.
                    </span>
                  </div>
                </div>
                <div className="oder_form">
                  <div className="oder_dfied">
                    {/* <div id="recaptchaBuy" className="g-recaptcha"></div> */}
                    <ReCAPTCHA
                      key={recaptchaKey}
                      sitekey={recaptchaKey}
                      onChange={(value) => recaptchaChange(value)}
                    />
                    {errors.captcha && (
                      <div className="text-danger CaptchaVerify">
                        {errors.captcha}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="prm_cdsc">
                Have a promo code?{" "}
                <button
                  className="add_hr"
                  type="button"
                  onClick={() => setPaymentModal(true)}
                >
                  Add it here
                </button>
              </div>
            </div>
          </div>
          <div className="contine_payment paymnt_con">
            <div className="paypal_ig">
              <Image
                width={100}
                height={100}
                src="https://www.logicspice.com/img/images/paypal_img.png"
                alt="PayPal"
              />
            </div>
            {/* <input
              className="btn btn-primary"
              type="submit"
              value="Continue for payment"
            /> */}
            <button
              className="btn btn-primary"
              type="submit"
              onClick={handleSubmit}
            >
              Continue for payment
            </button>
            <div className="loadloader popup_loader" id="loadloaderPay">
              <Image
                width={100}
                height={100}
                src="/logicspice_com_cake/img/loading-old.gif"
                alt="Loading..."
              />
            </div>
          </div>
        </div>
      </form>

      <div
        className={`modal fade ${paymentModal ? "show" : ""}`}
        id="paymentModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden={!paymentModal}
        style={{ display: paymentModal ? "block" : "none", width: "100%" }} // Adding display property
      >
        <div class="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                aria-label="Close"
                onClick={() => setPaymentModal(false)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title" id="myModalLabel">
                <font id="update_pay">Apply Discount</font>
              </h4>
            </div>
            <form
            // onSubmit={submitPromo}
            // id="paymentForm1"
            // encType="multipart/form-data"
            // method="post"
            // acceptCharset="utf-8"
            >
              <div className="modal-body">
                <div className="payment_wrap">
                  <div className="submit_pay">
                    <div className="rigt_tcdr">
                      <input
                        id="coupon_code"
                        placeholder="Enter coupon"
                        className="cupon_textinput"
                        type="text"
                        value={couponDiscount.coupon_code}
                        onChange={(event) =>
                          setCouponDiscount({
                            ...couponDiscount,
                            coupon_code: event.target.value,
                          })
                        }
                      />
                      <button
                        type="submit"
                        id="coupon_save"
                        className="cupon_bt_righ ancorinput btn btn-primary"
                        onClick={applyDiscount}
                      >
                        Apply
                      </button>
                      <span id="errors" v-if={message !== ""}>
                        {message}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cls_dv">
                <button
                  onClick={() => handleClose()}
                  className="btn btn_kcls"
                  id="pop_clos"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Billing;

// billing_address
// :
// "Jaipur"
// billing_city
// :
// "Jaipur"
// billing_country
// :
// 101
// billing_email
// :
// "deepak.mundhra@logicspice.com"
// billing_name
// :
// "Deepak"
// billing_phone
// :
// "7676767676"
// billing_postcode
// :
// "302020"
// billing_state
// :
// "Rajasthan"
// cost
// :
// 529
// currency
// :
// "USD"
// currencySym
// :
// "$"
// discount
// :
// 0
// domain_name
// :
// ""
// payment_gateway
// :
// "paypal"
// product_name
// :
// "Fiverr Clone"
// roobot
// :
// true
// total_cost
// :
// 529
