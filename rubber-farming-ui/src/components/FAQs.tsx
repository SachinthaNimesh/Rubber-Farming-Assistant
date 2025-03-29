import React from "react";
import "./FAQs.css";

const FAQs = () => {
  return (
    <div className="faqs">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-item">
        <h2>What is rubber farming?</h2>
        <p>Rubber farming involves the cultivation of rubber trees for the production of natural rubber.</p>
      </div>
      <div className="faq-item">
        <h2>How do I start rubber farming?</h2>
        <p>Starting rubber farming requires selecting suitable land, acquiring quality seedlings, and understanding the cultivation process.</p>
      </div>
      <div className="faq-item">
        <h2>What are the common challenges in rubber farming?</h2>
        <p>Common challenges include pest management, disease control, and fluctuating market prices.</p>
      </div>
      <div className="faq-item">
        <h2>How can I improve rubber yield?</h2>
        <p>Improving rubber yield can be achieved through proper maintenance, fertilization, and timely tapping of the trees.</p>
      </div>
      <div className="faq-item">
        <h2>Where can I find resources for rubber farming?</h2>
        <p>Resources can be found through agricultural extension services, online forums, and local farming communities.</p>
      </div>
    </div>
  );
};

export default FAQs;