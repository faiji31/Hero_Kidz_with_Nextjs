import { FontBangla } from "@/app/layout";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image alt="hero"  src={"/assets/hero.png"} width={500} height={100}>

          </Image>
          <div>
            <h1 className={`${FontBangla.className} text-6xl font-bold leading-20`}>আপনার শিশুকে দিন একটি <br /> <span className="text-primary">সুন্দর ভবিষ্যৎ</span> </h1>
            <p className="py-6">
              Buy Every Toy Upto 15% Discount
            </p>
            <button className="btn btn-primary btn-outline">Explore Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
