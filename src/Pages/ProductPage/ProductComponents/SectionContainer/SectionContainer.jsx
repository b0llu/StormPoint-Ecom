// import { useState } from "react";
// import { useRoute } from "../../../Context/useRoute";
import "./SectionContainer.css";

export const SectionContainer = ({ children }) => {
  // const { setSidebar } = useRoute();

  return (
    <section>
      <i
        // onClick={() => setSidebar(true)}
        className="fas fa-bars hamburger stick"
      ></i>
      <div className="section-container">{children}</div>
    </section>
  );
};
