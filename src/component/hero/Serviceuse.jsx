const Serviceuse = ({ text1, text2, className }) => {
  return (
    <div
      className={`${className} flex flex-col items-center px-10 py-2 md:py-5`}
    >
      <p className="text-[20px] font-medium md:text-[21px]">{text1}</p>
      <div className="m-0 flex items-center gap-2">
        <span className="text-[9px]">POWERS</span>
        <span>{text2}</span>
      </div>
    </div>
  );
};
export default Serviceuse;
