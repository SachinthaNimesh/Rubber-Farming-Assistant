import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Header from "./Header";

const accordionData = [
  {
    title: "1️⃣ The Climate is No Longer Stable – And Your Trees Know It!",
    details: (
      <>
        <p>
          Rubber trees love consistency, but Kegalle’s weather is unpredictable.
        </p>
        <strong>
          🌧 Rain, Rain… and More Rain! (May–July & September–November)
        </strong>
        <ul>
          <li>
            Soil washes away = Roots can’t hold on, leading to tree falls.
          </li>
          <li>
            Waterlogged plantations = Roots rot, and diseases like Phytophthora
            leaf fall spread fast!
          </li>
          <li>Muddy fields = Harder tapping, lower latex yield!</li>
        </ul>
        <strong>🔥 Too Much Heat? (January–March Dry Season)</strong>
        <ul>
          <li>
            Rubber leaves dry up faster = Poor photosynthesis = Less latex
            production!
          </li>
          <li>
            Soil moisture evaporates = Trees stress, and tapping becomes less
            effective.
          </li>
          <li>
            High temperatures trigger premature leaf shedding = Latex flow
            weakens.
          </li>
        </ul>
        <strong>💨 Strong Winds & Sudden Storms</strong>
        <ul>
          <li>
            Young trees in Yatiyantota & Deraniyagala are prone to wind damage.
          </li>
          <li>Branches snap off, delaying growth and reducing latex yield.</li>
        </ul>
        <strong>🌡 Unpredictable Temperature Swings!</strong>
        <ul>
          <li>Latex flow slows down.</li>
          <li>Tapping efficiency drops.</li>
          <li>Pests attack weak trees.</li>
        </ul>
      </>
    ),
  },
  {
    title: "2️⃣ Soil: The Foundation of Your Plantation is Weakening!",
    details: (
      <>
        <p>
          Healthy soil = Healthy rubber trees = More latex! But is your soil
          still strong?
        </p>
        <strong>🌱 Soil Erosion is Stealing Your Nutrients!</strong>
        <ul>
          <li>
            Steep lands in Mawanella & Aranayake suffer from topsoil loss during
            monsoons.
          </li>
          <li>Without nutrients, rubber trees struggle to grow.</li>
          <li>Exposed roots lead to stunted trees & poor latex production.</li>
        </ul>
        <strong>🦠 Soil Diseases Are Spreading!</strong>
        <ul>
          <li>Fungal infections thrive in waterlogged soils.</li>
          <li>Poor drainage = Dead trees in just a few seasons!</li>
        </ul>
        <strong>🚜 Soil Compaction: The Unseen Killer</strong>
        <ul>
          <li>Overuse of machinery & foot traffic hardens the soil.</li>
          <li>Rubber roots can’t breathe or spread = Weak, unhealthy trees.</li>
        </ul>
        <strong>⚠ Soil Fertility is Declining!</strong>
        <ul>
          <li>Latex yield decreases every year.</li>
          <li>Trees become more vulnerable to diseases & drought.</li>
          <li>Farmers struggle to make profits!</li>
        </ul>
        <p>
          <strong>Farmers, What Can You Do?</strong> Now that you know these
          threats, it’s time to fight back! Swipe to the Next Section for
          Practical Solutions on Water Management, Soil Conservation &
          Fertilization!
        </p>
      </>
    ),
  },
];

function Challenges() {
  return (
    <div className="challenges">
      <Header />
      <div
        style={{
          position: "absolute",
          top: "120px",
          left: "20px",
          right: "20px",
        }}
      >
        <h2>Climate & Soil Challenges</h2>
        <p>
          Understand the impact of climate variability and soil degradation on
          rubber farming.
        </p>
        {accordionData.map((item, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index + 1}-content`}
              id={`panel${index + 1}-header`}
            >
              <Typography component="span">{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>{item.details}</AccordionDetails>
          </Accordion>
        ))}{" "}
      </div>
    </div>
  );
}

export { Challenges };
