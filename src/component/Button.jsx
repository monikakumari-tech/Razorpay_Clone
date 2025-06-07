import { FaArrowRight } from "react-icons/fa";
const Button = ({text, className}) => {
  return (
    <div className={`flex items-center px-3  font-bold py-2 rounded-sm gap-2 ${className}`}>
      <span>{text}</span> 
      <span><FaArrowRight /></span>
    </div>
  )
}
export default Button