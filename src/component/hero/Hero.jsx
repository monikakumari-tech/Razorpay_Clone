import Button from "../Button";
import Founder from "./Founder";
import Serviceuse from "./Serviceuse";
import { IoIosArrowBack } from "react-icons/io";
import { CiCreditCard1 } from "react-icons/ci";
import { IoPlay } from "react-icons/io5";
import { MdAddToHomeScreen } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <>
      <div className="m-auto flex w-full items-center justify-center">
        <div className="m-5 flex h-10 w-10 items-center justify-center rounded-full bg-white">
          <IoIosArrowBack className="" />
        </div>
        <div className="flex h-fit w-[79%] justify-between overflow-hidden">
          {/* left */}
          <div className="mb-18 flex flex-1 flex-col justify-center gap-5">
            <p className="leading-13 text-[45px] font-semibold">
              <span className="text-5xl text-blue-500">
                Advanced Payment Solutions
              </span>
              <br />
              for India's boldest disruptors
            </p>
            <p className="font-semibold text-gray-400">
              100+ Payment Methods | Easy Integration | Powerful Dashboard
            </p>
            <div className="flex items-center gap-5 font-bold">
              <Button text="Sign Up Now" className="bg-blue-500 text-white" />
              <div>
                <span className="text-blue-500">Know More</span>
                <hr className="text-blue-500" />
              </div>
            </div>
          </div>
          {/* right */}
          <div className="relative h-[512px] w-[462px] bg-[url('https://framerusercontent.com/images/K67zqxljSwqr3qyboWbs4TwnLME.png')] bg-cover">
            <img
              src="https://framerusercontent.com/images/kkOygtHRHYPv76o5PniXD7eNI.png?scale-down-to=1024"
              alt="image"
              className="z-1 absolute bottom-0 left-[-170px] h-[424px] w-[331px]"
            />
            <Serviceuse
              text1="Payment"
              text2="mamaearth"
              className="top-25 left-35 absolute bg-[#D1F093]"
            />
            <div className="left-35 top-51 absolute h-[240px] w-[217px] overflow-hidden bg-[#2950DA]">
              <div className="relative mx-auto mb-2 h-[180px] w-[180px]">
                <div className="h-18 relative mx-auto mt-6 flex w-[180px] flex-col justify-end bg-green-100 p-2 font-sans">
                  <p className="text-[5px] font-semibold">Body Lotion</p>
                  <p className="font-bold">$ 455</p>
                  <div className="absolute left-[-20px] top-[-84px]">
                    <div className="relative bottom-[-55px] left-[60px] h-[100px] w-[200px] overflow-hidden">
                      <img
                        src="	https://framerusercontent.com/images/FLUaQgn3Ij3g7iu7EIC3PGvhMtM.png"
                        alt="image"
                        className="absolute top-[-70px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 bg-white p-2">
                  <p className="font-bold">Select Payment Method</p>
                  <div className="grid grid-cols-2 gap-5">
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
              <Founder text="MAMAEARTH" />
            </div>
          </div>
        </div>
        <div className="m-5 flex h-10 w-10 items-center justify-center rounded-full bg-white">
          <IoIosArrowBack className="rotate-180" />
        </div>
      </div>
    </>
  );
};
export default Hero;
