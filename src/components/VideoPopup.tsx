import { useEffect, useState } from "react";

const VideoPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show the popup after 5 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000);

    // Cleanup timeout on unmount
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showPopup) {
      // Hide popup after 10 seconds
      const hideTimer = setTimeout(() => {
        setShowPopup(false);
      }, 10000);

      return () => clearTimeout(hideTimer);
    }
  }, [showPopup]);

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-orange-400 p-6 rounded-lg shadow-lg relative w-[80%] max-w-md">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
              onClick={() => setShowPopup(false)}
            >
              ✖
            </button>
            <video
              className="w-full rounded-md"
              autoPlay
              controls
              muted
              onEnded={() => setShowPopup(false)} // Hide popup when video ends
            >
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoPopup;