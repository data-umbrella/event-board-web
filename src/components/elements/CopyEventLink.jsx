import React, { useState } from 'react';
import copyLinkIcon from 'assets/ui/copyLinkIcon.svg'
import { FcCheckmark }from 'react-icons/fc';

function CopyEventLink() {
  const url = location.href
  const [copyConfirmed, setCopyConfirmed] = useState(false);
 
  function handleCopyClick(){
    navigator.clipboard.writeText(url).then(
      () => {
        setCopyConfirmed(true);
        setTimeout(() => {
          setCopyConfirmed(false);
        }, 2000);
      },
      (e) => {
        if(e) {alert('Copy error')}
      }
    );
  }

  return (
    <section className="relative flex flex-row gap-x-7 justify-center items-center md:text-xl dark:text-white font-medium">
      Copy Link
      <button onClick={ ()=>handleCopyClick() } className="flex-none">
        <img 
          src={copyLinkIcon} 
          alt="copyLinkIcon" 
          className="flex-none h-8 md:h-11"/> 
      </button>
      { copyConfirmed && 
        <span className="md:absolute md:top-0 md:right-0"> 
          <FcCheckmark />  
        </span> 
      }
    </section>
  );
}

export default CopyEventLink;
