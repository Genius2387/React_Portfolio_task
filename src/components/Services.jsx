import Header from "./Header.jsx";

function Services() {
  const services = [
    { icon: '💻', title: 'Web Development', description: 'Custom websites built with modern technologies' },
    { icon: '📱', title: 'Responsive Design', description: 'Mobile-first approach for all devices' },
    { icon: '🎨', title: 'UI/UX Design', description: 'Beautiful and intuitive user interfaces' },
    { icon: '⚡', title: 'Performance Optimization', description: 'Fast loading and optimized applications' },
    { icon: '🔧', title: 'Maintenance & Support', description: 'Ongoing support and updates' },
    { icon: '☁️', title: 'Cloud Solutions', description: 'Scalable cloud-based applications' }
  ];
  
  return (
    <div>
      <Header 
        title="Services" 
        subtitle="What I can do for you"
        showButton={false}
      />
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            {services.map((service, index) => (
              <div className="col-md-4" key={index}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body text-center">
                    <div className="display-4 mb-3">{service.icon}</div>
                    <h5 className="card-title">{service.title}</h5>
                    <p className="card-text">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;