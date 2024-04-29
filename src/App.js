import React, { useState } from 'react';
import './App.css';
import { AddForm, Filter, Table } from './components';
import { deserts } from './data/deserts';

const App = () => {
  const [data, setData] = useState(deserts);
  const [sortBy, setSortBy] = useState('id');
  const [sortOrder, setSortOrder] = useState('asc');
  const [filterText, setFilterText] = useState('');
  const [formData, setFormData] = useState({
    id: '',
    type: '',
    name: '',
    topping: '',
  });

  const handleSort = (key) => {
    if (sortBy === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(key);
      setSortOrder('asc');
    }
  };

  const handleFilter = (event) => {
    setFilterText(event.target.value);
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    // Add form was submittted.
    // Set the new data and reset the form.
    event.preventDefault();
    setData([...data, formData]);
    setFormData({
      id: '',
      type: '',
      name: '',
      topping: '',
    });
  };

  // Work out what data matches the filter input, making sure to match case insensitive.
  const filteredData = data.filter(
    (item) =>
      item.id.toString().toLowerCase().includes(filterText) ||
      item.type.toLowerCase().includes(filterText) ||
      item.name.toLowerCase().includes(filterText) ||
      item.topping.toLowerCase().includes(filterText)
  );

  // Manually sorting is fun.
  const sortedData = sortBy
    ? filteredData.sort((a, b) => {
        if (sortOrder === 'asc') {
          return a[sortBy] > b[sortBy] ? 1 : -1;
        } else {
          return a[sortBy] < b[sortBy] ? 1 : -1;
        }
      })
    : filteredData;

  return (
    <div className="app">
      <div className="app-inner">
        <h1>The Desert Table</h1>
        <AddForm
          formData={formData}
          handleFormChange={handleFormChange}
          handleSubmit={handleSubmit}
        />
        <Filter filterText={filterText} handleFilter={handleFilter} />
        <Table data={sortedData} handleSort={handleSort} />
      </div>
    </div>
  );
};

export default App;
