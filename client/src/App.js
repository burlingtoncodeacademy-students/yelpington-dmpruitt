import "./App.css";
import Map from "./components/Map"

function App() {
  return (
    <div>
      <h1>Yelpington</h1>
      <Map center={[43.88, -72.7317]} zoom={8} />
    </div>
  );
}

export default App;
