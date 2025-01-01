import React, { useState, useEffect } from 'react';
import AirQualityCard from './components/AirQualityCard';
import { useAirQualityData } from './hooks/useAirQualityData';
import { fetchGeoPlaceNames } from './services/geoPlaceService';
import { generateFilters } from './utils/filterUtils';
import Pagination from './components/Pagination';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [geoPlaceName, setGeoPlaceName] = useState('');
  const [timePeriod, setTimePeriod] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const { data, loading, error, currentPage, totalPages, fetchData } = useAirQualityData();

  const [geoPlaceNames, setGeoPlaceNames] = useState([]);
  const [timePeriods, setTimePeriods] = useState([]);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const geoPlaces = await fetchGeoPlaceNames();
        setGeoPlaceNames(geoPlaces);
        setTimePeriods([...Array(14)].map((_, i) => (2009 + i).toString()));
        fetchData({}, 1);
      } catch (err) {
        console.error('Error loading data:', err);
        setFetchError('Error fetching geo place names');
      }
    };

    fetchInitialData();
  }, []);

  const handleSearch = () => {
    const filters = generateFilters(searchTerm, geoPlaceName, timePeriod);
    fetchData(filters, 1);
  };

  const handlePageChange = (page) => {
    const filters = generateFilters(searchTerm, geoPlaceName, timePeriod);
    fetchData(filters, page);
  };

  return (
    <div className="container">
      <h1>Air Quality Information Hub</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name of the indicator..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch} className="fetch-button">
          Search
        </button>
      </div>
      
      <div className="filter-container">
        <div className="text">Filters</div>

        <div className="filter">
          <select
            id="geoPlaceName"
            value={geoPlaceName}
            onChange={(e) => setGeoPlaceName(e.target.value)}
          >
            <option value="">Select a Geo Place Name</option>
            {geoPlaceNames.map((place, index) => (
              <option key={index} value={place}>{place}</option>
            ))}
          </select>
        </div>

        <div className="filter">
          <select
            id="timePeriod"
            value={timePeriod}
            onChange={(e) => setTimePeriod(e.target.value)}
          >
            <option value="">Select a Time Period</option>
            {timePeriods.map((year, index) => (
              <option key={index} value={year}>{year}</option>
            ))}
          </select>
        </div>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : error || fetchError ? (
        <p>Error fetching data. Message: {error || fetchError}</p>
      ) : (
        <div className="data-container">
          {data === null || data.length === 0 ? (
            <p>No records found.</p>
          ) : (
            data.map((item) => (
              <AirQualityCard key={item.id} data={item} />
            ))
          )}

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};

export default App;
