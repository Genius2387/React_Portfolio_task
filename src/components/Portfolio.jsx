import Header from "./Header.jsx";

function Portfolio() {
  const projects = [
    { name: 'E-Commerce Platform', category: 'Web App', color: 'primary' },
    { name: 'Social Media Dashboard', category: 'Dashboard', color: 'success' },
    { name: 'Blog Website', category: 'Website', color: 'info' },
    { name: 'Task Management App', category: 'Web App', color: 'warning' }
  ];
  
  return (
    <div>
      <Header 
        title="Portfolio" 
        subtitle="Check out my recent projects"
        showButton={false}
      />
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {projects.map((project, index) => (
              <div className="col-md-6" key={index}>
                <div className="card shadow">
                  <div className={`card-header bg-${project.color} text-white`}>
                    <h5 className="mb-0">{project.name}</h5>
                  </div>
                  <div className="card-body">
                    <p className="card-text">Category: {project.category}</p>
                    <button className="btn btn-outline-primary">View Project</button>
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

export default Portfolio;