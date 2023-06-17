import React from "react";
import Image from "next/image";

export default function ProfileImage() {
  return (
    <section className="w-full mx-auto">
      <Image
        className="drop-shadow-xl rounded-full mx-auto mt-6"
        src="/images/codingMe.png"
        width={200}
        height={200}
        alt="Ant Man"
        priority={true}
      />
    </section>
  );
}
