
import Head from "next/head";
import Navbar from "@/component/Navbar";

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "@/component/Footer";


export default function Home() {
  return (
    <>
    <Navbar/> 
        <main style={{  scrollBehavior: "smooth" }}>
        <section id="home" style={{ height: "100vh", margin:'0',padding:'0',scrollMarginTop:'80px'}}>
           <div style={{ 
      width: '100vw', 
      height: '100vh', 
      overflow: 'hidden',
      margin: 0,
      padding: 0,
       top: 0,
      left: 0
    }}>
      <Slide
        duration={3000}
        transitionDuration={500}
        infinite
        arrows={false}
        indicators={false}
        autoplay={true}
      >
        <div style={{
          height: '100vh',
          width: '100vw',
          position: 'relative',
          overflow: 'hidden',
          margin: 0,
          padding: 0,
        }}>
          <img
            src="/bgimg1.jpeg"
            alt="Slide 1"
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              display: 'block',
              
            }}
          />
          <p style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'BLACK',
            fontSize: '5rem',
            zIndex: 2,
            textAlign: 'center',
            margin: 0,
            padding: 0,
          }}>
            

Hi, I am <br></br>
Aditi Soni👋<br></br>
Tech Enthusiast
          </p>
        </div>
        <div style={{
          height: '100vh',
          width: '100vw',
          margin: 0,
          padding: 0,
        }}>
          <img
            src="/bgimage2.jpg"
            alt="Slide 2"
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              display: 'block'
            }}
          />
          <p style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'BLACK',
            fontSize: '5rem',
            zIndex: 2,
            textAlign: 'center',
            margin: 0,
            padding: 0,
          }}>
            

Web Developer
          </p>
          
        </div>
        <div style={{
          height: '100vh',
          width: '100vw',
           position: 'relative',
          margin: 0,
          padding: 0,
        }}>
          <img
            src="/slide3.jpg"
            alt="bgimage3.jpg"
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              display: 'block'
            }}
            />
            <p style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'BLACK',
            fontSize: '5rem',
            zIndex: 2,
            textAlign: 'center',
            margin: 0,
            padding: 0,
          }}>

Problem Solver
          </p>
          
        </div>
      </Slide>
    </div>
  
</section>


        
         <section id="about" style={{ minHeight: '100vh', margin:"0",padding:"0px"}}>   
        <div style={{backgroundImage: 'url("/bgimag.jpg")',
    backgroundSize:'cover',
    backgroundPosition:'center',
    minHeight:'100vh',
    color:'white',
    padding :'2rem',   
   }}>
<h1 style={{textAlign:'center',
    fontSize:'3rem',
    marginBottom:'2rem'
    }}>About Me</h1>

    <div style={{display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexwrap:'wrap',
        gap:'3rem'
    }}>
        <div style={{flex:1}}>
           <img src="/leftimg.jpg" alt="profile" 
        style={{
            width:'500px',
            height:'auto',
            borderRadius:'10px',
            boxShadow:'0 4px 12px rgba(0,0,0,0.3)'

        }}
 />     
        </div>
           <div style={{flex:2,fontSize:'1.2',color:'#333', background:'white', height:"350px",textAlign: "center" }}>
            <br></br>
            <p>Hi! I'm a passionate Full Stack Web Development Student,currently Building my skills in technologies like HTML,CSS,JavaScript,React.js,Node,js.MongoDB and Express.js.</p>

            <p style={{marginTop:'1rem'}}>I enjoy turing ideas into reality through code and constantly learning new tools and frameworks.My focus is on building clean,responsive,and user-friendly applications.</p>

            <p style={{marginTop:'1rem'}}>Right now i'm working on improving my frontend design skills while exploring backend development depply.i'm also learning how to build full-stack projects,APls,and dynamic web applications</p>

