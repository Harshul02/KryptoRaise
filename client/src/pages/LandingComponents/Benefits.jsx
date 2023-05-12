import React from "react";

export default function Benefits() {
  return (
    <div
      style={{
        backgroundColor: "#000000",
        // backgroundImage: 'linear-gradient(265deg, #4834d4 0%, #0c0c0c 74%)'
      }}
    >
      {/* <div style={{
  backgroundColor: "#923cb5",
  backgroundImage: 'linear-gradient(147deg, #923cb5 0%, #000000 74%)'
}}>
   */}

      <section className="text-gray-400 body-font">
        <div className="container px-5 py-24 mx-auto rounded-xl">
          <h2
            className="text-center mb-7"
            style={{
              borderRadius: "100px",
              fontSize: "3.125rem",
              fontWeight: 700,
              color: "#ffffff",
              textShadow: "5px 5px #000",
            }}
          >
            Why Choose Us?
          </h2>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-[#1d2029] bg-opacity-75 px-8 pt-16 pb-24 rounded-full overflow-hidden text-center relative">
                <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
                  Raclette Blueberry Nextious Level
                </h1>
                <p className="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-[#1d2029] bg-opacity-75 px-8 pt-16 pb-24 rounded-full overflow-hidden text-center relative">
                <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
                  Raclette Blueberry Nextious Level
                </h1>
                <p className="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-[#1d2029] bg-opacity-75 px-8 pt-16 pb-24 rounded-full overflow-hidden text-center relative">
                
                <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
                  Selvage Poke Waistcoat Godard
                </h1>
                <p className="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <a className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
