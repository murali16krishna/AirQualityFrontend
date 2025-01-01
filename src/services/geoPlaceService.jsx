import axios from 'axios';

export const fetchGeoPlaceNames = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/v1/air-quality/distinct-geo-place-names');
    return response.data.distinct_geo_place_names;
  } catch (err) {
    console.error('Error fetching geo place names:', err);
    throw new Error('Error fetching geo place names');
  }
};
