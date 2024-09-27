import React from "react";

import { Text } from "../Text/Text";
import { Heading } from "../Heading/Heading";
import { Button } from "../Button/Button";
import { Img } from "../Img/Img";
import "./user.css";

export default function UserStats({ userStatNumber = "1,75,324", userStatLabel = "Live Job", ...props }) {
  return (
    <div
      {...props}
      className={`user-stats ${props.className}`}
    >
      <Button className="user-stats-button">
        <Img src="images/briefcase.svg" alt="Briefcase Icon" />
      </Button>
      <div className="user-stats-content">
        <Heading className="user-stats-number" as="p">
          {userStatNumber}
        </Heading>
        <Text className="user-stats-label" as="p">
          {userStatLabel}
        </Text>
      </div>
    </div>
  );
}
