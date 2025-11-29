import Header from "./Header.jsx";

function About() {
  const skills = ['React', 'JavaScript', 'HTML/CSS', 'Node.js', 'Bootstrap', 'MongoDB'];
  
  return (
    <div>
      <Header 
        title="About Me" 
        subtitle="Learn more about my journey and expertise"
        showButton={false}
      />
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h3 className="mb-4">My Story</h3>
              <p className="mb-4">
                I'm a passionate web developer with over 5 years of experience creating dynamic and responsive web applications. 
                My journey in tech started with a curiosity about how websites work, and it has grown into a fulfilling career.
              </p>
              <h4 className="mb-3">Skills & Technologies</h4>
              <div className="row g-3">
                {skills.map((skill, index) => (
                  <div className="col-md-4" key={index}>
                    <div className="card text-center shadow-sm">
                      <div className="card-body">
                        <h5 className="card-title">{skill}</h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;