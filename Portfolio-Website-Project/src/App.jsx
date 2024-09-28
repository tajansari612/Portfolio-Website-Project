
import linkedinLogo from "./assets/linkedin.png"
import githubLogo from "./assets/github.png"
import gfgLogo from "./assets/gfg.png"

function App() {

  return (
    <section id="body" className="px-24 bg-black text-white font-Poppins transition-all duration-1000">
      <header id="header" className="">
        <nav id="navbar" className="py-6">
          <div className="container flex flex-row justify-between">
            <a className="navbar-brand font-bold text-xl" href="index.html">Taj<span className="text-yellow-400">.</span>Ansari</a>
            <ul className="flex flex-row gap-12">
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
        <div className="container pt-24 pb-6 flex flex-col">
          <div className="flex flex-row justify-between">
            <div id="about-logos" className="w-64">
              <h2 className="text-2xl font-semibold mb-8">About</h2>
              <p className="leading-loose text-white/60">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                there live the blind texts.</p>
                
              <ul className="mt-6 flex flex-row gap-4">
                <li className="icon-linkedin">
                  <a href="https://www.linkedin.com/in/tajansari612/" target="_blank">
                    <img src={linkedinLogo} width="40px" />
                  </a>
                </li>
                <li className="icon-github">
                  <a href="https://github.com/tajansari612" target="_blank">
                    <img src={githubLogo} width="40px" />
                  </a>
                </li>
                <li className="icon-gfg">
                  <a href="https://www.geeksforgeeks.org/user/tajansari612/" target="_blank">
                    <img src={gfgLogo} width="40px" />
                  </a>
                </li>
              </ul>
            </div>

            <div id="links" className="col-md">
              <div className="ftco-footer-widget mb-4 ml-md-4">
                <h2 className="text-2xl font-semibold mb-8">Links</h2>
                <ul className="flex flex-col gap-2 text-white/60">
                  <li className="hover:text-white hover:font-medium"><a href="#home">Home</a></li>
                  <li className="hover:text-white hover:font-medium"><a href="#about">About</a></li>
                  <li className="hover:text-white hover:font-medium"><a href="#projects">Projects</a></li>
                  <li className="hover:text-white hover:font-medium"><a href="#contact">Contact</a></li>
                </ul>
              </div>
            </div>

            <div id="have-quetion" className="w-64">
              <div className="ftco-footer-widget mb-4">
                <h2 className="text-2xl font-semibold mb-8">Have a Questions?</h2>
                <div className="mb-3">
                  <ul className="flex flex-col gap-2 text-white/60">
                    <li>Near Sai Baba temple, Shirdi, Ahmednagar, Maharashtra, India</li>
                    <li><a href="#">+91 9022859455</a></li>
                    <li><a href="#">tajansari612@gmail.com</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div id="copyright" className="mt-16">
            <div className="col-md-12 text-center text-xs font-extralight text-white/30">
              <p>
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All rights reserved | This template
                is made with <i className="icon-heart color-danger" aria-hidden="true"></i> by <a
                  href="https://colorlib.com" target="_blank">Colorlib</a>

              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default App
