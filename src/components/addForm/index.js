import './addForm.css';

export const AddForm = ({ formData, handleFormChange, handleSubmit }) => {
  return (
    <div className="add-form">
      <h4>Add new desert</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ID"
          name="id"
          value={formData.id}
          onChange={handleFormChange}
        />
        <input
          type="text"
          placeholder="Type"
          name="type"
          value={formData.type}
          onChange={handleFormChange}
        />
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleFormChange}
        />
        <input
          type="text"
          placeholder="Topping"
          name="topping"
          value={formData.topping}
          onChange={handleFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
