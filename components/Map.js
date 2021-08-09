import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { useState } from 'react';
import getCenter from 'geolib/es/getCenter';
const Map = ({ searchResults }) => {

 const [selectedLocation, setSelectedLocation] = useState({});
 // console.log("SelectedLocation", selectedLocation);
 // const [nextViewport, setNextViewport] = useState({
 //  latitude: 37.7577,
 //  longitude: -122.4376,
 // })

 // Transform the searchResults object into the {latitude and longitude} object

 const coordinates = searchResults.map((results) => ({
  longitude: results.long,
  latitude: results.lat

 }))
 // console.log(coordinates);
 const center = getCenter(coordinates);
 // console.log(center);
 const [viewport, setViewport] = useState({
  width: "100%",
  height: "100%",
  latitude: center.latitude,
  longitude: center.longitude,
  zoom: 8
 });

 return <ReactMapGL
  mapStyle="mapbox://styles/mshahrukh/cks4c36za06vn17p5esurj1kh"
  mapboxApiAccessToken={"pk.eyJ1IjoibXNoYWhydWtoIiwiYSI6ImNrczRib2w4czAwb3MycHFpczBkMHRrNWoifQ.pNY5Tu8SNv0fWM1UmSit-A "}
  {...viewport}
  onViewportChange={(nextViewport) => setViewport(nextViewport)}
 >
  {searchResults.map((result) => (
   <div key={result.long}>

    <Marker
     longitude={result.long}
     latitude={result.lat}
     offsetLeft={-20}
     offsetTop={-10}
    >
     <p onClick={() => setSelectedLocation(result)} className="cursor-pointer text-2xl animate-bounce"
      aria-label="push-pin"
     >
      📌
     </p>



    </Marker>
    {/* the popup that show if click on  marker  */}
    {selectedLocation.long === result.long ? (
     <Popup
      onClose={() => setSelectedLocation({})}
      closeOnClick={true}
      latitude={result.lat}
      longitude={result.long}
      className="text-red-400 z-10"
     >
      {result.title}
     </Popup>)
     : (false)
    }
   </div>
  ))}
 </ReactMapGL>
}

export default Map

