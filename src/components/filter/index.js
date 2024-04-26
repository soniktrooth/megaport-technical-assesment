import './filter.css';

export const Filter = ({ filterText, handleFilter }) => {
  return (
    <div className="filter">
      <label>Filter deserts</label>
      <input
        type="text"
        placeholder="Type to filter"
        value={filterText}
        onChange={handleFilter}
      />
    </div>
  );
};
