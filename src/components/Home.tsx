import { Link } from "react-router-dom";
import "./Home.css"; // Import the separated CSS file
import Header from "./Header"; // Import the Header component
import {
  Card,
  CardContent,
  CardMedia,
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
                },
                {
                  path: "/challenges",
                  title: "Climate & Soil",
                  description: "Understanding challenges and solutions",
                },
                {
                  path: "/solutions",
                  title: "Solutions",
                  description: "Practical advice for common problems",
                },
                {
                  path: "/tools",
                  title: "Tools",
                  description: "Calculators and weather updates",
                },
                {
                  path: "/faqs",
                  title: "FAQs",
                  description: "Answers to common farming questions",
                },
                {
                  path: "/support",
                  title: "Contact Us",
                  description: "Ask questions or provide feedback",
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
                      }}
                    >
                      <CardMedia
                        sx={{ height: 140 }}
                        image="src/assets/rubber leaf.png"
                        title={item.title}
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="div">
                          {item.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary" }}
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
