import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px]">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-gray-200 rounded-full"></div>
        <div className="w-20 h-20 border-4 border-blue-500 rounded-full animate-spin border-t-transparent absolute top-0 left-0"></div>
      </div>
      <p className="mt-6 text-lg font-medium text-gray-600">Loading companies...</p>
      <p className="mt-2 text-sm text-gray-500">Please wait while we fetch the data</p>
    </div>
  );
};

export default LoadingSpinner;

