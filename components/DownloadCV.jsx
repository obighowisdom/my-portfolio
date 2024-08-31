import React from 'react'
import MagicButton from "./MagicButton";
import { IoMdDownload } from "react-icons/io";


const DownloadCV = () => {
  return (
    <a
      target="_blank"
      href="https://app.enhancv.com/share/2d00aab0/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic"
    >
      <MagicButton
        oncl
        title="Download CV"
        icon={<IoMdDownload />}
        position="right"
      />
    </a>
  );
}

export default DownloadCV