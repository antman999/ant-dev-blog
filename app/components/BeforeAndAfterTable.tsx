"use client";
import React from "react";
import CustomImage from "./CustomImage";

type Props = {
  beforeImageSrc: string;
  beforeImageAlt: string;
  afterImageSrc: string;
  afterImageAlt: string;
  priority?: string;
};

export default function BeforeAndAfterTable({
  beforeImageSrc,
  beforeImageAlt,
  afterImageAlt,
  afterImageSrc,
  priority,
}: Props) {
  return (
    <div className=" w-full mx-auto">
      <table className="w-full border-collapse">
        <thead className="border-b-gray-200  dark:border-b-slate-600">
          <tr>
            <th className="py-2 px-4 bg-gray-100 text-center dark:bg-slate-700 dark:text-white text-gray-800 font-medium">
              Before
            </th>
            <th className="py-2 px-4 bg-gray-100 text-gray-800 text-center dark:bg-slate-700 dark:text-white font-medium">
              After
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b border-gray-200 dark:border-slate-600">
              <CustomImage src={beforeImageSrc} alt="Before" />
            </td>
            <td className="py-2 px-4 border-b border-gray-200 dark:border-slate-600">
              <CustomImage src={afterImageSrc} alt="After" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
