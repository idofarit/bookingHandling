import React from "react";
import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

const CarSlotTableOperation = () => {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "No-discounts", label: "No Discounts" },
          { value: "Discounts", label: "Discounts" },
        ]}
      />

      <SortBy
        options={[
          { value: "name-asc", label: "Sort By Name(A-Z)" },
          { value: "name-desc", label: "Sort By Name(Z-A)" },
          { value: "regularPrice-asc", label: "Sort By Price(lower)" },
          { value: "regularPrice-desc", label: "Sort By Price(higher)" },
          { value: "maxCapacity-asc", label: "Sort By Capacity(lower)" },
          { value: "maxCapacity-desc", label: "Sort By Capacity(higher)" },
        ]}
      />
    </TableOperations>
  );
};

export default CarSlotTableOperation;
