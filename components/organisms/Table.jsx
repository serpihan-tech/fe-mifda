import React, { useRef, useState } from 'react';
import { ArrowDown3, ArrowUp3, Sort } from 'iconsax-react';

const entries = [10, 25, 50, 100];

function TableHeader({ children }) {
  const [sortOrder, setSortOrder] = useState('');

  const sortCommand = () => {
    setSortOrder(
      sortOrder === '' ? 'asc' : sortOrder === 'asc' ? 'desc' : ''
    );
  }
return (
  <th className='text-center'>
    <div className='w-full flex items-center justify-between px-2 py-1'>
      {children}
      <button className='ml-2' onClick={() => { sortCommand() }}>
        {sortOrder === '' ? <Sort /> : sortOrder === 'asc' ? <ArrowUp3 /> : <ArrowDown3 />}
      </button>
    </div>
  </th>
)
}


export default function PemasukanTable(props) {
  const {
    data, // Data yang akan ditampilkan hasil result dari JSON
    columns, // Kolom-kolom yang akan ditampilkan {key, label}
    hasAction, // Apakah ada Column action
    componentAction, // Fungsi yang akan dijalankan ketika tombol action di klik {function, icon, color}
  } = props;
  const [search, setSearch] = useState('');
  const [showEntries, setShowEntries] = useState(10);

  const filteredData = data?.filter((item) =>
    item.nama_pj.toLowerCase().includes(search.toLowerCase())
  );
  const visibleData = filteredData?.slice(0, showEntries);

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Control panel */}
      <div className="bg-white p-4 rounded-md shadow flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center gap-2 text-sm">
          <span>Show</span>
          <select
            className="border rounded px-2 py-1"
            value={showEntries}
            onChange={(e) => setShowEntries(parseInt(e.target.value))}
          >
            {entries?.map((entry) => (
              <option key={entry} value={entry}>
                {entry}
              </option>
            ))}
          </select>
          <span>entries</span>
        </div>

        <input
          type="text"
          placeholder="Search nama_pj..."
          className="border rounded px-3 py-1 text-sm w-60"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="overflow-auto rounded-md shadow">
        <table className="w-full bg-white text-sm text-left border">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              {
                columns?.map((column) => (
                  <TableHeader key={column.key} >
                    {column.label}
                  </TableHeader>
                ))
              }
              {hasAction && (
                <th className="px-4 py-2 border">Action</th>
              )}
            </tr>
          </thead>
          <tbody>
            {visibleData?.map((item, index) => {
              const dataRow = item
              return <tr key={item.id} className="hover:bg-gray-50 transition-all border-b">
                {
                  columns?.map((column) => (
                    <>
                      <td key={column.key} className="px-4 py-2 border">
                        {item[String(column.key)]}
                      </td>
                    </>
                  ))
                }
                {
                  hasAction && (
                    <td className="px-4 py-2 border flex flex-row gap-2 justify-center">
                      {componentAction.map((item) => {
                        const { func, icon, style } = item
                        return (
                          <button onClick={() => func(dataRow)} className={style ? `${style}` : 'px-4 py-4 bg-black'}>
                            {icon}
                          </button>
                        )
                      })}
                    </td>
                  )
                }
              </tr>
            }
            )}
            {visibleData?.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center py-4 text-gray-500 italic">
                  Tidak ada data ditemukan.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-sm text-gray-600 px-1">
        <div>
          Showing {visibleData?.length} of {filteredData?.length} entries
        </div>
      </div>
    </div>
  );
}
