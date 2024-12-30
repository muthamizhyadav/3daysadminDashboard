import React, { useState } from "react";
import SharedTable from "../shared/table";
import { Button, Input } from "@mantine/core";
import { LuSearch } from "react-icons/lu";
import { Select } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { FaCloudDownloadAlt } from "react-icons/fa";

const elements = [
  { id: 1, position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
  { id: 2, position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
  { id: 3, position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
  { id: 4, position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { id: 5, position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
];
const columns = [
  { key: "position", label: "Candidate Name", widget: false },
  { key: "name", label: "Contact", widget: false },
  { key: "symbol", label: "E-mail", widget: false },
  { key: "mass", label: "Status", widget: false },
  { key: "mass", label: "Action", widget: false },
];
const ManageCandidate: React.FC = () => {
  const handleRowSelection = (selectedIds: number[]) => {
    console.log("Selected Rows:", selectedIds);
  };
  const [fromDate, setfromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);

  return (
    <div className="w-full">
      <h1 className="text-[20px] mb-10 font-semibold text-purple-600">
        {"Dashboard > Manage Candidate"}
      </h1>
      <div className="flex gap-4 mb-5">
        <Input
          className="min-w-[30%]"
          placeholder="Search candidate"
          leftSection={<LuSearch size={16} />}
        />
        <Select
          placeholder="Gender"
          data={["Male", "Fe-male"]}
          defaultValue=""
          clearable
        />
        <DatePickerInput
          placeholder="From date"
          value={fromDate}
          onChange={setfromDate}
          className="w-[200px]"
        />
        <DatePickerInput
          placeholder="To date"
          value={toDate}
          onChange={setToDate}
          className="w-[200px]"
        />
        <Select
          placeholder="Status"
          data={["Active", "In-Active"]}
          defaultValue=""
          clearable
        />
        <Button color="purple" variant="filled">
          <FaCloudDownloadAlt size={30} />
        </Button>
      </div>
      <SharedTable
        data={elements}
        columns={columns}
        onRowSelect={handleRowSelection}
      />
    </div>
  );
};

export default ManageCandidate;
