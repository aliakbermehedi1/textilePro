const FirstBanner = () => {
  return (
    <div
      className="relative d-flex align-items-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/img/banner.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Black shadow overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="container relative z-10">
        {/* START */}

        <div className="text-center px-20">
          {/* Content Here */}
          <p className="text-5xl font-bold text-center text-yellow-300">
            Coming Soon
          </p>
          <p className="text-2xl font-bold text-center pt-6 text-white">
            Our Site is currently under construction. We're working <br /> hard
            to bring you an exceptional experience!
          </p>

          <p className="text-xl font-semibold text-center py-6 text-white">
            Expected Launch:{" "}
            <span className="font-bold text-yellow-300 pl-2">Soon</span>
          </p>

          <div className="text-lg text-center bg-white bg-opacity-80 p-4 rounded-xl">
            <p className="font-bold text-2xl">
              Oldstitch/Zhejiang Lanhong Textile Technology Co., LTD
            </p>
            <div className="mt-6 border-l-4 border-yellow-300">
              <p className="font-bold text-2xl">Dhaka Office:</p>
              <p>
                Level #2, House # 18, Road #10, Sector #1, Uttara, Dhaka-1230
              </p>

              {/* <p>Phone: +8801784393953</p> */}
              <p>
                Email:{" "}
                <span className="underline">info@lanhongtextile.com</span>
              </p>
            </div>

            <div className="mt-6 border-l-4 border-yellow-300">
              <span className="font-bold text-2xl">Zhejiang Office:</span>
              <p>
                Room 701, Building 1, Conan Business Center, Keqiao District,
                Shaoxing, Zhejiang
              </p>
            </div>
            <div className="mt-6 border-l-4 border-yellow-300">
              <span className="font-bold text-2xl">Dongguan Office:</span>
              <p>
                145 Renmin North Road, Humen Town, Dongguan City, Guangdong
                Province
              </p>
            </div>
          </div>
        </div>

        {/* END */}
      </div>
    </div>
  );
};

export default FirstBanner;
