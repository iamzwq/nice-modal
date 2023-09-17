import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

const MyDialog = ({ open, handleClose, handleOk }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>标题 - xxx</DialogTitle>
      <DialogContent>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>取消</Button>
        <Button
          onClick={() => {
            handleOk();
            handleClose();
          }}
          autoFocus
        >
          确认
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MyDialog;
