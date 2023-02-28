import React, { useState } from 'react';
import copyLinkIcon from 'assets/ui/copyLinkIcon.svg'
import copyLinkIconDark from 'assets/ui/copyLinkIconDark.svg'

function CopyEventLink() {
  const [colorTheme, setTheme] = useState(localStorage.theme);
  window.addEventListener("themeChanged", () => setTheme(localStorage.theme));

  return (
    <section className="flex flex-row gap-x-7 items-center text-xl dark:text-white font-medium">
      Copy Link
      <img 
        src={colorTheme === 'light' ? copyLinkIcon : copyLinkIconDark} 
        alt="copyLinkIcon" 
        className="h-11"/> 
    </section>
  );
}

export default CopyEventLink;
