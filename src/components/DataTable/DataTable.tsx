import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr
} from "@chakra-ui/react";
import React, { CSSProperties, FC } from "react";

interface props {
  tableContainerStyle?: CSSProperties;
  tableStyle?: CSSProperties;
  tableHeading: string[] | number[] | any[];
  tableHeadingStyle?: CSSProperties;
  tableData: any[][];
  tableDataStyle?: CSSProperties;
}

const DataTable: FC<props> = ({
  tableContainerStyle,
  tableStyle,
  tableHeading,
  tableHeadingStyle,
  tableData,
  tableDataStyle
}) => {
  return (
    <TableContainer style={tableContainerStyle}>
      <Table variant={"simple"} style={tableStyle}>
        <Thead>
          <Tr p={"10px"}>
            {tableHeading?.map((item) => (
              <Th style={tableHeadingStyle} p={"5px"} textAlign={"center"}>
                {item}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {tableData?.map((data) => (
            <Tr>
              {data?.map((item) => (
                <Td style={tableDataStyle} p={"5px"} textAlign={"center"}>
                  {item}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
