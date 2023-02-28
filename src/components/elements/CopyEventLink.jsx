import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import copyLinkIcon from 'assets/ui/copyLinkIcon.svg'
import copyLinkIconDark from 'assets/ui/copyLinkIconDark.svg'

function CopyEventLink() {
  const [colorTheme, setTheme] = useState(localStorage.theme);
  window.addEventListener("themeChanged", () => setTheme(localStorage.theme));
  const url = useLocation().pathname;

 function handleCopyClick(){
    navigator.clipboard.writeText(url).then(
      () => {
      console.log('url copied', url)
      },
      (e) => {
      if(e) {console.log(e)}
      }
    );
    return (
      alert('copied!')
    );  
}


  // const handleCopyClick =  useEffect(() => {
  //   const url = useLocation().pathname;
  
  //   navigator.clipboard.writeText(url);
  
  //   return (
  //     alert('copied!')
  //   );
  
  // }, []);

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
