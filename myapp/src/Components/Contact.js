import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    if (!formData.message) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);

    // If no errors, proceed to send email
    if (Object.keys(errors).length === 0) {
      emailjs.init('uc61kemyXGq43b-Xt'); 
      emailjs.sendForm(
        'service_3eu6in7', // Replace with your EmailJS service ID 
        'template_qc9uovj', // Replace with your EmailJS template ID
        e.target,
        'uc61kemyXGq43b-Xt' // Replace with your EmailJS user ID
      )
      .then((result) => {
        console.log(result.text);
        alert('Message Sent!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error(error.text);
        alert('Error sending message. Please try again.');
      });
    }
  };

  return (
    <div id="Contact" className="flex justify-center bg-[#36383e] text-white p-10 md:p-12 items-center 
    flex-col space-y-2 md:spacey-0 md:space-x-6 ">
      <div >
        <h1 className="text-2xl md:text-6xl font-semibold">Contact</h1>
       
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col w-80 md:w-[500px]">
        <label className="text-sm md:text-lg font-semibold">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="p-2 mb-2 border border-gray-300  text-black
          rounded-3xl shadow-md 
      shadow-[#B1D4E0] hover:scale-105 hover:shadow-lg duration-300"
          placeholder="Your Name"
        />
        {formErrors.name && <p className="text-red-500 text-xs">{formErrors.name}</p>}

        <label className="text-sm md:text-lg font-semibold">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="p-2 mb-2 border border-gray-300  text-black
          rounded-3xl shadow-md 
      shadow-[#B1D4E0] hover:scale-105 hover:shadow-lg duration-300"
          placeholder="Your Email"
        />
        {formErrors.email && <p className="text-red-500 text-xs">{formErrors.email}</p>}

        <label className="text-sm md:text-lg font-semibold">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          className="p-2 mb-2 border border-gray-300  resize-none overflow-y-auto h-32 text-black
          rounded-3xl shadow-md 
      shadow-[#B1D4E0] hover:scale-105 hover:shadow-lg duration-300"
          placeholder="Your Message"
          
        />
        {formErrors.message && <p className="text-red-500 text-xs">{formErrors.message}</p>}

        <button type="submit" className="mt-4 bg-gradient-to-r from-[#00ADB5] to-[#005F73]
       text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-3xl shadow-md 
      shadow-[#B1D4E0] hover:scale-105 hover:shadow-lg duration-300 w-40 self-center">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
