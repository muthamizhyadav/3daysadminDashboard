import { Button, Input, Select } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import React, { useEffect, useState } from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";
import SharedTable from "../shared/table";
import { useGetEmployerListMutation } from "../services/api";
import SkeletonTable from "../shared/skeleton";
import { widgetType } from "../models/model";
import PaginationComponent from "../shared/pagination";

const columns = [
  { key: "companyName", label: "Company Name", widget: false },
  { key: "email", label: "E-mail", widget: false },
  { key: "mobileNumber", label: "Contact", widget: false },
  { key: "city", label: "City", widget: false },
  {
    key: "active",
    label: "Status",
    widget: true,
    widgetType: widgetType.BADGE,
  },
];

const ManageEmployer: React.FC = () => {
  const [fromDate, setfromDate] = useState<Date | any>(null);
  const [toDate, setToDate] = useState<Date | any>(null);
  const [fetchEmployers, response] = useGetEmployerListMutation();
  const [page, Setpage] = useState(1);
  const [searchKey, SetsearchKey] = useState("");
  const [gender, setGender] = useState("all");
  const [status, setStatus] = useState<any>(null);

  const fetchRecruiter = async () => {
    fetchEmployers({
      fromDate,
      gender,
      pagination: page,
      searchKey,
      status,
      toDate,
    });
  };

  useEffect(() => {
    fetchRecruiter();
  }, [fromDate, toDate, page, searchKey.length >= 3, gender, status]);

  const handleRowSelection = (selectedIds: number[]) => {
    console.log("Selected Rows:", selectedIds);
  };

  const statusHandling = async (key: string) => {
    if (key == "Active") {
      setStatus(true);
    } else if (key == "In-Active") {
      setStatus(false);
    } else {
      setStatus(null);
    }
  };

  const clearFilter = () => {
    SetsearchKey("");
    setStatus(null);
    setfromDate(null);
    setToDate(null);
  };

  return (
    <div className="w-full">
      <h1 className="text-[20px] mb-10 font-semibold text-purple-600">
        {"Dashboard > Manage Recruiters"}
      </h1>
      <div className="flex gap-4 mb-5">
        <Input
          className="min-w-[30%]"
          placeholder="Search recruiter"
          leftSection={<LuSearch size={16} />}
          onChange={(e) => SetsearchKey(e.target.value)}
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
          onChange={(e: any) => statusHandling(e)}
        />
        <Button color="purple" onClick={clearFilter}>
          Clear Filter
        </Button>
        <Button color="purple" variant="filled">
          <FaCloudDownloadAlt size={30} />
        </Button>
      </div>
      {response?.isLoading ? (
        <SkeletonTable columns={5} rows={10} />
      ) : (
        <>
          <SharedTable
            data={response?.isSuccess ? response.data?.results : []}
            columns={columns}
            onRowSelect={handleRowSelection}
          />
          <div className="float-end mt-5 mr-5">
            <PaginationComponent
              change={Setpage}
              count={response.data?.totalDocuments || 0}
              total={response.data?.totalPages || 0}
              currentPage={response.data?.currentPage || 1}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ManageEmployer;
