import React from "react";

const SketchfabViewer: React.FC = () => {
  return (
    <div className="sketchfab-embed-wrapper">
      <iframe
        title="3D Floor Plan GLB Test"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; fullscreen; xr-spatial-tracking"
        className="w-full h-[500px] md:h-[700px]" // Responsive height
        src="https://sketchfab.com/models/0568795816b2466c8909b8d48d7a8f0a/embed"
      ></iframe>

      <p className="text-sm text-gray-600 mt-2">
        <a
          href="https://sketchfab.com/3d-models/3d-floor-plan-glb-test-0568795816b2466c8909b8d48d7a8f0a"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-blue-500"
        >
          3D Floor Plan GLB Test
        </a>{" "}
        by{" "}
        <a
          href="https://sketchfab.com/RichardHong"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-blue-500"
        >
          Richard Hong
        </a>{" "}
        on{" "}
        <a
          href="https://sketchfab.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-blue-500"
        >
          Sketchfab
        </a>
      </p>
    </div>
  );
};

export default SketchfabViewer;
