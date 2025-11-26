import React from "react";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import { Form, Button } from "react-bootstrap";
import validationSchema from "../TodoForm/validationSchema";

const statusList = [
  { key: "in_progress", label: "In Progress" },
  { key: "completed", label: "Completed" },
];

function TodoEditForm({ id, title, description, state, onSave, onCancel }) {
  const formik = useFormik({
    initialValues: {
      title,
      description,
      state,
    },
    validationSchema,
    onSubmit: (values) => onSave({ id, ...values }),
  });

  return (
    <Form onSubmit={formik.handleSubmit} className="p-3">
      <Form.Group className="mb-3" controlId={`editTitle_${id}`}>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={formik.touched.title && !!formik.errors.title}
          required
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.title}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Status</Form.Label>
        {statusList.map((status) => (
          <Form.Check
            key={status.key}
            type="radio"
            id={`editState_${id}_${status.key}`}
            name="state"
            label={status.label}
            value={status.key}
            checked={formik.values.state === status.key}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mb-2"
          />
        ))}
        {formik.touched.state && formik.errors.state && (
          <div className="text-danger">{formik.errors.state}</div>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId={`editDescription_${id}`}>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={formik.touched.description && !!formik.errors.description}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.description}
        </Form.Control.Feedback>
      </Form.Group>

      <div className="d-flex gap-2 justify-content-end">
        <Button variant="secondary" onClick={onCancel} type="button">
          Cancel
        </Button>
        <Button variant="primary" type="submit" disabled={!formik.isValid}>
          Save
        </Button>
      </div>
    </Form>
  );
}

TodoEditForm.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default TodoEditForm;
