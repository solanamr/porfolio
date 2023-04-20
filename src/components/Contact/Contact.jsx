import { useState } from 'react';

import emailjs from '@emailjs/browser';

import { useTranslation } from "react-i18next";


const Contact = () => {

    const [emailData, setEmailData] = useState({
        name: "", 
        email: "", 
        subject: "", 
        message: ""
    });

    const [t] = useTranslation("global");

    function handleChange(e){
        setEmailData({
            ...emailData,
            [e.target.name] : e.target.value
        })
    }

    function sendEmail(e){
        e.preventDefault()
        emailjs.send('service_v0i504i', 'template_ffv35vm', emailData, 'dTwc7sMrSbni_ZCkC')
        .then(function(response) {
            alert('Message succefully sent!')
                window.location.reload(false)
        }, function(error) {
            alert('Failed to send, please try again!')
        })
    }

  return (
    <div id='contact' className="pt-40 lg:pt-[450px]">
      <h4 className='text-2xl text-center font-semibold px-2'>
      {t("contact.title")}
      </h4>

      <form onSubmit={sendEmail}>
        <div className='flex flex-col'>
          <input
            type="text"
            name="name"
            value={emailData.name}
            placeholder="Name"
            onChange={(e) => handleChange(e)}
            required
            className='border border-darkGrey lg:w-60 pl-2 rounded-sm bg-lightGrey py-1 lg:ml-[43%] mt-7 mb-1'
          />
          <input
            type="email"
            name="email"
            value={emailData.email}
            placeholder="Email"
            onChange={(e) => handleChange(e)}
            required
            className='border border-darkGrey lg:w-60 pl-2 rounded-sm bg-lightGrey py-1 lg:ml-[43%] mt-7 mb-1'
          />
          <input
            placeholder="Subject"
            type="text"
            name="subject"
            value={emailData.subject}
            onChange={(e) => handleChange(e)}
            required
            className='border border-darkGrey lg:w-60 pl-2 rounded-sm bg-lightGrey py-1 lg:ml-[43%] mt-7 mb-1'
          />
          <textarea
            name="message"
            value={emailData.message}
            placeholder="Message"
            onChange={(e) => handleChange(e)}
            required
            className='border border-darkGrey lg:w-96 pl-2 rounded-sm bg-lightGrey py-6  lg:ml-[38%] mt-7 mb-1'
          ></textarea>
          <button type='submit' className='bg-darkGrey text-lightGrey text-lg w-20 rounded-sm py-1 ml-[77%] lg:ml-[48%] mt-7 mb-1
           hover:bg-grey hover:text-darkGrey transition duration-300 cursor-pointer'>Send</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
