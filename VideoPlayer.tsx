import React from 'react';
import videoFile from './v1.mp4'; // <-- this is the right way


const VideoPlayer: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 bg-gray-100 dark:bg-gray-800 animate-fade-in-up">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
        Our 3-D Villa Plan
      </h1>
      <video
        className="w-full max-w-3xl rounded-xl shadow-xl transition-transform hover:scale-105 duration-300"
        controls
        autoPlay
        loop
        muted
      >
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
