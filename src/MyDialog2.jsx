import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import ModalHoc from "./ModalHoc";

const MyDialog = ({ open, onClose, title, onOk }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>取消</Button>
        <Button onClick={() => {
          onOk({name: "张三", age: 14})
          onClose()
        }} autoFocus>
          确认
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalHoc(MyDialog);
