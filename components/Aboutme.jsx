import Image from "next/image";
import React from "react";
import ContactDetail from "./ContactDetail";

const Aboutme = () => {
  return (
    <div>
      <div className="flex justify-center items-center w-full mt-6 p-4">
        <div className="flex flex-col flex-1 text-center remove-scrollbar max-w-200">
          <h1 className="text-xl font-bold">Hi I am Tawkeer Ahmad</h1>
          <h1 className="p-4 text-wrap">
            Currently working as a Java developer. I have experience in building
            web applications using React, Next.js, and Node.js. I am passionate
            about learning new technologies and improving my skills.
          </h1>
        </div>
        <Image
          src="/profile-img1.jpg"
          alt="image"
          width={300}
          height={300}
          className="object-cover border rounded-lg hidden md:block"
        />
      </div>
      <ContactDetail />
    </div>
  );
};

export default Aboutme;
