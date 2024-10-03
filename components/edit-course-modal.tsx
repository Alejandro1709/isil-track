"use client";

import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import StatusSelect from "./status-select";
import { useSelectStore } from "@/stores/selectStore";

function EditCourseModal({
  currentStatus,
  slug,
}: {
  currentStatus: string;
  slug: string;
}) {
  const status = useSelectStore((state) => state.status);

  const handleChangeStatus = async () => {
    const dta = { status, slug };

    await fetch("/api/courses", {
      method: "PATCH",
      body: JSON.stringify(dta),
    });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Edit Course Status</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This will change your course staus from {currentStatus} to x
          </AlertDialogDescription>

          <StatusSelect />
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleChangeStatus}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default EditCourseModal;
