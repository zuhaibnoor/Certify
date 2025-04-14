import './App.css';
import Form from './components/Form';
import { useState } from 'react';

export interface FormDataType {
  name: string;
  year: string;
  department: string;
  durationWeeks: string;
  domain: string;
  description: string;
  startDate: string;
  endDate: string;
}

const defaultFormData: FormDataType = {
  name: "<Full name>",
  year: "<Year>",
  department: "<Department>",
  durationWeeks: "<Duration>",
  domain: "<Domain>",
  description:
    "<Tasks done>",
  startDate: "12 Feb 2012",
  endDate: "12 Feb 2012",
};

export default function App() {
  const [formData, setFormData] = useState<FormDataType>(defaultFormData);

  const handleReset = () => {
    setFormData(defaultFormData);
  };

  const handlePrint = () => {
    const originalContents = document.body.innerHTML;
    const certificateElement = document.getElementById('certificate');
    if (!certificateElement) return;

    const certificateHTML = certificateElement.innerHTML;

    document.body.innerHTML = certificateHTML;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload(); // Optional: restores React after print
  };

  return (
    <div className="flex flex-col h-screen w-screen">
      {/* Header */}
      <div className="flex flex-row h-[12%] w-full bg-[#d59d35] apply-shadow">
        <div className="w-[50%]">
          <img src="./logo.png" alt="Logo" className="h-full p-2 ml-5 rounded-[45px]" />
        </div>
        <div className="w-[50%] flex flex-row justify-center items-center gap-4 mr-2">
          <button
            onClick={handlePrint}
            className="h-10 bg-[#183B4E] text-white font-semibold rounded-lg p-2 hover:shadow-xl hover:scale-[1.04] duration-200 ease-in text-[12px] md:text-[16px]"
          >
            Download PDF
          </button>
          <button
            onClick={handleReset}
            className="h-10 bg-[#183B4E] rounded-lg text-white font-semibold p-2 hover:shadow-xl hover:scale-[1.04] duration-200 ease-in"
          >
            New certificate
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-[#183B4E] h-[88%] w-full flex flex-col md:flex-row">
        {/* Certificate Preview */}
        <div className="w-full h-full flex flex-col justify-between items-center p-1 md:p-5 md:w-[50%]">
          <div className="h-full w-full md:w-[65%] shadow-xl flex flex-col" id="certificate">
            <img src="./header.jpg" alt="Header" className="w-full h-auto" />

            <div className="flex-grow text-[12px] p-10 pt-3 pb-3 bg-white">
              <p className="text-justify">
                This is to certify that <span className="font-semibold">{formData.name}</span>, a {formData.year} student enrolled in the
                Department of {formData.department} at NED University of Engineering & Technology, has successfully completed {formData.durationWeeks} week internship at Smart City Lab, NCAI, NEDUET.
              </p>

              <p className="text-justify mt-3">
                During this period, <span className="font-semibold">Mr. {formData.name}</span> contributed as a {formData.domain} intern.
                {formData.description}
              </p>

              <p className="mt-3">
                The internship spanned from {formData.startDate} to {formData.endDate}.
              </p>

              <div className="flex flex-col w-[45%] ml-2 text-[12px] mt-4">
                <img src="./sign.jpg" alt="Signature" />
                <div className="font-semibold">Fatima Shah</div>
                <div>Team Lead</div>
                <div>Smart City Lab, NCAI, NEDUET</div>
              </div>
            </div>

            <img src="./footer.jpg" alt="Footer" className="w-full h-auto" />
          </div>
        </div>

        {/* Form Editor */}
        <div className="w-full md:w-[50%] h-full">
          <Form formData={formData} setFormData={setFormData} />
        </div>
      </div>
    </div>
  );
}
