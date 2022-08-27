import { Button, Group, Text } from "@mantine/core";
import React from "react";
import { FeatureIcon } from "../../../icons/index";

const Solution = ({ solution }) => {
  return (
    <>
      <Text className="text-2xl font-semibold">
        <Group>
          <FeatureIcon />

          {solution.title}
        </Group>
      </Text>
      <Group>
        {solution.features.map((feature) => (
          <Button
            variant="outline"
            color="dark"
            className="bg-white text-black rounded-full"
          >
            {feature}
          </Button>
        ))}
      </Group>
    </>
  );
};

export default Solution;
