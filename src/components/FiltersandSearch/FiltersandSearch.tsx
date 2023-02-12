import { Box, Input, Select } from "@chakra-ui/react";
import React, { CSSProperties, FC, HTMLAttributes } from "react";

interface props {
  hideDropdown?: boolean;
  dropdownOptions: string[];
  dropdownItemValue: string;
  dropdownItemName: string;
  dropdownStyle?: CSSProperties;
  dropdownAttributes?: HTMLAttributes<HTMLSelectElement>;
  onDropdownSelected?: () => void;
}

const FiltersandSearch: FC<props> = ({
  dropdownOptions,
  dropdownItemName,
  ...props
}) => {
  return (
    <Box display={"flex"} maxW={"max-content"}>
      <Select
        display={props?.hideDropdown ? "none" : ""}
        style={props.dropdownStyle}
        onChange={props?.onDropdownSelected}
        {...props.dropdownAttributes}
      >
        {dropdownOptions?.map((item) => (
          <option value={item[props.dropdownItemValue]}>
            {item[dropdownItemName]}
          </option>
        ))}
      </Select>
      <Input type={"name"} />
    </Box>
  );
};

export default FiltersandSearch;
