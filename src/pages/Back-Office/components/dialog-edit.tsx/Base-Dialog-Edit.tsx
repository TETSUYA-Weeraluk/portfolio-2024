import React from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import DialogAlert from "../Dialog-alert";

interface BaseDialogEditProps {
  children: React.ReactNode;
  open: boolean;
  handleClose: () => void;
  openDialogAlert: boolean;
  handleCloseDialogAlert: () => void;
  updateData: () => void;
}

const BaseDialogEdit = (props: BaseDialogEditProps) => {
  const {
    children,
    open,
    handleClose,
    openDialogAlert,
    handleCloseDialogAlert,
    updateData,
  } = props;
  return (
    <Dialog
      maxWidth="md"
      fullWidth
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Edit</DialogTitle>
      <DialogContent className="space-y-4">{children}</DialogContent>
      <DialogActions>
        <Button
          sx={{
            backgroundColor: "#C73659",
            color: "white",
            "&:hover": {
              backgroundColor: "#A91D3A",
            },
          }}
          onClick={updateData}
        >
          Update
        </Button>
        <Button
          sx={{
            backgroundColor: "#FFFFFF",
            color: "#C73659",
          }}
          className="button-cancel"
          onClick={handleClose}
        >
          Cancel
        </Button>
      </DialogActions>

      <DialogAlert
        open={openDialogAlert}
        handlecCloseDialogAlert={handleCloseDialogAlert}
      />
    </Dialog>
  );
};

export default BaseDialogEdit;
