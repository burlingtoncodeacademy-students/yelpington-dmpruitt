import { MapContainer, TileLayer, Marker, Polygon, Popup } from "react-leaflet";
import borderData from "../data/border";
import L from 'leaflet'
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";


let DefaultIcon = L.icon({
  iconUrl:icon,
  shadowUrl:iconShadow,
})

function Map(props) {
  let vtOutline = borderData.geometry.coordinates[0].map((coords) => [coords[1], coords[0],
  ]);

  return (
    <MapContainer
      center={props.center} 
      // used for changing the zoom upon click
      zoom={props.zoom} 
      scrollWheelZoom={true}
      style={{ height: "600px", width: "600px" }}

    >
    
    <Marker position={props.marker} icon={DefaultIcon}><Popup>Montpelier!</Popup></Marker>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Polygon
        positions={vtOutline}
        pathOptions={{ color: "orange", fillOpacity: 0 }}
      />
    </MapContainer>
  );
}

export default Map;
