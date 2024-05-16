import React from "react";

const Aboutus = () => {
  return (
    <div
      style={{
        backgroundColor: "#f0f8ff",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
          maxWidth: "960px",
          margin: "auto",
        }}
      >
        {[
          { id: 1, image: "https://via.placeholder.com/300", text: "Box 1" },
          { id: 2, image: "https://via.placeholder.com/300", text: "Box 2" },
          { id: 3, image: "https://via.placeholder.com/300", text: "Box 3" },
          { id: 4, image: "https://via.placeholder.com/300", text: "Box 4" },
        ].map((box) => (
          <div
            key={box.id}
            style={{ transition: "transform 0.2s", cursor: "pointer" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={box.image}
              alt={`Content ${box.id}`}
              style={{ width: "100%", display: "block", marginBottom: "10px" }}
            />
            <div
              style={{
                padding: "10px",
                textAlign: "center",
                backgroundColor: "#ffffff",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              }}
            >
              {box.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aboutus;
