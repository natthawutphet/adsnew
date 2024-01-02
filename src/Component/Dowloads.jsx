import React, { useState, useEffect } from 'react';
import './Facebook.css'
const Downloads = () => {
  const [downloadingGoogle, setDownloadingGoogle] = useState(false);
  const [downloadingFacebook, setDownloadingFacebook] = useState(false);
  const [countdown, setCountdown] = useState(30);




  const startDownload = (file) => {

    if (file === 'google') {
      setDownloadingGoogle(true);
  
    } else if (file === 'facebook') {
      setDownloadingFacebook(true);
  
    }
    setCountdown(30);

    setTimeout(() => {
      if (file === 'google') {
        setDownloadingGoogle(false);
      
        window.location = "google/gg.zip";
      } else if (file === 'facebook') {
        setDownloadingFacebook(false);
      
        window.location = "facebook/fb.zip";
      }
    }, 30000);
      };

  useEffect(() => {
    let timer;
    if ((downloadingGoogle || downloadingFacebook) && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [countdown, downloadingGoogle, downloadingFacebook]);
  


  return (
    <>
   <div > <h1 className="text-center mt-5">Dowloads แลนค์ดิ่งเพจ ฟรี Google + Facebook</h1></div>
   
<section className='sdowloads'>
  
<div className='dowloads' >
      <button onClick={() => startDownload('google')} disabled={downloadingGoogle || downloadingFacebook} >
        Google
      </button>
      {downloadingGoogle && <p>รอสักครู่ ({countdown} วินาที) - กำลังดาวน์โหลด Google</p>}

      <button onClick={() => startDownload('facebook')} disabled={downloadingGoogle || downloadingFacebook}>
        Facebook
      </button>
      {downloadingFacebook && <p>รอสักครู่ ({countdown} วินาที) - กำลังดาวน์โหลด Facebook</p>}
    </div>
</section>

 

</>


  );
};

export default Downloads;





