import { Box, Stack, Text } from "@mantine/core";
import React from "react";
import Solution from "./Solution";

const Solutions = () => {
  const solutionsArray = [
    {
      title: "Curated Data",
      features: ["Access Third Party Data"],
    },
    {
      title: "Data Management",
      features: [
        "Easily set up your own data management system",
        "Horizontally scalable",
      ],
    },
    {
      title: "Data Analytics",
      features: [
        "Data analysis",
        "Backtesting of complex trading strategies",
        "Backtesting of complex trading strategies",
      ],
    },
    {
      title: "Data Analytics",
      features: [
        "Data analysis",
        "Backtesting of complex trading strategies",
        "Backtesting of complex trading strategies",
      ],
    },
    {
      title: "Data Analytics",
      features: [
        "Data analysis",
        "Backtesting of complex trading strategies",
        "Backtesting of complex trading strategies",
      ],
    },
  ];

  return (
    <Stack>
      <Text className="text-white text-5xl">OUR SOLUTIONS</Text>
      <Text className="text-white text-base">
        Choose the features you wish to be implemented in your application
      </Text>
      <Box className="flex flex-wrap break-normal p-4 bg-white md:max-h-[500px] h-3/6 w-[704px] overflow-y-auto">
        <Stack>
          {solutionsArray.map((solution) => (
            <Solution solution={solution} />
          ))}
        </Stack>
      </Box>
    </Stack>
  );
};

export default Solutions;
