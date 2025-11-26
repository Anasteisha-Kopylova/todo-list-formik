import React from "react";
import PropTypes from "prop-types";
import { Alert, Container, Row, Col } from "react-bootstrap";
import SingleItem from "./SingleItem";

const TodoItems = ({
  className = "",
  items,
  onDeleteItem,
  onToggleItem,
  onEditItem,
}) => {
  if (!items || items.length === 0) {
    return (
      <Alert variant="info" className="text-center mt-4">
        Nothing to show here.
      </Alert>
    );
  }

  return (
    <Container className={`mt-3 ${className}`}>
      <Row className="g-3">
        {items.map((item) => (
          <Col xs={12} md={6} lg={4} key={item.id}>
            <SingleItem
              {...item}
              onDelete={() => onDeleteItem(item.id)}
              onToggle={(newState) => onToggleItem(item.id, newState)}
              onEdit={() => onEditItem(item.id)}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

TodoItems.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      state: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  onToggleItem: PropTypes.func.isRequired,
  onEditItem: PropTypes.func.isRequired,
};

export default TodoItems;
