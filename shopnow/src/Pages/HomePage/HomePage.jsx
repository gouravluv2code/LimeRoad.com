import React from "react";
import { Stack } from "@chakra-ui/react";
import MyFeedHomepage from "../../Components/HomepageComps/MyFeedHomepage";
import DiscountHomepage from "../../Components/HomepageComps/DiscountHomepage";
import CarouselHomepage from "../../Components/HomepageComps/CarouselHomepage";

const Homepage = () => {
  return (
    <Stack align={"center"} bg={"#EEEEEE"}>
      <MyFeedHomepage />
      <DiscountHomepage />
      <CarouselHomepage />
    </Stack>
  );
};

export default Homepage;