import React from "react";

const About = ({ sharedBasicInfo, resumeBasicInfo }) => {
  const profilepic = sharedBasicInfo ? `images/${sharedBasicInfo.image}` : "";
  const sectionName = resumeBasicInfo ? resumeBasicInfo.section_name.about : "";
  const hello = resumeBasicInfo ? resumeBasicInfo.description_header : "";
  const about = resumeBasicInfo ? resumeBasicInfo.description : "";

  return (
    <section id="about">
      <div className="col-md-12">
        <h1 style={{ color: "black" }}>
          <span>{sectionName}</span>
        </h1>
        <div className="row center mx-auto mb-5">
          <div className="col-md-4 mb-5 center">
            <div className="polaroid">
              <span style={{ cursor: "auto" }}>
                <img
                  height="270px"
                  width="300px"
                  src={profilepic}
                  alt="Faded Barber"
                />
              </span>
            </div>
          </div>

          <div className="col-md-8 center">
            <div className="col-md-10">
              <div className="card">
                <div
                  className="card-body font-trebuchet text-justify ml-3 mr-3"
                  style={{
                    height: "auto",
                    fontSize: "132%",
                    lineHeight: "200%",
                  }}
                >
                  <span className="wave">{hello}</span>
                  <br />
                  {about}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
