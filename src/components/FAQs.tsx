import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Header from "./Header";

function FAQs() {
  const faqs = [
    {
      question: "1️⃣ How is climate change affecting rubber farming in Kegalle?",
      answer: (
        <>
          🌧 <strong>Unpredictable Rainfall:</strong> Excess rain causes root
          rot; dry spells reduce latex flow. <br />
          🔥 <strong>Higher Temperatures:</strong> Increases water loss &
          reduces tree productivity. <br />
          💨 <strong>Frequent Storms:</strong> Break branches, affecting growth.
        </>
      ),
    },
    {
      question: "2️⃣ Why is my rubber latex flow reducing during droughts?",
      answer: (
        <>
          🌡 <strong>Water Stress:</strong> Trees produce less latex under
          extreme heat. <br />
          💧 <strong>Mulching & Drip Irrigation:</strong> Retains soil moisture
          & reduces stress.
        </>
      ),
    },
    {
      question: "3️⃣ How does soil erosion impact my farm?",
      answer: (
        <>
          🌱 <strong>Topsoil Loss:</strong> Washes away topsoil & nutrients,
          reducing tree health. <br />
          🌾 <strong>Prevention:</strong> Use terracing & cover crops to protect
          the soil.
        </>
      ),
    },
    {
      question: "4️⃣ Why is my rubber tree growth slow despite fertilizing?",
      answer: (
        <>
          🌍 <strong>Soil Degradation:</strong> Organic matter depletion from
          continuous rubber farming. <br />
          ♻️ <strong>Solution:</strong> Apply compost & plant nitrogen-fixing
          cover crops (Gliricidia, Mucuna).
        </>
      ),
    },
    {
      question:
        "5️⃣ How can I improve soil fertility after years of rubber cultivation?",
      answer: (
        <>
          🌿 <strong>Green Manure & Compost:</strong> Mix into the soil to
          restore nutrients. <br />
          🌾 <strong>Crop Rotation:</strong> Rotate with short-term crops like
          legumes.
        </>
      ),
    },
    {
      question: "6️⃣ Why do rubber roots rot more in heavy rains?",
      answer: (
        <>
          🌊 <strong>Poor Drainage:</strong> Waterlogging causes fungal
          infections. <br />
          🛠 <strong>Fix:</strong> Create proper drainage & raise planting beds
          in flood-prone areas.
        </>
      ),
    },
    {
      question: "7️⃣ How can I prevent soil from hardening in dry seasons?",
      answer: (
        <>
          🌾 <strong>Mulch & Organic Matter:</strong> Retains soil moisture.{" "}
          <br />
          🚜 <strong>Avoid Excessive Tilling:</strong> Prevents damage to soil
          structure.
        </>
      ),
    },
    {
      question: "8️⃣ How do strong winds damage rubber plantations?",
      answer: (
        <>
          🌬 <strong>Wind Damage:</strong> Uproots trees & breaks branches.{" "}
          <br />
          🌳 <strong>Windbreak Trees:</strong> Use Gliricidia & Bamboo as
          windbreaks.
        </>
      ),
    },
    {
      question: "9️⃣ Why are fungi & pests increasing in my rubber farm?",
      answer: (
        <>
          🌫 <strong>Rising Humidity:</strong> Increases fungal growth. <br />
          🧪 <strong>Solution:</strong> Improve airflow & use biofungicides like
          Trichoderma.
        </>
      ),
    },
  ];

  return (
    <div className="faqs">
      <Header />
      <div
        style={{
          position: "absolute",
          top: "120px",
          left: "20px",
          right: "20px",
        }}
      >
        <h2>
          Kegalle Farmers’ FAQs: Your Rubber Plantation Questions—Answered!
        </h2>
        {faqs.map((faq, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography component="span">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography component="div">{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}

export default FAQs;
