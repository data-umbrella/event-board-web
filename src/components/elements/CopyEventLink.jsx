import React, { useState } from 'react';
import copyLinkIcon from 'assets/ui/copyLinkIcon.svg'
import copyLinkIconDark from 'assets/ui/copyLinkIconDark.svg'
import { FcCheckmark }from 'react-icons/fc';

function CopyEventLink() {
  const url = location.href
  const [colorTheme, setTheme] = useState(localStorage.theme);
  const [copyConfirmed, setCopyConfirmed] = useState(false);

  window.addEventListener("themeChanged", () => setTheme(localStorage.theme));
 
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
    <section className="relative flex flex-row gap-x-7 items-center text-xl dark:text-white font-medium">
      Copy Link
      <button onClick={()=> {handleCopyClick()}}>
        <img 
          src={colorTheme === 'light' ? copyLinkIcon : copyLinkIconDark} 
          alt="copyLinkIcon" 
          className="h-11"/> 
      </button>
      { copyConfirmed && 
        <div className="absolute inset-y-0 right-0"> 
          { <FcCheckmark/> } 
        </div> 
      }
    </section>
  );
}

export default CopyEventLink;
