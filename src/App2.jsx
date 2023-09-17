import Button from "@mui/material/Button";
import MyDialog from "./MyDialog2";

const App = () => {

  const handleOpenDialog = () => {
    MyDialog({
      title: "我是一个标题",
      onOk: (data) => {
        console.log("10->", data)
      }
    })
  };

  return (
    <>
      <Button variant="contained" onClick={handleOpenDialog}>
        打开Modal
      </Button>
    </>
  );
};

export default App;
