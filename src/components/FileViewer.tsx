import React, { useState } from 'react';
import { X, Download, ZoomIn, ZoomOut, RotateCw, Maximize2 } from 'lucide-react';
import { fileStorageService } from '../services/fileStorage';

interface FileViewerProps {
  isOpen: boolean;
  onClose: () => void;
  fileData?: string;
  fileName: string;
  fileType: 'pdf' | 'image';
  subject?: string;
  type?: string;
  unit?: string;
  storedFileName?: string;
}

const FileViewer: React.FC<FileViewerProps> = ({
  isOpen,
  onClose,
  fileData,
  fileName,
  fileType,
  subject,
  type,
  unit,
  storedFileName
}) => {
  const [zoom, setZoom] = useState(100);
  const [rotation, setRotation] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!isOpen) return null;

  // Get file URL from storage service if we have the required info
  const getFileUrl = () => {
    if (fileData) return fileData;
    if (subject && type && storedFileName) {
      // Fix the type mapping for the API
      const apiType = type === 'notes' ? 'notes' : 
                     type === 'practice-tests' ? 'practice-tests' : 
                     type === 'practicals' ? 'practicals' : type;
      return fileStorageService.getFileUrl(subject, apiType, storedFileName, unit);
    }
    return '';
  };

  const fileUrl = getFileUrl();

  const handleDownload = () => {
    if (fileData) {
      // If we have base64 data, use it directly
      const link = document.createElement('a');
      link.href = fileData;
      link.download = fileName;
      link.click();
    } else if (subject && type && storedFileName) {
      // If we have server file info, fetch it properly
      const apiType = type === 'notes' ? 'notes' : 
                     type === 'practice-tests' ? 'practice-tests' : 
                     type === 'practicals' ? 'practicals' : type;
      const downloadUrl = fileStorageService.getFileUrl(subject, apiType, storedFileName, unit);
      
      // Create a temporary link to trigger download
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = fileName;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 25, 300));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 25, 25));
  const handleRotate = () => setRotation(prev => (prev + 90) % 360);
  const toggleFullscreen = () => setIsFullscreen(!isFullscreen);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className={`relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 ${
        isFullscreen ? 'w-full h-full' : 'w-11/12 h-5/6 max-w-6xl'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white enhanced-shadow">
          <h3 className="text-lg font-bold truncate text-shadow">{fileName}</h3>
          <div className="flex items-center space-x-2">
            {fileType === 'image' && (
              <>
                <button
                  onClick={handleZoomOut}
                  className="p-2 rounded-lg hover:bg-white/20 transition-colors"
                  title="Zoom Out"
                >
                  <ZoomOut className="h-4 w-4" />
                </button>
                <span className="text-sm px-2 font-bold">{zoom}%</span>
                <button
                  onClick={handleZoomIn}
                  className="p-2 rounded-lg hover:bg-white/20 transition-colors"
                  title="Zoom In"
                >
                  <ZoomIn className="h-4 w-4" />
                </button>
                <button
                  onClick={handleRotate}
                  className="p-2 rounded-lg hover:bg-white/20 transition-colors"
                  title="Rotate"
                >
                  <RotateCw className="h-4 w-4" />
                </button>
              </>
            )}
            <button
              onClick={toggleFullscreen}
              className="p-2 rounded-lg hover:bg-white/20 transition-colors"
              title="Toggle Fullscreen"
            >
              <Maximize2 className="h-4 w-4" />
            </button>
            <button
              onClick={handleDownload}
              className="p-2 rounded-lg hover:bg-white/20 transition-colors"
              title="Download"
            >
              <Download className="h-4 w-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-white/20 transition-colors"
              title="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto bg-high-contrast" style={{ height: 'calc(100% - 64px)' }}>
          {fileType === 'pdf' ? (
            <iframe
              src={fileUrl}
              className="w-full h-full border-none"
              title={fileName}
            />
          ) : (
            <div className="flex items-center justify-center h-full p-4">
              <img
                src={fileUrl}
                alt={fileName}
                className="max-w-full max-h-full object-contain transition-all duration-300"
                style={{
                  transform: `scale(${zoom / 100}) rotate(${rotation}deg)`,
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileViewer;
