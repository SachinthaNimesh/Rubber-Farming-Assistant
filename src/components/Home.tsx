import { Link } from "react-router-dom";
import "./Home.css"; // Import the separated CSS file
import Header from "./Header"; // Import the Header component
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Paper,
  Grid,
  useMediaQuery,
} from "@mui/material";

function Home() {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <div>
      <Header />

      <Paper elevation={3} sx={{ backgroundColor: "white", padding: 2 }}>
        <div className="main-content" style={{ marginTop: "80px" }}>
          <section id="home">
            <Paper
              elevation={4}
              sx={{
                backgroundColor: "#4caf50",
                color: "white",
                padding: isMobile ? "10px" : "20px",
                textAlign: "center",
                marginBottom: "30px",
              }}
            >
              <Typography
                variant={isMobile ? "h5" : "h3"}
                component="h1"
                gutterBottom
              >
                Welcome to Rubber Farmer Assistant
              </Typography>
            </Paper>

            <Grid container spacing={3} justifyContent="center">
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
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Link to={item.path} style={{ textDecoration: "none" }}>
                    <Card sx={{ maxWidth: 345, height: "100%" }}>
                      <CardMedia
                        sx={{ height: 140 }}
                        image="src/assets/rubber leaf.png"
                        title={item.title}
                      />
                      <CardContent>
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
                </Grid>
              ))}
            </Grid>
          </section>
        </div>
      </Paper>
    </div>
  );
}

export default Home;
