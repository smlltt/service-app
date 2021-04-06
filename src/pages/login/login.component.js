import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@material-ui/core/TextField";
import { Box } from "@material-ui/core";
import GoogleButton from "react-google-button";
import { MainLoginButton } from "./styles";
import { MainButtonTypography } from "../../sharedStyles";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(5, "Password should be of minimum 5 characters length")
    .required("Password is required"),
});

const LoginComponent = ({ onSubmit, onGoogleSubmit }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <div
      style={{
        marginTop: "5rem",
        display: "flex",
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
        // position: "absolute",
        // left: "50%",
        // top: "50%",
        // transform: "translate(-50%,-50%)",
      }}
    >
      <form
        onSubmit={formik.handleSubmit}
        style={{
          width: "240px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Your Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Your Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Box style={{ margin: "0.5rem" }}></Box>
        <MainLoginButton
          color="primary"
          // fullWidth
          type="submit"
        >
          <MainButtonTypography>Submit</MainButtonTypography>
        </MainLoginButton>
        <Box style={{ margin: "0.2rem" }}></Box>
        <GoogleButton onClick={onGoogleSubmit} />
      </form>
    </div>
  );
};

export default LoginComponent;
