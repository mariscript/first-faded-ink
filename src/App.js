import React, { Component } from "react";
import $ from "jquery";
import "./App.scss";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Calendar from "./components/Calendar";
import Projects from "./components/Projects";
import Services from "./components/Services";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      foo: "bar",
      resumeData: {},
      sharedData: {},
    };
  }

  applyPickedLanguage(pickedLanguage, oppositeLangIconId) {
    this.swapCurrentlyActiveLanguage(oppositeLangIconId);
    document.documentElement.lang = pickedLanguage;
    var resumePath =
      document.documentElement.lang === window.$haircuts
        ? `res_haircuts.json`
        : `res_tattoos.json`;
    this.loadResumeFromPath(resumePath);
  }

  swapCurrentlyActiveLanguage(oppositeLangIconId) {
    var pickedLangIconId =
      oppositeLangIconId === window.$haircutsIconId
        ? window.$tattoosIconId
        : window.$haircutsIconId;
    document
      .getElementById(oppositeLangIconId)
      .removeAttribute("filter", "brightness(40%)");
    document
      .getElementById(pickedLangIconId)
      .setAttribute("filter", "brightness(40%)");
  }

  componentDidMount() {
    this.loadSharedData();
    this.applyPickedLanguage(window.$haircuts, window.$tattoosIconId);
  }

  loadResumeFromPath(path) {
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  loadSharedData() {
    $.ajax({
      url: `shared_data.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ sharedData: data });
        document.title = `${this.state.sharedData.basic_info.name}`;
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <Header sharedData={this.state.sharedData.basic_info} />
        <div className="col-md-12 mx-auto text-center language">
          <div
            onClick={() =>
              this.applyPickedLanguage(window.$haircuts, window.$tattoosIconId)
            }
            style={{ display: "inline" }}
          >
            <span
              className="iconify language-icon mr-5"
              data-icon="twemoji-scissors"
              data-inline="false"
              id={window.$haircutsIconId}
              title="Hair"
            ></span>
          </div>
          <div
            onClick={() =>
              this.applyPickedLanguage(window.$tattoos, window.$haircutsIconId)
            }
            style={{ display: "inline" }}
          >
            <span
              className="iconify language-icon"
              data-icon="twemoji-fountain-pen"
              data-inline="false"
              id={window.$tattoosIconId}
              title="Tattoos"
            ></span>
          </div>
        </div>
        <About
          resumeBasicInfo={this.state.resumeData.basic_info}
          sharedBasicInfo={this.state.sharedData.basic_info}
        />
        <Projects
          resumeProjects={this.state.resumeData.projects}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Services
          sharedServices={this.state.sharedData.services}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Calendar
          resumeExperience={this.state.resumeData.calendar}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Contact />
        <Footer sharedBasicInfo={this.state.sharedData.basic_info} />
      </div>
    );
  }
}

export default App;
