import { Box, Checkbox, Grid, Group, Stack, Text } from "@mantine/core";
import React, { useContext, useEffect } from "react";
import { AddedServicesContext } from "../../../App";
import { FeatureIcon } from "../../../icons";
import IndividualFeature from "./IndividualFeature";

const Feature = ({ feature }) => {
  return (
    <Stack>
      <Text className="text-7xl text-white font-semibold">
        <Group>
          <FeatureIcon className="text-white" />

          {feature.title}
        </Group>
      </Text>
      <Box className="w-[800px]">
        <Text className="text-base text-white">{feature.description}</Text>
      </Box>

      <Text className="text-base text-white">
        Please choose the features you require
      </Text>
      <Grid>
        {feature.features.map((feature) => (
          <Grid.Col span={4}>
            <IndividualFeature key={feature.title} feature={feature} />
          </Grid.Col>
        ))}
      </Grid>
    </Stack>
  );
};

export default Feature;