<div style={{ marginTop: '40px' }}>
  <a href="#contact">
    <button style={{
      margin: '5px',
      backgroundColor: '#4caf50', 
      color: 'white',
      padding: '10px 15px',
      border: 'none',
      borderRadius: '5px'
    }}>
      Let’s Talk
    </button>
  </a>

  <a href="/aditiresume.pdf" target="_blank" rel="noopener noreferrer">
    <button style={{
      margin: '5px',
      backgroundColor: '#2196f3', 
      color: 'white',
      padding: '10px 15px',
      border: 'none',
      borderRadius: '5px'
    }}>
      My Resume
    </button>
  </a>

  <a href="https://medium.com/@aditisyashisoni" target="_blank" rel="noopener noreferrer">
    <button style={{
      margin: '5px',
      backgroundColor: '#f57c00', 
      color: 'white',
      padding: '10px 15px',
      border: 'none',
      borderRadius: '5px'
    }}>
      Medium
    </button>
  </a>

  <a href="https://github.com/aditi-soni14" target="_blank" rel="noopener noreferrer">
    <button style={{
      margin: '5px',
      backgroundColor: '#333', 
      color: 'white',
      padding: '10px 15px',
      border: 'none',
      borderRadius: '5px'
    }}>
      GitHub
    </button>
  </a>

  <a href="https://www.linkedin.com/in/aditi-soni-a70360361?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
    <button style={{
      margin: '5px',
      backgroundColor: '#0077b5', 
      color: 'white',
      padding: '10px 15px',
      border: 'none',
      borderRadius: '5px'
    }}>
      LinkedIn
    </button>
  </a>
