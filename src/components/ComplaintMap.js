import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../utils/leafletConfig";

const complaints = [
  { id: 1, category: "Garbage", lat: 21.2514, lng: 81.6296 },
  { id: 2, category: "Tap Leakage", lat: 21.2560, lng: 81.6350 },
];

export default function ComplaintMap() {
  return (
    <div className="bg-white p-4 shadow rounded-2xl">
      <h3 className="font-semibold mb-3">Complaints Map</h3>
      <MapContainer center={[21.2514, 81.6296]} zoom={13} style={{ height: "400px", width: "100%" }}>
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {complaints.map((c) => (
          <Marker key={c.id} position={[c.lat, c.lng]}>
            <Popup>
              <b>{c.category}</b> <br /> Complaint ID: {c.id}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}