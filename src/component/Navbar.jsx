import { SlEarphonesAlt } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import Button from "./Button";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-[90%] m-auto flex items-center justify-between text-gray-900">
      {/* left */}
      <div className="flex items-center">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLqnGQeCFwuuWCtB2dEsT8jDzP05wMT78ceg&s"
            alt="image"
            className="w-40 h-25"
          />
        </div>
        <div className=" gap-3 pb-2 pl-2 text-[17px] hidden xl:flex">
          <span>Payments</span>
          <span>Banking+</span>
          <span>Payroll</span>
          <span>Engage</span>
          <span>Partners</span>
          <span>Resources</span>
          <span>Pricing</span>
        </div>
      </div>
      {/* right visible at xl*/}
      <div className={`hidden xl:flex items-center gap-2  `}>
        <SlEarphonesAlt />
        <div className="relative" onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
          <div className="flex items-center gap-2"  >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_51rxcqCv0z34QGF8-KIZs4BIl_icwO-UtQ&s"
              alt="flag"
              className="w-10 p-1"
            />
            <IoIosArrowDown className={`transition-transform duration-300 ${isHovered ? "rotate-180" : ""}`} />
          </div>

          {/* Dropdown */}
          {/* <div className="hidden group-hover:block absolute dropdown-menu right-[-10px] top-10 pt-4"> */}
        {isHovered ? <div className="absolute dropdown-menu right-[0px] top-5 pt-4">
            <div className="flex flex-col gap-1 w-50 py-3 px-5 bg-white text-gray-500 rounded-sm">
              {/* India */}
              <div className="group hover:bg-blue-100 px-2 py-1 rounded flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_51rxcqCv0z34QGF8-KIZs4BIl_icwO-UtQ&s"
                    alt="india"
                    className="w-10 p-1"
                  />
                  <span>India</span>
                </div>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-gray-400">
                  <FaArrowRight />
                </span>
              </div>

              {/* Malaysia */}
              <div className="group hover:bg-blue-100 px-2 py-1 rounded flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src="https://www.svgrepo.com/show/405539/flag-for-flag-malaysia.svg"
                    alt="malaysia"
                    className="w-10 p-1"
                  />
                  <span>Malaysia</span>
                </div>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-gray-400">
                  <FaArrowRight />
                </span>
              </div>

              {/* Singapore */}
              <div className="group hover:bg-blue-100 px-2 py-1 rounded flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmmbBJ0tbFlspI5HrwnvwTDgXNQXVnTiNF2g&s"
                    alt="singapore"
                    className="w-10 p-1"
                  />
                  <span>Singapore</span>
                </div>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-gray-400">
                  <FaArrowRight />
                </span>
              </div>
            </div>
          </div> : ""}
         
          {/* </div> */}
        </div>

        

        <div className="text-blue-500 font-bold border border-blue-400 px-4 py-2 rounded-sm">
          Login
        </div>
        <div>
          <Button text={"Sign Up"} className="bg-blue-400 text-white"/>
        </div>
      </div>
      {/* visible at less than xl */}
      <div className="flex gap-2 items-center">
        <Button text={"Login"} className="text-blue-400 border border-blue-400"/>
        <FaBars className="w-5 h-5"/>
      </div>
    </div>
  );
};
export default Navbar;
