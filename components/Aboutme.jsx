import Image from "next/image";
import React from "react";
import ContactDetail from "./ContactDetail";

const Aboutme = () => {
  return (
    <div>
    <div className="flex justify-center items-center w-full mt-6 p-4">
      <div className="flex flex-col flex-1 text-center remove-scrollbar max-w-200">
        <h1 className="text-xl font-bold">Hi I am Tawkeer Ahmad</h1>
        <h1 className="p-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus fuga
          earum dolorem perspiciatis incidunt ipsam consequatur. Deleniti
          reiciendis dolores magnam culpa et dicta hic doloremque porro. Sequi
          minima unde, illum quae, ea ipsa facere similique optio praesentium
          atque eius adipisci cumque labore fuga eveniet nihil exercitationem
          asperiores autem nemo quaerat. Explicabo, perferendis dicta iure a
          modi recusandae esse velit earum est, deserunt placeat. Iusto,
          explicabo facere aspernatur molestiae illum, magni, quis consequuntur
          neque architecto possimus placeat.
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
     <ContactDetail/>
    </div>
  );
};

export default Aboutme;
