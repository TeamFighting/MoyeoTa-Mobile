import React, { useContext } from "react";
import { View, StyleSheet, Pressable, ViewStyle } from "react-native";
import { RadioGroupContext } from "./RadioButtonGroup";
import { colors } from "../../../../libs/styles/color";

interface props {
  value: string;
  children?: React.ReactNode;
  disabled?: boolean;
  containerStyle?: ViewStyle;
}

const RadioButtonItem = (props: props) => {
  const { value, children, disabled, containerStyle } = props;
  const { onSelected, selected } = useContext(RadioGroupContext);

  const isSelected = () => {
    return selected === value;
  };

  const triggerRadioButton = () => {
    if (onSelected && !disabled) {
      onSelected(value);
    }
  };

  return (
    <Pressable
      onPress={() => {
        if (onSelected && !disabled) {
          onSelected(value);
        }
      }}
      style={[styles.radioButtonItemContainer, containerStyle]}
    >
      <View
        style={[
          styles.radioButtonCircle,
          { borderColor: isSelected() ? colors.green : colors.gray },
          {
            ...(disabled && {
              backgroundColor: colors.gray,
              borderColor: colors.green,
            }),
          },
        ]}
      >
        {isSelected() && (
          <View
            style={{
              backgroundColor: disabled ? colors.gray : colors.green,
              width: 12,
              height: 12,
              borderRadius: 50,
            }}
          />
        )}
      </View>
      {children && (
        <Pressable style={styles.label} onPress={triggerRadioButton}>
          {children}
        </Pressable>
      )}
    </Pressable>
  );
};

export default RadioButtonItem;

const styles = StyleSheet.create({
  radioButtonItemContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioButtonCircle: {
    borderWidth: 1,
    padding: 2,
    width: 24,
    height: 24,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    marginLeft: 8,
  },
});
