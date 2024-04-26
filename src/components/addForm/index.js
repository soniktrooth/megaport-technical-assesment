import './addForm.css';

export const AddForm = ({ formData, handleFormChange, handleSubmit }) => {
  const { id, type, name, topping } = formData;

  // Only enable the button if there's data to add.
  const canAdd = id && type && name && topping;

  return (
    <div className="add-form">
      <h4>Add new desert</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ID"
          name="id"
          value={id}
          onChange={handleFormChange}
        />
        <input
          type="text"
          placeholder="Type"
          name="type"
          value={type}
          onChange={handleFormChange}
        />
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleFormChange}
        />
        <input
          type="text"
          placeholder="Topping"
          name="topping"
          value={topping}
          onChange={handleFormChange}
        />
        <button type="submit" disabled={!canAdd}>
          Add
        </button>
      </form>
    </div>
  );
};
