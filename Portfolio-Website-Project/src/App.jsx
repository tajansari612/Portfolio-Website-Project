
import linkedinLogo from "./assets/linkedin.png"
import githubLogo from "./assets/github.png"
import gfgLogo from "./assets/gfg.png"
import myImage from "./assets/my-image.png"

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
              <li className="nav-item hover:border-b-2 border- hover:border-yellow-500"><a href="#resume-section" className="nav-link"><span>Academics</span></a></li>
              <li className="nav-item hover:border-b-2 border- hover:border-yellow-500"><a href="#skills-section" className="nav-link"><span>Skills</span></a></li>
              <li className="nav-item hover:border-b-2 border- hover:border-yellow-500"><a href="#projects-section" className="nav-link"><span>Projects</span></a></li>
              <li className="nav-item hover:border-b-2 border- hover:border-yellow-500"><a href="#contact-section" className="nav-link"><span>Contact</span></a></li>
            </ul>
          </div>
        </nav>
      </header>

      <main id="main" className="mt-8">
        <div id="home"></div>
        <div id="about"></div>
        <div id="academics"></div>
        <div id="skills"></div>
        <div id="projects"></div>

        <div id="contact" className="flex flex-col">
          <h1 className="text-center font-semibold text-3xl">Contact Me</h1>
          <div id="contact-details" className="flex flex-row gap-16">
            <span id="address">
              <img id="address-logo" />
              <h2>Addres</h2>
              <p>
                Near Sai Baba temple,
                 Shirdi, Ahmednagar, 
                 Maharashtra, India
              </p>
            </span>
            <span id="mobile-number">
              <img id="mobile-number-logo" />
              <h2>Contact Number</h2>
              <p>+91 9022859455</p>
            </span>
            <span id="email">
              <img id="email-logo" />
              <h2>Email Address</h2>
              <p>tajansari612@gmail.com</p>
            </span>
            <span id="website">
              <img id="website-logo" />
              <h2>Website</h2>
              <p>tajansari612.com</p>
            </span>
          </div>

          <div id="form-section" className="flex flex-row">
            <div id="form-img" className="bg-[#1e1e1e] w-1/2">
              <img src={myImage} alt="" />
            </div>
            <div id="contact-form" className="w-1/2 bg-gray-100">
              <form>
                <div id="form" className="flex flex-col gap-4 p-14">
                  <input type="text" id="name" className="px-3 py-4 text-black/90 rounded border border-gray-300 outline-gray-700 outline-1" placeholder="Your Name" />
                  <input type="email" id="email" className="px-3 py-4 text-black/90 rounded border border-gray-300 outline-gray-700 outline-1" placeholder="Your Email" />
                  <input type="text" id="subject" className="px-3 py-4 text-black/90 rounded border border-gray-300 outline-gray-700 outline-1" placeholder="Subject" />
                  <textarea id="message" className="px-3 py-4 text-black/90 rounded border border-gray-300 outline-gray-700 outline-1" rows="10" placeholder="Message"></textarea>
                  <span><button className="text-black/90 font-medium text-sm bg-yellow-400/80 py-4 px-10 rounded-full" type="submit">Send Message</button></span>
                </div>
              </form>
            </div>
          </div>
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
