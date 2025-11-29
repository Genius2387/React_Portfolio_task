import Header from "./Header.jsx";

function Contact() {
  const contactInfo = [
    { label: 'Email', value: 'geniuswaghamare.com' },
    { label: 'Phone', value: '+91 8805345560' },
    { label: 'Location', value: 'India' }
  ];
  
  const handleSubmit = () => {
    alert('Message sent successfully!');
  };
  
  return (
    <div>
      <Header 
        title="Contact Me" 
        subtitle="Let's work together on your next project"
        showButton={false}
      />
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <h3 className="mb-4">Get In Touch</h3>
              {contactInfo.map((info, index) => (
                <div className="d-flex align-items-center mb-3" key={index}>
                  <div>
                    <strong>{info.label}:</strong> {info.value}
                  </div>
                </div>
              ))}
            </div>
            <div className="col-lg-6">
              <h3 className="mb-4">Send a Message</h3>
              <div>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Your Name" />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" placeholder="Your Email" />
                </div>
                <div className="mb-3">
                  <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
                </div>
                <button onClick={handleSubmit} className="btn btn-primary">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;