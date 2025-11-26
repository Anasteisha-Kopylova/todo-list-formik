import React from "react";
import { useFormik } from "formik";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";
import validationSchema from "./validationSchema.js";
import Input from "../Form/Input.jsx";
import TodoFormButtons from "./TodoFormButtons.jsx";

const TodoForm = ({ onSubmit, onDeleteAll }) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      state: "",
    },
    onSubmit: (values) => onSubmit(values),
    validationSchema,
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Input
        className="mb-3"
        label="Title"
        type="text"
        placeholder="Title"
        name="title"
        value={formik.values.title}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        isTouched={formik.touched.title}
        error={formik.errors.title}
      />

      <Form.Group className="mb-3" controlId="form_state">
        <Form.Label column="sm">State</Form.Label>
        <Form.Select
          value={formik.values.state}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          name="state"
        >
          <option>Select status</option>
          <option value="in_progress">In Progress</option>
          <option value="completed">Completed</option>
        </Form.Select>
        {formik.touched.state && formik.errors.state && (
          <div className="text-danger">{formik.errors.state}</div>
        )}
      </Form.Group>

      <Input
        className="mb-3"
        type="text"
        placeholder="Description"
        name="description"
        as="textarea"
        cols="30"
        rows="10"
        value={formik.values.description}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        isTouched={formik.touched.description}
        error={formik.errors.description}
      />

      <TodoFormButtons
        isValid={formik.isValid}
        onReset={() => formik.resetForm()}
        onDeleteAll={onDeleteAll}
      />
    </Form>
  );
};

TodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onDeleteAll: PropTypes.func.isRequired,
};

export default TodoForm;
