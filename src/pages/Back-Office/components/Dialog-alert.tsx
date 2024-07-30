import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";

interface DialogAlertProps {
  open: boolean;
  handlecCloseDialogAlert: () => void;
}

const DialogAlert = (props: DialogAlertProps) => {
  const { open, handlecCloseDialogAlert } = props;

  return (
    <Dialog
      open={open}
      onClose={handlecCloseDialogAlert}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Update data success</DialogTitle>
      <div className="w-full flex justify-center mb-4">
        <Button
          sx={{
            backgroundColor: "green",
            color: "white",
            "&:hover": {
              backgroundColor: "green",
            },
          }}
          onClick={handlecCloseDialogAlert}
        >
          Close
        </Button>
      </div>
    </Dialog>
  );
};

export default DialogAlert;
