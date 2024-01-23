import { View, ViewStyle } from "react-native";
import React, { createContext } from "react";
import RadioButtonItem from "./RadioButtonIten";

interface Props {
  selected?: string;
  children: React.ReactNode;
  onSelected?: (selected: string) => void;
  containerStyle?: ViewStyle;
}

type ContextProps = Omit<Props, "children" | "containerStyle">;
export const RadioGroupContext = createContext<ContextProps>({});

const RadioButtonGroup = (props: Props) => {
  const { Provider } = RadioGroupContext;

  const { selected, children, onSelected, containerStyle } = props;

  return (
    <Provider
      value={{
        onSelected,
        selected,
      }}
    >
      <View style={[containerStyle]}>{children}</View>
    </Provider>
  );
};

RadioButtonGroup.RadioButtonItem = RadioButtonItem;

export default RadioButtonGroup;
