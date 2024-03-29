const Contact =()=>{
    return (
        <div className="contact-page">
            <h1 className="contact-heading">Contact Us</h1>
            <input type="text" className="name-input" placeholder="Enter Your Name"/>
            <input type="text" className="phone-input" placeholder="Enter Your Phone" />
            <input type="text" className="email" placeholder="Enter Your Email"/>
            <textarea className="message" rows={10} placeholder="Write a message for us" />
            <button type="submit" className="submit-btn">Submit</button>
        </div>
    )
};

export default Contact;