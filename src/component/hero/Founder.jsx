import { MdArrowOutward } from "react-icons/md";

const Founder = ({ text }) => {
  return (
    <div className="mx-6 flex gap-2 text-[10px] font-bold text-white">
      <MdArrowOutward className="rotate-270 h-4 w-4" />
      <span>{text}</span>
      <span>FOUNDER</span>
    </div>
  );
};
export default Founder;
