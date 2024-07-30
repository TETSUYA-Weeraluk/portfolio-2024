import { IconButton } from "@mui/material";
import { FaRegEdit } from "react-icons/fa";

interface ButtonEditProps {
  handleClickOpen: () => void;
}

const ButtonEditComponent = (props: ButtonEditProps) => {
  const { handleClickOpen } = props;
  return (
    <IconButton aria-label="edit" color="inherit" onClick={handleClickOpen}>
      <FaRegEdit />
    </IconButton>
  );
};

export default ButtonEditComponent;
