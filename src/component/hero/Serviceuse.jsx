const Serviceuse = ({ text1, text2, className }) => {
  return (
    <div
      className={`${className} px-15 flex h-[106px] w-[217px] flex-col items-center py-5`}
    >
      <p className="text-2xl font-semibold">{text1}</p>
      <div className="flex items-center gap-2">
        <span className="text-sm">process</span>
        <span>{text2}</span>
      </div>
    </div>
  );
};
export default Serviceuse;
