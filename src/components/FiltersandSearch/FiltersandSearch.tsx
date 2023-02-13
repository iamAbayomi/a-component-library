import { Box, Input, Select } from "@chakra-ui/react";
import React, { CSSProperties, FC, HTMLAttributes } from "react";
import "./FiltersandSearch.css";

interface props {
  hideDropdown?: boolean;
  dropdownOptions: any[];
  dropdownItemValue: string;
  dropdownItemName: string;
  dropdownStyle?: CSSProperties;
  dropdownAttributes?: HTMLAttributes<HTMLSelectElement>;
  onDropdownSelected?: () => void;
  searchFieldAttributes?: HTMLAttributes<HTMLInputElement>;
  searchFieldStyle?: CSSProperties;
}

const FiltersandSearch: FC<props> = ({
  dropdownOptions,
  dropdownItemName,
  searchFieldAttributes,
  searchFieldStyle,
  ...props
}) => {
  return (
    <Box display={"flex"} maxW={"max-content"} alignItems={"center"}>
      <Select
        display={props?.hideDropdown ? "none" : ""}
        style={props.dropdownStyle}
        onChange={props?.onDropdownSelected}
        padding={"10px"}
        {...props.dropdownAttributes}
      >
        {dropdownOptions?.map((item) => (
          <option value={item[props.dropdownItemValue]}>
            {item[dropdownItemName]}
          </option>
        ))}
      </Select>
      <Input
        type={"name"}
        height={"34px"}
        maxW={"200px"}
        border={"1px solid grey"}
        borderRadius={"5px"}
        style={searchFieldStyle}
        {...searchFieldAttributes}
      />
    </Box>
  );
};

export default FiltersandSearch;
