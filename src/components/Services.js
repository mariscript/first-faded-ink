import React from "react";

const Services = ({ sharedServices, resumeBasicInfo }) => {
  if (sharedServices && resumeBasicInfo) {
    const sectionName = resumeBasicInfo.section_name.services;
    const services = sharedServices.icons.map((service, i) => (
      <li className="list-inline-item mx-3" key={i}>
        <span>
          <div className="text-center skills-tile">
            <i className={service.class} style={{ fontSize: "220%" }}>
              <p
                className="text-center"
                style={{ fontSize: "30%", marginTop: "4px" }}
              >
                {service.name}
              </p>
            </i>
          </div>
        </span>
      </li>
    ));
    return (
      <section id="services">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">{sectionName}</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto skill-icon">{services}</ul>
          </div>
        </div>
      </section>
    );
  } else {
    return null;
  }
};

export default Services;
