import React from "react";
import './Support.css';

const Support = () => {
  return (
    <div className="support-container">
      <h1>Support</h1>
      <p>If you need assistance, please reach out to our support team.</p>
      <h2>Contact Us</h2>
      <p>Email: support@rubberfarming.com</p>
      <p>Phone: +1-800-555-0199</p>
      <h2>Resources</h2>
      <ul>
        <li><a href="/faqs">Frequently Asked Questions</a></li>
        <li><a href="/tips">Helpful Tips</a></li>
        <li><a href="/tools">Available Tools</a></li>
      </ul>
    </div>
  );
};

export default Support;