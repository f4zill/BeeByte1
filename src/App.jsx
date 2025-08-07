import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [visibleCount, setVisibleCount] = useState(3);

  const articles = [
    {
      title: '🕸 Spider-Web Technique for Language Learning',
      content: 'Learn a language step-by-step using this intuitive technique.',
      file: 'spidey.html'
    },
    {
      title: '🃏 Joker: The Chaos Agent',
      content: 'Published by DC — A villain defined by chaos, intelligence, and complete unpredictability.',
      file: 'joker.html'
    },
    {
      title: '🚀 Understanding Web3 in 5 Minutes',
      content: 'The future of a decentralized web is here. Let’s break down the basics of Web3 tech.',
      file: 'web3.html'
    },
    {
      title: '🧠 AI\'s Impact on Everyday Life',
      content: 'From voice assistants to smart fridges, AI is no longer the future—it\'s the present.',
      file: 'ai-impact.html'
    },
    {
      title: '💡 JavaScript Tricks You Didn\'t Know',
      content: 'Explore mind-blowing features of modern JS that can level up your codebase.',
      file: 'js-tricks.html'
    },
  ];

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const showMoreArticles = () => {
    setVisibleCount(prev => Math.min(prev + 3, articles.length));
  };

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#articles">Articles</a></li>
        </ul>
        <h1 className="logo">BeeByte</h1>
        <button onClick={toggleTheme} className="cta">
          {theme === 'light' ? 'Nacht' : 'Licht'}
        </button>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <h2 className="headline">BeeByte</h2>
        <p className="subtext">Exploring the future, one byte at a time.</p>
        <button className="cta"><a href="#articles">Read Articles</a></button>
      </section>

      {/* Articles Section */}
      <section id="articles" className="articles">
        <h2 className="section-title">Latest Posts</h2>
        <div className="articles-layout">
          {/* Main Posts */}
          <div className="article-list">
            {articles.slice(0, visibleCount).map((article, index) => (
              <article key={index} className="post">
                <a
                  href={`/posts/${article.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>{article.title}</h3>
                  <p>{article.content}</p>
                </a>
              </article>
            ))}
            {visibleCount < articles.length && (
              <button className="see-more" onClick={showMoreArticles}>
                See More
              </button>
            )}
          </div>

          {/* Right Sidebar */}
          <aside className="sidebar">
            <div className="bio">
              <img src="\assets\tsukishima kei_ icon.jpg" alt="My Profile" />
              <h3>Frost</h3>
              <p>
                I'm a curious mind exploring life, tech, and storytelling. This blog is my digital lab of thoughts, tools, and techniques.
              </p>
              <div className="contact-links">
                <a href="https://github.com/f4zill" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://linkedin.com/in/fazilimaad523" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="mailto:your.email@example.com">Gmail</a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 bolg. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
