"use client";
import { Edit2, Trash } from "iconsax-react";
import Table from "@/components/organisms/Table";
import { useEffect, useState } from "react";
import Text from "@/components/atoms/Text";
import Modal from "@/components/atoms/Modal";
import { getTunggakanJuniTable } from "@/lib/tunggakan.js";

export default function TunggakanJuniPage() {
  const [dataTunggakanJuniTable, setDataTunggakanJuniTable] = useState({
    result: [],
    status: false,
  });

  useEffect(() => {
    getTunggakanJuniTable().then((res) =>
      setDataTunggakanJuniTable({
        result: res,
        status: true,
      })
    );
  }, []);

  const [open, setOpen] = useState(false);

  return (
    <div className="text-black flex-grow">
      <Text className="font-semibold mt-4 mb-2">
        Data Tunggakan Santri/wati
      </Text>

      {dataTunggakanJuniTable.status ? (
        <>
          <Table
            data={dataTunggakanJuniTable.result}
            searchField="nama_santri"
            columns={[
              {
                key: "id",
                label: "No",
              },
              {
                key: "nama",
                label: "Nama",
              },
              {
                key: "jenis_kelamin",
                label: "L/P",
              },
              {
                key: "nomor_telepon",
                label: "No Telp",
              },
              {
                key: "jenjang",
                label: "Jenjang",
              },
              {
                key: "tunggakan_bulan_ini",
                label: "Tunggakan Bulan Ini",
              },
            ]}
            componentButton={[
              {
                text: "Juni 2024/2025",
                variants: "secondary",
              },
            ]}
            hasAction={false}
          />
          {open && <Modal onClose={() => setOpen(false)} />}
        </>
      ) : (
        <div className="p-4 bg-gray-100 rounded">
          <Text>Loading...</Text>
        </div>
      )}
    </div>
  );
}
