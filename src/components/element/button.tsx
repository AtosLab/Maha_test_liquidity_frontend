import { Link } from "components/compBase";
import styled from "styled-components";

export const BtnOutline = styled(Link)``;
BtnOutline.defaultProps = {
  px: ["11px", "17px"],
  py: ["13px", "15px"],
  borderWidth: "1px",
  borderStyle: "solid",
  border: "primary",
  borderRadius: ["12px", "16px"],
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gridGap: ["4px", "8px"],
  color: "primary",
  fontWeight: "700",
  fontSize: ["12px", "14px"],
  lineHeight: "120%",
};

export const BtnNormal = styled(Link)``;
BtnNormal.defaultProps = {
  background: "#007DFC",
  px: "32px",
  py: "18px",
  borderRadius: "16px",
  fontWeight: "700",
  fontSize: "16px",
  lineHeight: "120%",
  boxShadow: "0px 5px 20px #007DFC7F",
};
