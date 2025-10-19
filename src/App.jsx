import { useState, useEffect } from 'react';
import axios from 'axios';
import FilterControls from './components/FilterControls';
import CompanyTable from './components/CompanyTable';
import CompanyCard from './components/CompanyCard';
import Pagination from './components/Pagination';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';

const API_URL = 'https://frontlinesedutech-ppeu.onrender.com/companies';

function App() {
  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  
  // View and sorting states
  const [viewMode, setViewMode] = useState('table'); // 'table' or 'card'
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // Fetch companies from API
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(API_URL);
        setCompanies(response.data);
        setFilteredCompanies(response.data);
      } catch (err) {
        setError('Failed to fetch companies. Please make sure the API server is running.');
        console.error('Error fetching companies:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  // Apply filters and sorting
  useEffect(() => {
    let result = [...companies];

    // Apply search filter
    if (searchTerm) {
      result = result.filter(company =>
        company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        company.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply industry filter
    if (selectedIndustry) {
      result = result.filter(company => company.industry === selectedIndustry);
    }

    // Apply location filter
    if (selectedLocation) {
      result = result.filter(company => company.location === selectedLocation);
    }

    // Apply sorting
    result.sort((a, b) => {
      let aValue = a[sortBy];
      let bValue = b[sortBy];

      // Handle string comparisons
      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    setFilteredCompanies(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [companies, searchTerm, selectedIndustry, selectedLocation, sortBy, sortOrder]);

  // Get unique industries and locations for filter dropdowns
  const industries = [...new Set(companies.map(c => c.industry))].sort();
  const locations = [...new Set(companies.map(c => c.location))].sort();

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCompanies = filteredCompanies.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredCompanies.length / itemsPerPage);

  // Reset filters
  const handleReset = () => {
    setSearchTerm('');
    setSelectedIndustry('');
    setSelectedLocation('');
    setSortBy('name');
    setSortOrder('asc');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold">Company Directory</h1>
          <p className="text-blue-100 mt-2">Browse and filter companies across industries</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <ErrorMessage message={error} />
        ) : (
          <>
            {/* Filter Controls */}
            <FilterControls
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedIndustry={selectedIndustry}
              setSelectedIndustry={setSelectedIndustry}
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
              industries={industries}
              locations={locations}
              sortBy={sortBy}
              setSortBy={setSortBy}
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
              viewMode={viewMode}
              setViewMode={setViewMode}
              onReset={handleReset}
            />

            {/* Results Count */}
            <div className="mb-4 text-gray-600">
              Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredCompanies.length)} of {filteredCompanies.length} companies
            </div>

            {/* Company Display */}
            {filteredCompanies.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <div className="text-gray-400 text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No companies found</h3>
                <p className="text-gray-500">Try adjusting your filters</p>
              </div>
            ) : viewMode === 'table' ? (
              <CompanyTable companies={currentCompanies} />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentCompanies.map(company => (
                  <CompanyCard key={company.id} company={company} />
                ))}
              </div>
            )}

            {/* Pagination */}
            {filteredCompanies.length > 0 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2025 Company Directory. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
