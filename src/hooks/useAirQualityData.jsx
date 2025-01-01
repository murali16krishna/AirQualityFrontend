import { useState } from 'react';
import axios from 'axios';

export const useAirQualityData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchData = async (filters = {}, page = 1) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await axios.get('http://127.0.0.1:5000/api/v1/air-quality', {
        params: { ...filters, page },
      });
      console.log('Fetched data:', response.data);
      setData(response.data.data);
      setCurrentPage(response.data.current_page);
      setTotalPages(response.data.pages);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, currentPage, totalPages, fetchData };
};
