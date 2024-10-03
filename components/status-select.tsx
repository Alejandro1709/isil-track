"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSelectStore } from "@/stores/selectStore";

function StatusSelect() {
  const status = useSelectStore((state) => state.status);
  const setStatus = useSelectStore((state) => state.setStatus);

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
