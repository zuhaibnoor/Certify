export default function App() {
  return (
    <div className="flex flex-col h-screen w-screen">
        <div className=" flex flex-row h-[12%] w-full shadow-lg">
          <div className="w-[50%]"><img src="./logo.png" alt="" className="h-full p-2 ml-5" /></div>
          <div className="w-[50%] flex flex-row justify-center items-center gap-4 mr-2">
            <button className=" h-10 bg-[#173a71] text-white font-semibold rounded-lg p-2 hover:shadow-xl hover:scale-[1.04] duration-200 ease-in text-[12px] md:text-[16px]">Download PDF</button>
            <button className=" h-10 bg-[#173a71] rounded-lg text-white font-semibold p-2 hover:shadow-xl hover:scale-[1.04] duration-200 ease-in">New certificate</button>
            {/* <button className=" h-10 bg-[#173a71] rounded-lg text-white font-semibold p-2"></button> */}
          </div>
        </div>


      <div className="h-[88%] w-full flex flex-row">
      {/* border-2 border-gray-900 */}
        <div className="border-2 border-gray-900 w-[50%] flex flex-col justify-center items-center p-1 md:p-5">
          <div className=" h-full w-full md:w-[75%] shadow-xl">
          <img src="./header.jpg" alt="Header" className="w-full h-auto" />
            <div className="flex-grow"></div>
            <img src="./footer.jpg" alt="Footer" className="w-full h-auto" />
          </div>
        </div>
        <div className="border-2 border-gray-900 w-[50%]"></div>
      </div>

    </div>
  );
}