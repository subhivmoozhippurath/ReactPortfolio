import { Box, Center, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";

const Stats = () => {
  return (
    <Box className="react-activity-calendar">
      <Box>
        <Heading
          display={"inline-block"}
          padding="10px"
          bgGradient="linear(to-r, #25cefd, #f14d9f)"
          borderRadius={"15px"}
          className="tech-skill-heading"
          data-aos="fade-right"
          marginBottom={{ base: "30px", sm: "50px" }}
        >
          GITHUB STATISTICS & CALENDER
        </Heading>
      </Box>

      <Flex
        id="git-stat"
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
        }}
        width="80%"
        margin="auto"
        gap={10}
      >
        <Box margin={"auto"} data-aos="fade-right">
          <Image
            id="github-streak-stats"
            src="https://github-readme-streak-stats.herokuapp.com?user=Shubhangisaini205&theme=react&border_radius=6.5&date_format=M%20j%5B%2C%20Y%5D"
            alt="streak-stat"
          />
        </Box>
        <Box margin={"auto"} data-aos="zoom-in">
          <Image
            id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api?username=Shubhangisaini205&count_private=true&theme=react"
            alt="stat-card"
          />
        </Box>

        <Box margin={"auto"} data-aos="fade-left">
          <Image
            id="github-top-langs"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Shubhangisaini205&theme=react"
            alt="top_languages"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Stats;
