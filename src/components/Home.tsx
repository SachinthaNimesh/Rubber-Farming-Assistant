import { Link } from "react-router-dom";
import "./Home.css"; // Import the separated CSS file
import Header from "./Header"; // Import the Header component
import {
  Card,
  CardContent,
  Typography,
  Paper,
  useMediaQuery,
  Box,
} from "@mui/material";

function Home() {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <div>
      <Header />

      <Paper elevation={3} sx={{ backgroundColor: "white" }}>
        <div
          className="main-content"
          style={{
            marginTop: "80px",
            backgroundImage: "url('src/assets/bg-img.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <section id="home">
            <Paper
              elevation={4}
              sx={{
                backgroundColor: "#4caf50",
                color: "white",
                padding: isMobile ? "10px" : "20px",
                textAlign: "center",
                marginBottom: "30px",
                marginTop: isMobile ? "20px" : "40px",
              }}
            >
              <Typography
                variant={isMobile ? "h5" : "h3"}
                component="h1"
                gutterBottom
              >
                Welcome to Rubber Farmer Assistant
              </Typography>
              <Typography variant="h6" component="p">
                Your digital companion for successful rubber cultivation
              </Typography>
            </Paper>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 3,
                padding: 3,
              }}
            >
              {[
                {
                  path: "/tips",
                  title: "Farming Tips",
                  description: "Essential information for rubber cultivation",
                  color: "#FFCDD2", // Light red
                  emoji: "🌱", // Added emoji
                },
                {
                  path: "/challenges",
                  title: "Climate & Soil",
                  description: "Understanding challenges and solutions",
                  color: "#C8E6C9", // Light green
                  emoji: "🌍", // Added emoji
                },
                {
                  path: "/solutions",
                  title: "Solutions",
                  description: "Practical advice for common problems",
                  color: "#BBDEFB", // Light blue
                  emoji: "💡", // Added emoji
                },
                {
                  path: "/tools",
                  title: "Tools",
                  description: "Calculators and weather updates",
                  color: "#FFF9C4", // Light yellow
                  emoji: "🛠️", // Added emoji
                },
                {
                  path: "/faqs",
                  title: "FAQs",
                  description: "Answers to common farming questions",
                  color: "#D1C4E9", // Light purple
                  emoji: "❓", // Added emoji
                },
                {
                  path: "/support",
                  title: "Contact Us",
                  description: "Ask questions or provide feedback",
                  color: "#FFECB3", // Light orange
                  emoji: "📞", // Added emoji
                },
              ].map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    width: {
                      xs: "100%",
                      sm: "calc(50% - 24px)",
                      md: "calc(33.3333% - 24px)",
                    },
                  }}
                >
                  <Link
                    to={item.path}
                    style={{
                      textDecoration: "none",
                      width: "100%",
                      display: "block",
                    }}
                  >
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: item.color, // Apply the color dynamically
                      }}
                    >
                      <CardContent
                        sx={{
                          flexGrow: 1,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: 2,
                        }}
                      >
                        <Typography variant="h2" component="div">
                          {item.emoji} {/* Display emoji */}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                          {item.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary", textAlign: "center" }}
                        >
                          {item.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Link>
                </Box>
              ))}
            </Box>
          </section>
        </div>
      </Paper>
    </div>
  );
}

export default Home;
