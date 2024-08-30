"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";
import "../elements.css";
import Contactusmodel from "@/app/Components/Contactusmodel";
import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.css";
import ReCAPTCHA from "react-google-recaptcha";


const Page = () => {
  const recaptchaKey = "6Lep5B8qAAAAABS1ppbvL1LHjDXYRjPojknlmdzo";

  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const [formData, setFormData] = useState({
    post: "",
    image: null,
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    fatherName: "",
    motherName: "",
    fatherOccupation: "",
    motherOccupation: "",
    category: "",
    gender: "",
    maritalStatus: "",
    physicalChallenged: "",
    currentAddress: "",
    permanentAddress: "",
    emailAddress: "",
    Phone: "",
    matricCourse: "",
    matricCollege: "",
    matricUniversity: "",
    matricYear: "",
    matricPercentage: "",
    SecondaryCourse: "",
    secondaryCollege: "",
    secondaryUniversity: "",
    secondaryYear: "",
    secondaryPercentage: "",
    graduationCourse: "",
    graduationCollege: "",
    graduationUniversity: "",
    graduationYear: "",
    graduationPercentage: "",
    expYear: "",
    expMonth: "",
    expectedSalary:"",
    place: "",
    resume: "",
  });

  const onRecaptchaChange = (token) => {
    setFormData((prevData) => ({
      ...prevData,
      recaptchaToken: token,
    }));
    if(token){
      setErrors((prevError) => ({
        ...prevError,
        recaptchaerror: "",
      }));
    }
  };

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));

    // Clear error when user starts typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.post) newErrors.post = "This field is required.";
    if (!formData.firstName) newErrors.firstName = "This field is required.";
    if (!formData.lastName) newErrors.lastName = "This field is required.";
    if (!formData.dob) newErrors.dob = "This field is required.";
    if (!formData.fatherName) newErrors.fatherName = "This field is required.";
    if (!formData.motherName) newErrors.motherName = "This field is required.";
    if (!formData.fatherOccupation)
      newErrors.fatherOccupation = "This field is required.";
    if (!formData.motherOccupation)
      newErrors.motherOccupation = "This field is required.";
    if (!formData.category) newErrors.category = "This field is required.";
    if (!formData.gender) newErrors.gender = "This field is required.";
    if (!formData.maritalStatus)
      newErrors.maritalStatus = "This field is required.";
    if (!formData.currentAddress)
      newErrors.currentAddress = "This field is required.";
    if (!formData.permanentAddress)
      newErrors.permanentAddress = "This field is required.";
    if (!formData.emailAddress)
      newErrors.emailAddress = "This field is required.";
    if (!formData.Phone) newErrors.Phone = "This field is required.";
    if (!formData.matricCourse)
      newErrors.matricCourse = "This field is required.";
    if (!formData.matricCollege)
      newErrors.matricCollege = "This field is required.";
    if (!formData.matricUniversity)
      newErrors.matricUniversity = "This field is required.";
    if (!formData.matricYear) newErrors.matricYear = "This field is required.";
    if (!formData.matricPercentage)
      newErrors.matricPercentage = "This field is required.";
    if (!formData.SecondaryCourse)
      newErrors.SecondaryCourse = "This field is required.";
    if (!formData.SecondaryCollege)
      newErrors.SecondaryCollege = "This field is required.";
    if (!formData.SecondaryUniversity)
      newErrors.SecondaryUniversity = "This field is required.";
    if (!formData.SecondaryYear)
      newErrors.SecondaryYear = "This field is required.";
    if (!formData.SecondaryPercentage)
      newErrors.SecondaryPercentage = "This field is required.";
    if (!formData.graduationCourse)
      newErrors.graduationCourse = "This field is required.";
    if (!formData.graduationCollege)
      newErrors.graduationCollege = "This field is required.";
    if (!formData.graduationUniversity)
      newErrors.graduationUniversity = "This field is required.";
    if (!formData.graduationYear)
      newErrors.graduationYear = "This field is required.";
    if (!formData.graduationPercentage)
      newErrors.graduationPercentage = "This field is required.";
    if (!formData.expYear)
      newErrors.expYear = "This field is required.";
    if (!formData.expMonth)
      newErrors.expMonth = "This field is required.";
    if (!formData.expectedSalary)
      newErrors.expectedSalary = "This field is required.";
    if (!formData.place)
      newErrors.place = "This field is required.";
    if (!formData.resume)
      newErrors.resume = "This field is required.";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoader(true);
    try {
      // const response = await axios.post(BaseAPI + "/pages/contact", formData);
      if (response.data.status === 200) {
        setResultSuccess(true);
        setFormData({
          post: "",
          image: null,
          firstName: "",
          middleName: "",
          lastName: "",
          dob: "",
          fatherName: "",
          motherName: "",
          fatherOccupation: "",
          motherOccupation: "",
          category: "",
          gender: "",
          maritalStatus: "",
          physicalChallenged: "",
          currentAddress: "",
          permanentAddress: "",
          emailAddress: "",
          Phone: "",
          matricCourse: "",
          matricCollege: "",
          matricUniversity: "",
          matricYear: "",
          matricPercentage: "",
          SecondaryCourse: "",
          SecondaryCollege: "",
          SecondaryUniversity: "",
          SecondaryYear: "",
          SecondaryPercentage: "",
          graduationCourse: "",
          graduationCollege: "",
          graduationUniversity: "",
          graduationYear: "",
          graduationPercentage: "",
          expYear: "",
          expMonth: "",
          expectedSalary:"",
          place: "",
          resume: "",
        });
      }
    } catch (error) {
      console.error("Submission error:", error.message);
    }
  };
  return (
    <>
      <Navbar />
      <div className="application-form-section ">
        <div className="container">
          <div className="appliction-form-bxs">
            <form onSubmit={handleSubmit} method="post">
              <div className="appliction-top">
                <h1>INTERVIEW APPLICATION FORM</h1>
                <div className="appliction-top-left">
                  <div className="appliction-post">
                    <label htmlFor="post">Application for the Post of:</label>
                    <div className="application-input">
                      <input
                        name="post"
                        placeholder="Post*"
                        className="form-control required"
                        type="text"
                        id="post"
                        value={formData.post}
                        onChange={handleChange}
                      />
                      <label
                        className="error"
                        style={{ display: "inline-block" }}
                      >
                        {errors.post}
                      </label>
                    </div>
                    {/* {errors.post && (
              <label
                htmlFor="post"
                className="error"
                style={{ display: 'inline-block' }}
              >
                {errors.post}
              </label>
              
            )} */}
                  </div>
                </div>
                <div className="appliction-top-right">
                  <div className="upload-photo">
                    <img
                      src={
                        formData.image
                          ? URL.createObjectURL(formData.image)
                          : "https://www.logicspice.com/app/webroot/img/images/author_icon.png"
                      }
                      alt="photo"
                      id="show_image"
                    />
                    <input
                      type="file"
                      name="image"
                      className="form-control"
                      id="add_image"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="application-details">
                <h3>PERSONAL DETAILS :</h3>
                <div className="personal-detals">
                  <h5>Full Name in block Letters</h5>
                  <div className="personal-detals-bx">
                    <div className="personal-detals-table">
                      <div className="personal-detals-tr">
                        <div className="personal-detals-th">First Name</div>
                        <div className="personal-detals-th">Middle Name</div>
                        <div className="personal-detals-th">Last Name</div>
                      </div>
                      <div className="personal-detals-tr">
                        <div className="personal-detals-td">
                          <input
                            name="firstName"
                            placeholder="First Name*"
                            className="form-control required"
                            type="text"
                            id="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                          />
                          <label
                            className="error"
                            style={{ display: "inline-block" }}
                          >
                            {errors.firstName}
                          </label>
                        </div>
                        {/* <label
                      htmlFor="firstName"
                      className="error"
                      style={{
                        display: formData.firstName ? "none" : "inline-block",
                      }}
                    >
                      This field is required.
                    </label> */}

                        <div className="personal-detals-td">
                          <input
                            name="middleName"
                            placeholder="Middle Name"
                            className="form-control"
                            type="text"
                            id="middleName"
                            value={formData.middleName}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="personal-detals-td">
                          <input
                            name="lastName"
                            placeholder="Last Name*"
                            className="form-control required"
                            type="text"
                            id="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                          />
                          <label
                            className="error"
                            style={{ display: "inline-block" }}
                          >
                            {errors.lastName}
                          </label>
                          {/* <label
                      htmlFor="lastName"
                      className="error"
                      style={{
                        display: formData.lastName ? "none" : "inline-block",
                      }}
                    >
                      This field is required.
                    </label> */}
                        </div>
                      </div>
                    </div>

                    <div className="personal-detals-bax2">
                      <div className="personal-detals-table">
                        <div className="personal-detals-tr">
                          <div className="personal-detals-th">
                            Date of birth
                          </div>
                          <div className="personal-detals-th">
                            Father's Name
                          </div>
                          <div className="personal-detals-th">
                            Mother's Name
                          </div>
                        </div>
                        <div className="personal-detals-tr">
                          <div className="personal-detals-td">
                            <input
                              name="dob"
                              id="dob"
                              readOnly
                              placeholder="Date of birth*"
                              className="form-control required"
                              type="text"
                              value={formData.dob}
                              onChange={handleChange}
                            />
                            <label
                              className="error"
                              style={{ display: "inline-block" }}
                            >
                              {errors.dob}
                            </label>

                            {/* <label
                              htmlFor="dob"
                              className="error"
                              style={{
                                display: formData.dob ? "none" : "inline-block",
                              }}
                            >
                              This field is required.
                            </label> */}
                          </div>
                          <div className="personal-detals-td">
                            <input
                              name="fatherName"
                              placeholder="Father's Name*"
                              className="form-control required"
                              type="text"
                              id="fatherName"
                              value={formData.fatherName}
                              onChange={handleChange}
                            />
                            <label
                              className="error"
                              style={{ display: "inline-block" }}
                            >
                              {errors.fatherName}
                            </label>
                            {/* <label
                              htmlFor="fatherName"
                              className="error"
                              style={{
                                display: formData.fatherName
                                  ? "none"
                                  : "inline-block",
                              }}
                            >
                              This field is required.
                            </label> */}
                          </div>
                          <div className="personal-detals-td">
                            <input
                              name="motherName"
                              placeholder="Mother's Name*"
                              className="form-control required"
                              type="text"
                              id="motherName"
                              value={formData.motherName}
                              onChange={handleChange}
                            />
                            <label
                              className="error"
                              style={{ display: "inline-block" }}
                            >
                              {errors.motherName}
                            </label>
                            {/* <label
                              htmlFor="motherName"
                              className="error"
                              style={{
                                display: formData.motherName
                                  ? "none"
                                  : "inline-block",
                              }}
                            >
                              This field is required.
                            </label> */}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="personal-detals-bax2">
                      <div className="personal-detals-table">
                        <div className="personal-detals-tr">
                          <div className="personal-detals-th">
                            Father's Occupation
                          </div>
                          <div className="personal-detals-th">
                            Mother's Occupation
                          </div>
                        </div>
                        <div className="personal-detals-tr">
                          <div className="personal-detals-td">
                            <input
                              name="fatherOccupation"
                              placeholder="Father's Occupation*"
                              className="form-control required"
                              type="text"
                              id="fatherOccupation"
                              value={formData.fatherOccupation}
                              onChange={handleChange}
                            />
                            <label
                              className="error"
                              style={{ display: "inline-block" }}
                            >
                              {errors.fatherOccupation}
                            </label>
                            {/* <label
                              htmlFor="fatherOccupation"
                              className="error"
                              style={{
                                display: formData.fatherOccupation
                                  ? "none"
                                  : "inline-block",
                              }}
                            >
                              This field is required.
                            </label> */}
                          </div>
                          <div className="personal-detals-td">
                            <input
                              name="motherOccupation"
                              placeholder="Mother's Occupation*"
                              className="form-control required"
                              type="text"
                              id="motherOccupation"
                              value={formData.motherOccupation}
                              onChange={handleChange}
                            />
                            <label
                              className="error"
                              style={{ display: "inline-block" }}
                            >
                              {errors.motherOccupation}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="personal-detals-bx2">
                      <div className="personal-detals-table">
                        <div className="personal-detals-tr">
                          <div className="personal-detals-th">
                            Category
                            <br />
                            (Gen/OBC/SC/ST/Other)
                          </div>
                          <div className="personal-detals-th">Gender</div>
                          <div className="personal-detals-th">
                            Marital Status
                          </div>
                          <div className="personal-detals-th">
                            Physically Challenged
                          </div>
                        </div>
                        <div className="personal-detals-tr">
                          <div className="personal-detals-td">
                            <select
                              name="category"
                              className="form-control form-select required"
                              id="category"
                              value={formData.category}
                              onChange={handleChange}
                            >
                              <option value="">Select Category</option>
                              <option value="General">General</option>
                              <option value="OBC">OBC</option>
                              <option value="SC">SC</option>
                              <option value="ST">ST</option>
                              <option value="Other">Other</option>
                            </select>
                            <label
                              className="error"
                              style={{ display: "inline-block" }}
                            >
                              {errors.category}
                            </label>
                            {/* <label
                              htmlFor="category"
                              className="error"
                              style={{
                                display: formData.category
                                  ? "none"
                                  : "inline-block",
                              }}
                            >
                              This field is required.
                            </label> */}
                          </div>
                          <div className="personal-detals-td">
                            <select
                              name="gender"
                              className="form-control form-select required"
                              id="gender"
                              value={formData.gender}
                              onChange={handleChange}
                            >
                              <option value="">Select Gender</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                              <option value="Other">Other</option>
                            </select>
                            <label
                              className="error"
                              style={{ display: "inline-block" }}
                            >
                              {errors.gender}
                            </label>
                            {/* <label
                              htmlFor="gender"
                              className="error"
                              style={{
                                display: formData.gender
                                  ? "none"
                                  : "inline-block",
                              }}
                            >
                              This field is required.
                            </label> */}
                          </div>
                          <div className="personal-detals-td">
                            <select
                              name="maritalStatus"
                              className="form-control form-select required"
                              id="maritalStatus"
                              value={formData.maritalStatus}
                              onChange={handleChange}
                            >
                              <option value="">Select Marital Status</option>
                              <option value="Married">Married</option>
                              <option value="Single">Single</option>
                              <option value="Divorced">Divorced</option>
                            </select>
                            <label
                              className="error"
                              style={{ display: "inline-block" }}
                            >
                              {errors.maritalStatus}
                            </label>
                            {/* <label
                              htmlFor="maritalStatus"
                              className="error"
                              style={{
                                display: formData.maritalStatus
                                  ? "none"
                                  : "inline-block",
                              }}
                            >
                              This field is required.
                            </label> */}
                          </div>
                          <div className="personal-detals-td">
                            <select
                              name="physicalChallenged"
                              className="form-control form-select"
                              id="physicalChallenged"
                              value={formData.physicalChallenged}
                              onChange={handleChange}
                            >
                              <option value="">
                                Select Physically Challenged
                              </option>
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="personal-detals-bax3">
                      <h5>Address for correspondence(in block letters):</h5>
                      <div class="personal-detals-table">
                        <div class="personal-detals-tr">
                          <div class="personal-detals-th">Current Address:</div>
                          <div class="personal-detals-th">
                            Permanent Address:
                          </div>
                          <div class="personal-detals-th">Email:</div>
                          <div class="personal-detals-th">Phone No.:</div>
                        </div>
                        <div class="personal-detals-tr">
                          <div class="personal-detals-td">
                            <textarea
                              name="currentAddress"
                              placeholder="current Address*"
                              className="form-control required"
                              type="text"
                              id="currentAddress"
                              value={formData.currentAddress}
                              onChange={handleChange}
                            ></textarea>
                            <label
                              className="error"
                              style={{ display: "inline-block" }}
                            >
                              {errors.currentAddress}
                            </label>
                          </div>
                          <div class="personal-detals-td">
                            <textarea
                              name="permanentAddress"
                              placeholder="permanent_address"
                              className="form-control required"
                              type="text"
                              id="permanentAddress"
                              value={formData.permanentAddress}
                              onChange={handleChange}
                            ></textarea>
                            <label
                              className="error"
                              style={{ display: "inline-block" }}
                            >
                              {errors.permanentAddress}
                            </label>
                          </div>
                          <div class="personal-detals-td">
                            <input
                              name="emailAddress"
                              placeholder="email_address"
                              className="form-control required"
                              type="text"
                              id="emailAddress"
                              value={formData.emailAddress}
                              onChange={handleChange}
                            />
                            <label
                              className="error"
                              style={{ display: "inline-block" }}
                            >
                              {errors.emailAddress}
                            </label>
                          </div>
                          <div class="personal-detals-td">
                            <input
                              name="Phone"
                              placeholder="Phone Number"
                              className="form-control required"
                              type="text"
                              id="Phone"
                              value={formData.Phone}
                              onChange={handleChange}
                            />
                            <label
                              className="error"
                              style={{ display: "inline-block" }}
                            >
                              {errors.Phone}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="application-details">
                      <h3>ACADEMIC DETAILS :</h3>
                      <div class="personal-detals">
                        <div class="personal-detals-bx accdemic-detals-bx">
                          <div class="personal-detals-table">
                            <div class="personal-detals-tr">
                              <div class="personal-detals-th">
                                Qualification
                              </div>
                              <div class="personal-detals-th">
                                Course/Subjects
                              </div>
                              <div class="personal-detals-th">
                                School/College &amp; City
                              </div>
                              <div class="personal-detals-th">
                                University/Board
                              </div>
                              <div class="personal-detals-th">
                                Year of passing
                              </div>
                              <div class="personal-detals-th">
                                Percentage of Marks
                              </div>
                            </div>
                            <div class="personal-detals-tr">
                              <div class="personal-detals-td">
                                Matriculation
                                <br />
                                (10th std.)
                              </div>
                              <div class="personal-detals-td">
                                <input
                                  name="matricCourse"
                                  className="form-control  required"
                                  id="gender"
                                  value={formData.matricCourse}
                                  onChange={handleChange}
                                />
                                <label
                                  className="error"
                                  style={{ display: "inline-block" }}
                                >
                                  {errors.matricCourse}
                                </label>
                              </div>
                              <div class="personal-detals-td">
                                <input
                                  name="matricCollege"
                                  className="form-control  required"
                                  id="gender"
                                  value={formData.matricCollege}
                                  onChange={handleChange}
                                />
                                <label
                                  className="error"
                                  style={{ display: "inline-block" }}
                                >
                                  {errors.matricCollege}
                                </label>
                              </div>
                              <div class="personal-detals-td">
                                <input
                                  name="matricUniversity"
                                  className="form-control required"
                                  id="gender"
                                  value={formData.matricUniversity}
                                  onChange={handleChange}
                                />
                                <label
                                  className="error"
                                  style={{ display: "inline-block" }}
                                >
                                  {errors.matricUniversity}
                                </label>
                              </div>
                              <div class="personal-detals-td">
                                <div class="input select">
                                  <select
                                    name="matricYear"
                                    placeholder="Year of passing"
                                    className="form-control form-select required"
                                    id="matricYear"
                                    value={formData.matricYear}
                                    onChange={handleChange}
                                  >
                                    <option value="">Year of passing*</option>
                                    <option value="0">1961</option>
                                    <option value="1">1962</option>
                                    <option value="2">1963</option>
                                    <option value="3">1964</option>
                                    <option value="4">1965</option>
                                    <option value="5">1966</option>
                                    <option value="6">1967</option>
                                    <option value="7">1968</option>
                                    <option value="8">1969</option>
                                    <option value="9">1970</option>
                                    <option value="10">1971</option>
                                    <option value="11">1972</option>
                                    <option value="12">1973</option>
                                    <option value="13">1974</option>
                                    <option value="14">1975</option>
                                    <option value="15">1976</option>
                                    <option value="16">1977</option>
                                    <option value="17">1978</option>
                                    <option value="18">1979</option>
                                    <option value="19">1980</option>
                                    <option value="20">1981</option>
                                    <option value="21">1982</option>
                                    <option value="22">1983</option>
                                    <option value="23">1984</option>
                                    <option value="24">1985</option>
                                    <option value="25">1986</option>
                                    <option value="26">1987</option>
                                    <option value="27">1988</option>
                                    <option value="28">1989</option>
                                    <option value="29">1990</option>
                                    <option value="30">1991</option>
                                    <option value="31">1992</option>
                                    <option value="32">1993</option>
                                    <option value="33">1994</option>
                                    <option value="34">1995</option>
                                    <option value="35">1996</option>
                                    <option value="36">1997</option>
                                    <option value="37">1998</option>
                                    <option value="38">1999</option>
                                    <option value="39">2000</option>
                                    <option value="40">2001</option>
                                    <option value="41">2002</option>
                                    <option value="42">2003</option>
                                    <option value="43">2004</option>
                                    <option value="44">2005</option>
                                    <option value="45">2006</option>
                                    <option value="46">2007</option>
                                    <option value="47">2008</option>
                                    <option value="48">2009</option>
                                    <option value="49">2010</option>
                                    <option value="50">2011</option>
                                    <option value="51">2012</option>
                                    <option value="52">2013</option>
                                    <option value="53">2014</option>
                                    <option value="54">2015</option>
                                    <option value="55">2016</option>
                                    <option value="56">2017</option>
                                    <option value="57">2018</option>
                                    <option value="58">2019</option>
                                    <option value="59">2020</option>
                                    <option value="60">2021</option>
                                    <option value="61">2022</option>
                                    <option value="62">2023</option>
                                    <option value="63">2024</option>
                                    <option value="64">2025</option>
                                    <option value="65">2026</option>
                                    <option value="66">2027</option>
                                  </select>
                                  <label
                                    className="error"
                                    style={{ display: "inline-block" }}
                                  >
                                    {errors.matricYear}
                                  </label>
                                </div>
                              </div>
                              <div class="personal-detals-td">
                                <input
                                  name="matricPercentage"
                                  className="form-control  required"
                                  id="gender"
                                  value={formData.matricPercentage}
                                  onChange={handleChange}
                                />
                                <label
                                  className="error"
                                  style={{ display: "inline-block" }}
                                >
                                  {errors.matricPercentage}
                                </label>
                              </div>
                            </div>
                            <div class="personal-detals-tr">
                              <div class="personal-detals-td">
                                Higher Secondary
                                <br />
                                (+2)
                              </div>
                              <div class="personal-detals-td">
                                <input
                                  name="SecondaryCourse"
                                  placeholder="Course/Subjects*"
                                  className="form-control  required"
                                  id="gender"
                                  value={formData.SecondaryCourse}
                                  onChange={handleChange}
                                />
                                <label
                                  className="error"
                                  style={{ display: "inline-block" }}
                                >
                                  {errors.SecondaryCourse}
                                </label>
                              </div>
                              <div class="personal-detals-td">
                                <input
                                  name="matricPercentage"
                                  placeholder="School/College &amp; City*"
                                  className="form-control  required"
                                  id="gender"
                                  value={formData.SecondaryCollege}
                                  onChange={handleChange}
                                />
                                <label
                                  className="error"
                                  style={{ display: "inline-block" }}
                                >
                                  {errors.SecondaryCollege}
                                </label>
                              </div>
                              <div class="personal-detals-td">
                                <input
                                  // name="data[Application][secondary_university]"
                                  // placeholder="University*"
                                  // class="form-control required"
                                  // type="text"
                                  // id="ApplicationSecondaryUniversity"
                                  name="SecondaryUniversity"
                                  placeholder="University*"
                                  className="form-control  required"
                                  id="gender"
                                  value={formData.SecondaryUniversity}
                                  onChange={handleChange}
                                />
                                <label
                                  className="error"
                                  style={{ display: "inline-block" }}
                                >
                                  {errors.SecondaryUniversity}
                                </label>
                              </div>
                              <div class="personal-detals-td">
                                <div class="input select">
                                  <select
                                    name="SecondaryYear"
                                    placeholder="University*"
                                    className="form-control  required"
                                    id="gender"
                                    value={formData.SecondaryYear}
                                    onChange={handleChange}
                                  >
                                    <option value="">Year of passing*</option>
                                    <option value="0">1961</option>
                                    <option value="1">1962</option>
                                    <option value="2">1963</option>
                                    <option value="3">1964</option>
                                    <option value="4">1965</option>
                                    <option value="5">1966</option>
                                    <option value="6">1967</option>
                                    <option value="7">1968</option>
                                    <option value="8">1969</option>
                                    <option value="9">1970</option>
                                    <option value="10">1971</option>
                                    <option value="11">1972</option>
                                    <option value="12">1973</option>
                                    <option value="13">1974</option>
                                    <option value="14">1975</option>
                                    <option value="15">1976</option>
                                    <option value="16">1977</option>
                                    <option value="17">1978</option>
                                    <option value="18">1979</option>
                                    <option value="19">1980</option>
                                    <option value="20">1981</option>
                                    <option value="21">1982</option>
                                    <option value="22">1983</option>
                                    <option value="23">1984</option>
                                    <option value="24">1985</option>
                                    <option value="25">1986</option>
                                    <option value="26">1987</option>
                                    <option value="27">1988</option>
                                    <option value="28">1989</option>
                                    <option value="29">1990</option>
                                    <option value="30">1991</option>
                                    <option value="31">1992</option>
                                    <option value="32">1993</option>
                                    <option value="33">1994</option>
                                    <option value="34">1995</option>
                                    <option value="35">1996</option>
                                    <option value="36">1997</option>
                                    <option value="37">1998</option>
                                    <option value="38">1999</option>
                                    <option value="39">2000</option>
                                    <option value="40">2001</option>
                                    <option value="41">2002</option>
                                    <option value="42">2003</option>
                                    <option value="43">2004</option>
                                    <option value="44">2005</option>
                                    <option value="45">2006</option>
                                    <option value="46">2007</option>
                                    <option value="47">2008</option>
                                    <option value="48">2009</option>
                                    <option value="49">2010</option>
                                    <option value="50">2011</option>
                                    <option value="51">2012</option>
                                    <option value="52">2013</option>
                                    <option value="53">2014</option>
                                    <option value="54">2015</option>
                                    <option value="55">2016</option>
                                    <option value="56">2017</option>
                                    <option value="57">2018</option>
                                    <option value="58">2019</option>
                                    <option value="59">2020</option>
                                    <option value="60">2021</option>
                                    <option value="61">2022</option>
                                    <option value="62">2023</option>
                                    <option value="63">2024</option>
                                    <option value="64">2025</option>
                                    <option value="65">2026</option>
                                    <option value="66">2027</option>
                                  </select>
                                  <label
                                    className="error"
                                    style={{ display: "inline-block" }}
                                  >
                                    {errors.SecondaryYear}
                                  </label>
                                </div>{" "}
                              </div>
                              <div class="personal-detals-td">
                                <input
                                  // name="data[Application][secondary_percentage]"
                                  // placeholder="Percentage*"
                                  // max="100"
                                  // class="form-control required positiveNumber"
                                  // type="text"
                                  // id="ApplicationSecondaryPercentage"
                                  name="SecondaryPercentage"
                                  placeholder="Percentage*"
                                  className="form-control  required"
                                  id="gender"
                                  value={formData.SecondaryPercentage}
                                  onChange={handleChange}
                                />
                                <label
                                  className="error"
                                  style={{ display: "inline-block" }}
                                >
                                  {errors.SecondaryPercentage}
                                </label>
                              </div>
                            </div>
                            <div class="personal-detals-tr">
                              <div class="personal-detals-td">
                                Graduation
                                <br />
                                (with stream)
                              </div>
                              <div class="personal-detals-td">
                                <input
                                  // name="data[Application][graduation_course]"
                                  // placeholder="Course/Subjects*"
                                  // class="form-control required"
                                  // type="text"
                                  // id="ApplicationGraduationCourse"
                                  name="graduationCourse"
                                  placeholder="Course/Subjects*"
                                  className="form-control  required"
                                  id="gender"
                                  value={formData.graduationCourse}
                                  onChange={handleChange}
                                />
                                <label
                                  className="error"
                                  style={{ display: "inline-block" }}
                                >
                                  {errors.graduationCourse}
                                </label>
                              </div>
                              <div class="personal-detals-td">
                                <input
                                  // name="data[Application][graduation_college]"
                                  // placeholder="School/College &amp; City*"
                                  // class="form-control required"
                                  // type="text"
                                  // id="ApplicationGraduationCollege"
                                  name="graduationCollege"
                                  placeholder="School/College &amp; City*"
                                  className="form-control  required"
                                  id="gender"
                                  value={formData.graduationCollege}
                                  onChange={handleChange}

                                />
                                <label
                                  className="error"
                                  style={{ display: "inline-block" }}
                                >
                                  {errors.graduationCollege}
                                </label>
                              </div>
                              <div class="personal-detals-td">
                                <input
                                  // name="data[Application][graduation_university]"
                                  // placeholder="University*"
                                  // class="form-control required"
                                  // type="text"
                                  // id="ApplicationGraduationUniversity"
                                  name="graduationUniversity"
                                  placeholder="University*"
                                  className="form-control  required"
                                  id="gender"
                                  value={formData.graduationUniversity}
                                  onChange={handleChange}
                                />
                                <label
                                  className="error"
                                  style={{ display: "inline-block" }}
                                >
                                  {errors.graduationUniversity}
                                </label>
                              </div>
                              <div class="personal-detals-td">
                                <div class="input select">
                                  <select
                                    // name="data[Application][graduation_year]"
                                    // class="form-control required"
                                    // id="ApplicationGraduationYear"
                                    name="graduationYear"
                                    placeholder="University*"
                                    className="form-control form-select  required"
                                    id="gender"
                                    value={formData.graduationYear}
                                    onChange={handleChange}
                                  >
                                    <option value="">Year of passing*</option>
                                    <option value="0">1961</option>
                                    <option value="1">1962</option>
                                    <option value="2">1963</option>
                                    <option value="3">1964</option>
                                    <option value="4">1965</option>
                                    <option value="5">1966</option>
                                    <option value="6">1967</option>
                                    <option value="7">1968</option>
                                    <option value="8">1969</option>
                                    <option value="9">1970</option>
                                    <option value="10">1971</option>
                                    <option value="11">1972</option>
                                    <option value="12">1973</option>
                                    <option value="13">1974</option>
                                    <option value="14">1975</option>
                                    <option value="15">1976</option>
                                    <option value="16">1977</option>
                                    <option value="17">1978</option>
                                    <option value="18">1979</option>
                                    <option value="19">1980</option>
                                    <option value="20">1981</option>
                                    <option value="21">1982</option>
                                    <option value="22">1983</option>
                                    <option value="23">1984</option>
                                    <option value="24">1985</option>
                                    <option value="25">1986</option>
                                    <option value="26">1987</option>
                                    <option value="27">1988</option>
                                    <option value="28">1989</option>
                                    <option value="29">1990</option>
                                    <option value="30">1991</option>
                                    <option value="31">1992</option>
                                    <option value="32">1993</option>
                                    <option value="33">1994</option>
                                    <option value="34">1995</option>
                                    <option value="35">1996</option>
                                    <option value="36">1997</option>
                                    <option value="37">1998</option>
                                    <option value="38">1999</option>
                                    <option value="39">2000</option>
                                    <option value="40">2001</option>
                                    <option value="41">2002</option>
                                    <option value="42">2003</option>
                                    <option value="43">2004</option>
                                    <option value="44">2005</option>
                                    <option value="45">2006</option>
                                    <option value="46">2007</option>
                                    <option value="47">2008</option>
                                    <option value="48">2009</option>
                                    <option value="49">2010</option>
                                    <option value="50">2011</option>
                                    <option value="51">2012</option>
                                    <option value="52">2013</option>
                                    <option value="53">2014</option>
                                    <option value="54">2015</option>
                                    <option value="55">2016</option>
                                    <option value="56">2017</option>
                                    <option value="57">2018</option>
                                    <option value="58">2019</option>
                                    <option value="59">2020</option>
                                    <option value="60">2021</option>
                                    <option value="61">2022</option>
                                    <option value="62">2023</option>
                                    <option value="63">2024</option>
                                    <option value="64">2025</option>
                                    <option value="65">2026</option>
                                    <option value="66">2027</option>
                                  </select>
                                  <label
                                  className="error"
                                  style={{ display: "inline-block" }}
                                >
                                  {errors.graduationYear}
                                </label>
                                </div>{" "}
                              </div>
                              <div class="personal-detals-td">
                                <input
                                  // name="data[Application][graduation_percentage]"
                                  // placeholder="Percentage*"
                                  // max="100"
                                  // class="form-control required positiveNumber"
                                  // type="text"
                                  // id="ApplicationGraduationPercentage"
                                  name="graduationPercentage"
                                  placeholder="Percentage*"
                                  className="form-control  required"
                                  id="gender"
                                  value={formData.graduationPercentage}
                                  onChange={handleChange}
                                  
                                />
                                <label
                                  className="error"
                                  style={{ display: "inline-block" }}
                                >
                                  {errors.graduationPercentage}
                                </label>
                              </div>
                            </div>
                            <div class="personal-detals-tr">
                              <div class="personal-detals-td">
                                PG
                                <br />
                                (with stream)
                              </div>
                              <div class="personal-detals-td">
                                <input
                                  name="data[Application][pg_course]"
                                  placeholder="Course/Subjects"
                                  class="form-control "
                                  type="text"
                                  id="ApplicationPgCourse"
                                />
                              </div>
                              <div class="personal-detals-td">
                                <input
                                  name="data[Application][pg_college]"
                                  placeholder="School/College &amp; City"
                                  class="form-control "
                                  type="text"
                                  id="ApplicationPgCollege"
                                />
                              </div>
                              <div class="personal-detals-td">
                                <input
                                  name="data[Application][pg_university]"
                                  placeholder="University"
                                  class="form-control "
                                  type="text"
                                  id="ApplicationPgUniversity"
                                />
                              </div>
                              <div class="personal-detals-td">
                                <div class="input select">
                                  <select
                                    name="data[Application][pg_year]"
                                    class="form-control"
                                    id="ApplicationPgYear"
                                  >
                                    <option value="">Year of passing</option>
                                    <option value="0">1961</option>
                                    <option value="1">1962</option>
                                    <option value="2">1963</option>
                                    <option value="3">1964</option>
                                    <option value="4">1965</option>
                                    <option value="5">1966</option>
                                    <option value="6">1967</option>
                                    <option value="7">1968</option>
                                    <option value="8">1969</option>
                                    <option value="9">1970</option>
                                    <option value="10">1971</option>
                                    <option value="11">1972</option>
                                    <option value="12">1973</option>
                                    <option value="13">1974</option>
                                    <option value="14">1975</option>
                                    <option value="15">1976</option>
                                    <option value="16">1977</option>
                                    <option value="17">1978</option>
                                    <option value="18">1979</option>
                                    <option value="19">1980</option>
                                    <option value="20">1981</option>
                                    <option value="21">1982</option>
                                    <option value="22">1983</option>
                                    <option value="23">1984</option>
                                    <option value="24">1985</option>
                                    <option value="25">1986</option>
                                    <option value="26">1987</option>
                                    <option value="27">1988</option>
                                    <option value="28">1989</option>
                                    <option value="29">1990</option>
                                    <option value="30">1991</option>
                                    <option value="31">1992</option>
                                    <option value="32">1993</option>
                                    <option value="33">1994</option>
                                    <option value="34">1995</option>
                                    <option value="35">1996</option>
                                    <option value="36">1997</option>
                                    <option value="37">1998</option>
                                    <option value="38">1999</option>
                                    <option value="39">2000</option>
                                    <option value="40">2001</option>
                                    <option value="41">2002</option>
                                    <option value="42">2003</option>
                                    <option value="43">2004</option>
                                    <option value="44">2005</option>
                                    <option value="45">2006</option>
                                    <option value="46">2007</option>
                                    <option value="47">2008</option>
                                    <option value="48">2009</option>
                                    <option value="49">2010</option>
                                    <option value="50">2011</option>
                                    <option value="51">2012</option>
                                    <option value="52">2013</option>
                                    <option value="53">2014</option>
                                    <option value="54">2015</option>
                                    <option value="55">2016</option>
                                    <option value="56">2017</option>
                                    <option value="57">2018</option>
                                    <option value="58">2019</option>
                                    <option value="59">2020</option>
                                    <option value="60">2021</option>
                                    <option value="61">2022</option>
                                    <option value="62">2023</option>
                                    <option value="63">2024</option>
                                    <option value="64">2025</option>
                                    <option value="65">2026</option>
                                    <option value="66">2027</option>
                                  </select>
                                </div>{" "}
                              </div>
                              <div class="personal-detals-td">
                                <input
                                  name="data[Application][pg_percentage]"
                                  placeholder="Percentage"
                                  max="100"
                                  class="form-control positiveNumber"
                                  type="text"
                                  id="ApplicationPgPercentage"
                                />
                              </div>
                            </div>
                            <div class="personal-detals-tr">
                              <div class="personal-detals-td">
                                Other
                                <br />
                                (Qualification)
                              </div>
                              <div class="personal-detals-td">
                                <input
                                  name="data[Application][other_course]"
                                  placeholder="Course/Subjects"
                                  class="form-control "
                                  type="text"
                                  id="ApplicationOtherCourse"
                                />
                              </div>
                              <div class="personal-detals-td">
                                <input
                                  name="data[Application][other_college]"
                                  placeholder="School/College &amp; City"
                                  class="form-control "
                                  type="text"
                                  id="ApplicationOtherCollege"
                                />
                              </div>
                              <div class="personal-detals-td">
                                <input
                                  name="data[Application][other_university]"
                                  placeholder="University"
                                  class="form-control "
                                  type="text"
                                  id="ApplicationOtherUniversity"
                                />
                              </div>
                              <div class="personal-detals-td">
                                <div class="input select">
                                  <select
                                    name="data[Application][other_year]"
                                    class="form-control"
                                    id="ApplicationOtherYear"
                                  >
                                    <option value="">Year of passing</option>
                                    <option value="0">1961</option>
                                    <option value="1">1962</option>
                                    <option value="2">1963</option>
                                    <option value="3">1964</option>
                                    <option value="4">1965</option>
                                    <option value="5">1966</option>
                                    <option value="6">1967</option>
                                    <option value="7">1968</option>
                                    <option value="8">1969</option>
                                    <option value="9">1970</option>
                                    <option value="10">1971</option>
                                    <option value="11">1972</option>
                                    <option value="12">1973</option>
                                    <option value="13">1974</option>
                                    <option value="14">1975</option>
                                    <option value="15">1976</option>
                                    <option value="16">1977</option>
                                    <option value="17">1978</option>
                                    <option value="18">1979</option>
                                    <option value="19">1980</option>
                                    <option value="20">1981</option>
                                    <option value="21">1982</option>
                                    <option value="22">1983</option>
                                    <option value="23">1984</option>
                                    <option value="24">1985</option>
                                    <option value="25">1986</option>
                                    <option value="26">1987</option>
                                    <option value="27">1988</option>
                                    <option value="28">1989</option>
                                    <option value="29">1990</option>
                                    <option value="30">1991</option>
                                    <option value="31">1992</option>
                                    <option value="32">1993</option>
                                    <option value="33">1994</option>
                                    <option value="34">1995</option>
                                    <option value="35">1996</option>
                                    <option value="36">1997</option>
                                    <option value="37">1998</option>
                                    <option value="38">1999</option>
                                    <option value="39">2000</option>
                                    <option value="40">2001</option>
                                    <option value="41">2002</option>
                                    <option value="42">2003</option>
                                    <option value="43">2004</option>
                                    <option value="44">2005</option>
                                    <option value="45">2006</option>
                                    <option value="46">2007</option>
                                    <option value="47">2008</option>
                                    <option value="48">2009</option>
                                    <option value="49">2010</option>
                                    <option value="50">2011</option>
                                    <option value="51">2012</option>
                                    <option value="52">2013</option>
                                    <option value="53">2014</option>
                                    <option value="54">2015</option>
                                    <option value="55">2016</option>
                                    <option value="56">2017</option>
                                    <option value="57">2018</option>
                                    <option value="58">2019</option>
                                    <option value="59">2020</option>
                                    <option value="60">2021</option>
                                    <option value="61">2022</option>
                                    <option value="62">2023</option>
                                    <option value="63">2024</option>
                                    <option value="64">2025</option>
                                    <option value="65">2026</option>
                                    <option value="66">2027</option>
                                  </select>
                                </div>{" "}
                              </div>
                              <div class="personal-detals-td">
                                <input
                                  name="data[Application][other_percentage]"
                                  placeholder="Percentage"
                                  max="100"
                                  class="form-control positiveNumber"
                                  type="text"
                                  id="ApplicationOtherPercentage"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="application-details">
                      <h3>WORK EXPERIENCE :</h3>
                      <h6>Total Work Experience:</h6>
                      <div class="experience-post">
                        <label>Years:</label>
                        <div class="application-input">
                          <div class="input select">
                            <select
                              // name="data[Application][work_experience_year]"
                              // id="exp_year"
                              // class="form-control required"
                              // onchange="if (!window.__cfRLUnblockHandlers) return false; getYear(this.value)"
                              name="expYear"
                              
                              className="form-control required"
                              type="text"
                              id="expYear"
                              value={formData.expYear}
                              onChange={handleChange}
                            >
                              <option value="">Year*</option>
                              <option value="0">0</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="9">9</option>
                              <option value="10">10</option>
                              <option value="11">11</option>
                              <option value="12">12</option>
                              <option value="13">13</option>
                              <option value="14">14</option>
                              <option value="15">15</option>
                              <option value="16">16</option>
                              <option value="17">17</option>
                              <option value="18">18</option>
                              <option value="19">19</option>
                              <option value="20">20</option>
                              <option value="21">21</option>
                              <option value="22">22</option>
                              <option value="23">23</option>
                              <option value="24">24</option>
                              <option value="25">25</option>
                              <option value="26">26</option>
                              <option value="27">27</option>
                              <option value="28">28</option>
                              <option value="29">29</option>
                              <option value="30">30</option>
                              <option value="31">31</option>
                              <option value="32">32</option>
                              <option value="33">33</option>
                              <option value="34">34</option>
                              <option value="35">35</option>
                              <option value="36">36</option>
                              <option value="37">37</option>
                              <option value="38">38</option>
                              <option value="39">39</option>
                              <option value="40">40</option>
                              <option value="41">41</option>
                              <option value="42">42</option>
                              <option value="43">43</option>
                              <option value="44">44</option>
                              <option value="45">45</option>
                              <option value="46">46</option>
                              <option value="47">47</option>
                              <option value="48">48</option>
                              <option value="49">49</option>
                              <option value="50">50</option>
                            </select>
                            <label
                              className="error"
                              style={{ display: "inline-block" }}
                            >
                              {errors.expYear}
                            </label>
                          </div>{" "}
                        </div>
                      </div>
                      <div class="experience-post">
                        <label>Months:</label>
                        <div class="application-input">
                          <div class="input select">
                            <select
                              // name="data[Application][work_experience_months]"
                              // id="exp_month"
                              // class="form-control required"
                              // onchange="if (!window.__cfRLUnblockHandlers) return false; getMonth(this.value)"
                              name="expMonth"
                              
                              className="form-control required"
                              type="text"
                              id="expMonth"
                              value={formData.expMonth}
                              onChange={handleChange}
                            >
                              <option value="">Months*</option>
                              <option value="0">0</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="9">9</option>
                              <option value="10">10</option>
                              <option value="11">11</option>
                              <option value="12">12</option>
                              <option value="13">13</option>
                              <option value="14">14</option>
                              <option value="15">15</option>
                              <option value="16">16</option>
                              <option value="17">17</option>
                              <option value="18">18</option>
                              <option value="19">19</option>
                              <option value="20">20</option>
                              <option value="21">21</option>
                              <option value="22">22</option>
                              <option value="23">23</option>
                            </select>
                            <label
                              className="error"
                              style={{ display: "inline-block" }}
                            >
                              {errors.expMonth}
                            </label>
                          </div>{" "}
                        </div>
                      </div>
                      <div class="personal-detals">
                        <div class="personal-detals-bx accdemic-detals-bx">
                          <div class="personal-detals-table">
                            <div class="personal-detals-tr">
                              <div class="personal-detals-th">Date From</div>
                              <div class="personal-detals-th">Date To</div>
                              <div class="personal-detals-th">
                                Name of Organization
                              </div>
                              <div class="personal-detals-th">Designation</div>
                              <div class="personal-detals-th">
                                Reason of Leaving
                              </div>
                            </div>
                            <div class="personal-detals-tr">
                              <div class="personal-detals-td">
                                <input
                                  name="data[Application][start_date]"
                                  id="start_date"
                                  placeholder="Start Date"
                                  class="form-control hasDatepicker"
                                  readonly="readonly"
                                  type="text"
                                />
                              </div>
                              <div class="personal-detals-td">
                                <input
                                  name="data[Application][end_date]"
                                  id="end_date"
                                  placeholder="End Date"
                                  class="form-control hasDatepicker"
                                  readonly="readonly"
                                  type="text"
                                />
                              </div>
                              <div class="personal-detals-td">
                                <input
                                  name="data[Application][organization]"
                                  placeholder="Name of Organization"
                                  class="form-control"
                                  type="text"
                                  id="ApplicationOrganization"
                                />
                              </div>
                              <div class="personal-detals-td">
                                <input
                                  name="data[Application][designation]"
                                  placeholder="Designation"
                                  class="form-control"
                                  type="text"
                                  id="ApplicationDesignation"
                                />
                              </div>
                              <div class="personal-detals-td">
                                <input
                                  name="data[Application][leaving_reason]"
                                  placeholder="Reason of Leaving"
                                  class="form-control"
                                  type="text"
                                  id="ApplicationLeavingReason"
                                />
                              </div>
                            </div>
                            <div class="personal-detals-tr">
                              <div class="personal-detals-td">
                                <input
                                  name="data[Application][start_date1]"
                                  id="start_date1"
                                  placeholder="Start Date"
                                  class="form-control hasDatepicker"
                                  readonly="readonly"
                                  type="text"
                                />
                              </div>
                              <div class="personal-detals-td">
                                <input
                                  name="data[Application][end_date1]"
                                  id="end_date1"
                                  placeholder="End Date"
                                  class="form-control hasDatepicker"
                                  readonly="readonly"
                                  type="text"
                                />
                              </div>
                              <div class="personal-detals-td">
                                <input
                                  name="data[Application][organization1]"
                                  placeholder="Name of Organization"
                                  class="form-control"
                                  type="text"
                                  id="ApplicationOrganization1"
                                />
                              </div>
                              <div class="personal-detals-td">
                                <input
                                  name="data[Application][designation1]"
                                  placeholder="Designation"
                                  class="form-control"
                                  type="text"
                                  id="ApplicationDesignation1"
                                />
                              </div>
                              <div class="personal-detals-td">
                                <input
                                  name="data[Application][leaving_reason1]"
                                  placeholder="Reason of Leaving"
                                  class="form-control"
                                  type="text"
                                  id="ApplicationLeavingReason1"
                                />
                              </div>
                            </div>
                            <div class="personal-detals-tr">
                              <div class="personal-detals-td">
                                <input
                                  name="data[Application][start_date2]"
                                  id="start_date2"
                                  placeholder="Start Date"
                                  class="form-control hasDatepicker"
                                  readonly="readonly"
                                  type="text"
                                />
                              </div>
                              <div class="personal-detals-td">
                                <input
                                  name="data[Application][end_date2]"
                                  id="end_date2"
                                  placeholder="End Date"
                                  class="form-control hasDatepicker"
                                  readonly="readonly"
                                  type="text"
                                />
                              </div>
                              <div class="personal-detals-td">
                                <input
                                  name="data[Application][organization2]"
                                  placeholder="Name of Organization"
                                  class="form-control"
                                  type="text"
                                  id="ApplicationOrganization2"
                                />
                              </div>
                              <div class="personal-detals-td">
                                <input
                                  name="data[Application][designation2]"
                                  placeholder="Designation"
                                  class="form-control"
                                  type="text"
                                  id="ApplicationDesignation2"
                                />
                              </div>
                              <div class="personal-detals-td">
                                <input
                                  name="data[Application][leaving_reason2]"
                                  placeholder="Reason of Leaving"
                                  class="form-control"
                                  type="text"
                                  id="ApplicationLeavingReason2"
                                />
                              </div>
                            </div>
                            <div class="personal-detals-tr">
                              <div class="personal-detals-td">
                                <input
                                  name="data[Application][start_date3]"
                                  id="start_date3"
                                  placeholder="Start Date"
                                  class="form-control hasDatepicker"
                                  readonly="readonly"
                                  type="text"
                                />
                              </div>
                              <div class="personal-detals-td">
                                <input
                                  name="data[Application][end_date3]"
                                  id="end_date3"
                                  placeholder="End Date"
                                  class="form-control hasDatepicker"
                                  readonly="readonly"
                                  type="text"
                                />
                              </div>
                              <div class="personal-detals-td">
                                <input
                                  name="data[Application][organization3]"
                                  placeholder="Name of Organization"
                                  class="form-control"
                                  type="text"
                                  id="ApplicationOrganization3"
                                />
                              </div>
                              <div class="personal-detals-td">
                                <input
                                  name="data[Application][designation3]"
                                  placeholder="Designation"
                                  class="form-control"
                                  type="text"
                                  id="ApplicationDesignation3"
                                />
                              </div>
                              <div class="personal-detals-td">
                                <input
                                  name="data[Application][leaving_reason3]"
                                  placeholder="Reason of Leaving"
                                  class="form-control"
                                  type="text"
                                  id="ApplicationLeavingReason3"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="currwnt-bx">
                        <label>Current/Last Salary:</label>
                        <div class="current-input">
                          <input
                            name="data[Application][current_salary]"
                            placeholder="Current Salary"
                            class="form-control number"
                            min="0"
                            type="text"
                            id="ApplicationCurrentSalary"
                          />
                        </div>
                      </div>
                      <div class="currwnt-bx">
                        <label>Expected Salary:</label>
                        <div class="current-input">
                          <input
                            // name="data[Application][expected_salary]"
                            // placeholder="Expected Salary"
                            // class="form-control required number"
                            // min="1"
                            // type="text"
                            // id="ApplicationExpectedSalary"
                            name="expectedSalary"
                                  placeholder="Expected Salary"
                                  className="form-control  required"
                                  id="gender"
                                  value={formData.expectedSalary}
                                  onChange={handleChange}
                                />
                                <label
                                  className="error"
                                  style={{ display: "inline-block" }}
                                >
                                  {errors.expectedSalary}
                                </label>
                          
                        </div>
                      </div>
                      <div class="currwnt-bx">
                        <label>
                          Time required for joining, if selected(Notice Period):
                        </label>
                        <div class="current-input">
                          <input
                            name="data[Application][notice_period]"
                            class="form-control"
                            type="text"
                            id="ApplicationNoticePeriod"
                          />
                        </div>
                      </div>

                      <div class="currwnt-bx">
                        <label>
                          Are you pursuing any course or planning to pursue in
                          future? If yes then when?:{" "}
                        </label>
                        <div class="current-input">
                          <div class="current-input">
                            <textarea
                              name="data[Application][pursuing]"
                              class="form-control"
                              id="ApplicationPursuing"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div class="currwnt-bx">
                        <label>Certifications (if any): </label>
                        <div class="current-input">
                          <div class="current-input">
                            <textarea
                              name="data[Application][certifications]"
                              class="form-control"
                              id="ApplicationCertifications"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div class="currwnt-bx">
                        <label>Career Goals: </label>
                        <div class="current-input">
                          <div class="current-input">
                            <textarea
                              name="data[Application][career_goals]"
                              class="form-control"
                              id="ApplicationCareerGoals"
                            ></textarea>
                          </div>
                        </div>
                      </div>

                      <div class="places-bx">
                        <div class="places-bx-left">
                          <div class="currwnt-bx">
                            <label>Place:</label>
                            <div class="current-input">
                              <input
                                // name="data[Application][place]"
                                // placeholder="Place"
                                // class="form-control required"
                                // type="text"
                                // id="ApplicationPlace"
                                name="place"
                                  placeholder="Place"
                                  className="form-control  required"
                                  id="place"
                                  value={formData.place}
                                  onChange={handleChange}
                                />
                                <label
                                  className="error"
                                  style={{ display: "inline-block" }}
                                >
                                  {errors.place}
                                </label>
                              
                            </div>
                          </div>
                          <div class="currwnt-bx">
                            <label>Date:</label>
                            <div class="current-input">30-08-2024 </div>
                          </div>
                        </div>

                        <div class="places-bx-right">
                          <span id="show_sign"></span>
                          <div class="sign_dv">
                            <p>Upload Resume</p>
                            <input
                              // type="file"
                              // name="data[Application][resume]"
                              // class="form-control required"
                              // id="add_resume"
                              name="resume"
                                  type="file"
                                  className="form-control  required"
                                  id="resume"
                                  value={formData.resume}
                                  onChange={handleChange}
                                />
                                <label
                                  className="error"
                                  style={{ display: "inline-block" }}
                                >
                                  {errors.resume}
                                </label>
                           
                          </div>
                          {/* <div class="currwnt-bx">
                            <div id="recaptcha1" style="transform: scale(0.75); transform-origin: left top;"><div style="width: 304px; height: 78px;"><div><iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-3mo9j5xxutq" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=2&amp;k=6Leg3gITAAAAAPzWHZ1PgnMhko9tHq8yWvH2q2S7&amp;co=aHR0cHM6Ly93d3cubG9naWNzcGljZS5jb206NDQz&amp;hl=en&amp;v=WV-mUKO4xoWKy9M4ZzRyNrP_&amp;theme=light&amp;size=normal&amp;cb=nttq9a3kshdx"></iframe></div><textarea id="g-recaptcha-response-1" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea></div><iframe style="display: none;"></iframe></div>
                        </div> */}
                        <div className="form-group-google">
                              <ReCAPTCHA
                                key={recaptchaKey}
                                sitekey={recaptchaKey}
                                onChange={onRecaptchaChange}
                              />
                              <div className="gcpc FormError" id="captcha_msg">
                                {errors.reacptchaerror}
                              </div>
                            </div>
                        </div>
                      </div>

                      <div class="appli-btn">
                        <input
                          title="Submit"
                          class="btn btn-primary"
                          size="30"
                          label=""
                          type="submit"
                          value="Submit"
                        />
                        <a
                          href="javascript:void();"
                          class="btn btn-default"
                          onclick="if (!window.__cfRLUnblockHandlers) return false; resetForm()"
                        >
                          Reset
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="quoue_box_full_sec">
        <div className="whatsapp-call">
          <a
            href="https://api.whatsapp.com/send?phone=+919829559922&amp;text=Hi Logicspice Team, I have a question regarding the solutions you provide. Please Help!"
            target="_blank"
          >
            <Image
              src="/img/images/whatsapp.png"
              alt="whatsapp-icon"
              height={50}
              width={50}
            />
          </a>
        </div>
        <div className="quote_pop_plus quote_pop_in" onClick={toggleModal}>
          <Contactusmodel modalStatus={modalOpen} toggle={toggleModal} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
