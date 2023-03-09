import { toast } from "react-toastify";

export const showNotification = (message, type) => {
  toast[type](message, {
    position: toast.POSITION.TOP_RIGHT,
  });
};
