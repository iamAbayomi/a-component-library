import React from "react";
import { Text, Link } from "@chakra-ui/react";

type props = {
  text: string;
  goToPage: string;
  target: string;
};

const Index = ({
  text = "Add the link to the props",
  goToPage,
  target
}: props) => {
  return (
    <Link href={goToPage} target={target}>
      <Text color="blue">{text}</Text>
    </Link>
  );
};

export default Index;
