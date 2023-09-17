import { useState } from "react";
import Button from "@mui/material/Button";
import MyDialog from "./MyDialog";

const App = () => {
  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleOkDialog = data => {
    console.log(data);
    // do something
  };

  return (
    <>
      <Button variant="contained" onClick={handleOpenDialog}>
        打开Modal
      </Button>
      <MyDialog
        open={open}
        handleClose={handleCloseDialog}
        handleOk={handleOkDialog}
      />
    </>
  );
};

export default App;
