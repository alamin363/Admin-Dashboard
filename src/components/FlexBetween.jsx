const { default: styled } = require("@emotion/styled");
const { Box } = require("@mui/system");

const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export default FlexBetween;
