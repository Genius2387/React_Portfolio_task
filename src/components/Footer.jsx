function Footer() {
  const socialLinks = ['LinkedIn', 'GitHub', 'Twitter', 'Instagram'];
  
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3">
            <h5>MyPortfolio</h5>
            <p>Creating digital experiences that matter.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <h6 className="mb-3">Follow Me</h6>
            {socialLinks.map((link, index) => (
              <a href="#social" onClick={(e) => e.preventDefault()} className="text-white me-3 text-decoration-none" key={index}>
                {link}
              </a>
            ))}
          </div>
        </div>
        <hr className="bg-white" />
        <div className="text-center">
          <p className="mb-0">©2025 MyPortfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;