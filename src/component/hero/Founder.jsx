import { MdArrowOutward } from "react-icons/md";

const Founder = ({ text }) => {
  return (
    <div className="flex gap-2 text-[10px] font-bold text-white">
      <MdArrowOutward className="rotate-270 hidden h-4 w-4 lg:block" />
      <span>{text}</span>
      <span>FOUNDER</span>
      <MdArrowOutward className="h-4 w-4 rotate-0 lg:hidden" />
    </div>
  );
};
export default Founder;
