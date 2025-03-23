import {Link} from 'react-router-dom';
const Contact = () => {
    return <div className="w-full h-[93vh] flex justify-center items-center">
      <div className="w-[90%] md:w-[80%] lg:w-[60%] xl:w-[40%] 2xl:w-[25%] flex flex-col justify-center items-start gap-[4vh]">
        <p className='craftr3  tracking-tighter text-[0.8rem]'>LETS HAVE A CHAT</p>
        <h2 className='craftr2 text-[2rem] md:text-[3rem]'>craftr.official@gmail.com</h2>
        <p className='craftr3'>Reach out with your name and your company details–any helpful insights about your project and vision are appreciated. We’d love to connect and help elevate your brand.</p>
        <div className='craftr3 flex justify-between items-center w-full'><p>PHONE +923432282446</p> <Link>INSTAGRAM</Link></div>
      </div>
    </div>;
  };
  
  export default Contact;
  