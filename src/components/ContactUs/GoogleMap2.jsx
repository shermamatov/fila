import React from "react";

const GoogleMap2 = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101238.69762296403!2d127.05456016281641!3d37.538349347251405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca5550cf6d3bd%3A0x9d491f293c79ad0!2sFila!5e0!3m2!1sru!2skg!4v1669393960297!5m2!1sru!2skg"
        // width="300"
        height="300"
        style={{
          borderRadius: "10px",
          border: "none",
          marginBottom: 20,
          marginTop: 20,
          width:'100%'
        }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap2;
