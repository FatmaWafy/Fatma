/* eslint-disable */

import React from "react";
import { media } from "../constants";

const Media = () => {
  return (
    <div className='mt-4  flex flex-wrap gap-3 items-center '>
      {media.map((media) => (
        <a
          key={media.id}
          href={media.link}
          target='_blank'
          download
          title={media.id}
        >
          <img
            src={media.icon}
            alt={media.id}
            className='cursor-pointer w-6 h-6'
          />
        </a>
      ))}
    </div>
  );
};
export default Media;
