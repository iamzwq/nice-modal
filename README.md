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

> antd
>
> modal.confirm({})
>
> modal.warning({})

通过 `MyModal()` 这样的方式就能打开弹出，关闭弹窗的逻辑只在弹窗里面，不需要在外面维护。

如果要添加参数可以使用 `MyModal({ title: "标题" })` 这样的方式。

### 实现

1. 需要命令式的方式，可以使用高阶组件对弹出的组件包装一下。像这样 `ModalHoc(Dialog)`
2. 实现 `ModalHoc`

```jsx
const ModalHoc = component => {
  const ele = document.createElement("div");
  let modalRoot = null;

  const destroy = () => {
    modalRoot && modalRoot.unmount(ele);
  };

  return function (props) {
    const modalComponent = React.createElement(componet, {
      ...props,
      open: true,
      onClose: destroy,
    });

    modalRoot = ReactDOM.createRoot(ele);
    modalRoot.render(modalComponent);
  };
};
```

3. 此时我们只要这样使用

```jsx
const App = () => {
  const handleOpenDialog = () => {
    MyDialog({
      title: "标题111111",
      onOk: data => {
        console.log("onOk callback", data);
      },
    });
  };

  return (
    <>
      <Button variant="contained" onClick={handleOpenDialog}>
        打开Modal
      </Button>
    </>
  );
};
```
