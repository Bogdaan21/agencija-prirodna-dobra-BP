import React, { useMemo, useState, useEffect } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useLanguage } from "../../context/LanguageContext";
import "leaflet/dist/leaflet.css";

const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function ChangeMapView({ center }) {
  const map = useMap();

  useEffect(() => {
    map.flyTo(center, 15, {
      duration: 1.2,
    });
  }, [center, map]);

  return null;
}

export default function MapRouteSection({ data = [] }) {
  const { language } = useLanguage();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  const translatedPoints = data.map((point) => ({
    ...point,
    name: typeof point.name === "object" ? point.name[language] : point.name,
  }));

  const [activePoint, setActivePoint] = useState(translatedPoints[0] || null);

  useEffect(() => {
    if (translatedPoints.length > 0) {
      setActivePoint(translatedPoints[0]);
    }
  }, [language, data]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const center = useMemo(() => {
    if (!activePoint) return [43.038, 19.747];
    return [activePoint.lat, activePoint.lng];
  }, [activePoint]);

  if (!translatedPoints.length) return null;

  return (
    <section className="cs_half_bg">
      <div className="container">
        <h2 className="cs_section_title cs_fs_32 cs_bold" style={{ marginBottom: "20px" }}>
          {language === "me" ? "Lokacije na mapi" : "Locations on map"}
        </h2>

        <div
          className="cs_card cs_style_1 cs_heading_bg"
          style={{
            padding: isMobile ? "16px" : "30px",
            borderRadius: "20px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "320px 1fr",
              gap: "24px",
            }}
          >
            <div>
              <h2
                className="cs_card_title cs_gradient_color_1 mb-4"
                style={{
                  fontSize: isMobile ? "24px" : "",
                  marginBottom: "16px",
                }}
              >
                {language === "me" ? "Izaberite" : "Select"}
              </h2>

              {isMobile ? (
                <select
                  value={activePoint?.id || ""}
                  onChange={(e) => {
                    const selected = translatedPoints.find(
                      (point) => String(point.id) === e.target.value
                    );
                    if (selected) setActivePoint(selected);
                  }}
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    borderRadius: "12px",
                    border: "1px solid #e5e5e5",
                    background: "#fff",
                    color: "#111",
                    fontWeight: 600,
                    outline: "none",
                  }}
                >
                  {translatedPoints.map((point) => (
                    <option key={point.id} value={point.id}>
                      {point.name}
                    </option>
                  ))}
                </select>
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    maxHeight: "505px",
                    overflowY: "auto",
                    paddingRight: "6px",
                  }}
                >
                  {translatedPoints.map((point) => {
                    const isActive = activePoint?.id === point.id;

                    return (
                      <button
                        key={point.id}
                        type="button"
                        onClick={() => setActivePoint(point)}
                        style={{
                          textAlign: "left",
                          padding: "14px 16px",
                          borderRadius: "12px",
                          border: isActive ? "1px solid #374836" : "1px solid #e5e5e5",
                          background: isActive ? "#374836" : "#fff",
                          color: isActive ? "#fff" : "#111",
                          cursor: "pointer",
                          transition: "0.3s ease",
                          fontWeight: 600,
                        }}
                      >
                        {point.name}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <div>
              <div
                style={{
                  height: isMobile ? "360px" : "580px",
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >
                <MapContainer
                  center={center}
                  zoom={15}
                  scrollWheelZoom={true}
                  style={{ height: "100%", width: "100%" }}
                >
                  <TileLayer
                    attribution="&copy; OpenStreetMap contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />

                  <ChangeMapView center={center} />

                  <Marker position={center} icon={customIcon}>
                    <Popup>
                      <div style={{ textAlign: "center" }}>
                        <h4 style={{ marginBottom: "10px" }}>{activePoint?.name}</h4>

                        <a
                          href={`https://www.google.com/maps/dir/?api=1&destination=${activePoint?.lat},${activePoint?.lng}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "inline-block",
                            padding: "8px 14px",
                            background: "#374836",
                            color: "#fff",
                            borderRadius: "8px",
                            textDecoration: "none",
                            fontSize: "14px",
                          }}
                        >
                          {language === "me" ? "Povedi me" : "Take me"}
                        </a>
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}