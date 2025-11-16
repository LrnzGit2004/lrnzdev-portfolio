import React from "react";
import Projects from "./Projects";
import Works from "./Works";
import References from "./References";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <div className="mt-32 flex flex-col md:flex-row gap-4">
      <div className="flex-3 space-y-4 items-center  ">
        <SectionTitle title="My 03 latest projects" />

        <Projects />
      </div>
      <div className="flex-2 flex-col gap-4 space-y-4">
        <div className="space-y-4">
          <SectionTitle title="My experiences" />

          <Works />
        </div>
        <div className="flex-2 flex-col gap-4 space-y-4">
          <SectionTitle title="References" />
          <References />
        </div>
      </div>
    </div>
  );
};

export default About;
