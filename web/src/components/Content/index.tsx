import React from "react";
import { ContentWrapper } from "./content.style";

interface props {}

const Content: React.FC<props> = ({ children }) => {
  return <ContentWrapper>{children}</ContentWrapper>;
};

export default Content;
