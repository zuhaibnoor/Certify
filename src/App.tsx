import './App.css'

export default function App() {
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
                This is to certify that Muhammad Owais, a 2nd year student enrolled in the
                Department of Computer and Information System Engineering at NED University
                of Engineering & Technology, has successfully completed 8 week internship at
                Smart City Lab, NCAI, NEDUET.
              </p>{/* first para */}

              
              <p className="text-justify"> {/* second para */} <br />
                During this period, Mr. Muhammad Owais contributed as computer vision intern.
                His tasks include frames extraction form CCTV footage, annotation of frames
                using roboflow, data preprocessing using pandas and numpy and training and
                testing of computer vision model. 
              </p> {/* second para */}


              <p className=""> <br />
              The internship spanned from 22 Feb 2024 to 22 Apr 2024. 
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
          {/* border-2 border-gray-900 */}
        </div>{/* editor pane */}

      </div>
      </div>

    </div>
  );
}