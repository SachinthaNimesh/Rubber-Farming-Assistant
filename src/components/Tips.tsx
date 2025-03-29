import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Header from "./Header";

const accordionData = [
  {
    id: "panel1",
    title: "1️⃣ Why Kegalle is Ideal for Rubber Farming?",
    content: (
      <>
        <p>
          🌟 Kegalle District is the largest contributor to Sri Lanka’s rubber
          industry, producing nearly 77% of the country’s natural rubber. With
          its humid climate, well-drained lateritic soils, and hilly landscape,
          it provides excellent conditions for rubber cultivation.
        </p>
        <strong>📊 Key Rubber Statistics for Kegalle:</strong>
        <ul>
          <li>📏 Total rubber cultivation area: ~120,000 hectares</li>
          <li>
            📈 Average rubber yield: 600 kg/hectare (Potential: 1,500
            kg/hectare)
          </li>
          <li>
            🌾 Main farming type: Smallholder rubber plantations (~70% of
            production)
          </li>
          <li>
            ⚠ Common challenges: Soil erosion, unpredictable rainfall, aging
            trees
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "panel2",
    title: "2️⃣ Best Rubber Clones for Kegalle District",
    content: (
      <>
        <p>
          🧬 Choosing the right rubber clones is critical for high yield and
          disease resistance. The following Rubber Research Institute of Sri
          Lanka (RRISL) recommended clones perform best in Kegalle:
        </p>
        <strong>🌟 High-Yielding Clones:</strong>
        <ul>
          <li>
            ✅ RRISL 200, RRISL 203, RRISL 210 – Best for both latex yield &
            disease resistance.
          </li>
          <li>
            ✅ RRIM 600 & PB 260 – Most commonly used in smallholder farms.
          </li>
        </ul>
        <strong>⚠ Avoid:</strong> Older clones like PB 86 – Low disease
        resistance and declining productivity.
        <br />
        <strong>💡 Tip for Farmers:</strong> Use high-yield clones to maximize
        profits. Farmers in Warakapola, Mawanella, and Aranayake have
        successfully increased yields by 30% using RRISL 210!
      </>
    ),
  },
  {
    id: "panel3",
    title: "3️⃣ Ideal Climate for Rubber in Kegalle",
    content: (
      <>
        <p>
          🌡️ Kegalle has a tropical monsoon climate, perfect for rubber growth
          but with increasing climate variability in recent years.
        </p>
        <ul>
          <li>🌡️ Temperature: 26–28°C (Optimal growth range)</li>
          <li>
            🌧️ Annual Rainfall: 2,500–3,000 mm (High rainfall, but
            unpredictable)
          </li>
          <li>💧 Humidity: 75%–85%</li>
        </ul>
        <strong>🌧️ Common Climate Challenges in Kegalle:</strong>
        <ul>
          <li>🌊 Too much rainfall → Waterlogging → Root diseases</li>
          <li>☀️ Unpredictable monsoons → Drought stress on young trees</li>
          <li>🌪️ Heavy storms → Soil erosion on sloping lands</li>
        </ul>
        <strong>🛠️ Solutions for Kegalle Farmers:</strong>
        <ul>
          <li>✔ Rainwater harvesting for dry seasons.</li>
          <li>✔ Good drainage systems to prevent root rot.</li>
          <li>
            ✔ Agroforestry techniques to protect plantations from heavy winds.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "panel4",
    title: "4️⃣ Best Soil for Rubber in Kegalle",
    content: (
      <>
        <p>
          🌱 Rubber trees thrive in well-drained, deep, and slightly acidic
          soil.
        </p>
        <ul>
          <li>
            🧪 Soil Type: Lateritic & loamy soils (common in Mawanella &
            Rambukkana areas)
          </li>
          <li>🧪 pH Level: 4.5–6.5 (Mildly acidic)</li>
          <li>
            🌿 Organic Matter: High levels required for good root development
          </li>
        </ul>
        <strong>🛠️ Soil Problems in Kegalle & Solutions:</strong>
        <ul>
          <li>
            🌾 Soil erosion on slopes → Use contour planting & cover crops
          </li>
          <li>🌱 Low soil fertility → Apply organic compost & cow dung</li>
          <li>🛠️ Compacted soil → Practice minimum tillage</li>
        </ul>
        <strong>💡 Farmer's Tip:</strong> Farmers in Yatiyantota use cover crops
        like Pueraria phaseoloides (tropical legume) to prevent soil erosion!
      </>
    ),
  },
  {
    id: "panel5",
    title: "5️⃣ Proper Planting Techniques for Kegalle",
    content: (
      <>
        <p>
          <strong>🌱 Best Planting Time:</strong> May–October (to utilize
          monsoon rains)
        </p>
        <p>
          <strong>📏 Spacing:</strong> 2.4m x 6.7m (standard) or 2.5m x 5.5m
          (high-density planting)
        </p>
        <p>
          <strong>🌍 Planting Depth:</strong> 40 cm deep for strong root
          anchorage
        </p>
        <strong>✅ Best Practices:</strong>
        <ul>
          <li>✔ Use well-rotted compost when planting seedlings.</li>
          <li>💧 Water regularly in dry months (January–March).</li>
          <li>🍂 Mulch with dried leaves to conserve soil moisture.</li>
        </ul>
        <strong>⚠ Avoid These Mistakes:</strong>
        <ul>
          <li>
            🚫 Planting in low-lying, flood-prone areas → Causes root diseases.
          </li>
          <li>🚫 Using poor-quality seedlings → Reduces productivity.</li>
        </ul>
      </>
    ),
  },
  {
    id: "panel6",
    title: "6️⃣ Fertilization & Nutrient Management",
    content: (
      <>
        <p>
          <strong>Tree Age & Fertilizer Application:</strong>
        </p>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Tree Age</strong>
              </TableCell>
              <TableCell>
                <strong>Fertilizer Type</strong>
              </TableCell>
              <TableCell>
                <strong>Application Rate (kg/tree)</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>0–1 Year</TableCell>
              <TableCell>NPK 10:10:4</TableCell>
              <TableCell>0.15–0.25 kg</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1–3 Years</TableCell>
              <TableCell>NPK 12:6:6</TableCell>
              <TableCell>0.3–0.4 kg</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>4+ Years</TableCell>
              <TableCell>NPK 12:6:32</TableCell>
              <TableCell>0.5–0.8 kg</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <strong>Kegalle’s Common Soil Deficiencies & Fixes:</strong>
        <ul>
          <li>
            ✔ Low Magnesium (Mg) → Apply Dolomite (Common in Deraniyagala)
          </li>
          <li>✔ Deficiency in Potassium (K) → Use Muriate of Potash</li>
        </ul>
      </>
    ),
  },
  {
    id: "panel7",
    title: "7️⃣ Proper Tapping Methods for Maximum Yield",
    content: (
      <>
        <strong>Key Tapping Guidelines:</strong>
        <ul>
          <li>First Tapping: After 6 years, when tree girth is 50 cm.</li>
          <li>Tapping Angle: 30° from the horizontal.</li>
          <li>Frequency: Every 2–3 days for sustainable latex flow.</li>
          <li>
            Best Time to Tap: Early morning (4:30–6:30 AM) – Latex flow is
            highest.
          </li>
        </ul>
        <strong>Common Mistakes to Avoid:</strong>
        <ul>
          <li>Cutting too deep → Reduces tree lifespan.</li>
          <li>Tapping every day → Causes bark dryness & low latex flow.</li>
        </ul>
        <strong>Tip from Kegalle Farmers:</strong> "Use a double-blade tapping
        knife to minimize damage and extend tree lifespan!"
      </>
    ),
  },
  {
    id: "panel8",
    title: "8️⃣ Common Rubber Diseases & Pest Control",
    content: (
      <>
        <strong>Key Diseases/Pests & Solutions:</strong>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Disease/Pest</strong>
              </TableCell>
              <TableCell>
                <strong>Symptoms</strong>
              </TableCell>
              <TableCell>
                <strong>Solution</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Powdery Mildew</TableCell>
              <TableCell>White powder on leaves</TableCell>
              <TableCell>Spray Sulfur-based fungicides</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Leaf Fall Disease</TableCell>
              <TableCell>Premature leaf drop</TableCell>
              <TableCell>Use Copper fungicides</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Termites</TableCell>
              <TableCell>Weak roots & stem damage</TableCell>
              <TableCell>Apply Chlorpyrifos solution</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </>
    ),
  },
  {
    id: "panel9",
    title: "9️⃣ Intercropping for Extra Income",
    content: (
      <>
        <p>Farmers in Kegalle successfully intercrop rubber with:</p>
        <ul>
          <li>
            🍍 Pineapple – Improves soil fertility, profitable in Rambukkana.
          </li>
          <li>🍌 Banana – Grows well under rubber shade in Aranayake.</li>
          <li>🍫 Cocoa – Popular in Deraniyagala & Warakapola plantations.</li>
        </ul>
      </>
    ),
  },
  {
    id: "panel10",
    title: "🔟 Sustainable Farming Practices for Kegalle Farmers",
    content: (
      <>
        <strong>Key Sustainable Practices:</strong>
        <ul>
          <li>✔ Contour planting on sloped lands to reduce erosion.</li>
          <li>✔ Agroforestry (mixing rubber with trees like Gliricidia).</li>
          <li>✔ Rainwater harvesting for irrigation in dry seasons.</li>
        </ul>
        <strong>Success Story:</strong> Farmers in Yatiyantota have increased
        latex yield by 25% using organic compost & rainwater harvesting!
      </>
    ),
  },
];

function Tips() {
  return (
    <div className="tips">
      <Header />
      <div
        style={{
          position: "absolute",
          top: "120px",
          left: "20px",
          right: "20px",
        }}
      >
        <h2>Basic Rubber Farming Tips</h2>
        <p>
          📘 Learn essential information about rubber cultivation, including
          planting, maintenance, and harvesting.
        </p>

        <div>
          {accordionData.map(({ id, title, content }) => (
            <Accordion key={id}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${id}-content`}
                id={`${id}-header`}
              >
                <Typography component="span">{title}</Typography>
              </AccordionSummary>
              <AccordionDetails>{content}</AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tips;
