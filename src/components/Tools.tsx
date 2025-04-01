import { useState } from "react";
import Header from "./Header";
import { Paper } from "@mui/material";

function Tools() {
  const [soilColor, setSoilColor] = useState("");
  const [drainageCondition, setDrainageCondition] = useState("");
  const [rainfall, setRainfall] = useState("");
  const [temperature, setTemperature] = useState("");
  const [farmHealthScore, setFarmHealthScore] = useState(0);
  const [suggestion, setSuggestion] = useState("");

  const calculateFarmHealthScore = () => {
    let score = 0;

    // Soil Color Scoring
    if (soilColor === "Red/Brown") score += 10;
    else if (soilColor === "Dark Brown") score += 20;
    else if (soilColor === "Yellowish") score += 5;
    else if (soilColor === "Gray") score += 8;
    else if (soilColor === "Black") score += 15;

    // Drainage Condition Scoring
    if (drainageCondition === "Well-drained") score += 20;
    else if (drainageCondition === "Moderate Drainage") score += 15;
    else if (drainageCondition === "Poor Drainage") score += 5;

    // Rainfall Scoring
    if (rainfall === "Very Low (< 1500)") score += 5;
    else if (rainfall === "Low (1500-2000)") score += 10;
    else if (rainfall === "Optimal (2000-2500)") score += 20;
    else if (rainfall === "High (2500-3000)") score += 15;
    else if (rainfall === "Excessive (> 3000)") score += 5;

    // Temperature Scoring
    if (temperature === "Cool (< 20)") score += 5;
    else if (temperature === "Moderate (20-30)") score += 15;
    else if (temperature === "Warm (30-35)") score += 10;
    else if (temperature === "Hot (> 35)") score += 5;

    setFarmHealthScore(score);

    // Set suggestion based on score
    if (score >= 60) {
      setSuggestion("Excellent conditions for rubber farming!");
    } else if (score >= 40) {
      setSuggestion("Good conditions, but some improvements can be made.");
    } else {
      setSuggestion(
        "Poor conditions, consider improving soil, drainage, or climate factors."
      );
    }
  };

  return (
    <>
      <Header />

      <Paper
        elevation={3}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
        }}
      >
        <div className="tools">
          <div style={{ marginBottom: "30px" }}>
            <h2>Soil Health Assessment</h2>
            <label style={{ display: "block", marginBottom: "10px" }}>
              Soil Color:
              <select
                value={soilColor}
                onChange={(e) => setSoilColor(e.target.value)}
                style={{ marginLeft: "10px", padding: "5px" }}
              >
                <option value="">Select</option>
                <option value="Red/Brown">Red/Brown</option>
                <option value="Dark Brown">Dark Brown</option>
                <option value="Yellowish">Yellowish</option>
                <option value="Gray">Gray</option>
                <option value="Black">Black</option>
              </select>
            </label>
            <label style={{ display: "block", marginBottom: "10px" }}>
              Drainage Condition:
              <select
                value={drainageCondition}
                onChange={(e) => setDrainageCondition(e.target.value)}
                style={{ marginLeft: "10px", padding: "5px" }}
              >
                <option value="">Select</option>
                <option value="Well-drained">Well-drained</option>
                <option value="Moderate Drainage">Moderate Drainage</option>
                <option value="Poor Drainage">Poor Drainage</option>
              </select>
            </label>
          </div>

          <div style={{ marginBottom: "30px" }}>
            <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
              Climate Analysis
            </h3>
            <label style={{ display: "block", marginBottom: "10px" }}>
              Monthly Rainfall:
              <select
                value={rainfall}
                onChange={(e) => setRainfall(e.target.value)}
                style={{ marginLeft: "10px", padding: "5px" }}
              >
                <option value="">Select</option>
                <option value="Very Low (< 1500)">Very Low (&lt; 1500)</option>
                <option value="Low (1500-2000)">Low (1500-2000)</option>
                <option value="Optimal (2000-2500)">Optimal (2000-2500)</option>
                <option value="High (2500-3000)">High (2500-3000)</option>
                <option value="Excessive (> 3000)">
                  Excessive (&gt; 3000)
                </option>
              </select>
            </label>
            <label style={{ display: "block", marginBottom: "10px" }}>
              Temperature Range:
              <select
                value={temperature}
                onChange={(e) => setTemperature(e.target.value)}
                style={{ marginLeft: "10px", padding: "5px" }}
              >
                <option value="">Select</option>
                <option value="Cool (< 20)">Cool (&lt; 20)</option>
                <option value="Moderate (20-30)">Moderate (20-30)</option>
                <option value="Warm (30-35)">Warm (30-35)</option>
                <option value="Hot (> 35)">Hot (&gt; 35)</option>
              </select>
            </label>
          </div>

          <button
            onClick={calculateFarmHealthScore}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Calculate Farm Health Score
          </button>

          <div style={{ marginTop: "30px" }}>
            <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
              Farm Health Score
            </h3>
            <p style={{ fontSize: "18px" }}>{farmHealthScore}</p>
            <p style={{ fontSize: "16px", color: "blue", marginTop: "10px" }}>
              {suggestion}
            </p>
          </div>
        </div>
      </Paper>
    </>
  );
}

export default Tools;
