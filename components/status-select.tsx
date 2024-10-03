"use client";

import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function StatusSelect() {
  const [status, setStatus] = useState<string>("x");

  return (
    <Select value={status} onValueChange={(e) => setStatus(e)}>
      <SelectTrigger>
        <SelectValue placeholder="Status" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="in-progress">In Progress</SelectItem>
        <SelectItem value="completed">Completed</SelectItem>
        <SelectItem value="not-started">Not Started</SelectItem>
      </SelectContent>
    </Select>
  );
}

export default StatusSelect;
