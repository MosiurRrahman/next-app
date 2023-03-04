import React, { useState } from "react";
import Select from "react-select";

const city = [
  { value: "City", label: "City" },
  { value: "dhaka", label: "Dhaka" },
  { value: "chittagong", label: "Chittagong" },
  { value: "comilla", label: "Comilla" },
];

const state = [
  { value: "dhaka", label: "Dhaka" },
  { value: "chittagong", label: "Chittagong" },
  { value: "comilla", label: "Comilla" },
];

const country = [
  { value: "bangladesh", label: "Bangladesh" },
  { value: "nepal", label: "Nepal" },
  { value: "chaina", label: "China" },
];

function UserProfile() {
  const [selectedOptions, setSelectedOptions] = useState({});
  const customStyles = {
    valueContainer: (provided) => ({
      ...provided,
      padding: "5px 8px", // Customize padding here
    }),
  };
  const handleSelectChange = (option, name) => {
    setSelectedOptions((prevState) => ({ ...prevState, [name]: option }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(selectedOptions));
  };

  return (
    <div className="user-form">
      <form onSubmit={handleSelectChange}>
        <div className="row">
          <div className="col-lg-6">
            <label>
              Frist Name *
              <input
                type="text"
                name="fname"
                id="fname"
                placeholder="Your first name"
              />
            </label>
          </div>
          <div className="col-lg-6">
            <label>
              Last Name *
              <input
                type="text"
                name="lname"
                id="lname"
                placeholder="Your last name"
              />
            </label>
          </div>
          <div className="col-lg-6">
            <label>
              Contact Number
              <input
                type="text"
                name="number"
                id="number"
                placeholder={+8801}
              />
            </label>
          </div>
          <div className="col-lg-6">
            <label>
              Email
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
              />
            </label>
          </div>
          <div className="col-12">
            <label>
              Address
              <input type="text" name="address" id="address" />
            </label>
          </div>
          <div className="col-lg-6">
            <div className="select-level">
              <label>City</label>
              <Select
                name="city"
                styles={customStyles}
                placeholder="City"
                options={city}
                value={selectedOptions.city}
                onChange={(option) => handleSelectChange(option, "city")}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="select-level">
              <label>State</label>
              <Select
                name="state"
                styles={customStyles}
                placeholder="State"
                options={state}
                value={selectedOptions.state}
                onChange={(option) => handleSelectChange(option, "state")}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <label>
              Zip Code
              <input type="text" name="zipcode" id="zipcode" />
            </label>
          </div>
          <div className="col-lg-6">
            <div className="select-level">
              <label>Country</label>
              <Select
                name="country"
                styles={customStyles}
                placeholder="Country"
                options={country}
                value={selectedOptions.country}
                onChange={(option) => handleSelectChange(option, "country")}
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-inner">
              <label>
                Password*
                <i className="bi bi-eye-slash" id="togglePasswordTwo" />
                <input
                  type="password"
                  name="email"
                  id="passwordTwo"
                  placeholder="******"
                />
              </label>
            </div>
            <div className="form-inner">
              <label>
                Confrim Password*
                <i className="bi bi-eye-slash" id="togglePasswordThree" />
                <input
                  type="password"
                  name="email"
                  id="passwordThree"
                  placeholder="*****"
                />
              </label>
            </div>
            <button type="submit">Update Profile</button>
            <button className="cancel">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserProfile;
