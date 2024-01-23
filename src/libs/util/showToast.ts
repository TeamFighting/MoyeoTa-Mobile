import Toast from "react-native-toast-message";

export const showToast = (content: string) => {
  console.log(content);
  Toast.show({
    type: "success",
    position: "bottom",
    text1: content,
    visibilityTime: 3000,
    autoHide: true,
    topOffset: 30,
    bottomOffset: 130,
  });
};
