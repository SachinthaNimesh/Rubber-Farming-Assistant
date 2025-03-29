import Header from "./Header";
import { TextField, Button, Box, Snackbar, Alert } from "@mui/material";
import { useState } from "react";

function Support() {
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate form submission logic
    setSuccess(true);
    setFormData({ name: "", contactNumber: "", message: "" }); // Clear form fields
  };

  const handleClose = () => {
    setSuccess(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="support">
      <Header />
      <div
        style={{
          position: "absolute",
          top: "120px",
          left: "20px",
          right: "20px",
        }}
      >
        <h2>Support</h2>
        <Snackbar
          open={success}
          autoHideDuration={3000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%", marginTop: "120px" }}
          >
            Message sent successfully!
          </Alert>
        </Snackbar>
        <Box
          component="form"
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          onSubmit={handleSubmit}
        >
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            fullWidth
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            label="Contact Number"
            name="contactNumber"
            variant="outlined"
            fullWidth
            value={formData.contactNumber}
            onChange={handleChange}
          />
          <TextField
            label="Message"
            name="message"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            value={formData.message}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default Support;
