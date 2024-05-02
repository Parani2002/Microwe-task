import React from "react";
import "./App.css";
import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    // Simple validation
    if (!formData.firstname.trim()) {
      newErrors.firstname = "Name is required";
    }
    if (!formData.lastname.trim()) {
      newErrors.lastname = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Mobile Number is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    if (Object.keys(newErrors).length === 0) {
  
      setSubmitted(true);
   
    } else {
      setErrors(newErrors);
    }
  };
  return (
    <div>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div className="form">
            <div className="contact-form">
              <div className="top">
                <div className="left-side">
                  <div className="input-box">
                    <label htmlFor="firstName">First name</label>
                    <br></br>
                    <br></br>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleChange}
                    /><br></br>
                    {errors.firstname && <span>{errors.firstname}</span>}
                  </div>

                  <div className="input-box">
                    <br></br>
                    <label htmlFor="email">Email</label>
                    <br></br>
                    <br></br>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                    /><br></br>
                    {errors.email && <span>{errors.email}</span>}
                  </div>
                </div>

                <div className="right-side">
                  <div className="input-box">
                    <label htmlFor="lastname">Last name</label>
                    <br></br>
                    <br></br>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      placeholder="lastname"
                      value={formData.lastname}
                      onChange={handleChange}
                    /><br></br>
                    {errors.lastname && <span>{errors.lastname}</span>}
                  </div>

                  <div className="input-box">
                    <br></br>
                    <label htmlFor="phone">Phone Number</label>
                    <br></br>
                    <br></br>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    /><br></br>
                    {errors.phone && <span>{errors.phone}</span>}
                  </div>
                </div>
              </div>

              <div className="middle">
                <label htmlFor="cars">Select the option</label>
                <br />
                <br></br>
                <select id="cars" name="cars">
                  <option value="volvo">select the option</option>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="fiat">Fiat</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
              <div className="last">
                <br></br>
                <label htmlFor="message">Message</label>
                <br></br>
                <br></br>

                <textarea
                  id="message"
                  name="message"
                  rows={10}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea><br></br>
                {errors.message && <span>{errors.message}</span>}
              </div>
              <div className="submit">
                <button type="submit">Submit</button>
              </div>
            </div>
          </div>
        </form>
      ) : (
        <div className="successmessage">Form submitted successfully!</div>
      )}
    </div>
  );
};

export default Form;
