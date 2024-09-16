import { exportComponentAsPNG } from "react-component-export-image";

function ExportButton({ resumeRef }) {
  const downloadAsJPEG = () => {
    import("react-component-export-image").then((module) => {
      module.exportComponentAsPNG(resumeRef, {
        fileName: "resume.jpeg",
      });
    });
  };

  return (
    <button
      onClick={downloadAsJPEG}
      className="fixed right-4 bottom-4 backdrop-blur-md text-white font-bold py-2 px-4 rounded"
    >
      Download as JPEG
    </button>
  );
}

export default ExportButton;
