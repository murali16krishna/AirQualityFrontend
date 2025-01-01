const AirQualityCard = ({ data }) => {
    return (
      <div className="air-quality-card">
        <h3>Name of the Indicator: <span style={{ color: '#FF5733' }}>{data.name}</span></h3>
        <p><strong>Location:</strong> {data.geo_place_name}</p>
        <p><strong>Time Period:</strong> {data.time_period}</p>
        <p><strong>Air Quality Measurement:</strong> {data.data_value}</p>
        <p><strong>Measurement Units:</strong> {data.measure}</p>
      </div>
    );
  };
  
  export default AirQualityCard;
  