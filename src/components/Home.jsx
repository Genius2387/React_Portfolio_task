
import React from "react";
import Header from "./Header.jsx";


function Home() {
  return (
    <div>
      <Header 
        title="Welcome to My Portfolio" 
        subtitle="Building amazing web experiences with modern technologies"
        showButton={true}
      />
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="mb-4">Hello, I'm Genius</h2>
              <p className="lead">Passionate about creating beautiful and functional websites that make a difference.</p>
              <p>With expertise in React, JavaScript, and modern web technologies, I bring ideas to life through code.</p>
            </div>
            <div className="col-md-6">
              <div className="bg-light p-5 text-center rounded">
                <i className="bi bi-code-square display-1 text-primary"></i>
                <div className="display-1 text-primary">
                  <img src="./assets/p1.jpg" alt="Home Illustration" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
