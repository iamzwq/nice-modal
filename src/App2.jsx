import Button from "@mui/material/Button";
import MyDialog from "./MyDialog2";

const App = () => {
  const handleOpenDialog = () => {
    MyDialog({
      title: "标题111111",
      onOk: (data) => {
        console.log("onOk callback", data)
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
