import React, { useState } from "react";
import UploadWidget from "../components/UploadWidget";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import axios from "axios";
const Add_Items = () => {
  // Initialize Cloudinary instance
  const cld = new Cloudinary({ cloud: { cloudName: "dp7ejza0s" } });
  const Add_Items = cld
    .image("fb-355gk23mfas02f00sd_d3om2i")
    .format("auto")
    .quality("auto");

  // State to store form values
  const [values, setValues] = useState({
    name: "",
    weapon: false,
    artifact: false, // Use boolean for checkbox
    core: false,
    deleted: false,
    icon: "",
  });

  // Handle text input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // Handle checkbox change
  const handleCheckBox = (e) => {
    const { name, checked } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: checked, // Set checkbox value as boolean
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Item Added to Database");
    console.log(values);
    axios
      .post("http://localhost:9000/add_substats", values)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <form className="relative" onSubmit={handleSubmit}>
        {/* Display Cloudinary Image */}
        <AdvancedImage cldImg={Add_Items} className="w-full h-auto" />

        {/* Form Container */}
        <div className="absolute top-10 left-0 bg-sky-500/20 mt-10% text-white z-10 w-full h-auto align-center justify-center flex">
          <div className="flex flex-col">
            {/* Text Input */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={values.name}
              onChange={handleChange}
            />

            <UploadWidget />

            <label>
              Artifact:
              <input
                type="checkbox"
                name="artifact"
                checked={values.artifact}
                onChange={handleCheckBox}
                id="artifacts"
              />
            </label>
            <label>
              Weapon:
              <input
                type="checkbox"
                name="weapon"
                checked={values.weapon}
                onChange={handleCheckBox}
                id="weapons"
              />
            </label>
            <label>
              Core:
              <input
                type="checkbox"
                name="core"
                checked={values.core}
                onChange={handleCheckBox}
                id="cores"
              />
            </label>

            <button type="submit" className="bg-black text-white p-2 mt-2">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Add_Items;
