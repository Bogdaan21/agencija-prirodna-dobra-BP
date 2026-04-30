import React, { useState } from "react";
import offlineMapData from "../../../src/data/offlineMap.json";

export default function BottomOfflineMap() {
  const [showInfo, setShowInfo] = useState(false);

  const points = offlineMapData.offlineMap || [];

  if (!points.length) return null;

  return (
    <section style={{ padding: "60px 0" }}>
      <div className="container">
        <h3 className="text-center mb-4">📍 Lokacije i offline navigacija</h3>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            marginBottom: "30px",
          }}
        >
          {points.map((point, index) => (
            <div
              key={index}
              style={{
                padding: "15px",
                borderRadius: "10px",
                border: "1px solid #eee",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              <div>
                <strong>{point.name}</strong>
              </div>

              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${point.lat},${point.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cs_btn cs_style_2"
                >
                  Otvori
                </a>

                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${point.lat},${point.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cs_btn cs_style_1"
                >
                  Navigacija
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button onClick={() => setShowInfo(true)} className="cs_btn cs_style_2">
            📥 Kako koristiti offline mapu
          </button>
        </div>
      </div>

      {showInfo && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999,
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "25px",
              borderRadius: "16px",
              maxWidth: "420px",
              width: "90%",
            }}
          >
            <h4 className="mb-3">📲 Offline mapa</h4>

            <p style={{ fontSize: "14px", marginBottom: "15px" }}>
              Da bi navigacija radila bez interneta:
            </p>

            <ol style={{ paddingLeft: "18px", marginBottom: "20px" }}>
              <li>Otvori Google Maps</li>
              <li>Klikni profil gore desno</li>
              <li>Izaberi Offline maps</li>
              <li>Klikni Select your own map</li>
              <li>Preuzmi područje Bijelog Polja</li>
            </ol>

            <p style={{ fontSize: "14px", opacity: 0.7 }}>
              💡 Savjet: klikni na svaku lokaciju i sačuvaj je u Google Maps
              opcijom Save, da bi bila dostupna offline.
            </p>

            <button
              onClick={() => setShowInfo(false)}
              className="cs_btn cs_style_1 w-100 mt-3"
            >
              Zatvori
            </button>
          </div>
        </div>
      )}
    </section>
  );
}