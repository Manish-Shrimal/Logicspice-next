"use client";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import "../../../elements.css";
import Billing from "@/app/Components/Billing";

const Page = ({ params }) => {
  const router = useRouter();
  const [productDetails, setProductDetails] = useState(null);
  const [android, setAndroid] = useState(585.0);
  const [checkedAndroid, setCheckedAndroid] = useState(false);
  const [checkedIphone, setCheckedIphone] = useState(false);
  const [productPriceTot, setProductPriceTot] = useState(0);
  const [queryParameter, setQueryParameter] = useState(null);
  const [billingInitials, setBillingInitials] = useState([]);

  const [billing, setBilling] = useState(false);

  const slug = params.slug;

  useEffect(() => {
    const fetchData = async () => {
      try {
        document.querySelector(".main_cart_loader").style.display = "block";
        const response = await axios.get(
          `https://lswebsitedemo.logicspice.com/logicspice/apis/buynow/${slug}`,{
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setProductDetails(response.data.data);
        setProductPriceTot(response.data.data.currencyDetail.price);
        document.querySelector(".main_cart_loader").style.display = "none";
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   if (router.query.status) {
  //     setQueryParameter(router.query.status);
  //   }
  // }, [router.query.status]);

  const addAdditional = async (event, addPrice) => {
    document.querySelector("#loadercart").style.display = "block";

    const value = event.target.value;
    const id = event.target.id;
    let price = parseInt(document.querySelector("#tot_sec").innerText);
    const currencySym = productDetails.currencyDetail.currency_symbol;
    const currency = productDetails.currencyDetail.name;
    let discount = 0;

    if (!event.target.checked) {
      document.querySelector(`#additional_${value}`).remove();

      if (
        (id === "remember-in-inline-iphone" ||
          id === "remember-in-inline-android") &&
        (document.querySelector("#remember-in-inline-iphone").checked ||
          document.querySelector("#remember-in-inline-android").checked)
      ) {
        document.querySelector("#additional_discount").remove();
        price += 176;
      }
      document.querySelector("#tot_sec").innerText = price - addPrice;
      setProductPriceTot((prev) => prev - parseInt(addPrice));
    } else {
      if (checkedAndroid && checkedIphone) discount = 1;

      const data = {
        type: productDetails.productType,
        addId: value,
        price: price,
        currencySym: currencySym,
        currency: currency,
        discount: discount,
      };

      try {
        const response = await axios.post(
          "https://lswebsitedemo.logicspice.com/logicspice/apis/softwares/addAdditional",
          data
        );
        document.querySelector("#offeer_sec").innerHTML += response.data;

        let total = parseInt(addPrice) + price;
        if (
          (id === "remember-in-inline-iphone" ||
            id === "remember-in-inline-android") &&
          checkedIphone &&
          checkedAndroid
        ) {
          total -= 175.5;
        }

        setProductPriceTot((prev) => prev + parseInt(addPrice));
        document.querySelector("#tot_sec").innerText = total.toFixed(2);
      } catch (error) {
        console.error("Error submitting form:", error.message);
      }
    }

    document.querySelector("#loadercart").style.display = "none";
  };

  const submitForm = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    // Manually construct the form data
    formData.append("_method", "POST");

    // Assuming you have logic to set these values
    // formData.append("data[Additional][ids][]", "11"); // Example value
    // formData.append("data[Additional][ids][]", ""); // Empty value

    formData.append("data[Product][custom_price]", "");
    formData.append("data[Product][custom_message]", "");
    formData.append("data[Product][submit_con]", "0");
    formData.append("data[Product][product_name]", productDetails.productType);
    formData.append(
      "data[Product][product_price]",
      productDetails.currencyDetail.price
    );
    formData.append("data[Product][product_price_tot]", productPriceTot);
    formData.append("data[Product][custom_price_val]", "0");

    try {
      const response = await axios.post(
        "https://lswebsitedemo.logicspice.com/logicspice/apis/softwares/buynowpost",
        formData
      );
      // router.push("/billing");
      // console.log(response,"res")

      setBilling(true);
      setBillingInitials(response.data);
      // console.log(billingInitials,"from")
    } catch (err) {
      console.error("Error submitting form:", err.message);
    }
  };

  const handleProceed = () => {
    setBilling(true);
  };

  return (
    <>
      <Navbar />
      <section className="breadcrems_header">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>Software Order</h1>
            </div>
            <div className="col-md-6">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Buy Now
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <div className="main_cart_loader" id="loadercart">
        <img src="./../assets/img/loader_large_blue.gif" alt="" />
      </div>

      {productDetails && (
        <section className="order_summarty">
          <div className="container">
            <div className="order_summarty_inner">
              {!billing && (
                <>
                  <div class="SubscribePlan">
                    <h3>
                      Monthly Subscription plan of{" "}
                      <span>
                        $45/<small>mo</small>
                      </span>
                    </h3>
                    <div class="SubscribeBtn">
                      <form
                        action="https://www.paypal.com/cgi-bin/webscr"
                        method="post"
                        target="_top"
                      >
                        <input type="hidden" name="cmd" value="_s-xclick" />
                        <input
                          type="hidden"
                          name="hosted_button_id"
                          value="ZWM436F2HGX3C"
                        />
                        <input type="hidden" name="currency_code" value="USD" />
                        <input
                          class="SubscribleBtn"
                          type="submit"
                          src=""
                          border="0"
                          name="submit"
                          title="PayPal - The safer, easier way to pay online!"
                          alt="Subscribe"
                          value="Buy Now"
                        />
                      </form>
                    </div>
                  </div>
                </>
              )}

              <form
                id="offerForm"
                onSubmit={submitForm}
                encType="multipart/form-data"
                method="post"
                acceptCharset="utf-8"
                noValidate
              >
                {!billing && (
                  <>
                    <div className="order_title">
                      <h4 className="titke">
                        You’ve added {productDetails.productType} Software
                      </h4>
                    </div>
                    <div className="order_summarty_left">
                      <div className="oder_inner">
                        <div className="order_addonStep">
                          {productDetails.additionalPoints.map((additional) => (
                            <div className="addonStep_row" key={additional.id}>
                              <div className="addonStep_row_inner">
                                <div className="right_input">
                                  <div className="form__remember">
                                    <input
                                      type="checkbox"
                                      name="data[Additional][ids][]"
                                      id={`remember-in-inline${additional.id}`}
                                      className="in-checkbox"
                                      onClick={(e) =>
                                        addAdditional(e, additional.price)
                                      }
                                      value={additional.id}
                                    />
                                    <label
                                      htmlFor={`remember-in-inline${additional.id}`}
                                      className="in-label"
                                    ></label>
                                  </div>
                                </div>
                                <div className="input_des">
                                  {additional.name}
                                  <span className="row_des">
                                    ({additional.subtitle})
                                  </span>
                                </div>
                                <div className="input_rate">
                                  <span className="rate">
                                    {
                                      productDetails.currencyDetail
                                        .currency_symbol
                                    }
                                    {additional.price}{" "}
                                    {productDetails.currencyDetail.name}
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="action_btn ">
                        <button
                          type="submit"
                          className="custom_btn btn btn-primary"
                          // onClick={submitForm}
                        >
                          Proceed
                        </button>
                      </div>
                    </div>
                  </>
                )}

                {/* Billing code start */}
                {billing && <Billing billingInitials={billingInitials} />}
                {/* Billing code end */}
                <div className="order_summarty_right">
                  <div className="order_summarty_right_inner">
                    <div className="order_title">Order Summary</div>
                    <div className="order_wrap">
                      <div id="offeer_sec">
                        <div className="order_wrap_row" id="and_sec">
                          <div className="order_wrap_left">
                            <span className="basi_title">
                              {productDetails.productType}
                            </span>
                            <br />
                            (Web Version)
                          </div>
                          <div className="order_wrap_right">
                            {productDetails.currencyDetail.currency_symbol}
                            <span id="and_price">
                              {productDetails.currencyDetail.price}
                            </span>{" "}
                            {productDetails.currencyDetail.name}
                          </div>
                        </div>
                        <div id="custom_sec"></div>
                      </div>
                      <div id="ofer_nw">
                        <div className="order_wrap_row">
                          <div className="order_wrap_left">
                            <span className="basi_title">Total</span>
                          </div>
                          <div className="order_wrap_right">
                            {productDetails.currencyDetail.currency_symbol}
                            <span id="tot_sec">
                              {productDetails.currencyDetail.price}
                            </span>{" "}
                            {productDetails.currencyDetail.name}
                          </div>
                        </div>
                      </div>
                      <div className="off_sect">
                        <span id="show" className="drop drop_left">
                          We Offer Money Back Guarantee{" "}
                          <i className="question_icon"></i>
                          <div className="drop_contanet drop_left_content">
                            <span id="hide"></span>
                            Yes, we provide a 30 days money back guarantee to
                            ensure customer satisfaction with our software. If,
                            for any reason, you decide to stop using the
                            product, you can request a refund. We will reimburse
                            the entire amount, excluding the installation and
                            configuration charges, which are either USD 65 or
                            20% of the application cost, whichever is higher.
                            Please note that the money back guarantee does not
                            apply to customers who have received updates as per
                            their specific requests, taking into account the
                            significant efforts and time invested by the team
                            for their project.
                          </div>
                        </span>
                        <div className="pay_pri_term">
                          For more detail visit following pages
                          <a
                            href="https://demo.imagetowebpage.com/logicspice_com_cake//privacy-policy"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Privacy Policy
                          </a>{" "}
                          and
                          <a
                            href="https://demo.imagetowebpage.com/logicspice_com_cake//terms-of-use"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Terms Of Use
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
      <Footer />
    </>
  );
};

export default Page;
