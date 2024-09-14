import s from "./ContactForm.module.css";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import { useId } from "react";

import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Required"),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Invalid phone number format")
    .required("Required"),
});

const userValues = {
  id: "",
  name: "",
  number: "",
};

const ContactForm = ({ handleAddContact }) => {
  const numberId = useId();
  const nameId = useId();

  function handleSubmit(values, actions) {
    const newContactObj = {
      ...values,
      id: nanoid(),
    };
    handleAddContact(newContactObj);

    actions.resetForm();
  }

  return (
    <div>
      <Formik
        initialValues={userValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={s.form}>
          <div>
            <label htmlFor={nameId} className={s.formLabel}>
              Name
            </label>

            <Field
              type="text"
              placeholder="Enter your name"
              name="name"
              id={nameId}
              className={s.formField}
            />
            <ErrorMessage name="name" component="span" />
          </div>
          <div>
            <label htmlFor={numberId} className={s.formLabel}>
              Number
            </label>
            <Field
              type="tel"
              placeholder="Enter your phone number"
              name="number"
              id={numberId}
              className={s.formField}
            />
            <ErrorMessage name="number" component="span" />
          </div>

          <button type="submit" className={s.button}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
