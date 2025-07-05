"use client"
import React, { useState } from 'react';
import { ArrowDown3, ArrowUp3, Sort } from 'iconsax-react';
import Button from '../atoms/Button';
import Text from '../atoms/Text';
import { toast } from 'react-toastify';

const entries = [10, 25, 50, 100];

function TableHeader({ children }) {
  const [sortOrder, setSortOrder] = useState('');

  const sortCommand = () => {
    setSortOrder(
      sortOrder === '' ? 'asc' : sortOrder === 'asc' ? 'desc' : ''
    );
  }
  return (
    <th className='text-center px-4 py-2'>
      <div className='w-full flex items-center justify-between px-2 py-1'>
        <Text>{children}</Text>
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
    componentButton, // Buttons di bagian kanan atas tabel
  } = props;
  const [search, setSearch] = useState('');
  const [showEntries, setShowEntries] = useState(10);

  // const filteredData = data?.filter((item) =>
  //   item.nama_pj.toLowerCase().includes(search.toLowerCase())
  // );
  const visibleData = data

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Control panel */}
      <div className="bg-white p-4 rounded-md flex flex-wrap justify-between items-center gap-4">
        <div className='flex gap-6'>
          <div className="flex items-center gap-2 text-sm">
            <span><Text>show</Text></span>
            <select
              className="border rounded px-2 py-1"
              value={showEntries}
              onChange={(e) => setShowEntries(parseInt(e.target.value))}
            >
              {entries?.map((entry) => (
                <option key={entry} value={entry}>
                  <Text>
                    {entry}
                  </Text>
                </option>
              ))}
            </select>
            <span>
              <Text>
                entries
              </Text>
            </span>
          </div>

          <input
            type="text"
            placeholder="Search nama_pj..."
            className="border rounded px-3 py-1 text-sm w-60"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className='flex gap-4'>
          {/* <Button hasNotify={true} notifyHandler={() => { toast.success("Berhasil Menambahkan Data") }}>Tambah Data</Button>
          <Button variants="inline-orange">Export Data</Button> */}
          {componentButton?.map((button, index) => {
            const { func, text, variants, hasNotify, notifyHandler } = button
            return (
              <Button 
                key={index}
                onClick={func}
                variants={variants}
                hasNotify={hasNotify}
                notifyHandler={notifyHandler}
              >
                {text}
              </Button>
            )
          })}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-auto rounded-md">
        <table className="w-full bg-white text-sm text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              {
                columns?.map((column) => (
                  <TableHeader key={column.key} >
                    <Text>

                      {column.label}
                    </Text>
                  </TableHeader>
                ))
              }
              {hasAction && (
                <th className="px-4 py-2 ">
                  <Text>
                    Action
                  </Text>
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {visibleData?.map((item, index) => {
              const dataRow = item
              return <tr key={item.id} className="hover:bg-gray-50 transition-all odd:bg-[#f9fbff] even:bg-[#F7F6FE]">
                {
                  columns?.map((column) => (
                    <>
                      <td key={column.key} className="px-4 py-2">
                        <Text>

                          {item[String(column.key)]}
                        </Text>
                      </td>
                    </>
                  ))
                }
                {
                  hasAction && (
                    <td className="px-4 py-2 flex flex-row gap-2 justify-center">
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
                  <Text>
                    Tidak ada data ditemukan.
                  </Text>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-sm text-gray-600 px-1">
        <div>
          <Text>
            {/* Showing {visibleData?.length} of {filteredData?.length} entries */}
          </Text>
        </div>
      </div>
    </div>
  );
}
