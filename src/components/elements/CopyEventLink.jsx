import React, { useState } from 'react';
import copyLinkIcon from 'assets/ui/copyLinkIcon.svg'
import copyLinkIconDark from 'assets/ui/copyLinkIconDark.svg'

function CopyEventLink() {
  const url = location.href
  const [colorTheme, setTheme] = useState(localStorage.theme);
  window.addEventListener("themeChanged", () => setTheme(localStorage.theme));
 
  function handleCopyClick(){
    navigator.clipboard.writeText(url).then(
      () => {
        alert('copied!')
      },
      (e) => {
        if(e) {alert(e)}
      }
    );
  }

  return (
    <section className="flex flex-row gap-x-7 items-center text-xl dark:text-white font-medium">
      Copy Link
      <button onClick={()=> {handleCopyClick()}}>
        <img 
          src={colorTheme === 'light' ? copyLinkIcon : copyLinkIconDark} 
          alt="copyLinkIcon" 
          className="h-11"/> 
      </button>
    </section>
  );
}

export default CopyEventLink;
