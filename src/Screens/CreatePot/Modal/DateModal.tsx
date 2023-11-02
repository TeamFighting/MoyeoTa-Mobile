import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const MyDateTimePicker = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: React.SetStateAction<Date>) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  return (
    <View>
      <Button title="Open Date Picker" onPress={showDatePicker} />
      <Text>Selected Date: {selectedDate.toLocaleString()}</Text>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime" // You can change the mode to 'date' or 'time' as needed
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default MyDateTimePicker;
