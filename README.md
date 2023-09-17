# React 弹窗实践

一般使用弹窗的方式：

声明一个显示/隐藏的状态，再声明一个弹窗确认按钮函数，一个取消函数传给弹窗组件

```jsx
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
```

如果页面中有多个弹窗，就需要申明多个这样的状态和函数，使得代码看起来

antd: modal.confirm({})
      modal.warning({})