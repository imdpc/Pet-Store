import styled from "styled-components";

export const CarouselContainer = styled.div`
  display: flex;
  margin: 0 0 20px 20px;
  transition: ${(props) => (props.sliding ? "none" : "transform 1s ease")};
  transform: ${(props) => {
    if (!props.sliding) return "translateX(calc(-28% - 20px))";
    if (props.direction === "prev")
      return "translateX(calc(2 * (-28% - 20px)))";
    return "translateX(0%)";
  }};
`;

export const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const CarouselSlot = styled.div`
  flex: 1 0 30%;
  flex-basis: 28%;
  margin-right: 20px;
  order: ${(props) => props.order};
`;

export const Item = styled.div`
  background: darkorange;
  text-align: center;
  padding: 50px;
  color: white;
  min-width: 160px;
  margin: 0 16px 0 0;
`;

export const CarouselContainerptwo = styled.div`
  display: flex;
  margin: 0 0 20px 20px;
`;
