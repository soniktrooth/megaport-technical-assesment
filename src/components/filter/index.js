import './filter.css';

export const Filter = ({ filterText, handleFilter }) => {
  return (
    <div className="filter">
      <label>Filter</label>
      <input
        type="text"
        placeholder="Filter"
        value={filterText}
        onChange={handleFilter}
      />
    </div>
  );
};
