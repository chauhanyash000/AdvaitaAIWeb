import React from 'react';

const MacBookFrame = () => (
  <div className="relative max-w-4xl mx-auto my-8 px-4">
    <div className="relative pt-[40px] pb-[30px] bg-neutral-300 rounded-[20px] shadow-xl">
      {/* Camera/Notch */}
      <div className="absolute top-0 left-0 right-0 h-[20px] bg-neutral-300 rounded-t-[20px] flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
      </div>
      
      {/* Screen Content */}
      <div className="mx-6 bg-white rounded-lg shadow-inner">
        <div className="w-full h-[65vh]">
          <iframe 
            src="https://advaita-platform.web.app/"
            className="w-full h-full rounded-lg"
            title="Advaita Platform"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
      
      {/* Base/Stand */}
      <div className="absolute bottom-0 left-[10%] right-[10%] h-[30px] bg-neutral-300 rounded-b-xl">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/4 h-[4px] bg-neutral-400 rounded-t-lg" />
      </div>
    </div>
  </div>
);

export default MacBookFrame;
