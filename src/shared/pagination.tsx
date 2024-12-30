import { Pagination } from "@mantine/core";
import React from "react";

interface PaginationProps {
  currentPage: number;
  total: number;
  count: number;
  change: (page: number) => void;
}

const PaginationComponent: React.FC<PaginationProps> = ({
  count,
  currentPage,
  total,
  change,
}) => {
  return (
    <Pagination
      value={currentPage}
      onChange={change}
      total={total}
    />
  );
};
export default PaginationComponent;
