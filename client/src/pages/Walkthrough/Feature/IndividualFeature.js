import { Box, Group, Stack, Text, Button } from "@mantine/core";

import React, { useContext, useEffect, useState } from "react";
import { AddedServicesContext } from "../../../App";

const IndividualFeature = ({ feature }) => {
  const { services, setServices } = useContext(AddedServicesContext);

  const [selected, setSelected] = useState(false);
  setTimeout(() => {
    setSelected(false);
    if (services.includes(feature.name)) {
      setSelected(true);
    }
  }, 50);

  return (
    <Box className="p-4 shadow-2xl bg-white w-full md:h-56 sm:h-30 ">
      <Group position="right">
        {!selected ? (
          <Button
            onClick={(event) => {
              setSelected(true);
              setServices([...services, feature.name]);
            }}
            className="bg-certainGreen-100"
          >
            Add
          </Button>
        ) : (
          <Button
            onClick={(event) => {
              setSelected(false);
              setServices((current) =>
                current.filter((selected) => {
                  return selected !== feature.name;
                })
              );
            }}
            className="bg-red-500"
          >
            Delete
          </Button>
        )}
      </Group>
      <Stack spacing="md" className="h-full w-full  ">
        <Text className="text-2xl font-bold text-certainGreen-100">
          {feature?.name}
        </Text>
        <Text className="text-sm text-certainGreen-100">
          {feature?.description}
        </Text>
      </Stack>
    </Box>
  );
};

export default IndividualFeature;
