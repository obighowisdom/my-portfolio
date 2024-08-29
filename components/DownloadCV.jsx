import React from 'react'
import MagicButton from "./MagicButton";
import { IoMdDownload } from "react-icons/io";


const DownloadCV = () => {
  return (
    <a href="#about">
      <MagicButton
        title="Download CV"
        icon={<IoMdDownload />}
        position="right"
      />
    </a>
  );
}

export default DownloadCV