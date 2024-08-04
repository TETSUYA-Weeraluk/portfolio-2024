import { Button, DialogActions } from "@mui/material";

interface DialogEditActionsProps {
  handleClose: () => void;
  disabled?: boolean;
}

const DialogEditActions = (props: DialogEditActionsProps) => {
  const { handleClose, disabled } = props;
  return (
    <DialogActions>
      <Button
        type="submit"
        sx={{
          backgroundColor: "#C73659",
          color: "white",
          "&:hover": {
            backgroundColor: "#A91D3A",
          },
        }}
        disabled={disabled}
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
  );
};

export default DialogEditActions;
