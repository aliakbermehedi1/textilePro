const FirstBanner = () => {
  return (
    <div className="d-flex align-items-center">
      <div className="container">
        {/* START */}

        <div className="hidden md:grid grid-cols-7 my-2 md:my-20">
          <div className="col-span-7 md:col-span-4 text-center px-4 md:px-20">
            {/* Content Here */}

            <p className="text-lg md:text-3xl font-bold text-center pt-8 md:pt-36">
              -: This site is under construction :-
            </p>

            <p className="pt-3 md:pt-6 text-lg text-left hidden md:grid">
              Oldstitch Zhejiang Lanhong Textile Technology Co., LTD
              <br />
              <br />
              Dhaka Office: Level #2, House # 18, Road #10, Sector #1, Uttara,
              Dhaka-1230
              <br />
              <br />
              Phone: +8801784393953,{" "}
              <span className="pl-3">Email: info@lanhongtextile.com</span>
              <br />
              <br />
              Zhejiang Office: <br />
              Room 701, Building 1, Conan Business Center, Keqiao District,
              Shaoxing, Zhejiang
              <br />
              Dongguan Office: 145 Renmin North Road, Humen Town, Dongguan City,
              Guangdong Province
            </p>

            <p className="pt-3 md:pt-6 text-lg text-left grid md:hidden">
              Oldstitch Zhejiang Lanhong Textile Technology Co., LTD
              <br />
              <br />
              Dhaka Office: Level #2, House # 18, Road #10, Sector #1, Uttara,
              Dhaka-1230
              <br />
              <br />
              Phone: +8801784393953, <br />
              Email: info@lanhongtextile.com
              <br />
              <br />
              <p className="text-justify">
                <span className="font-bold">Zhejiang Office:</span> <br />
                Room 701, Building 1, Conan Business Center, Keqiao District,
                Shaoxing, Zhejiang
              </p>
              <p className="text-justify pt-2">
                <span className="font-bold">Dongguan Office:</span> <br /> 145
                Renmin North Road, Humen Town, Dongguan City, Guangdong Province
              </p>
            </p>

            <p className="my-8 md:my-28"></p>
          </div>
          <div className="col-span-7 md:col-span-3">
            {/* Image Here */}
            <img
              src="/img/banner.jpeg"
              alt="product"
              className="w-full h-full rounded-3xl"
            />
          </div>
        </div>

        {/* SMALL */}
        <div className="grid grid-cols-7 my-2 md:my-20">
          <div className="col-span-7 md:col-span-3">
            {/* Image Here */}
            <img
              src="/img/banner.jpeg"
              alt="product"
              className="w-full h-full rounded-3xl"
            />
          </div>

          <div className="col-span-7 md:col-span-4 text-center px-1 md:px-20">
            {/* Content Here */}

            <p className="text-xl md:text-3xl font-bold text-center pt-4 md:pt-36">
              -: This site is under construction :-
            </p>

            <p className="pt-2 md:pt-6 text-lg text-left">
              <p>Oldstitch Zhejiang Lanhong Textile Technology Co., LTD</p>
              <p className="pt-1">
                <p className="font-bold">Dhaka Office:</p> 
                Level #2, House # 18, Road #10, Sector #1, Uttara,
                Dhaka-1230
              </p>
              <p className="font-bold pt-2">Phone: +8801784393953,</p>
              <p className="font-bold pt-1">
                Email: info@lanhongtextile.com
              </p>{" "}
              <p className="text-justify pt-2">
                <span className="font-bold">Zhejiang Office:</span> <br />
                Room 701, Building 1, Conan Business Center, Keqiao District,
                Shaoxing, Zhejiang
              </p>
              <p className="text-justify pt-1">
                <span className="font-bold">Dongguan Office:</span> <br /> 145
                Renmin North Road, Humen Town, Dongguan City, Guangdong Province
              </p>
            </p>

            <p className="my-8 md:my-28"></p>
          </div>
        </div>
        {/* SMALL END */}

        {/* END */}
      </div>
    </div>
  );
};

export default FirstBanner;
