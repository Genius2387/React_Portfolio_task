import Header from "./Header.jsx";

function Blog() {
  const posts = [
    { title: 'Getting Started with React', date: '2024-01-15', excerpt: 'Learn the basics of React and component-based architecture.' },
    { title: 'CSS Grid vs Flexbox', date: '2024-01-10', excerpt: 'Understanding when to use Grid and when to use Flexbox.' },
    { title: 'JavaScript Best Practices', date: '2024-01-05', excerpt: 'Tips and tricks for writing clean JavaScript code.' }
  ];
  
  return (
    <div>
      <Header 
        title="Blog" 
        subtitle="Thoughts, tutorials, and insights"
        showButton={false}
      />
      <section className="py-5">
        <div className="container">
          {posts.map((post, index) => (
            <div className="card mb-4 shadow-sm" key={index}>
              <div className="card-body">
                <h4 className="card-title">{post.title}</h4>
                <p className="text-muted small">Published on {post.date}</p>
                <p className="card-text">{post.excerpt}</p>
                <a href="#read" className="btn btn-primary" onClick={(e) => e.preventDefault()}>Read More</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Blog;