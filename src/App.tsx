import './App.css'
import Form from './components/Form';
import { useState } from 'react';

export default function App() {
  const [formData, setFormData] = useState({
      name: "Muhammad Owais",
      year: "2nd Year",
      department: "Computer and Information System Engineering",
      durationWeeks: "8",
      domain: "Computer Vision",
      description: "His tasks include frames extraction form CCTV footage, annotation of frames using roboflow, data preprocessing using pandas and numpy and training and testing of computer vision model.",
      startDate: "22 Feb 2024",
      endDate: "22 Apr 2024",
    });
  return (
    <div className="flex flex-col h-screen w-screen">
        <div className=" flex flex-row h-[12%] w-full bg-[#d59d35] apply-shadow">
          <div className="w-[50%]"><img src="./logo.png" alt="" className="h-full p-2 ml-5 rounded-[45px]" /></div>
          <div className="w-[50%] flex flex-row justify-center items-center gap-4 mr-2">
            <button className=" h-10 bg-[#183B4E] text-white font-semibold rounded-lg p-2 hover:shadow-xl hover:scale-[1.04] duration-200 ease-in text-[12px] md:text-[16px]">Download PDF</button>
            <button className=" h-10 bg-[#183B4E] rounded-lg text-white font-semibold p-2 hover:shadow-xl hover:scale-[1.04] duration-200 ease-in">New certificate</button>
            {/* <button className=" h-10 bg-[#173a71] rounded-lg text-white font-semibold p-2"></button> */}
          </div>
        </div>

      <div className="bg-[#183B4E]">
      {/* <div> */}
      <div className="h-[88%] w-full flex flex-col md:flex-row ">

        {/* preview pane */}
        <div className="w-full h-full flex flex-col justify-between items-center p-1 md:p-5 md:w-[50%]">
          <div className="h-full w-full md:w-[65%] shadow-xl flex flex-col">
            <img src="./header.jpg" alt="Header" className="w-full h-auto" />
            
            {/* body of the certificate */}
            <div className="flex-grow text-[12px] p-10 pt-3 pb-3 bg-white">
              
              <p className="text-justify">{/* first para */}
                This is to certify that <span className='font-semibold' >{formData.name}</span>, a {formData.year} student enrolled in the
                Department of {formData.department} at NED University
                of Engineering & Technology, has successfully completed {formData.durationWeeks} week internship at
                Smart City Lab, NCAI, NEDUET.
              </p>{/* first para */}

              
              <p className="text-justify"> {/* second para */} <br />
                During this period, <span className='font-semibold' >Mr. {formData.name}</span> contributed as {formData.domain} intern.
                 {formData.description}. 
              </p> {/* second para */}


              <p className=""> <br />
              The internship spanned from {formData.startDate} to {formData.endDate}. 
              </p>

              <div className="flex flex-col w-[45%] ml-2 text-[12px]">
                <img src="./sign.jpg" alt="" />
                <div className="font-semibold">Fatima Shah</div>
                <div>Team Lead</div>
                <div>Smart City Lab, NCAI, NEDUET</div>

              </div>


            </div> 
            {/* body of the certificate */}
            
            <img src="./footer.jpg" alt="Footer" className="w-full h-auto" />
          </div>
      </div> {/* preview pane */}


        {/* editor pane */}
        <div className=" w-full md:w-[50%] h-full">
          <Form formData={formData} setFormData={setFormData} />
        </div>{/* editor pane */}

      </div>
      </div>

    </div>
  );
}