</div>
   </div>
    </div>
   </div>
        </section>
       
        <section id="skills"style={{ minHeight: '100vh', }} >
         
      <Head>
        <title>Tech Skills</title>
      </Head>

      <main className="py-5" style={{ background: 'linear-gradient(to right, #0f172a, #1e293b)', minHeight: '100vh' }}>
        <div className="container text-white">
          <h2 className="text-center mb-5">TECH SKILLS</h2>

          <div className="row justify-content-center ">
            

            {/*Version Control */}
             <div className="col-md-2 mb-4">
              <div className="bg-light text-dark rounded p-3 shadow" style={{minHeight:"200px"}}>
                <h5 className="text-center"style={{ textAlign: 'center', cursor: 'pointer' ,transition: 'transform 0.2s ease', }} >Version Control</h5>
                <div className="d-flex align-items-center my-4">
                  <img src="/git.png" alt="Git" width="24" className="me-2" />
                  <span>GIT</span>
                  </div>
                   <div className="d-flex align-items-center my-2">
                  <img src="/postman.png" alt="Git" width="24" className="me-2" />
                  <span>Postman</span>
                </div>
               
              </div>
            </div>

             {/* Database */}
             <div className="col-md-2 mb-4">
              <div className="bg-light text-dark rounded p-3 shadow" style={{minHeight:"200px"}}>
                <h5 className="text-center">Database</h5>
                <div className="d-flex align-items-center my-4">
                  <img src="/firebasepng.png" alt="Firebase" width="24" className="me-2" />
                  <span>Firebase Database</span>
                </div>
                <div className="d-flex align-items-center my-4" >
                  <img src="/sql.png" alt="SQL" width="24" className="me-2" />
                  <span>SQL</span>
                </div>
                <div className="d-flex align-items-center my-2">
                  <img src="/nosql.png" alt="NOSQL" width="24" className="me-2" />
                  <span>NOSQL</span>
                </div>
              </div>
            </div> 

            {/* Frameworks */}
            <div className="col-md-2 mb-4">
              <div className="bg-light text-dark rounded p-3 shadow" style={{minHeight:"250px"}}>
                <h5 className="text-center">Frameworks</h5>
                <div className="d-flex align-items-center my-4">
                  <img src="/materialui.png" alt="Material UI" width="24" className="me-2" />
                  <span>Material-UI</span>
                </div>
                <div className="d-flex align-items-center my-4">
                  <img src="download.png" alt="React Bootstrap" width="24" className="me-2" />
                  <span>React Bootstrap</span>
                </div>
                <div className="d-flex align-items-center my-4">
                  <img src="/bootstrap.jpeg" alt="Bootstrap" width="24" className="me-2" />
                  <span>Bootstrap</span>
                </div>
                <div className="d-flex align-items-center my-4">
                  <img src="/tailwind.png" alt="Tailwind" width="24" className="me-2" />
                  <span>Tailwind CSS</span>
                </div>
                <div className="d-flex align-items-center my-4">
                  <img src="/expressjs.png" alt="Tailwind" width="24" className="me-2" />
                  <span>Express JS</span>
                </div>
              </div>
            </div>

            {/* Hosting Platform */}
            <div className="col-md-2 mb-4">
              <div className="bg-light text-dark rounded p-3 shadow" style={{minHeight:"250px"}}>
                <h5 className="text-center">Hosting Platform</h5>
                <div className="d-flex align-items-center my-4">
                  <img src="/netlify.png" alt="Netlify" width="24" className="me-2" />
                  <span>Netlify</span>
                </div>
                <div className="d-flex align-items-center my-4">
                  <img src="/github.png" alt="GitHub Pages" width="24" className="me-2" />
                  <span>GitHub Pages</span>
                </div>
                <div className="d-flex align-items-center my-4">
                  <img src="/vercel.png" alt="Vercel" width="24" className="me-2" />
                  <span>Vercel</span>
                </div>
                <div className="d-flex align-items-center my-4">
                  <img src="/render.png" alt="Heroku" width="24" className="me-2" />
                  <span>Render</span>
                </div>
              </div>
            </div>

            {/* Scripting Languages */}
            <div className="col-md-2 mb-4">
              <div className="bg-light text-dark rounded p-3 shadow" style={{minHeight:"300px"}}>
                <h5 className="text-center">Scripting Languages</h5>
                <div className="d-flex align-items-center my-4">
                  <img src="/htmljpeg.jpeg" alt="HTML5" width="24" className="me-2" />
                  <span>HTML5</span>
                </div>
                <div className="d-flex align-items-center my-4">
                  <img src="/css3.png" alt="CSS3" width="24" className="me-2" />
                  <span>CSS3</span>
                </div>
                <div className="d-flex align-items-center my-4">
                  <img src="/javascript.png" alt="JavaScript" width="24" className="me-2" />
                  <span>JavaScript</span>
                </div>
                <div className="d-flex align-items-center my-4">
                  <img src="/nextjs.png" alt="Sass" width="24" className="me-2" />
                  <span>Next JS</span>
                </div>
                <div className="d-flex align-items-center my-4">
                  <img src="/react.png" alt="React JS" width="24" className="me-2" />
                  <span>React JS</span>
                </div>
                <div className="d-flex align-items-center my-4">
                  <img src="/redux.png" alt="Redux" width="24" className="me-2" />
                  <span>Redux</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    
        </section>

        <section id="projects" style={{ padding: "4rem 0", background: "#0f172a", color: "#fff" }}>
  <div className="container">
    <h2 style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "3rem" }}>PROJECTS</h2>

    <div style={{ display: "flex", flexDirection: "column", gap: "4rem", position: "relative", marginLeft: "2rem" }}>
      
      <div
        style={{
          position: "absolute",
          left: "10px",
          top: "0",
          bottom: "0",
          width: "4px",
          backgroundColor: "red",
        }}
      />

      {/* Project 1 */}
      <div style={{ display: "flex", alignItems: "center", gap: "2rem", position: "relative" }}>
       
        <div style={{ position: "absolute", left: "-1.4rem", top: "0.5rem", textAlign: "center" }}>
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              backgroundColor: "white",
              border: "3px solid red",
              margin: "0 auto",
            }}
          />
          <div style={{ fontSize: "0.8rem", color: "red", marginTop: "0.5rem" }}></div>
        </div>

        {/* Card */}
        <div
          style={{
            backgroundColor: "#fff",
            color: "#000",
            borderRadius: "10px",
            padding: "1rem",
            maxWidth: "800px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          }}
        >
          <h4 style={{ textAlign: "center", fontWeight: "bold" }}>E-Commerce website (Frontend)</h4>
          <img
            src="/project1.jpg"
            alt="E-Commerce website"
            style={{ width: "100%", height: "auto", borderRadius: "10px", margin: "1rem 0" }}
          />

           
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <a href="https://e-commerce-website-project-zpgp.vercel.app" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-success btn-sm">🌐 SEE LIVE</button>
            </a>
        
            <a href="https://github.com/aditi-soni14/E-Commerce-website-Project" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-dark btn-sm">💻 SOURCE CODE</button>
            </a>
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div style={{ display: "flex", alignItems: "center", gap: "2rem", position: "relative" }}>
        <div style={{ position: "absolute", left: "-1.4rem", top: "0.5rem", textAlign: "center" }}>
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              backgroundColor: "white",
              border: "3px solid red",
              margin: "0 auto",
            }}
          />
          <div style={{ fontSize: "0.8rem", color: "red", marginTop: "0.5rem" }}></div>
        </div>
        <div
          style={{
            backgroundColor: "#fff",
            color: "#000",
            borderRadius: "10px",
            padding: "1rem",
            maxWidth: "800px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          }}
        >
          <h4 style={{ textAlign: "center", fontWeight: "bold" }}>E-commerce website(Backend)</h4>
          <img
            src="/project2.png"
            alt="Expense Tracker"
            style={{ width: "100%", height: "auto", borderRadius: "10px", margin: "1rem 0" }}
            
          />
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <a href="https://e-commerce-backend-project-mduy.vercel.app" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-success btn-sm">🌐 SEE LIVE</button>
            </a>
            
            <a href="https://github.com/aditi-soni14/E-commerce-Backend-Project" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-dark btn-sm">💻 SOURCE CODE</button>
            </a>
          </div>
        </div>
      </div>

      {/* Project 3 */}
      <div style={{ display: "flex", alignItems: "center", gap: "2rem", position: "relative" }}>
        <div style={{ position: "absolute", left: "-1.4rem", top: "0.5rem", textAlign: "center" }}>
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              backgroundColor: "white",
              border: "3px solid red",
              margin: "0 auto",
            }}
          />
          <div style={{ fontSize: "0.8rem", color: "red", marginTop: "0.5rem" }}></div>
        </div>
        <div
          style={{
            backgroundColor: "#fff",
            color: "#000",
            borderRadius: "10px",
            padding: "1rem",
            maxWidth: "800px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          }}
        >
          <h4 style={{ textAlign: "center", fontWeight: "bold" }}>Weather App</h4>
          <img
            src="/project3.jpg"
            alt="Quiz App"
            style={{ width: "100%", height: "auto", borderRadius: "10px", margin: "1rem 0" }}
          />
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <a href="https://weather-app-eta-seven-56.vercel.app" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-success btn-sm">🌐 SEE LIVE</button>
            </a>
            
            <a href="https://github.com/aditi-soni14/weather-app" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-dark btn-sm">💻 SOURCE CODE</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

          <section id="blog" style={{ height: "100vh", background: "#bbb", marginTop: "0px" }}>
  <div className="container">
    <h2 className="text-center mb-4">Medium Blogs</h2>

   
    <div className="d-flex overflow-auto" style={{ gap: "20px" }}>
      {/* Blog 1 */}
      <a href="https://medium.com/@aditisyashisoni/how-i-created-my-first-frontend-project-portfolio-using-html-css-and-javascript-11663a53709b " target="_blank" className="text-decoration-none text-dark">
        <div className="card blog-card" style={{ width: "18rem", minWidth: "260px" ,height:'450px'}}>
          <img src="/mediumblog1.jpg" className="card-img-top" alt="Blog 1"  style={{height:"200px",objectFit:"cover"}}/>
          <div className="card-body">
            <h5 className="card-title">How I Created My First Frontend Project Portfolio Using HTML, CSS, and JavaScript</h5>
            <br/>
            <p className="card-text">A beginner-friendly walkthrough of building and showcasing my projects with clean design and interactive JavaScript features.</p>
          </div>
        </div>
      </a>

      {/* Blog 2 */}
      <a href="https://medium.com/@aditisyashisoni/understanding-react-state-and-props-a-beginners-guide-made-simple-4ed78863dfe1 " target="_blank" className="text-decoration-none text-dark">
        <div className="card blog-card" style={{ width: "18rem", minWidth: "260px",height:'450px' }}>
          <img src="/mediumblog2.jpg" className="card-img-top" alt="Blog 2" style={{height:"200px",objectFit:"cover"}}/>
          <div className="card-body">
            <h5 className="card-title">Understanding React State and Props — A Beginner’s Guide Made Simple</h5>
            <br/>
            <p className="card-text">A simple explanation of two essential concepts in React, with real-world examples to help beginners level up their frontend skills.

</p>
          </div>
        </div>
      </a>

      {/* Blog 3 */}
      <a href="https://medium.com/@aditisyashisoni/building-your-first-backend-with-node-js-and-express-a-developers-perspective-f43f0b100350 " target="_blank" className="text-decoration-none text-dark">
        <div className="card blog-card" style={{ width: "18rem", minWidth: "260px" ,height:'450px'}}>
          <img src="/mediumblog3.jpg" className="card-img-top" alt="Blog 3" style={{height:"200px",objectFit:"cover"}}/>
          <div className="card-body">
            <h5 className="card-title">Building Your First Backend with Node.js and Express — A Developer’s Perspective</h5>
            <br/>
            <p className="card-text"> A hands-on journey from writing frontend code to crafting real API endpoints using Node.js and Express.</p>
          </div>
        </div>
      </a>

      {/* Blog 4 */}
      <a href="https://medium.com/@aditisyashisoni/d6047eca13f2" target="_blank" className="text-decoration-none text-dark">
        <div className="card blog-card" style={{ width: "18rem", minWidth: "260px" ,height:'450px'}}>
          <img src="/mediumblog4.jpg" className="card-img-top" alt="Blog 4" style={{height:"200px",objectFit:"cover"}} />
          <div className="card-body">
            <h5 className="card-title">My Frontend Development Journey with JavaScript and React
</h5>
            <br/>
            <p className="card-text">From HTML basics to dynamic UIs  how I learned to build with JavaScript and React.
</p>
          </div>
        </div>
      </a>
    </div>
  </div>
</section>

<section
  id="contact"
  style={{
    backgroundColor: '#003366',
    padding: '4rem 1rem', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}
>
  <div
    style={{
      backgroundColor: 'white',
      borderRadius: '15px',
      padding: '40px',
      textAlign: 'center',
      boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
      maxWidth: '800px',
      width: '100%',
    }}
  >
    <h2 style={{ color: '#002244', fontWeight: 'bold', marginBottom: '30px' }}>
      CONTACT ME
    </h2>

    {/* Contact Buttons Row */}
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '15px',
      }}
    >
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=aditisyashisoni@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="btn btn-danger">📧 Email</button>
      </a>

      <a
        href="https://www.linkedin.com/in/aditi-soni-a70360361?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="btn btn-primary">🔗 LinkedIn</button>
      </a>

      <a
        href="https://github.com/aditi-soni14"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="btn btn-dark">💻 GitHub</button>
      </a>

      <a
        href="https://medium.com/@aditisyashisoni"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="btn btn-secondary">✍ Medium</button>
      </a>
    </div>
  </div>
</section>

      </main> 
          <Footer/>
    </>
  );
}