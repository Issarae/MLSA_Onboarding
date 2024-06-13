/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/Screenshot 2023-10-05 125502.png";

const imageAltText = "WINNING IMAGE";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "7 tips for Linkedln optimisation 🎉",
    description:
      "Collaboration to create a beginner friendly post to help explain Linkedln optimisation and tooling to get started.",
    url: "https://www.linkedin.com/posts/israelngombo_opentowork-microsoft-linkedln-activity-7173606938205732864--FEy?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "TechFoundHer Scholarship",
    description:
      "Empowering women in tech and founders.",
    url: "https://www.linkedin.com/posts/israelngombo_techfoundher-fintech-innovation-activity-7188819859386871809-cPnB?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Microsoft Office visit",
    description:
      "Created MS Copilot image from workshop used it for mouse pads. Includes my experience and design abilities.",
    url: "https://www.linkedin.com/posts/israelngombo_microsoft-innovation-tech-activity-7160563875661168640-IMCS?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Techstars Startup Weekend Winners 2024",
    description:
      "Volunteered part of Techstars community of 400,000 people worldwide.",
    url: "https://www.linkedin.com/posts/israelngombo_techstars-entrepreneurship-fintech-activity-7201514027481477120-qCmB?utm_source=share&utm_medium=member_desktop",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
