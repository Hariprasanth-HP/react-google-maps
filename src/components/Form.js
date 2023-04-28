import React from "react";
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";

const awsDataCenters = [
  {
    name: "US East (N. Virginia)",
    location: { lat: 38.8532, lng: -77.2996 },
  },
  {
    name: "US West (Oregon)",
    location: { lat: 45.5231, lng: -122.6765 },
  },
  {
    name: "EU (Ireland)",
    location: { lat: 53.3498, lng: -6.2603 },
  },
  {
    name: "Asia Pacific (Tokyo)",
    location: { lat: 35.6762, lng: 139.6503 },
  },
  {
    name: "South America (São Paulo)",
    location: { lat: -23.5505, lng: -46.6333 },
  },
];

const AwsMap = () => {
  const [selectedLocation, setSelectedLocation] = React.useState(null);

  const handleMarkerClick = React.useCallback((location) => {
    setSelectedLocation(location);
  }, []);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMap
        center={{ lat: 0, lng: 0 }}
        zoom={2}
        onClick={() => setSelectedLocation(null)}
        mapContainerStyle={{ height: "100%", width: "100%" }}
      >
        {awsDataCenters.map((dc) => (
          <Marker
            key={dc.name}
            position={dc.location}
            onClick={() => handleMarkerClick(dc)}
          />
        ))}
        {selectedLocation && (
          <InfoWindow
            position={selectedLocation.location}
            onCloseClick={() => setSelectedLocation(null)}
          >
            <div>
              <h3>{selectedLocation.name}</h3>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};

export default AwsMap;
