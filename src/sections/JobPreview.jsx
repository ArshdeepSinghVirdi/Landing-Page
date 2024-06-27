// import { useState } from "react"
import { IoLocationOutline } from "react-icons/io5";
import { LiaCoinsSolid } from "react-icons/lia";
import { PiFigmaLogoFill } from "react-icons/pi";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobexd } from "react-icons/si";
import { FaAtlassian } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import { FaUserCheck } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { FaRegEye } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import { MdOutlineModeEdit } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";

const JobPreview = () => {
  const status = "Open";

  const role = "Senior Product Designer";
  const postedTime = "posted 2 days ago";
  const location = "Delaware, USA";
  const salary = "$300k-$400k";

  const SkillsRequired = [
    { id: 1, name: "Figma", component: <PiFigmaLogoFill /> },
    { id: 2, name: "Adobe Illustration", component: <SiAdobeillustrator /> },
    { id: 3, name: "Adobe XD", component: <SiAdobexd /> },
  ];
  const PreferedLanguage = "English";
  const yearsOfExperience = "3+ Years Of Experience";
  const type = "Full Time";

  const JobDescription = `1. Handle the UI/UX research design
  2. Work on researching on latest web application and trends
  3. Work on conceptualising and visualising
  4. Work on creating graphics content 
  5. Benifits:
      -  Health insurance 
      -  provident funds
  6. Schedule:
      -  Day shift
  7. Supplemantal pay types
      -  performance bonus`;

  const JobReach = [
    { id: 1, name: "Applicant", number:'400',component: <GoPeople /> },
    { id: 2, name: "Matches",  number:'100',component: <FaUserCheck /> },
    { id: 3, name: "Messages",  number:'147',component: <FiMessageSquare /> },
    { id: 3, name: "Views",  number:'800',component: <FaRegEye /> },
  ];

  return (
    <section
      id="home"
      className="w-full grid grid-cols-7 justify-center min-h-screen gap-10 max-container  p-2 max-lg:flex max-lg:flex-col"
    >
      <div
        className="col-span-5 w-full  flex flex-col justify-top items-start pt-2 pl-10 "
        style={{ boxShadow: "5px 0 5px -5px silver" }}
      >
        <div className="w-full ">
          <div className="flex w-full gap-6 items-center max-md:flex-col">
            <h1 className="text-[2.5rem] font-bold leading-[3px]  max-md:text-2xl ">{role}</h1>
            <div className="flex gap-2">

            <h4 className="text-slate-gray text-sm max-md:xs">{postedTime}</h4>
            <h4
              className="px-3 py-[2px] text-sm  max-md:xs"
              style={{
                border: "1px solid rgb(202, 235, 202)",
                backgroundColor: "rgb(222, 249, 222)",
                borderRadius: "1rem",
                color: "rgb(52, 140, 52)",
              }}
              >
              {status}
            </h4>
            </div>
          </div>

          <div className="flex text-md gap-10 my-5">
            <div className="flex gap-2 items-center">
              <IoLocationOutline />
              <p>{location}</p>
            </div>
            <div className="flex gap-2 items-center">
              <LiaCoinsSolid />
              <p>{salary}</p>
            </div>
          </div>
          <hr></hr>
        </div>

        <div className="w-[70%] flex  justify-between text-slate-gray text-sm py-2 max-md:w-full max-md:text-xs">
          <div>
            <p className="mb-2">Skills Required</p>

            {SkillsRequired.map((item, index) => (
              <div
                key={index}
                className="mt-1 flex items-center px-1 text-xs gap-1 max-md:mr-2  text-slate-800 "
                style={{ border: "1px solid grey", borderRadius: "10px" }}
              >
                {item.component}
                <h2 className="">{item.name}</h2>
              </div>
            ))}
          </div>
          <div>
            <div>Prefered Language</div>
            <p className="text-slate-800 font-medium mt-2">
              {PreferedLanguage}
            </p>
          </div>

          <div>
            <div>Type</div>
            <p className="text-slate-800 font-medium mt-2">{type}</p>
          </div>
          <div>
            <div>Years of Experience</div>
            <p className="text-slate-800 font-medium mt-2">
              {yearsOfExperience}
            </p>
          </div>
        </div>

        <div className="w-full">
          <hr></hr>

          <div className=" text-slate-gray text-sm py-2">About the Job</div>
          <div className="w-[50%] text-sm font-normal whitespace-pre-line max-md:text-xs">
            {JobDescription}
          </div>
          <hr className="my-4"></hr>
        </div>

        <div className="">
          <div className="flex items-center gap-4 text-2xl pb-4 ">
            <FaAtlassian />
            <h1 className="font-semibold">Atlassian</h1>
            <a
              href="/"
              className="text-sm font-semibold py-0.5 px-2 "
              style={{
                backgroundColor: "rgb(143, 203, 255)",
                borderRadius: "10px",
                boxShadow: "0 4px 6px -1px sky-blue, 0 2px 4px -1px sky-blue",
              }}
            >
              <p>Follow</p>
            </a>
          </div>

          <div className="flex gap-20 max-md:text-xs">
            <div>
              <div className="pt-2 text-sm max-md:text-xs">
                <h1 className=" text-slate-gray text-xs ">Company Size</h1>
                <p>1k - 2k Employee</p>
              </div>
              <div className="pt-2">
                <h1 className=" text-slate-gray text-xs ">Sector</h1>
                <p>Information Technology, Infrastructure</p>
              </div>
              <div className="pt-2">
                <h1 className=" text-slate-gray text-xs ">Founded in</h1>
                <p>2019</p>
              </div>
            </div>

            <div className="max-md:text-xs">
              <div className="pt-2 text-sm max-md:text-xs">
                <h1 className=" text-slate-gray text-xs ">Type</h1>
                <p>Private</p>
              </div>
              <div className="pt-2">
                <h1 className=" text-slate-gray text-xs ">Funding</h1>
                <p>Bootstrapped</p>
              </div>
              <div className="pt-2">
                <h1 className=" text-slate-gray text-xs ">Founded by</h1>
                <p>Scott Farquhar, Mike</p>
              </div>
            </div>
          </div>
        <hr className="mt-4"></hr>
        </div>
      </div>

      <div className="col-span-2 w-full flex-1 flex-col justify-center items-top  xl:min-h-screen max-md:text-xs">
        <div className="flex w-full justify-evenly font-semibold   ">
          <a href="/" className="flex items-center gap-2 py-1 px-7 lg:mr-2" style={{border:'1px solid silver', borderRadius:'8px', color:'coral', backgroundColor:'rgb(255, 228, 219)'}}>
            <MdDeleteForever/>
            <p>Delete Job</p>
          </a>
          <a href="/" className="flex items-center gap-2 py-1 px-7 bg-coral-red" style={{border:'1px solid silver', borderRadius:'8px', color:'rgb(255, 228, 219)'}}>
            <MdOutlineModeEdit/>
            <p>Edit Job</p>
          </a>
        </div>

        <div className="w-full" >
        {JobReach.map((item, index) => (
          <div
          key={index}
          className="mt-1 flex justify-between items-center px-1 
          gap-1 text-slate-gray text-md my-4 border-b-2 py-4 max-lg:justify-evenly max-md:py-2" 
          
          > 
              <div className="flex items-center gap-1">
                {item.component}
                <h2 className="">{item.name}</h2>
              </div>
                <h1>{item.number}</h1>
                {/* <hr></hr> */}
              </div>
            ))}
        </div>

        <div className="w-full px-5 py-10 flex-col justify-center gap-2 max-lg:hidden" style={{border:'1px solid #f0f0f0', borderRadius:'1rem',boxShadow: '0 4px 10px -1px rgba(0, 0, 0, 0.1), -4px 0 6px -1px rgba(0, 0, 0, 0.1)'}}>
          <h1>`A Quote from Atlassian`</h1>
          <div className="flex  items-center gap-2">
            <FaRegUserCircle className="text-3xl"/>
            <div className="text-xs">
              <h2>Name</h2>
              <p>Description</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobPreview;
