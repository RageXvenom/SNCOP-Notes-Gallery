import React, { useState } from 'react';
import { Download, FileText, Clock, Eye, Search } from 'lucide-react';
import { useData } from '../context/DataContext';
import FileViewer from '../components/FileViewer';

const PracticeTests: React.FC = () => {
  const { practiceTests = [], subjects = [] } = useData();
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewerState, setViewerState] = useState({
    isOpen: false,
    fileData: '',
    fileName: '',
    fileType: 'pdf' as 'pdf' | 'image',
    subject: '',
    type: '',
    unit: '',
    storedFileName: ''
  });

  const filteredTests = practiceTests.filter(test => {
    const matchesSubject = selectedSubject === 'all' || test.subject === selectedSubject;
    const matchesSearch = (test.title || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (test.description || '').toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSubject && matchesSearch;
  });

  const handleViewFile = (fileData: string, fileName: string, type: 'pdf' | 'image', subject?: string, fileType?: string, unit?: string, storedFileName?: string) => {
    setViewerState({
      isOpen: true,
      fileData,
      fileName,
      fileType: type,
      subject: subject || '',
      type: 'practice-tests',
      unit: unit || '',
      storedFileName: storedFileName || ''
    });
  };

  const closeViewer = () => {
    setViewerState({
      isOpen: false,
      fileData: '',
      fileName: '',
      fileType: 'pdf',
      subject: '',
      type: '',
      unit: '',
      storedFileName: ''
    });
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 slide-up">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            Practice Tests
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Test your knowledge with comprehensive practice materials for all subjects
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4 fade-in-up">
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search practice tests..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 glass-effect rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800 dark:text-gray-200 placeholder-gray-500"
            />
          </div>

          {/* Subject Filter */}
          <div className="flex flex-wrap gap-3 justify-center p-4 bg-high-contrast rounded-xl enhanced-shadow">
            <button
              onClick={() => setSelectedSubject('all')}
              className={`px-4 py-2 rounded-lg font-bold text-sm transition-all duration-300 hover-scale button-glow ${
                selectedSubject === 'all'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg text-shadow'
                  : 'button-secondary'
              }`}
              type="button"
            >
              All Subjects ({practiceTests.length})
            </button>
            {subjects.map((subject) => {
              const subjectTestsCount = practiceTests.filter(test => test.subject === subject.name).length;
              return (
                <button
                  key={subject.id}
                  onClick={() => setSelectedSubject(subject.name)}
                  className={`px-4 py-2 rounded-lg font-bold text-sm transition-all duration-300 hover-scale button-glow ${
                    selectedSubject === subject.name
                      ? 'button-primary text-shadow'
                      : 'button-secondary'
                  }`}
                  type="button"
                >
                  {subject.name} ({subjectTestsCount})
                </button>
              );
            })}
          </div>
        </div>

        {/* Practice Tests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTests.map((test, index) => (
            <div
              key={test.id}
              className="glass-effect p-6 rounded-2xl card-hover slide-up enhanced-shadow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl ${
                  test.type === 'pdf'
                    ? 'bg-gradient-to-r from-orange-500 to-red-600'
                    : 'bg-gradient-to-r from-green-500 to-teal-600'
                } text-white`}>
                  <FileText className="h-6 w-6" />
                </div>
                <span className="px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900 dark:to-red-900 text-orange-800 dark:text-orange-200">
                  {test.subject}
                </span>
              </div>

              <h3 className="text-lg font-bold mb-2 text-high-contrast neon-glow">
                {test.title}
              </h3>
              <p className="text-high-contrast text-sm mb-4 line-clamp-2 opacity-80">
                {test.description}
              </p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-xs text-high-contrast opacity-70">
                  <Clock className="h-3 w-3 mr-1" />
                  {test.uploadDate}
                </div>
                <div className="flex items-center text-xs text-high-contrast opacity-70">
                  <Eye className="h-3 w-3 mr-1" />
                  {test.fileSize}
                </div>
              </div>

              <button
                onClick={() => handleViewFile(
                  test.fileData || '', 
                  test.fileName, 
                  test.type,
                  test.subject,
                  'practice-tests',
                  undefined,
                  test.storedFileName
                )}
                className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg hover-scale font-bold text-sm shimmer-effect text-shadow"
                type="button"
              >
                <Eye className="mr-2 h-4 w-4" />
                View Test
              </button>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredTests.length === 0 && (
          <div className="text-center py-16">
            <FileText className="h-16 w-16 mx-auto text-gray-400 dark:text-gray-600 mb-4" />
            <h3 className="text-xl font-bold text-high-contrast mb-2">
              No practice tests found
            </h3>
            <p className="text-high-contrast opacity-70">
              {searchTerm || selectedSubject !== 'all'
                ? 'Try adjusting your search criteria or filters.'
                : 'Practice tests will appear here once they are uploaded by the admin.'}
            </p>
          </div>
        )}

        {/* Info Section */}
        {practiceTests.length > 0 && (
          <div className="mt-20 glass-effect p-8 rounded-2xl fade-in-up">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gradient mb-4 neon-glow">
                Test Your Knowledge
              </h3>
              <p className="text-high-contrast opacity-80 max-w-2xl mx-auto leading-relaxed">
                Regular practice with these materials will help you excel in your B.Pharmacy studies.
                Download the tests, attempt them, and track your progress across all subjects.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* File Viewer */}
      <FileViewer
        isOpen={viewerState.isOpen}
        onClose={closeViewer}
        fileData={viewerState.fileData}
        fileName={viewerState.fileName}
        fileType={viewerState.fileType}
        subject={viewerState.subject}
        type={viewerState.type}
        unit={viewerState.unit}
        storedFileName={viewerState.storedFileName}
      />
    </div>
  );
};

export default PracticeTests;

