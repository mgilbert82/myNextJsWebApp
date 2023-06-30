import React from "react";
import Image from "next/image";
import Button from "@/components/Button/Button";
import about from "../../../public/assets/images/website/about.png";

export const metadata = {
  title: "Michel Gilbert - About",
  description: "This is about page",
};

const About = () => {
  return (
    <div className="mb-10 pb-10 mt-5 pt-5">
      <h1 className="p-2 text-5xl text-transparent bg-clip-text bg-gradient-to-b from-blue to-white mt-5">
        Who am i ?
      </h1>
      <div className="grid grid-cols-2 gap-4 mt-8">
        <div className="m-2">
          <Image
            className="object-cover"
            src={about}
            // src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="AboutMe"
            width={2150}
            height={3776}
          />
        </div>
        <div className="grid grid-rows">
          <div className="m-2">
            <h3 className="text-yellow">Story</h3>
            <p className=" text-left">
              Adventurers for several years exploring the world of department
              stores, and conquering human management through support,
              communication and knowledge sharing. During this period, I
              developed several IT solutions to optimize and improve the quality
              of life at work. While I participated in the group&quot;s various
              IS projects, I was often a referent, trainer, key-user... <br />
              After 15 years in this structure, I decided to make a professional
              retraining in web application development.
            </p>
          </div>
          <div className="m-2">
            <h3 className="text-yellow">Now</h3>
            <p className="text-left">
              Actually, i work on myself to help handcraft man, charitable
              association to improve her communication on the web !{" "}
            </p>
          </div>
          <div className="m-2">
            <h3 className="text-yellow">What can i do for you ?</h3>
            <ul className="text-left">
              <li>
                - Help for develop and deploy a solution to be on the network
              </li>
              <li>- Develop your own brand design</li>
              <li> - Creative illustrations</li>
              <li>...</li>
            </ul>
            <Button url={"/contact"} text={"Contact me"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
