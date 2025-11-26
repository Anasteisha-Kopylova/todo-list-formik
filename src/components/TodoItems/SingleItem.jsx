import React from "react";
import { Card, CardHeader, Button, ButtonGroup, Form } from "react-bootstrap";
import PropTypes from "prop-types";
const statusList = [
  { key: "in_progress", label: "In Progress" },
  { key: "completed", label: "Completed" },
];

const SingleItem = ({
  id,
  title,
  description,
  state,
  onDelete,
  onToggle,
  onEdit,
}) => (
  <Card className="mb-2 h-100">
    <CardHeader>{title}</CardHeader>
    <Card.Body>
      <Card.Text>{description}</Card.Text>
      <Form.Group
        className="d-flex flex-column gap-2 mt-3"
        controlId={`status-group-${id}`}
      >
        {statusList.map((status) => (
          <Form.Check
            key={status.key}
            type="radio"
            id={`status-radio-${id}-${status.key}`}
            name={`status-${id}`}
            label={status.label}
            value={status.key}
            checked={state === status.key}
            onChange={() => onToggle(status.key)}
            className="mb-2"
          />
        ))}
      </Form.Group>
    </Card.Body>
    <Card.Footer className="bg-light text-end">
      <ButtonGroup>
        <Button variant="primary" onClick={onEdit}>
          Edit
        </Button>
        <Button variant="danger" onClick={onDelete}>
          Delete
        </Button>
      </ButtonGroup>
    </Card.Footer>
  </Card>
);

SingleItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  state: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};


export default SingleItem;
