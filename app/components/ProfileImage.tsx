import React from "react";
import Image from "next/image";

export default function ProfileImage() {
  return (
    <section className="w-full mx-auto">
      <Image
        className="drop-shadow-xl rounded-full mx-auto mt-8  mb-2 md:mb-4"
        src="/images/codingMe.png"
        width={170}
        height={170}
        alt="Ant Man"
        priority={true}
      />
    </section>
  );
}
