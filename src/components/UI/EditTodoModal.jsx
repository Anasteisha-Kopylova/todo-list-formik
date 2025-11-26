import Modal from "react-bootstrap/Modal";
import TodoEditForm from "../TodoItems/TodoEditForm";

const EditTodoModal = ({ item, onCancel, onSave }) => {
  if (!item) return null;

  return (
    <Modal show={!!item} onHide={onCancel} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TodoEditForm
          id={item.id}
          title={item.title}
          description={item.description}
          state={item.state}
          onSave={onSave}
          onCancel={onCancel}
        />
      </Modal.Body>
    </Modal>
  );
};

import PropTypes from "prop-types";

EditTodoModal.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  onCancel: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default EditTodoModal;
