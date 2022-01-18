import { FC } from "react";
import styled from "styled-components";
import { configuration } from "../../d.ts/main";

const StyledContainer = styled.div``;

const ServiceLink = styled.div``;

const ServiceContainer: FC<{ options?: configuration }> = ({ options }) => {
  console.log(options);
  return <StyledContainer>Test</StyledContainer>;
};

ServiceContainer.defaultProps = {
  options: {},
};

export default ServiceContainer;
