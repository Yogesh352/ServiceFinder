import { Button, Group, Stack } from "@mantine/core";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../../background/WalkthroughBackground.png";
import Feature from "./Feature/Feature";
import axios from "../../axios/axios";
import { AddedServicesContext } from "../../App";

const Walkthrough = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const [solutions, setSolutions] = useState([]);


  useEffect(() => {
    const getSolution = async () => {
      try {
        const res = await axios("/solution");
        setSolutions(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getSolution();
  }, []);


  const solutionsArray = [
    {
      title: "Curated Data",
      description: "Hello Help me",
      features: [
        {
          title: "Data analysis",
          shortDescription: "Handle customers transactions",
          longDescription: "Handle customers transactions",
        },
        {
          title: "Backtesting of complex trading strategies",
          shortDescription: "Handle customers transactions",
          longDescription: "Handle customers transactions",
        },
        {
          title: "Financial Forecasting",
          shortDescription: "Handle customers transactions",
          longDescription: "Handle customers transactions",
        },
      ],
    },
    {
      title: "Data Management",
      description:
        "Our APIs and customizable front-end templates make it easy to offer a range of financial services to your customers through your application.",
      features: [
        {
          title: "Forecasting",
          shortDescription: "Handle customers transactions",
          longDescription: "Handle customers transactions",
        },
        {
          title: "Data Forecasting",
          shortDescription: "Handle customers transactions",
          longDescription: "Handle customers transactions",
        },
        {
          title: "Data Integration",
          shortDescription: "Handle customers transactions",
          longDescription: "Handle customers transactions",
        },
      ],
    },
    {
      title: "Data Analytics",
      description: "API required for this and that and this and that ",
      features: [
        {
          title: "Bank analysis",
          shortDescription: "Handle customers transactions",
          longDescription: "Handle customers transactions",
        },
        {
          title: "Tadaaaa & Helping & People",
          shortDescription: "Handle customers transactions",
          longDescription: "Handle customers transactions",
        },
        {
          title: "Forcast Bank",
          shortDescription: "Handle customers transactions",
          longDescription: "Handle customers transactions",
        },
      ],
    },
    {
      title: "Forecast Analytics",
      description: "API required for this and that and this and that ",
      features: [
        {
          title: "Machine Learning",
          shortDescription: "Handle customers transactions",
          longDescription: "Handle customers transactions",
        },
        {
          title: "This is machine learning",
          shortDescription: "Handle customers transactions",
          longDescription: "Handle customers transactions",
        },
        {
          title: "Boom Boom",
          shortDescription: "Handle customers transactions",
          longDescription:
            "Handle customers transactions transactions transactions transactions",
        },
      ],
    },
  ];
  const myStyle = {
    backgroundImage: `url(${image})`,
    height: "100vh",
    paddingBottom: "20px",
    paddingLeft: "20px",
    paddingRight: "20px",

    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div style={myStyle} className="flex items-center justify-center h-screen">
      <Stack>
        {solutions.length !== 0 && <Feature feature={solutions[index]} />}
        <Group position="apart">
          {index !== 0 ? (
            <Button
              className="bg-certainGreen-50 text-black"
              onClick={() => setIndex((prvIndex) => prvIndex - 1)}
            >
              Previous
            </Button>
          ) : (
            <Button
              onClick={() => navigate("/form")}
              className="bg-certainGreen-50 text-black"
            >
              Return
            </Button>
          )}
          {index !== solutionsArray.length - 1 ? (
            <Button
              className="bg-certainGreen-50 text-black"
              onClick={() => setIndex((prvIndex) => prvIndex + 1)}
            >
              Next
            </Button>
          ) : (
            <Button
              onClick={() => navigate("/summary")}
              className="bg-certainGreen-50 text-black"
            >
              Complete
            </Button>
          )}
        </Group>
      </Stack>
    </div>
  );
};

export default Walkthrough;
