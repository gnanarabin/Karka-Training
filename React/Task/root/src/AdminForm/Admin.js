import React, { useEffect, useState } from 'react';
import { useTable, useGlobalFilter, useFilters, usePagination } from 'react-table';

const Admin = ({ data, columns, user_data }) => {
  const [user, setUser] = useState(null);
  const [tableSize, setTableSize] = useState(0);

  useEffect(() => {
    if (user_data) {
      const userdata = data.find(
        (prev) =>
          prev.username === user_data.username && prev.pass === user_data.pass
      );
      setUser([userdata]);
    } else {
      setUser(data);
    }
    // Calculate and set the initial table size
    setTableSize(user ? user.length : 0);
  }, [data, user_data]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page, // Access the current page
    prepareRow,
    setGlobalFilter,
    state, // Destructure state here
    gotoPage,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageCount,
  } = useTable(
    {
      columns,
      data: user || [],
      initialState:{pageIndex:0,pageSize:5}
    },
    useFilters,
    useGlobalFilter,
    usePagination
   // Enable pagination
  );

  const { globalFilter, pageIndex, pageSize } = state; // Destructure state here

  // Calculate the table size for the current page
  const currentPageSize = page.length;

  // Update the table size when navigating to a new page
  useEffect(() => {
    setTableSize(currentPageSize);
  }, [currentPageSize]);

  return (
    <div>
      <div>
        <input
          type="text"
          value={globalFilter || ''}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
        />
      </div>
      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th className="text-center" {...column.getHeaderProps()}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <p>Table Size: {tableSize}</p>
      </div>
      <div className="pagination">
        <button className='next' onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
        PreviousPage
        </button>
        
        <button className='prev' onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          NextPage{'>'}
        </button>
        <span>
          Page {pageIndex + 1} of {pageCount}
        </span>
      </div>
    </div>
  );
};

export default Admin;
