import React from "react";
import Looksilder from "../Looksilder";

const TakeaLook = () => {
  return (
    <section class="take-a-look">
      <div class="container">
        <div class="headings">
          {/* <h2>TAKE A LOOK AT WHAT WE HAVE BEEN WORKING ON</h2> */}
          <p
            style={{
              fontSize: "26px",
            }}
          >
            Empowering Progress Through AI-Driven Technology, 
            Designed for the Future You Envision.
          </p>
        </div>
        <Looksilder />
      </div>
      <hr />
    </section>
  );
};

export default TakeaLook;
