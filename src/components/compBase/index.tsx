import styled from "styled-components";
import { allCompose, AllProps, FlexProps, InputProps, LinkProps } from "./interface.base";

// Containers
export const Div = styled.div<AllProps>`
  ${allCompose}
`;
Div.defaultProps = {
  boxSizing: "border-box",
  display: "flex",
};
export const Flex = styled(Div)<FlexProps>`
  flex-direction: ${(p: any) => (p.row ? "row" : p.col ? "column" : "")};
  flex-grow: ${(p: any) => (p.flexFull ? "1" : "")};
  justify-content: ${(p: any) =>
    p.center ? "center" : p.justifyCenter ? "center" : p.spaceBetween ? "space-between" : p.spaceAround ? "space-around" : ""};
  align-items: ${(p: any) => (p.center ? "center" : p.alignCenter ? "center" : "")};
`;
Flex.defaultProps = {
  display: "flex",
};
export const ContainerFluid = styled(Flex)``;
ContainerFluid.defaultProps = {
  width: "100%",
  flexDirection: "column",
  alignItems: "center",
};
export const Container = styled(Flex)``;
Container.defaultProps = {
  width: "100%",
  maxWidth: "1200px",
  px: "20px",
};

// Input
export const Input = styled.input<InputProps>`
  ${allCompose}
  &::-webkit-inner-spin-button {
    display: none;
  }
`;
Input.defaultProps = {
  outline: "none",
  boxSizing: "border-box",
};
export const TextArea = styled.textarea<InputProps>`
  ${allCompose}
  &::-webkit-inner-spin-button {
    display: none;
  }
`;
TextArea.defaultProps = {
  outline: "none",
  boxSizing: "border-box",
};

// Image
export const Image = styled.img<AllProps>`
  ${allCompose}
`;

// Link
export const Link = styled.a<LinkProps>`
  ${allCompose}
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  display: inline-flex;
  &:hover {
    background: ${(p: any) => (p.hoverBg ? p.hoverBg : "reverse")};
    color: ${(p: any) => (p.hoverColor ? p.hoverColor : "reverse")};
    text-decoration: ${(p: any) => (p.hoverUL ? p.hoverUL : "reverse")};
  }
`;
