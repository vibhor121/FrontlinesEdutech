import React from 'react';

const CompanyTable = ({ companies }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold">Company Name</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Industry</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Location</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Employees</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Founded</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {companies.map((company, index) => (
              <tr 
                key={company.id} 
                className={`hover:bg-gray-50 transition-colors ${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                }`}
              >
                <td className="px-6 py-4">
                  <div className="font-semibold text-gray-800">{company.name}</div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                    {company.industry}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {company.location}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {company.employees.toLocaleString()}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {company.founded}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 max-w-xs">
                  <div className="line-clamp-2">{company.description}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompanyTable;

