import { Box, Checkbox, Grid, Group, Stack, Text } from "@mantine/core";
import React, { useContext, useEffect, useRef } from "react";
import { AddedServicesContext } from "../../../App";
import { FeatureIcon } from "../../../icons";
import IndividualFeature from "./IndividualFeature";

const Feature = ({ feature }) => {
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [feature]);
  return (
    <Stack className="h-full">
      <div ref={scrollRef}>
        <Text className=" pt-20 w-[1200px] text-5xl text-white font-semibold">
          <Group>
            <FeatureIcon className="text-white" />

            {feature?.title}
          </Group>
        </Text>
      </div>
      <Box className="w-[800px]">
        <Text className="text-base text-white">{feature?.description}</Text>
      </Box>

      <Text className="text-base text-white">
        Please choose the features you require
      </Text>
      <Grid className="w-[1200px]">
        {feature.feature.map((feature) => (
          <Grid.Col span={4}>
            <IndividualFeature key={feature?.title} feature={feature} />
          </Grid.Col>
        ))}
      </Grid>
    </Stack>
  );
};

export default Feature;
