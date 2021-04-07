import styled from "styled-components";
import { Button } from "@material-ui/core";

export const MainFormButton = styled(Button)`
  && {
    background: #ff1493;
    width: 240px;
    height: 50px;
  }
`;

export const FormWrapper = styled.div`
  && {
    margin-top: 5rem;
    display: flex;
    flex: 1;
    align-items: center;
    flex-direction: column;
  }
`;

export const TextFieldWrapper = styled.form`
  && {
    width: 240px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
