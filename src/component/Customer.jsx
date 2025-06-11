const logos = [
  {
    src: "https://framerusercontent.com/images/C4hJq64I5hgvNm4gCOoGcDHvwhk.png",
    alt: "unacademy",
    width: "w-50",
  },
  {
    src: "https://framerusercontent.com/images/vObQP9CoD4bZz7StLm9YcIqua4.png",
    alt: "urbanCompany",
    width: "w-30",
  },
  {
    src: "https://framerusercontent.com/images/Ilr3bxmQOETtoVodcxWBbTmfg.png",
    alt: "swiggy",
    width: "w-30",
  },
  {
    src: "https://framerusercontent.com/images/dWMDfWkORDAo3Tzpjnt7GQyOmh4.png",
    alt: "paisabazaar",
    width: "w-40",
  },
  {
    src: "https://framerusercontent.com/images/x2Zm6zi427C3aYm224pjFo5WA.png",
    alt: "nykaa",
    width: "w-30",
  },
  {
    src: "https://framerusercontent.com/images/Kpaei7xvI0Gsrl7QWvqr88dc7OE.png",
    alt: "zerodha",
    width: "w-40",
  },
  {
    src: "https://framerusercontent.com/images/y4W3Xc5nuT6rP4MUkNIGkgVH0Y.png",
    alt: "goibibo",
    width: "w-40",
  },
  {
    src: "https://framerusercontent.com/images/1c1kbaA66uWPLlBzNA5QO7te0jQ.png",
    alt: "goibibo",
    width: "w-20",
  },
  {
    src: "https://framerusercontent.com/images/Y3KN7wnOGUtFAq9aQWmPIKxJk.png",
    alt: "clearTax",
    width: "w-30",
  },
  {
    src: "https://framerusercontent.com/images/DaICki1qSQnwmkpLsl3KuKS7eg.png",
    alt: "bookmyshow",
    width: "w-30",
  },
  {
    src: "https://framerusercontent.com/images/7fKLZC1zXtfPaUE5zaqYJWkIkUc.png",
    alt: "bmw",
    width: "w-12",
  },
  {
    src: "https://framerusercontent.com/images/aFO8PmSrDButYhI8cb5WRNGitQ.png",
    alt: "ather",
    width: "w-30",
  },
  {
    src: "https://framerusercontent.com/images/5MawuwWfqVlf62PdluvVangBqk.png",
    alt: "apolloc",
    width: "w-30",
  },
  {
    src: "https://framerusercontent.com/images/loQFVf8midy8jXbZfBVgQJaH27o.png",
    alt: "niit",
    width: "w-20",
  },
];

const Customer = () => {
  // Duplicate the logos once for seamless loop
  const loopedLogos = [...logos, ...logos];

  return (
    <div className="scroll-mask mt-[-30px] overflow-hidden">
      <div className="scroll-left gap-30 flex items-center">
        {loopedLogos.map(({ src, alt, width }, index) => (
          <div key={index}>
            <img src={src} alt={alt} className={width} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customer;
