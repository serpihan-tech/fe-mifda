import React, { useState } from 'react';

const entries = [10, 25, 50, 100];

export default function PemasukanTable(props) {
  const { data } = props;
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
              <th className="px-4 py-2 border">No</th>
              <th className="px-4 py-2 border">Nama PJ</th>
              <th className="px-4 py-2 border">Tanggal</th>
              <th className="px-4 py-2 border">Nominal</th>
              <th className="px-4 py-2 border">Rekening</th>
              <th className="px-4 py-2 border">Petugas</th>
            </tr>
          </thead>
          <tbody>
            {visibleData?.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-all border-b">
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border font-medium">{item.nama_pj}</td>
                <td className="px-4 py-2 border">{item.tanggal}</td>
                <td className="px-4 py-2 border text-right">
                  {item.nominal.toLocaleString('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                  })}
                </td>
                <td className="px-4 py-2 border capitalize">{item.rekening}</td>
                <td className="px-4 py-2 border">{item.petugas}</td>
              </tr>
            ))}
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
