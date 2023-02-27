import React from 'react';
import { SiFacebook, SiTwitter, SiLinkedin, SiInstagram,SiTorbrowser } from 'react-icons/si';

export default function ShareLinkIcon({ url, size=24, ...props }) {
  if (url.match(/facebook.com/)) {
    return <SiFacebook url={url} size={size} {...props} />;
  } else if (url.match(/twitter.com/)) {
    return <SiTwitter url={url} size={size} {...props} />;
  } else if (url.match(/instagram.com/)) {
    return <SiInstagram url={url} size={size} {...props} />;
  } else if (url.match(/linkedin.com/)) {
    return <SiLinkedin url={url} size={size} {...props} />;
  }

  return <SiTorbrowser url={url} size={size} {...props} />;
}
