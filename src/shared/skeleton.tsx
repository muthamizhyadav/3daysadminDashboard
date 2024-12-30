import React from "react";
import { Table, Skeleton } from "@mantine/core";

interface SkeletonTableProps {
  rows: number;
  columns: number;
}

const SkeletonTable: React.FC<SkeletonTableProps> = ({ rows, columns }) => {
  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          {Array.from({ length: columns }).map((_, index) => (
            <Table.Th key={index}>
              <Skeleton height={16} width="80%" />
            </Table.Th>
          ))}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <Table.Tr key={rowIndex}>
            {Array.from({ length: columns }).map((_, colIndex) => (
              <Table.Td key={colIndex}>
                <Skeleton height={16} />
              </Table.Td>
            ))}
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};

export default SkeletonTable;
