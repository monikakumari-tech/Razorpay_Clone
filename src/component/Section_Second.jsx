const Section_Second = () => {
  return (
    <div className="gap-30 py-30 m-auto mt-[-35px] flex w-[80%] flex-col">
      <div className="flex h-[500px]">
        <div className="notched-cornor mr-0.5 flex w-[650px] flex-col justify-between bg-[#305EFF] px-10 py-10">
          <div>
            <p className="bold mb-10 text-white">
              <span className="text-6xl text-[#D8FDB4]">CELEBRATING </span>
              <br /> the <span className="text-6xl">BOLDEST OF INDIA</span>
            </p>
            <hr className="flex w-[70%] text-gray-50" />
          </div>

          <div className="flex justify-between text-2xl text-[#D8FDB4]">
            <p>Bold ambition. Relentless grit.</p>
            <p className="text-white">Explore</p>
          </div>
        </div>

        <div className="h-full w-full bg-[#305EFF] p-5">
          <img
            src="https://framerusercontent.com/images/7t2WUJVe18RRUOCuAt3ebq8KSM4.jpg"
            alt="image"
            className="h-full w-full"
          />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <p className="text-7xl font-semibold text-[#192839]">
          The all in one{"   "}
          <span className="text-[#009E5C]">finance platform </span>
          <br /> you’ve been looking for
        </p>
        <p className="flex gap-8 text-2xl text-[#192839]">
          <span className="text-[#40566D]">With Razorpay, you</span>
          <span>|</span>
          <span>Accept Payments</span>
          <span>Make Payouts</span>
          <span>Start Business Banking</span>
          <span>Automate Payroll</span>
          <span>Get Credit & Loans</span>
        </p>
      </div>
    </div>
  );
};
export default Section_Second;
