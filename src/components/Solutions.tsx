import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Header from "./Header";

function Solutions() {
  const accordionData = [
    {
      title: "1️⃣ Water Management: Stop Floods & Survive Droughts!",
      details: (
        <>
          <p>
            Kegalle’s heavy monsoons (May–July, Sept–Nov) flood the land, while
            the dry season (Jan–March) leaves the soil cracked.
          </p>
          <strong>
            🌧 During Heavy Rains (Mawanella, Bulathkohupitiya, Aranayake areas)
          </strong>
          <ul>
            <li>
              Drainage Trenches: Dig 30 cm deep channels between rows to move
              excess water away.
            </li>
            <li>
              Banana & Kithul (Caryota urens) Windbreaks: Absorb rainwater and
              reduce soil washing away.
            </li>
            <li>
              Cover Crops Like Tithonia & Mucuna: Hold soil together and boost
              nutrients naturally!
            </li>
          </ul>
          <strong>
            🔥 During Dry Months (Ruwanwella, Warakapola, Yatiyanthota areas)
          </strong>
          <ul>
            <li>
              Mulching with Coconut Husk & Gliricidia Leaves: Traps moisture
              around tree roots.
            </li>
            <li>
              Low-Cost Drip Irrigation: Saves water & feeds plants drop by drop.
            </li>
            <li>
              Intercropping with Shade Trees (Jackfruit, Coffee, or Pepper):
              Reduces heat stress and earns extra income!
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "2️⃣ Soil Conservation: Keep Your Land Healthy!",
      details: (
        <>
          <p>
            Without good soil, your rubber trees can’t survive. Protect your
            hilly lands from erosion & nutrient loss!
          </p>
          <strong>🏔 Stopping Erosion in Slopes (Aranayake & Mawanella)</strong>
          <ul>
            <li>
              Vetiver & Lemon Grass Barriers: Plant along slopes to trap soil &
              slow down water.
            </li>
            <li>
              Terracing & Contour Planting: Prevents landslides and keeps the
              soil where it belongs!
            </li>
            <li>
              Grow Pineapple, Passionfruit, or Ginger: These hold soil in place
              and give extra profits!
            </li>
          </ul>
          <strong>🌱 Boosting Soil Health Naturally</strong>
          <ul>
            <li>
              Add Compost from Rubber Leaves, Kithul Waste & Cow Dung: Restores
              lost nutrients!
            </li>
            <li>
              Biochar (From Coconut Shells or Rubber Wood): Improves soil
              fertility & keeps moisture longer.
            </li>
            <li>
              Reduce Chemical Fertilizers: Overuse destroys soil microbes—switch
              to organic boosters!
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "3️⃣ Fertilization: Feed Your Trees, Get More Latex!",
      details: (
        <>
          <p>
            Rubber trees absorb nutrients every time they are tapped! Replace
            them to keep yields high.
          </p>
          <strong>🌟 Best Fertilizer Mix for Kegalle</strong>
          <ul>
            <li>
              Young Trees (0–5 years): NPK (10:10:4) + Dolomite (200g/tree) +
              Organic Compost twice a year.
            </li>
            <li>
              Mature Trees (6+ years, tapped trees): Magnesium Sulphate
              (150g/tree) + Rock Phosphate (250g/tree) for strong tree trunks!
            </li>
            <li>
              Organic Boosters: Use Gliricidia or Tithonia compost for natural
              nitrogen & healthy trees.
            </li>
          </ul>
          <strong>⚠ Farmer Mistakes to Avoid!</strong>
          <ul>
            <li>
              Over-Tapping Trees: Weakens the tree and reduces future yields.
              Tap properly!
            </li>
            <li>
              Using Too Much Fertilizer: Leads to soil damage & nutrient loss.
              Always follow correct doses!
            </li>
            <li>
              Ignoring Soil Tests: Check your soil every 2 years to use the
              right fertilizers.
            </li>
          </ul>
          <p>
            Farmers of Kegalle, Take Control of Your Plantation! By managing
            water, protecting soil, and feeding your trees, you’ll ensure:
          </p>
          <ul>
            <li>Stronger rubber trees</li>
            <li>Higher latex production</li>
            <li>A profitable & sustainable farm</li>
          </ul>
          <p>
            Swipe to the Next Section for Smart Farming Tools, Fertilizer
            Calculators & Weather Updates!
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="solutions">
      <Header />
      <div
        style={{
          position: "absolute",
          top: "120px",
          left: "20px",
          right: "20px",
        }}
      >
        <h2>Smart Farming Solutions for Kegalle’s Rubber Plantations</h2>
        <p>
          Farmers of Kegalle, you now know the challenges—heavy rains, soil
          erosion, unpredictable droughts. But you CAN protect your rubber
          plantation with the right techniques! Here’s how you can fight back
          and boost your latex yield!
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
        ))}
      </div>
    </div>
  );
}

export default Solutions;
