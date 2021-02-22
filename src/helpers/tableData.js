import React from "react";
import { Checkbox } from "@material-ui/core";

export const createData = (
  id,
  requester,
  reason,
  destination,
  accommodation,
  status,
  action
) => {
  return { id, requester, reason, destination, accommodation, status, action };
};

export const id = ["1A2T3BED"];
export const ids = (id) => (
  <div style={{ display: "flex", flexDirection: "row" }}>
    <Checkbox />
    <span style={{ marginTop: "12px" }}>{id}</span>
  </div>
);

