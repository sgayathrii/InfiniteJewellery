import React from 'react';
import facebookIcon from "../../asserts/images/facebook.png";
import twitterIcon from "../../asserts/images/social.png";
import whatsappIcon from "../../asserts/images/whatsapp.png";

export default function FooterConnect() {
  const iconSize = 30;
  const iconSpacing = 10; 
  return (
    <div>
      <div>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Facebook" style={{ width: iconSize, height: iconSize, marginRight: iconSpacing  }}/>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={twitterIcon} alt="Twitter" style={{ width: iconSize, height: iconSize,marginRight: iconSpacing  }}/>
        </a>
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
          <img src={whatsappIcon} alt="WhatsApp" style={{ width: iconSize, height: iconSize, marginRight: iconSpacing  }}/>
        </a>
      </div>
    </div>
  );
}






