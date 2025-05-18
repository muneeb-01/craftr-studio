const About = () => {
    return <div className="min-h-screen w-full">
    <Aboutus />
    <Services />
    </div>;
  };
  
  export default About;
  

  const Aboutus = () => {
    return <div className="flex justify-center items-center lg:flex-row w-full">
      <div className="flex flex-col 2xl:flex-row craftr3 justify-center items-center w-[80%] h-full">
      <div className="flex justify-center items-center h-[90vh] py-[4vh] 2xl:pt-[16vh] 2xl:w-[50%]">
        <div className="2xl:w-[63%] h-[70vh] 2xl:h-[65vh] ">
          <img src="/pictures/profile.webp" className="h-full object-center object-cover grayscale-75" alt="" />
        </div>
      </div>
      <div className="flex text-[0.8rem]  md:text-[1.1rem] flex-col w-full  justify-end h-full items-center xl:w-[50%] xl:h-[70vh]">
        <div className="w-[100%] lg:w-[60%] pb-[3vh] flex justify-between items-center ">
          <p>ABOUT</p>
          <p>CRAFTR STUDIO</p>
        </div>
        <div className="xl:w-[60%]">
          <p>We are three passionate BS Computer Science students who have embarked on our freelancing journey, offering professional MERN stack development services. With expertise in MongoDB, Express.js, React, and Node.js, we specialize in building dynamic, scalable, and high-performance web applications. Our goal is to deliver top-quality solutions tailored to client needs, ensuring efficiency, responsiveness, and a seamless user experience. Whether it's developing full-stack applications, real-time features, or optimizing existing projects, we are committed to bringing innovative and reliable solutions to the table.</p>
        </div>
      </div>
      </div>
    </div>;
  }

  const Services = ()=>{
    return(
      <div className="w-full text-[0.8rem]  md:text-[1.1rem] xl:h-[75vh] mt-[20vh]">
        <hr className="border-t border-gray-800 w-full" />
      <div className="flex flex-col lg:flex-row py-[4vh] justify-center items-center w-full h-full">
        <div className="lg:w-[50%] w-full h-full flex justify-center items-center">
          <div className="lg:w-[55%] w-[85%] craftr3">
            <h3 className="mb-4">Services</h3>
            <p>We help brands and businesses dive deep beyond the surface. It’s the unexplored points of view and the right questions that move our approach. With a broad perspective on each project, we uncover new angles and authentic solutions. Our process is fueled by open communication, creative force, and the pursuit of impactful work that resonate with our clients</p>
          </div>
        </div>
        <div className="lg:w-[40%] max-lg:py-[8vh] w-full craftr3 h-full flex justify-center lg:justify-start items-center">
          <div className="flex text-[0.71rem]  md:text-[1rem] w-[80%] justify-center items-start gap-[3vw]">
          <div className="w-[50%]">
            <p>FRONTEND DEVELOPMENT</p>
            <p>BACKEND DEVELOPMENT</p>
            <p>FULLSTACK WEB DEVELOPMENT </p>
          </div>
          <div className="w-[50%]">
            <p>WEB DESIGN</p>
            <p>WEB DEVELOPMENT</p>
            <p>MOTION DESIGN</p>
          </div>
          </div>
        </div>
        
      </div>
      </div>
    );
  }