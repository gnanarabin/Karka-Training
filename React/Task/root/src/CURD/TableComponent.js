import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTable, usePagination } from 'react-table';
import { columns } from './columns';

const TableComponent = () => {
    const location = useLocation();
    const data = location.state;
    const [detail, setDetail] = useState([]);
    const navigate=useNavigate()

    const userData = data || [];

    useEffect(() => {
        setDetail(userData);
    }, []);

    function handleDelete(userId){
        fetch(`https://reqres.in/api/users/${userId}`, {
        method: 'DELETE',
    })
    .then(()=>setDetail((prev)=>prev.filter((user)=>user.id!==userId)))

    }

    function handleEdit(userId){
        navigate('/' ,{state:(detail.find((prev)=>prev.id == userId))})
    }

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page, // Instead of 'rows', we use 'page' for paginated data
        prepareRow,
        canPreviousPage,
        canNextPage,
        nextPage,
        previousPage,
        pageOptions,
        state: { pageIndex, pageSize }, // Add state to access current page and page size
    } = useTable(
        {
            columns,
            data: detail,
            initialState: { pageIndex: 0, pageSize: 5 }, // Set the initial page index and page size
        },
        usePagination
    );

    return (
        <div className='table-div'>
            <h1 className='text-center pt-5 text-white fw-bold fs-1'>Table View</h1>
            <hr></hr>
            <br></br>
            <table {...getTableProps()} className="table">
                <thead >
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th className="text-center" {...column.getHeaderProps()}>
                                    {column.render('Header')}

                                </th>

                            ))}
                            <th className='text-center'>Edit</th>
                            <th className='text-center'>Delete</th>
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

                                <td>
                                    <button onClick={()=>handleEdit(row.original.id)}>Edit</button>
                                </td>
                                <td>
                                    <button onClick={()=>handleDelete(row.original.id)} >Delete </button>
                                </td>

                            </tr>

                        );
                    })}
                </tbody>
            </table>
            <div className="pagination">
                <button className='prev' onClick={() => previousPage()} disabled={!canPreviousPage}>
                    Previous
                </button>
                <button className='next' onClick={() => nextPage()} disabled={!canNextPage}>
                    Next
                </button>
                <span>

                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>
                </span>

            </div>
        </div>
    );
};

export default TableComponent;
