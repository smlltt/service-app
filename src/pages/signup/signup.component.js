import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";
import GoogleButton from "react-google-button";
import {
  MainButtonTypography,
  MarginTopHalfRem,
  formsStyles,
} from "../../sharedStyles";
import { FormHelperTextLeft, HiddenInput } from "./styles";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  fullName: yup.string("Enter your full name"),
  avatar: yup
    .mixed()
    .test("fileSize", "File size is too large (max 1MB)", (value) => {
      if (value) {
        return value.size <= 1000000;
      }
    })
    .test("fileType", "Accepted formats: jpg, jpeg, png", (value) => {
      if (value) {
        const supportedFormats = ["image/jpg", "image/jpeg", "image/png"];
        return supportedFormats.includes(value.type);
      }
    }),
  password: yup
    .string("Enter your password")
    .min(5, "Password should be of minimum 5 characters length")
    .required("Password is required"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Password confirmation is required"),
});

const SignupComponent = ({ onSubmit, onGoogleSubmit }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      fullName: "",
      avatar: "",
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <formsStyles.FormWrapper>
      <formsStyles.TextFieldWrapper onSubmit={formik.handleSubmit}>
        <Typography variant={"h5"}>Signup</Typography>
        <MarginTopHalfRem />
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
          id="fullName"
          name="fullName"
          label="Full Name (optional)"
          value={formik.values.fullName}
          onChange={formik.handleChange}
        />
        <MarginTopHalfRem />
        <MarginTopHalfRem />
        <label htmlFor="avatar">
          <HiddenInput
            id="avatar"
            type="file"
            name="avatar"
            onChange={(event) =>
              formik.setFieldValue("avatar", event.currentTarget.files[0])
            }
            error={formik.touched.avatar && Boolean(formik.errors.avatar)}
          />

          <formsStyles.SecondaryFormButton component="span">
            {formik.values.avatar.name
              ? formik.values.avatar.name
              : "Upload Your Avatar"}
          </formsStyles.SecondaryFormButton>
        </label>
        <FormHelperTextLeft error={true}>
          {formik.touched.avatar && formik.errors.avatar}
        </FormHelperTextLeft>

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
        <TextField
          fullWidth
          id="passwordConfirmation"
          name="passwordConfirmation"
          label="Password Confirmation"
          type="password"
          value={formik.values.passwordConfirmation}
          onChange={formik.handleChange}
          error={
            formik.touched.passwordConfirmation &&
            Boolean(formik.errors.passwordConfirmation)
          }
          helperText={
            formik.touched.passwordConfirmation &&
            formik.errors.passwordConfirmation
          }
        />
        <MarginTopHalfRem />
        <formsStyles.MainFormButton type="submit">
          <MainButtonTypography>Signup</MainButtonTypography>
        </formsStyles.MainFormButton>
        <MarginTopHalfRem />
        <GoogleButton onClick={onGoogleSubmit} />
      </formsStyles.TextFieldWrapper>
    </formsStyles.FormWrapper>
  );
};

export default SignupComponent;
