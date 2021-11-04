import { MapContainer, TileLayer, Marker, Polygon } from "react-leaflet";
import borderData from "../data/border";
// import "./map.css"

function Map(props) {
  let vtOutline = borderData.geometry.coordinates[0].map((coords) => [
    coords[1],
    coords[0],
  ]);

  return (
    <MapContainer
      center={props.center}
      zoom={props.zoom}
      scrollWheelZoom={true}
      style={{ height: "600px", width: "600px" }}
    >
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
