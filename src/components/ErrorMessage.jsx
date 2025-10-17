import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px]">
      <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8 max-w-md">
        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full">
          <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-red-800 text-center mb-2">Error</h3>
        <p className="text-red-600 text-center mb-4">{message}</p>
        <div className="bg-yellow-50 border border-yellow-200 rounded p-3 text-sm text-yellow-800">
          <p className="font-semibold mb-1">💡 To start the API server:</p>
          <code className="block bg-yellow-100 px-2 py-1 rounded mt-2">
            npm run api
          </code>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;

