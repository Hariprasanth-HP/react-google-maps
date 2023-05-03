import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import PDFChart from "./PDFChart";

const AwsMap = () => {
  const [selectedLocation, setSelectedLocation] = React.useState(null);
  const [showGraph, setShowGraph] = React.useState(false);

  const handleMarkerClick = React.useCallback((location) => {
    setSelectedLocation(location);
  }, []);

  console.log("selected", selectedLocation);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/location")
      .then((response) => response.json())
      .then((data) => {
        console.log("datain", data);
        setData(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMap
        center={{ lat: 0, lng: 0 }}
        zoom={2}
        onClick={(e) => {
          setSelectedLocation(null);
          console.log("Clicked location:", e.latLng.lat(), e.latLng.lng());
        }}
        mapContainerStyle={{ height: "100%", width: "100%" }}
      >
        {data.map((dc) => (
          <Marker
            key={dc.name}
            position={dc.location}
            onClick={() => {
              handleMarkerClick(dc);
              setShowGraph(true);
            }}
          />
        ))}

        {selectedLocation && (
          <>
            <InfoWindow
              position={selectedLocation.location}
              onCloseClick={() => {
                setSelectedLocation(null);
                setShowGraph(false);
              }}
            >
              <div>
                <div>
                  <img src={selectedLocation?.image} alt={""} />
                </div>
                <h3>{selectedLocation.name}</h3>
                {showGraph && (
                  <PDFChart
                    jsonData={selectedLocation?.jsonData}
                    setShowGraph={setShowGraph}
                  />
                )}
              </div>
            </InfoWindow>
          </>
        )}
      </GoogleMap>
    </div>
  );
};

export default AwsMap;
