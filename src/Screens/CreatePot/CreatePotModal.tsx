import React, { useState } from "react";
import { View, Modal, Text, StyleSheet, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { format } from "date-fns";
import ko from "date-fns/locale/ko";

const CreatePopModal: React.FC = () => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(true);

  const onChange = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity
        style={styles.button}
        onPress={() => setShowDatePicker(true)}
      >
        <Text style={styles.buttonText}>Open Date Picker</Text>
      </TouchableOpacity> */}
      <Modal visible={showDatePicker} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="datetime"
            display="spinner"
            onChange={onChange}
            textColor="black"
            locale="ko-KR"
          />
          {/* <TouchableOpacity
            style={styles.button}
            onPress={() => setShowDatePicker(false)}
          >
            <Text style={styles.buttonText}>Close Date Picker</Text>
          </TouchableOpacity> */}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 11,
    baclgroundColor: "rgba(0,0,0,0.5)",
    height: "100%",
    width: "100%",
  },
  button: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: "white",
    alignItems: "center",
  },
  buttonText: {
    color: "black",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    zIndex: 11,
    baclgroundColor: "rgba(0,0,0,0.5)",
    height: "100%",
    width: "100%",
  },
});

export default CreatePopModal;
