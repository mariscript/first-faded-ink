import React, { Component } from "react";

class Services extends Component {
  render() {
    if (this.props.sharedServices && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.services;
      var services = this.props.sharedServices.icons.map(function (
        services,
        i
      ) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                <i className={services.class} style={{ fontSize: "220%" }}>
                  <p
                    className="text-center"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {services.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
      });
    }

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
  }
}

export default Services;
