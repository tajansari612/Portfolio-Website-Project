
import linkedinLogo from "./assets/linkedin.png"
import githubLogo from "./assets/github.png"
import gfgLogo from "./assets/gfg.png"
import myImage from "./assets/my-image.png"
import addressLogo from "./assets/home-address.png"
import phoneLogo from "./assets/phone.png"
import emailLogo from "./assets/sent.png"
import websiteLogo from "./assets/earth-grid.png"

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
              <li className="nav-item hover:border-b-2 border- hover:border-yellow-500"><a href="#resume-section" className="nav-link"><span>Education</span></a></li>
              <li className="nav-item hover:border-b-2 border- hover:border-yellow-500"><a href="#skills-section" className="nav-link"><span>Skills</span></a></li>
              <li className="nav-item hover:border-b-2 border- hover:border-yellow-500"><a href="#projects-section" className="nav-link"><span>Projects</span></a></li>
              <li className="nav-item hover:border-b-2 border- hover:border-yellow-500"><a href="#contact-section" className="nav-link"><span>Contact</span></a></li>
            </ul>
          </div>
        </nav>
      </header>

      <main id="main" className="mt-8">
        <div id="home" className="flex flex-row">
          <div id="left" className="w-1/2 flex gap-4 flex-col pt-10 tracking-wider">
            <h2 className="text-lg text-yellow-400 tracking-widest">HELLO!</h2>
            <h1 className="text-6xl font-bold leading-[80px]">I am <span className="text-yellow-500">Taj Mohammad Ansari</span></h1>
            <h3 className="text-3xl font-medium">A Full Stack Web Developer</h3>
          </div>
          <div id="right" className="w-1/2 opacity-70 -translate-y-24">
            <img src={myImage} alt="" />
          </div>
        </div>

        <div id="about" className="mb-40 flex flex-row gap-8">
          <div id="about-img" className="w-1/2 opacity-70">
            <img src={myImage} />
          </div>
          <div id="about-section" className="w-1/2 pt-24">
            <h1 className="text-left font-bold mb-4 text-5xl translate-x-6">About Me</h1>
            <h2 className="text-left font-black text-8xl -translate-y-16 text-white/10">About</h2>
            <ul id="about-info" className="flex flex-col gap-4 w-full mb-14">
              <li className="tracking-wide flex"><span className="font-semibold w-36">Name:</span>          <span className="text-white/60"> Taj Mohammad Ansari</span></li>
              <li className="tracking-wide flex"><span className="font-semibold w-36">Date of Birth:</span> <span className="text-white/60"> 06-12-2000</span></li>
              <li className="tracking-wide flex"><span className="font-semibold w-36">Address:</span>       <span className="text-white/60"> Shirdi, Ahmednagar, Maharashtra, India</span></li>
              <li className="tracking-wide flex"><span className="font-semibold w-36">Zipcode: </span>      <span className="text-white/60"> 423109</span></li>
              <li className="tracking-wide flex"><span className="font-semibold w-36">Email:</span>         <span className="text-white/60"> tajansari612@gmail.com</span></li>
              <li className="tracking-wide flex"><span className="font-semibold w-36">Mobile No:</span>     <span className="text-white/60"> +91 9022859455</span></li>
            </ul>
            <button className="bg-yellow-400 text-black text-sm font-medium px-4 py-4 rounded-full">DOWNLOAD RESUME</button>
          </div>
        </div>

        <div id="education" className="mb-40">
          <h1 className="text-center font-bold mb-6 text-5xl">Education</h1>
          <h2 className="text-center font-black text-8xl -translate-y-16 text-white/10">Education</h2>
          <div id="education-box" className="flex flex-row justify-between">

            <div id="be" className="bg-white/10 px-6 py-8 rounded-md leading-loose">
              <h1 className="text-yellow-300 text-3xl font-bold mb-3">2020-2024</h1>
              <h2 className="text-3xl mb-3">Bachelore of Engineering</h2>
              <h3 className="text-white/60 mb-3">SAVITRIBAI PHULE PUNE UNIVERSITY</h3>
              <h4 className="text-2xl font-semibold">CGPA: 7.56</h4>
            </div>

            <div id="hsc" className="bg-white/10 px-6 py-8 rounded-md leading-loose">
              <h1 className="text-yellow-300 text-3xl font-bold mb-3">2019-2020</h1>
              <h2 className="text-3xl mb-3">12th</h2>
              <h3 className="text-white/60 mb-3">Maharashtra State Board</h3>
              <h4 className="text-2xl font-semibold">Percentage: 83.69</h4>
            </div>

            <div id="ssc" className="bg-white/10 px-6 py-8 rounded-md leading-loose">
              <h1 className="text-yellow-300 text-3xl font-bold mb-3">2017-2018</h1>
              <h2 className="text-3xl mb-3">10th</h2>
              <h3 className="text-white/60 mb-3">Maharashtra State Board</h3>
              <h4 className="text-2xl font-semibold">Percentage: 95.20</h4>
            </div>

          </div>
        </div>

        <div id="skills" className="w-full mb-40">
          <h1 className="text-center font-bold mb-6 text-5xl">My Skills</h1>
          <h2 className="text-center font-black text-8xl -translate-y-16 text-white/10">Skills</h2>
          <div id="skills-box" className="grid grid-cols-2 gap-6">

            <div id="cpp" className="w-full">
              <div className="w-4/5 flex flex-row justify-between">
                <span className="text-white/80 mb-2 text-xl font-medium">C++</span>
                <span className="text-white/80 mb-2 text-xl font-medium">80%</span>
              </div>
              <div id="progress" className="w-full h-3 rounded-lg bg-white/10">
                <div id="clr" className="bg-yellow-400 w-4/5 h-full rounded-md"></div>
              </div>
            </div>

            <div id="dsa" className="w-full">
              <div className="w-2/3 flex flex-row justify-between">
                <span className="text-white/80 mb-2 text-xl font-medium">DSA</span>
                <span className="text-white/80 mb-2 text-xl font-medium">66%</span>
              </div>
              <div id="progress" className="w-full h-3 rounded-lg bg-white/10">
                <div id="clr" className="bg-yellow-400 w-2/3 h-full rounded-md"></div>
              </div>
            </div>

            <div id="html" className="w-full">
              <div className="w-4/5 flex flex-row justify-between">
                <span className="text-white/80 mb-2 text-xl font-medium">HTML</span>
                <span className="text-white/80 mb-2 text-xl font-medium">80%</span>
              </div>
              <div id="progress" className="w-full h-3 rounded-lg bg-white/10">
                <div id="clr" className="bg-yellow-400 w-4/5 h-full rounded-md"></div>
              </div>
            </div>

            <div id="css" className="w-full">
              <div className="w-3/4 flex flex-row justify-between">
                <span className="text-white/80 mb-2 text-xl font-medium">CSS</span>
                <span className="text-white/80 mb-2 text-xl font-medium">75%</span>
              </div>
              <div id="progress" className="w-full h-3 rounded-lg bg-white/10">
                <div id="clr" className="bg-yellow-400 w-3/4 h-full rounded-md"></div>
              </div>
            </div>

            <div id="javascript" className="w-full">
              <div className="w-4/5 flex flex-row justify-between">
                <span className="text-white/80 mb-2 text-xl font-medium">Javascript</span>
                <span className="text-white/80 mb-2 text-xl font-medium">80%</span>
              </div>
              <div id="progress" className="w-full h-3 rounded-lg bg-white/10">
                <div id="clr" className="bg-yellow-400 w-4/5 h-full rounded-md"></div>
              </div>
            </div>

            <div id="react" className="w-full">
              <div className="w-3/5 flex flex-row justify-between">
                <span className="text-white/80 mb-2 text-xl font-medium">React</span>
                <span className="text-white/80 mb-2 text-xl font-medium">60%</span>
              </div>
              <div id="progress" className="w-full h-3 rounded-lg bg-white/10">
                <div id="clr" className="bg-yellow-400 w-3/5 h-full rounded-md"></div>
              </div>
            </div>

            <div id="mysql" className="w-full">
              <div className="w-3/4 flex flex-row justify-between">
                <span className="text-white/80 mb-2 text-xl font-medium">MySQL</span>
                <span className="text-white/80 mb-2 text-xl font-medium">75%</span>
              </div>
              <div id="progress" className="w-full h-3 rounded-lg bg-white/10">
                <div id="clr" className="bg-yellow-400 w-3/4 h-full rounded-md"></div>
              </div>
            </div>

            <div id="mongodb" className="w-full">
              <div className="w-1/5 flex flex-row justify-between">
                <span className="text-white/80 mb-2 text-xl font-medium">MongoDB</span>
                <span className="text-white/80 mb-2 text-xl font-medium">10%</span>
              </div>
              <div id="progress" className="w-full h-3 rounded-lg bg-white/10">
                <div id="clr" className="bg-yellow-400 w-1/5 h-full rounded-md"></div>
              </div>
            </div>

            <div id="python" className="w-full">
              <div className="w-2/5 flex flex-row justify-between">
                <span className="text-white/80 mb-2 text-xl font-medium">Python</span>
                <span className="text-white/80 mb-2 text-xl font-medium">40%</span>
              </div>
              <div id="progress" className="w-full h-3 rounded-lg bg-white/10">
                <div id="clr" className="bg-yellow-400 w-2/5 h-full rounded-md"></div>
              </div>
            </div>

            <div id="nodejs" className="w-full">
              <div className="w-3/5 flex flex-row justify-between">
                <span className="text-white/80 mb-2 text-xl font-medium">NodeJs</span>
                <span className="text-white/80 mb-2 text-xl font-medium">60%</span>
              </div>
              <div id="progress" className="w-full h-3 rounded-lg bg-white/10">
                <div id="clr" className="bg-yellow-400 w-3/5 h-full rounded-md"></div>
              </div>
            </div>

            <div id="express" className="w-full">
              <div className="w-3/5 flex flex-row justify-between">
                <span className="text-white/80 mb-2 text-xl font-medium">Express</span>
                <span className="text-white/80 mb-2 text-xl font-medium">60%</span>
              </div>
              <div id="progress" className="w-full h-3 rounded-lg bg-white/10">
                <div id="clr" className="bg-yellow-400 w-3/5 h-full rounded-md"></div>
              </div>
            </div>
          </div>

        </div>

        <div id="projects" className="mb-40">
          <h1 className="text-center font-bold mb-6 text-5xl">My Projects</h1>
          <h2 className="text-center font-black text-8xl -translate-y-16 text-white/10">Projects</h2>
          <div id="project-box" className="grid grid-cols-2 gap-8 mt-6">

            <div id="hindi-chatbot" className="px-8 py-10 bg-white/10 rounded-md">
              <div className="flex flex-row justify-between mb-6">
                <h1 className="inline text-yellow-400 text-2xl font-bold">Hindi Chatbot</h1>
                <h2 className="inline">Sep 23</h2>
              </div>
              <ul className="flex flex-col gap-2 leading-loose text-white/60">
                <li>
                  Developed an AI-powered chatbot in Hindi, leveraging the Rasa
                  framework and Python. The Chabot Uses NLU and generation capabilities
                  to provide intelligent responses.
                </li>
                <li>
                  Successfully integrated MySQL as the database backend, enabling
                  efficient data retrieval and management
                </li>
                <li className="text-white font-medium">
                  Technologies used: <span className="font-base text-white/60">Python, NLU, Rasa Framework, MySQL</span>
                </li>
              </ul>
            </div>

            <div id="portfolio-website" className="px-8 py-10 bg-white/10 rounded-md">
              <div className="flex flex-row justify-between mb-6">
                <h1 className="inline text-yellow-400 text-2xl font-bold">Portfolio Website</h1>
                <h2 className="inline">Feb 24</h2>
              </div>
              <ul className="flex flex-col gap-2 leading-loose text-white/60">
                <li>
                  Created a comprehensive personal portfolio using React, HTML, CSS, and JavaScript, featuring
                  sections for Skills, About Me, Projects, and Contact Me.
                </li>
                <li>
                  Designed a responsive and visually appealing interface to effectively showcase expertise and work.
                </li>
                <li>
                  Ensured smooth functionality and cross-device compatibility for an optimal viewing experience.
                </li>
                <li className="text-white font-medium">
                  Technologies used: <span className="font-base text-white/60">HTML, Tailwind CSS, ReactJs, Javascript</span>
                </li>
              </ul>
            </div>

            <div id="currency-exchange-browser-extension" className="px-8 py-10 bg-white/10 rounded-md">
              <div className="flex flex-row justify-between mb-6">
                <h1 className="inline text-yellow-400 text-2xl font-bold">Currency Exchange Browser Extension</h1>
                <h2 className="inline text-nowrap">Dec 23</h2>
              </div>
              <ul className="flex flex-col gap-2 leading-loose text-white/60">
                <li>
                  Utilized the Currency Exchange RapidAPI to access currency exchange rates. Enabled users to
                  Convert between a wide range of currencies, catering to diverse international audiences.
                </li>
                <li>
                  Implemented robust error handling to ensure the application gracefully handles scenarios such as
                  invalid inputs or API errors.
                </li>
                <li className="text-white font-medium">
                  Technologies used: <span className="font-base text-white/60"> JavaScript, RapidAPI, HTML, CSS</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div id="contact" className="flex flex-col mb-12">
          <h1 className="text-center font-bold mb-6 text-5xl">Contact Me</h1>
          <h2 className="text-center font-black text-8xl -translate-y-16 text-white/10">Contact</h2>
          <div id="contact-details" className="flex flex-row gap-16 mb-24">
            <span id="address" className="w-1/5 text-center flex flex-col gap-5 justify-start items-center">
              <img id="address-logo" className="translate-x-3" src={addressLogo} width="64px" />
              <h2 className="text-xl font-semibold mt-1">ADDRESS</h2>
              <p className="leading-relaxed text-white/60">
                Near Sai Baba temple, Shirdi,
                Ahmednagar, Maharashtra,
                India
              </p>
            </span>

            <span id="mobile-number" className="w-1/5 text-center flex flex-col gap-5 justify-start items-center">
              <img id="mobile-number-logo" src={phoneLogo} width="64px" />
              <h2 className="text-xl font-semibold mt-1">CONTACT NUMBER</h2>
              <p className="leading-relaxed text-white/60">+91 9022859455</p>
            </span>

            <span id="email" className="w-1/5 text-center flex flex-col gap-5 justify-start items-center">
              <img id="email-logo" src={emailLogo} width="64px" />
              <h2 className="text-xl font-semibold mt-1">Email Address</h2>
              <p className="leading-relaxed text-white/60">tajansari612@gmail.com</p>
            </span>

            <span id="website" className="w-1/5 text-center flex flex-col gap-5 justify-start items-center">
              <img id="website-logo" src={websiteLogo} width="64px" />
              <h2 className="text-xl font-semibold mt-1">Website</h2>
              <p className="leading-relaxed text-white/60">tajansari612.com</p>
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

          <div id="copyright" className="my-16">
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
