import React from "react";
import { Img } from "../../components/Img/Img";
import { Text } from "../../components/Text/Text";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input";
import { Heading } from "../../components/Heading/Heading";
import "./Job.css";


export default function JobSearchSection() {
  return (
    <>
      {/* Job search section */}
      <div className="job-search-section">
        <div className="container">
          <div className="content">
            <div className="text-section">
              <Heading
                size="text3x1"
                as="h1"
                className="job-heading"
                style={{color:"black"}}
              >
                Find a job that suits your interest & skills.
              </Heading>

              <Text
                size="textmd"
                as="p"
                className="job-description"
              >
                Discover opportunities that match your career aspirations.
              </Text>

              <Input
                shape="round"
                name="Location Input"
                placeholder="Your Location"
                prefix={<Img src="images/location.svg" alt="Fi:map-pin" className="location-icon" />}
                className="location-input"
              />
            </div>

            <Button
              color="blue"
              size="md"
              shape="round"
              className="find-job-button"
            >
              Find Job
            </Button>
          </div>

          <div className="suggestions">
            <Text size="textxs" as="p" className="suggestions-text">
              Suggestion:
            </Text>

            <Text size="textxs" as="p" className="suggestion-item">
              Designer,
            </Text>

            <Text size="textxs" as="p" className="suggestion-item">
              Programming,
            </Text>

            <Text size="textxs" as="p" className="suggestion-item">
              Digital Marketing,
            </Text>

            <Text size="textxs" as="p" className="suggestion-item">
              Video,
            </Text>

            <Text size="textxs" as="p" className="suggestion-item">
              Animation.
            </Text>
          </div>
        </div>

        <Img
          src="images/illus.png"
          alt="Illustration Image"
          className="illustration-img"
        />
      </div>
    </>
  );
}
