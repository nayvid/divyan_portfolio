import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            hi, i'm <span className="purple"> divyan </span>
            from <span className="purple"> selangor, malaysia.</span>
            <br />
            I'm currently a software engineer at Silverlake
            <br />
            <br />
            apart from developing projects, some other activities that i love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> hiking
            </li>
            <li className="about-activity">
              <ImPointRight /> watching Netflix shows
            </li>
            <li className="about-activity">
              <ImPointRight /> travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "the only way to great work is to love what you do!"{" "}
          </p>
          <footer className="blockquote-footer">divyan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
