import './table.css';

export const Table = ({ data, handleSort }) => {
  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => handleSort('id')}>ID</th>
          <th onClick={() => handleSort('type')}>Type</th>
          <th onClick={() => handleSort('name')}>Name</th>
          <th onClick={() => handleSort('topping')}>Topping</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.type}</td>
            <td>{item.name}</td>
            <td>{item.topping}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
