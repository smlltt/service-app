import styled from "styled-components";

import { FormHelperText, Input } from "@material-ui/core";

export const FormHelperTextLeft = styled(FormHelperText)({
  display: "flex",
  alignSelf: "start",
});

export const HiddenInput = styled(Input)({
  display: "none",
});
