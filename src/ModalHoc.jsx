import { createElement } from "react";
import { createRoot } from "react-dom/client";

const ModalHoc = (component) => {
  const ele = document.createElement("div")
  let modalRoot = null

  const destroy = () => {
    modalRoot && modalRoot.unmount(ele)
  }

  return function (props) {
    // 生成modal组件
    const modalComponent = createElement(component, {
      ...props,
      open: true,
      onClose: destroy
    })

    // 挂载modal组件
    modalRoot = createRoot(ele)
    modalRoot.render(modalComponent)
  };
};

export default ModalHoc;