

function App() {

  return (
    <section id="body" className="px-48 bg-black text-white font-Poppins transition-all duration-1000">
      <header id="header" className="">
        <nav id="navbar" className="py-6">
          <div className="container flex flex-row justify-between">
            <a className="navbar-brand font-bold text-xl" href="index.html">Taj<span className="text-yellow-400">.</span>Ansari</a>
            <ul className="flex flex-row gap-9 text-sm">
              <li className="nav-item hover:border-b-2 border- hover:border-yellow-500"><a href="#home-section" className="nav-link"><span>Home</span></a></li>
              <li className="nav-item hover:border-b-2 border- hover:border-yellow-500"><a href="#about-section" className="nav-link"><span>About</span></a></li>
              <li className="nav-item hover:border-b-2 border- hover:border-yellow-500"><a href="#resume-section" className="nav-link"><span>Resume</span></a></li>
              <li className="nav-item hover:border-b-2 border- hover:border-yellow-500"><a href="#skills-section" className="nav-link"><span>Skills</span></a></li>
              <li className="nav-item hover:border-b-2 border- hover:border-yellow-500"><a href="#projects-section" className="nav-link"><span>Projects</span></a></li>
              <li className="nav-item hover:border-b-2 border- hover:border-yellow-500"><a href="#contact-section" className="nav-link"><span>Contact</span></a></li>
            </ul>
          </div>
        </nav>
      </header>

      <main id="main" className="mt-96">
        <div>
          <h1>This is main content</h1>
          <button className="px-6 py-3 bg-yellow-500 text-black hover:bg-yellow-500/80">Click Me!</button>
        </div>
      </main>

      <footer id="footer">
        <div>
          <h1>This is footer</h1>
        </div>
      </footer>
    </section>
  )
}

export default App
