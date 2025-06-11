import { PiCompassBold } from "react-icons/pi";
const Assisted = () => {
  return (
    <>
      <div className="m-auto hidden w-[80%] items-center justify-between overflow-hidden rounded-xl bg-white py-3 pr-5 font-medium text-gray-800 xl:flex">
        <div className="flex gap-6">
          <div className="mx-[-3px] mt-1 h-8 w-2 rounded-xl bg-blue-600"></div>
          <div className="flex items-center gap-4">
            <PiCompassBold />
            <span>I'm here to</span>
          </div>

          <span className="rounded-xl bg-gray-100 p-2">Accept Payments</span>
          <span className="rounded-xl bg-gray-100 p-2">Make Payments</span>
          <span className="rounded-xl bg-gray-100 p-2">
            Start Business Banking
          </span>
          <span className="rounded-xl bg-gray-100 p-2">Get Credit Loans</span>
          <span className="rounded-xl bg-gray-100 p-2">Automate Payroll</span>
        </div>
        <div>
          <p className="text-gray-500">
            //Find the best product for your business
          </p>
        </div>
      </div>
    </>
  );
};
export default Assisted;
