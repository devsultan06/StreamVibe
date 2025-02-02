// components/ModalForm.js
import React, { useEffect } from "react";
import { Modal as Modal2, Box, TextField, Button } from "@mui/material";
import InputField from "../../../components/ui/InputField";
import { useFormik } from "formik";
import { getQuestionSchema } from "../../../schemas/questionSchema";
import useSendEmail from "../../../hooks/useSendEmail";
import Modal from "../../../components/layout/Modal";
import ClipLoader from "react-spinners/ClipLoader";

const ModalQuestion = ({ isOpen, onClose }) => {
  const validationSchema = getQuestionSchema();

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      question: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      const formData = {
        to_name: "Support Team",
        from_name: `${values.firstName}`,
        from_email: values.email,
        message: values.question,
        phoneNumber: values.phoneNumber || "",
      };

      await sendEmail(formData);
      onClose();
    },
  });

  const { sendEmail, isLoading, isSuccess, error, resetStatus } =
    useSendEmail(resetForm);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#1A1A1A",
    boxShadow: 24,
    p: 4,
    borderRadius: "8px",
    color: "#fff",
  };

  useEffect(() => {
    if (!isOpen) {
      resetForm();
    }
  }, [isOpen, resetForm]);

  return (
    <>
      <Modal
        open={isSuccess}
        title="Success"
        message="Your question has been sent successfully!"
        onClose={resetStatus} 
      />

      <Modal
        open={!!error}
        title="Error"
        message={error}
        onClose={resetStatus}
      />
      <Modal2 open={isOpen} onClose={onClose} disableScrollLock>
        <Box sx={style}>
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
            Ask a Question
          </h2>
          <form onSubmit={handleSubmit}>
            <InputField
              type="text"
              label="First Name"
              name="firstName"
              id="firstName"
              value={values.firstName}
              handleInputChange={handleChange}
              handleBlur={handleBlur}
              error={!!(errors.firstName && touched.firstName)}
              helperText={errors.firstName}
            />

            <InputField
              label="Email"
              type="email"
              name="email"
              id="email"
              value={values.email}
              handleInputChange={handleChange}
              handleBlur={handleBlur}
              error={!!(errors.email && touched.email)}
              helperText={errors.email}
            />
            <InputField
              label="Question"
              type="text"
              name="question"
              id="question"
              value={values.question}
              handleInputChange={handleChange}
              handleBlur={handleBlur}
              error={!!(errors.question && touched.question)}
              helperText={errors.question}
              rows={4}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: "20px" }}
              sx={{
                backgroundColor: "#E50914",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#b11a1a",
                },
              }}
            >
              {isLoading ? (
                <ClipLoader
                  color="white"
                  loading="true"
                  size={20}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              ) : (
                "Send"
              )}{" "}
            </Button>
          </form>
        </Box>
      </Modal2>
    </>
  );
};

export default ModalQuestion;
