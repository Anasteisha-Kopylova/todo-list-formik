import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Heading from "./components/UI/Heading";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoItems from "./components/TodoItems/TodoItems";
import EditTodoModal from "./components/UI/EditTodoModal";

const TODO_ITEMS_KEY = 'todo_items';

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem(TODO_ITEMS_KEY)) || []
  );
  const [editId, setEditId] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    const itemsToJson = JSON.stringify(items);
    const lsData = localStorage.getItem(TODO_ITEMS_KEY);
    if (itemsToJson === lsData) return;
    localStorage.setItem(TODO_ITEMS_KEY, itemsToJson);
  }, [items]);

  const submitHandler = (values) => {
    const currentId = items.length ? items[0].id + 1 : 1;
    const itemToAdd = { ...values, id: currentId };
    setItems([itemToAdd, ...items]);
  };

  const handleDeleteTodo = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleDeleteAll = () => {
    setItems([]);
  };

  const toggleTodoState = (id, newState) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, state: newState }
          : item
      )
    );
  };

  const onEditItem = (id) => {
    setEditId(id);
    setShowEditModal(true);
  };

  const handleEditSave = (updatedItem) => {
    setItems(items.map(item => item.id === updatedItem.id ? { ...item, ...updatedItem } : item));
    setEditId(null);
    setShowEditModal(false);
  };

  const handleEditCancel = () => {
    setEditId(null);
    setShowEditModal(false);
  };

  return (
    <main>
      <Heading
        type="h1"
        title="TODO LIST"
        className="text-center mt-5 mb-5"
      />
      <Container>
        <Row>
          <Col sm={4}>
            <TodoForm onSubmit={submitHandler} onDeleteAll={handleDeleteAll} />
          </Col>

          <Col sm={8}>
            <TodoItems
              items={items}
              onDeleteItem={handleDeleteTodo}
              onToggleItem={toggleTodoState}
              onEditItem={onEditItem}
              className="g-4"
            />
            <EditTodoModal
              item={editId !== null ? items.find(i => i.id === editId) : null}
              onSave={handleEditSave}
              onCancel={handleEditCancel}
            />
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default App;
