import React from 'react';
import { Helmet } from 'react-helmet';

function GoogleTag() {
  const title = "รับยิง Google Ads สายเทา";
  const description = "รายละเอียดบริการ โฆษณา Google สายเทา ค่าบริการ เหมาจ่ายรายเดือน 19,000 บาท";
  const keywords = "รับทำโฆษณา, ยิงads,facebook,สายเทา,โฆษณา,ยิงads facebook สายเทา,รับยิงads,รับยิงแอด สายเทา,facebook ads,google ads,google,รับยิงแอด,ads,รับทำโฆษณา,รับโฆษณา,Facebook,การตลาด,โฆษณาออนไลน์,เว็บไซต์,ตลาดเป้าหมาย,โฆษณาบนโซเชียลมีเดีย,Google Ads,การโฆษณาบน Facebook,การโฆษณาออนไลน์บนสื่อต่าง ๆ,การตลาดออนไลน์,การโปรโมท,โฆษณา Facebook,การโฆษณา Google,การโฆษณาสินค้า,การโฆษณาโปรโมชั่น,วิธีการโฆษณา,ความสำเร็จในการตลาด,บริการโฆษณา,การตลาดออนไลน์บน Facebook,การโฆษณาบนเว็บ,การวางแผนโฆษณา,รับจ้างโฆษณา";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="รับยิงGoogleAdsสายเทา" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta property="og:image" content="https://teamufa.com/Google-bg.jpg" />
      <meta property="og:url" content="https://teamufa.com" />
      <meta property="og:type" content="website" />
      <meta name="twitter:image" content="https://teamufa.com/Google-bg.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};

export default GoogleTag;


