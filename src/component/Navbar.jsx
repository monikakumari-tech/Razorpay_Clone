import { SlEarphonesAlt } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import Button from "./Button";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`z-3 sticky top-0 h-[60px] overflow-hidden lg:h-20 ${
        scrolled ? "bg-white" : "bg-blue-50"
      } flex`}
    >
      <div className="m-auto flex w-[80%] justify-between text-gray-900">
        {/* left */}
        <div className="flex items-center">
          <div>
            {/* <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLqnGQeCFwuuWCtB2dEsT8jDzP05wMT78ceg&s"
            alt="image"
            className="w-40 h-30 mr-5 mt-[-15px]"
          /> */}

            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 140 30'%3E%3Cpath d='M 9.055 7.811 L 7.892 12.075 L 14.549 7.787 L 10.195 23.968 L 14.617 23.972 L 21.048 0.072' fill='rgb(51,149,255)'/%3E%3Cpath d='M 1.89 17.169 L 0.059 23.972 L 9.121 23.972 L 12.83 10.133 Z M 33.37 11.18 C 33.148 12 32.721 12.603 32.085 12.987 C 31.45 13.371 30.559 13.564 29.408 13.564 L 25.753 13.564 L 27.036 8.798 L 30.691 8.798 C 31.84 8.798 32.63 8.989 33.058 9.379 C 33.486 9.769 33.59 10.364 33.37 11.188 Z M 37.154 11.085 C 37.619 9.364 37.427 8.04 36.577 7.113 C 35.727 6.194 34.237 5.73 32.111 5.73 L 23.954 5.73 L 19.043 23.98 L 23.006 23.98 L 24.985 16.624 L 27.584 16.624 C 28.168 16.624 28.627 16.72 28.962 16.904 C 29.298 17.095 29.495 17.426 29.556 17.904 L 30.263 23.98 L 34.509 23.98 L 33.821 18.316 C 33.681 17.051 33.099 16.308 32.078 16.087 C 33.38 15.712 34.471 15.087 35.349 14.219 C 36.222 13.357 36.845 12.277 37.154 11.093 Z M 46.787 17.448 C 46.455 18.684 45.945 19.618 45.256 20.272 C 44.567 20.927 43.743 21.251 42.781 21.251 C 41.802 21.251 41.138 20.934 40.788 20.294 C 40.436 19.655 40.424 18.728 40.751 17.514 C 41.077 16.3 41.598 15.351 42.314 14.667 C 43.03 13.983 43.867 13.641 44.829 13.641 C 45.789 13.641 46.446 13.972 46.778 14.629 C 47.118 15.289 47.125 16.233 46.793 17.461 Z M 48.524 10.99 L 48.028 12.836 C 47.813 12.174 47.398 11.644 46.783 11.247 C 46.168 10.857 45.405 10.659 44.496 10.659 C 43.382 10.659 42.311 10.945 41.284 11.519 C 40.258 12.093 39.357 12.902 38.589 13.947 C 37.821 14.991 37.26 16.175 36.898 17.507 C 36.544 18.845 36.47 20.015 36.684 21.03 C 36.906 22.052 37.371 22.832 38.087 23.377 C 38.811 23.928 39.734 24.2 40.864 24.2 C 41.761 24.205 42.649 24.011 43.463 23.634 C 44.267 23.272 44.983 22.74 45.56 22.075 L 45.043 23.999 L 48.875 23.999 L 52.374 10.996 L 48.535 10.996 Z M 66.146 10.99 L 55.001 10.99 L 54.222 13.888 L 60.707 13.888 L 52.134 21.265 L 51.401 23.987 L 62.905 23.987 L 63.684 21.089 L 56.736 21.089 L 65.44 13.601 Z M 75.955 17.426 C 75.61 18.706 75.099 19.668 74.423 20.294 C 73.747 20.927 72.929 21.243 71.969 21.243 C 69.96 21.243 69.3 19.971 69.985 17.426 C 70.325 16.161 70.839 15.21 71.526 14.569 C 72.212 13.926 73.044 13.605 74.023 13.605 C 74.983 13.605 75.631 13.924 75.965 14.565 C 76.299 15.205 76.296 16.159 75.955 17.424 Z M 78.198 11.479 C 77.316 10.931 76.19 10.658 74.817 10.658 C 73.426 10.658 72.139 10.93 70.955 11.474 C 69.775 12.015 68.739 12.823 67.927 13.833 C 67.093 14.855 66.493 16.054 66.124 17.422 C 65.762 18.785 65.718 19.982 65.999 21.007 C 66.279 22.029 66.87 22.816 67.756 23.36 C 68.65 23.909 69.787 24.182 71.182 24.182 C 72.556 24.182 73.833 23.907 75.007 23.36 C 76.181 22.809 77.185 22.028 78.02 20.998 C 78.854 19.973 79.452 18.777 79.821 17.409 C 80.191 16.041 80.235 14.846 79.954 13.819 C 79.674 12.797 79.09 12.01 78.212 11.462 Z M 91.879 14.463 L 92.861 10.925 C 92.529 10.756 92.094 10.667 91.547 10.667 C 90.668 10.667 89.827 10.884 89.014 11.322 C 88.316 11.694 87.722 12.219 87.22 12.877 L 87.73 10.972 L 86.617 10.976 L 83.885 10.976 L 80.363 23.974 L 84.249 23.974 L 86.076 17.179 C 86.342 16.191 86.821 15.414 87.511 14.862 C 88.198 14.308 89.054 14.031 90.088 14.031 C 90.723 14.031 91.314 14.176 91.875 14.465 Z M 102.692 17.488 C 102.36 18.702 101.858 19.629 101.171 20.269 C 100.485 20.912 99.658 21.232 98.698 21.232 C 97.738 21.232 97.081 20.909 96.734 20.261 C 96.379 19.61 96.372 18.673 96.704 17.44 C 97.036 16.208 97.546 15.262 98.247 14.608 C 98.949 13.948 99.776 13.618 100.736 13.618 C 101.681 13.618 102.316 13.957 102.656 14.641 C 102.995 15.325 103.003 16.274 102.676 17.488 Z M 105.394 11.5 C 104.674 10.926 103.754 10.639 102.639 10.639 C 101.662 10.639 100.731 10.86 99.848 11.306 C 98.966 11.751 98.25 12.358 97.7 13.126 L 97.713 13.037 L 98.365 10.97 L 94.569 10.97 L 93.602 14.567 L 93.573 14.692 L 89.585 29.51 L 93.477 29.51 L 95.485 22.051 C 95.684 22.715 96.091 23.235 96.711 23.612 C 97.331 23.987 98.097 24.173 99.007 24.173 C 100.137 24.173 101.215 23.901 102.238 23.357 C 103.264 22.811 104.15 22.025 104.903 21.01 C 105.656 19.995 106.215 18.818 106.572 17.487 C 106.934 16.153 107.008 14.964 106.801 13.923 C 106.591 12.881 106.125 12.074 105.405 11.503 Z M 118.301 17.435 C 117.97 18.664 117.46 19.605 116.773 20.253 C 116.086 20.904 115.259 21.229 114.299 21.229 C 113.317 21.229 112.653 20.912 112.306 20.272 C 111.951 19.632 111.944 18.706 112.269 17.492 C 112.594 16.278 113.112 15.329 113.828 14.645 C 114.545 13.961 115.382 13.62 116.344 13.62 C 117.304 13.62 117.954 13.951 118.293 14.606 C 118.633 15.262 118.635 16.206 118.304 17.438 Z M 120.037 10.973 L 119.54 12.82 C 119.326 12.154 118.913 11.624 118.299 11.231 C 117.68 10.838 116.918 10.642 116.011 10.642 C 114.895 10.642 113.819 10.929 112.791 11.503 C 111.764 12.077 110.864 12.881 110.096 13.923 C 109.328 14.965 108.767 16.152 108.405 17.483 C 108.047 18.82 107.977 19.991 108.191 21.011 C 108.407 22.026 108.873 22.81 109.594 23.357 C 110.313 23.902 111.24 24.177 112.37 24.177 C 113.278 24.177 114.146 23.989 114.969 23.61 C 115.772 23.247 116.486 22.714 117.061 22.049 L 116.544 23.975 L 120.376 23.975 L 123.875 10.977 L 120.043 10.977 Z M 139.964 10.978 L 139.966 10.974 L 137.611 10.974 C 137.535 10.974 137.469 10.978 137.4 10.979 L 136.179 10.979 L 135.55 11.847 L 135.396 12.053 L 135.328 12.156 L 130.364 19.047 L 129.336 10.978 L 125.27 10.978 L 127.329 23.24 L 122.781 29.514 L 126.836 29.514 L 127.935 27.96 C 127.967 27.914 127.995 27.876 128.032 27.827 L 129.316 26.011 L 129.353 25.959 L 135.108 17.831 L 139.959 10.99 L 139.966 10.986 L 139.964 10.986 Z' fill='rgb(25,40,57)'/%3E%3C/svg%3E"
              alt="Razorpay Logo"
              className="h-8 w-auto pr-5"
            />
          </div>
          <div className="hidden gap-4 pl-2 text-[17px] xl:flex">
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
        <div className={`hidden items-center gap-2 xl:flex`}>
          <SlEarphonesAlt />
          <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex items-center gap-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_51rxcqCv0z34QGF8-KIZs4BIl_icwO-UtQ&s"
                alt="flag"
                className="w-10 p-1"
              />
              <IoIosArrowDown
                className={`transition-transform duration-300 ${isHovered ? "rotate-180" : ""}`}
              />
            </div>

            {/* Dropdown */}
            {/* <div className="hidden group-hover:block absolute dropdown-menu right-[-10px] top-10 pt-4"> */}
            {isHovered ? (
              <div className="dropdown-menu absolute right-[0px] top-5 pt-4">
                <div className="w-50 flex flex-col gap-1 rounded-sm bg-white px-5 py-3 text-gray-500">
                  {/* India */}
                  <div className="group flex items-center justify-between rounded px-2 py-1 hover:bg-blue-100">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_51rxcqCv0z34QGF8-KIZs4BIl_icwO-UtQ&s"
                        alt="india"
                        className="w-10 p-1"
                      />
                      <span>India</span>
                    </div>
                    <span className="text-gray-400 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      <FaArrowRight />
                    </span>
                  </div>

                  {/* Malaysia */}
                  <div className="group flex items-center justify-between rounded px-2 py-1 hover:bg-blue-100">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://www.svgrepo.com/show/405539/flag-for-flag-malaysia.svg"
                        alt="malaysia"
                        className="w-10 p-1"
                      />
                      <span>Malaysia</span>
                    </div>
                    <span className="text-gray-400 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      <FaArrowRight />
                    </span>
                  </div>

                  {/* Singapore */}
                  <div className="group flex items-center justify-between rounded px-2 py-1 hover:bg-blue-100">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmmbBJ0tbFlspI5HrwnvwTDgXNQXVnTiNF2g&s"
                        alt="singapore"
                        className="w-10 p-1"
                      />
                      <span>Singapore</span>
                    </div>
                    <span className="text-gray-400 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      <FaArrowRight />
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}

            {/* </div> */}
          </div>

          <div className="rounded-sm border border-blue-400 px-4 py-2 font-bold text-blue-500">
            Login
          </div>
          <div>
            <Button
              text={"Sign Up"}
              className="border border-blue-500 bg-blue-500 text-sm text-white"
            />
          </div>
        </div>
        {/* visible at less than xl */}

        <div className="flex items-center gap-2 xl:hidden">
          <Button
            text={"Login"}
            className="border border-blue-500 text-blue-400"
          />
          <FaBars className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
