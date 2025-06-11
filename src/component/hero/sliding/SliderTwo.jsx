import Button from "../../Button";
import Serviceuse from "../Serviceuse";
import Founder from "../Founder";
import { IoIosArrowBack } from "react-icons/io";
import { CiCreditCard1 } from "react-icons/ci";
import { IoPlay } from "react-icons/io5";
import { MdAddToHomeScreen } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
const SliderTwo = () => {
  return (
    <div className="relative flex w-full items-center justify-center">
      <div className="z-2 absolute bottom-[-10px] left-40 m-5 flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(0,0,0,0.2)] xl:static xl:bg-white">
        <IoIosArrowBack className="text-white xl:text-black" />
      </div>
      <div className="flex h-fit w-[90%] flex-col items-center justify-between overflow-hidden lg:w-[79%] xl:flex-row">
        {/* left */}
        <div className="xl:mb-18 flex h-[100px] w-full flex-col justify-center gap-2 md:h-[144px] xl:flex-1 xl:gap-5">
          <p className="text-15px font-semibold md:text-[25px] xl:text-[48px]">
            <span className="mr-2 text-blue-500">Automated Payroll</span>
            <br className="hidden lg:block" />
            for India's boldest disruptors
          </p>
          <p className="text-[12px] font-semibold text-gray-400 md:text-[17px]">
            Automated Payroll & Compliances | Built for Startups & Enterprises
          </p>
          <div className="flex items-center gap-5 font-bold">
            <Button
              text="Sign Up Now"
              className="absolute top-[90px] bg-blue-500 text-white md:static"
            />
            <div className="hidden xl:block">
              <span className="text-blue-500">Know More</span>
              <hr className="text-blue-500" />
            </div>
          </div>
        </div>
        {/* right */}
        <div className="relative mt-2 h-[350px] w-[342px] bg-[url('https://framerusercontent.com/images/K67zqxljSwqr3qyboWbs4TwnLME.png')] bg-contain bg-no-repeat md:h-[410px] md:h-[437px] md:w-[500px] xl:h-[512px] xl:w-[462px]">
          <img
            src="https://framerusercontent.com/images/0u2P7K4ba3Ynqv5HppyPCPqAvCc.png"
            alt="person"
            className="z-1 absolute bottom-[0px] left-[190px] h-[230px] w-[177px] md:bottom-[-10px] lg:bottom-0 lg:left-[-100px] xl:left-[-170px] xl:h-[424px] xl:w-[331px]"
          />
          <div className="xl:left-30 absolute left-10 top-10 w-[160px] overflow-hidden md:h-[315px] md:w-[198px] lg:left-10 lg:top-10 lg:w-[255px] xl:top-10">
            <Serviceuse
              text1="Payroll Solution"
              text2="purple"
              className="bg-[#D1F093]"
            />
            <div className="overflow-hidden bg-[#2950DA] px-2 py-6 md:px-4">
              <div className="relative mb-2">
                <div className="h-18 relative mx-auto flex w-full flex-col justify-end bg-green-100 p-2 font-sans">
                  <p className="text-[5px] font-semibold">Body Lotion</p>
                  <p className="font-bold">$ 455</p>
                  <div className="absolute left-[-20px] top-[-84px]">
                    <div className="relative bottom-[-55px] left-[60px] h-[100px] w-[180px] overflow-hidden md:w-[200px]">
                      <img
                        src="	https://framerusercontent.com/images/FLUaQgn3Ij3g7iu7EIC3PGvhMtM.png"
                        alt="lotion"
                        className="absolute left-[-30px] top-[-60px] md:left-0 md:top-[-70px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1 bg-white p-2 text-xs md:gap-2">
                  <p className="font-bold">Select Payment Method</p>
                  <div className="grid grid-cols-2 gap-5 text-[10px]">
                    <p className="mr-3 flex items-center gap-2">
                      <span>
                        <CiCreditCard1 />
                      </span>
                      Card
                    </p>
                    <p className="flex items-center gap-2">
                      <span>
                        <IoPlay />
                      </span>
                      UPI ID
                    </p>
                    <p className="flex items-center gap-2">
                      <span>
                        <MdAddToHomeScreen />
                      </span>
                      Netbanking
                    </p>
                    <p className="flex items-center gap-2">
                      <span>
                        <IoCalendarOutline />
                      </span>
                      EMI
                    </p>
                  </div>
                </div>
              </div>
              <Founder text="PURPLLE" />
            </div>
          </div>
        </div>
      </div>
      <div className="z-2 absolute bottom-[-10px] left-52 m-5 flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(0,0,0,0.2)] xl:static xl:bg-white">
        <IoIosArrowBack className="rotate-180 text-white xl:text-black" />
      </div>
    </div>
  );
};
export default SliderTwo;
