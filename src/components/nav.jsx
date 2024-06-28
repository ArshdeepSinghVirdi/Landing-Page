// import {headerLogo} from '../assets/images'
import { useState, useEffect } from "react";
import { hamburger } from "../assets/icons";
import { TiMessage } from "react-icons/ti";
import { GiReceiveMoney } from "react-icons/gi";
import { IoPeople } from "react-icons/io5";
import { FaSuitcase } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

const Nav = () => {

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  const [activeItem, setActiveItem] = useState('Job Preview');

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'Job Preview', href: '/' },
    { name: 'Applicants', href: '/' },
    { name: 'Match', href: '/' },
    { name: 'Messages', href: '/' }
  ];

  return (
    <header className="px-2 py-2  w-full">
      <nav className="flex justify-between items-center max-container pb-4 max-md:text-xs ">
        <a
          href="/"
          style={{ border: "1px solid grey", backgroundColor: "#e0e0e0",borderRadius:'2px' }}
          // className="mr-48"
        >
          <p data-aos="fade-down" data-aos-delay="110" className="text-coral-red font-bold px-4 py-2">Logo</p>
          {/* <img src={headerLogo} alt="Logo" width={130} height={29} ></img> */}
        </a>
        <div  data-aos="fade-down" className="flex items-center gap-5">
          <a href='/' className="flex items-center gap-2 px-3 py-2 max-md:hidden bg-coral-red" style={{borderRadius:'1rem', color:'white',boxShadow: '0 4px 6px -1px #FF6F61, 0 2px 4px -1px #FF6F61' }}>
            <FaSuitcase/>
            <p  data-aos="zoom-in-up" data-aos-delay="110" className="text-sm font-medium">Jobs</p>
          </a>
          <ul
            className="flex-1 flex justify-center items-center gap-16 max-md:hidden max-md:sm px-10 py-2"
            style={{ border: "1px solid #f0f0f0", borderRadius: "1rem", boxShadow: 'inset 0 10px 10px -10px rgba(0, 0, 0, 0.5)' }}
          >
            <li>
              <a
                href="/"
                className="font-montserrat leading-normal text-sm text-slate-gray flex flex-row items-center gap-2 "
                data-aos="zoom-in-up" data-aos-delay="110"
              >
                <TiMessage />
                Message
              </a>
            </li>
            <li>
              <a
                href="/"
                className="font-montserrat leading-normal text-sm text-slate-gray flex flex-row items-center gap-2 "
                data-aos="zoom-in-up" data-aos-delay="110"
              >
                <GiReceiveMoney />
                Payment
              </a>
            </li>
            <li>
              <a
                href="/"
                className="font-montserrat leading-normal text-sm text-slate-gray flex flex-row items-center gap-2 "
                data-aos="zoom-in-up" data-aos-delay="110"
              >
                <IoPeople />
                Application
              </a>
            </li>
          </ul>
        </div>

        <div className="flex gap-4 text-[2rem]  leading-normal font-medium font-montserrat max-md:hidden wide:mr-24">
          <IoIosNotificationsOutline height={25} width={25} data-aos="fade-down" data-aos-delay="110"/>
          
          <FaCircleUser data-aos="fade-down" data-aos-delay="110"/>
        </div>

        <button onClick={toggleMenu} className="hidden max-md:block">
          {!isOpen?
          <img src={hamburger} alt="Hamburger" width={25} height={25}></img>: <IoClose className="text-[2rem]"/>
          }
        </button>
      </nav>

      <hr />

      <ul className="flex-1 flex justify-start items-center gap-16 max-md:hidden px-24 py-2">
      {navItems.map((item) => (
        <li key={item.name}>
          <a
            href={item.href}
            onClick={() => setActiveItem(item.name)}
            className={`font-montserrat font-semibold leading-normal text-md flex flex-row items-center max-md:xs gap-2 ${
              activeItem === item.name ? 'text-coral-red border-b-4 border-coral-red' : 'text-slate-gray'
            }`}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
    {isOpen?
      <div className="md:hidden" style={{boxShadow: '0 4px 6px 5px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', borderRadius:'10px'}}>
        <div className="flex gap-4 text-[2rem] pl-10 leading-normal my-2 font-medium font-montserrat wide:mr-24">
          <FaCircleUser/>
          <IoIosNotificationsOutline height={25} width={25}/>
        </div>
        <ul
            className="flex-1 flex justify-center items-center gap-16 mx-3  px-10 py-2 text-xs"
            style={{ border: "1px solid #f0f0f0", borderRadius: "1rem", boxShadow: 'inset 0 10px 10px -10px rgba(0, 0, 0, 0.5)' }}
          >
            <li>
              <a
                href="/"
                className="font-montserrat leading-normal text-slate-gray  flex flex-row items-center gap-2 "
              >
                <TiMessage />
                Message
              </a>
            </li>
            <li>
              <a
                href="/"
                className="font-montserrat leading-normal text-slate-gray flex flex-row items-center gap-2 "
              >
                <GiReceiveMoney />
                Payment
              </a>
            </li>
            <li>
              <a
                href="/"
                className="font-montserrat leading-normal text-slate-gray flex flex-row items-center gap-2 "
              >
                <IoPeople />
                Application
              </a>
            </li>
          </ul>
        <ul className="flex-1 flex justify-between items-center gap-4 px-4 py-2 mt-2">
      {navItems.map((item) => (
        <li key={item.name}>
          <a
            href={item.href}
            onClick={() => setActiveItem(item.name)}
            className={`font-montserrat font-semibold leading-normal text-xs flex flex-row items-center gap-2 ${
              activeItem === item.name ? 'text-coral-red border-b-4 border-coral-red' : 'text-slate-gray'
            }`}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
      </div>:<></>
    }
    <hr/>
    </header>
  );
};

export default Nav;
