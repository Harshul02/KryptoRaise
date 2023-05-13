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
              <div className="h-full bg-[#1d2029] bg-opacity-75 px-8 pt-8 pb-8 rounded-xl overflow-hidden text-center relative">
                <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
                Trust and Transparency
                </h1>
                <p className="leading-relaxed mb-3 text-lg">
                Our platform leverages the power of blockchain technology to provide a secure and transparent crowdfunding environment. Every transaction and contribution is recorded on the blockchain, ensuring transparency and eliminating the risk of fraud or manipulation.
                </p>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-[#1d2029] bg-opacity-75 px-8 pt-8 pb-8 rounded-xl overflow-hidden text-center relative">
                <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
                Enhanced Security
                </h1>
                <p className="leading-relaxed mb-3 text-lg">
                With our blockchain-based crowdfunding application, you can enjoy enhanced security for both backers and project creators. The immutable nature of blockchain technology ensures that sensitive data and funds are protected from unauthorized access or tampering.
                </p>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-[#1d2029] bg-opacity-75 px-8 pt-8 pb-8 rounded-xl overflow-hidden text-center relative">
                
                <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
                Global Accessibility
                </h1>
                <p className="leading-relaxed mb-3 text-lg">
                Our platform enables crowdfunding campaigns to reach a global audience. With blockchain technology, geographical barriers are no longer an obstacle. Backers from different parts of the world can participate in campaigns and support projects they believe in, fostering a diverse and inclusive crowdfunding ecosystem.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
