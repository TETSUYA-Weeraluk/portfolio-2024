import React from "react";

import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import DialogAlert from "../Dialog-alert";

interface BaseDialogEditProps {
  children: React.ReactNode;
  open: boolean;
  handleClose: () => void;
  openDialogAlert: boolean;
  handleCloseDialogAlert: () => void;
}

const BaseDialogEdit = (props: BaseDialogEditProps) => {
  const {
    children,
    open,
    handleClose,
    openDialogAlert,
    handleCloseDialogAlert,
  } = props;
  return (
    <Dialog
      maxWidth="lg"
      fullWidth
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Edit</DialogTitle>
      <DialogContent className="space-y-4">{children}</DialogContent>

      <DialogAlert
        open={openDialogAlert}
        handlecCloseDialogAlert={handleCloseDialogAlert}
      />
    </Dialog>
  );
};

export default BaseDialogEdit;
