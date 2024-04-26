import { useEffect, useState } from 'react';
import { Pagination } from './pagination';
import { Table } from './table';

const itemsPerPage = 10;

export const PaginatedTable = ({ data, handleSort }) => {
  const [pagedData, setPagedData] = useState([]);
  const totalItems = (data || []).length;

  const onPageChange = (pageNumber) => {
    const startingItem = itemsPerPage * pageNumber;
    const items = data.slice(startingItem, startingItem + itemsPerPage);
    setPagedData(items);
  };

  useEffect(() => {
    onPageChange(1);
  }, []);

  return (
    <div>
      <Table data={pagedData} handleSort={handleSort} />
      <Pagination
        totalItems={totalItems}
        onPageChange={onPageChange}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );
};
