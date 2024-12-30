import React, { createContext, useState, useContext } from "react";

const LocationContext = createContext<any>(null);

export const LocationProvider = ({ children }: any) => {
  const [location, setLocation] = useState<{ lat: number; lng: number }>({
    lat: 0,
    lng: 0,
  });

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => useContext(LocationContext);

export default LocationProvider;
