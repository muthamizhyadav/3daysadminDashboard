import React, { useState } from "react";
import { Table, Checkbox } from "@mantine/core";
import Badge from "./badge";

interface SharedTableProps {
  data: any;
  columns: {
    key: string;
    label: string;
    widget: boolean;
    widgetType?: string;
  }[];
  onRowSelect?: (selectedIds: number[]) => void;
}

const SharedTable: React.FC<SharedTableProps> = ({
  data,
  columns,
  onRowSelect,
}) => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const handleRowSelect = (id: number, isSelected: boolean) => {
    const updatedSelection = isSelected
      ? [...selectedRows, id]
      : selectedRows.filter((selectedId) => selectedId !== id);

    setSelectedRows(updatedSelection);
    onRowSelect?.(updatedSelection);
  };

  const allSelected = selectedRows.length === data.length;
  const someSelected =
    selectedRows.length > 0 && selectedRows.length < data.length;

  const handleSelectAll = (isSelected: boolean) => {
    const newSelection = isSelected ? data.map((row: any) => row.id) : [];
    setSelectedRows(newSelection);
    onRowSelect?.(newSelection);
  };

  const rows = data.map((row: any) => (
    <Table.Tr
      className="h-16"
      key={row.id}
      bg={
        selectedRows.includes(row.id)
          ? "var(--mantine-color-blue-light)"
          : undefined
      }
    >
      <Table.Td>
        <Checkbox
          aria-label="Select row"
          checked={selectedRows.includes(row.id)}
          onChange={(event) =>
            handleRowSelect(row.id, event.currentTarget.checked)
          }
        />
      </Table.Td>
      {columns.map(
        (column) => (
          (
            <Table.Td key={column.key}>
              {column?.widget && column?.widgetType == "BADGE" ? (
                <Badge
                  backgroundColor={
                    column.key == "active" ? "#dcfce7" : "#fecaca"
                  }
                  textColor={column.key == "active" ? "#047857" : "#dc2626"}
                  width={180}
                  height={30}
                  border={false}
                  borderRadius="5px"
                  text={column.key}
                />
              ) : (
                row[column.key]
              )}
            </Table.Td>
          )
        )
      )}
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead className="h-10 shadow-md mb-4">
        <Table.Tr>
          <Table.Th>
            <Checkbox
              aria-label="Select all rows"
              checked={allSelected}
              indeterminate={someSelected}
              onChange={(event) => handleSelectAll(event.currentTarget.checked)}
            />
          </Table.Th>
          {columns.map((column) => (
            <Table.Th key={column.key}>{column.label}</Table.Th>
          ))}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
};

export default SharedTable;
