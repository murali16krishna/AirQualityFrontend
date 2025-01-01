export const generateFilters = (searchTerm, geoPlaceName, timePeriod) => {
    const filters = {};
    
    if (searchTerm) filters.name = searchTerm;
    if (geoPlaceName) filters.geo_place_name = geoPlaceName;
    if (timePeriod) filters.time_period = timePeriod;
    
    return filters;
  };
  