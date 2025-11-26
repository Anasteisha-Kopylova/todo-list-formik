import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import PropTypes from "prop-types";

const TodoFormButtons = ({ isValid, onReset, onDeleteAll }) => {
  const actionButtons = (
    <>
      <Button
        type="submit"
        variant="primary"
        className="rounded"
        disabled={!isValid}
      >
        Create Task!
      </Button>
      <Button
        type="reset"
        variant="warning"
        className="rounded"
        onClick={onReset}
      >
        Clear form
      </Button>
      <Button
        type="button"
        variant="danger"
        className="remove-all rounded"
        onClick={onDeleteAll}
      >
        Delete all
      </Button>
    </>
  );

  return (
    <>
      <ButtonGroup
        className="btn-group-vertical w-100 gap-2 d-flex d-xl-none"
        aria-label="Task form actions vertical"
      >
        {actionButtons}
      </ButtonGroup>

      <ButtonGroup
        className="btn-group w-100 gap-2 d-none d-xl-flex"
        aria-label="Task form actions horizontal"
      >
        {actionButtons}
      </ButtonGroup>
    </>
  );
};

TodoFormButtons.propTypes = {
  isValid: PropTypes.bool.isRequired,
  onReset: PropTypes.func.isRequired,
  onDeleteAll: PropTypes.func.isRequired,
};

export default TodoFormButtons;
