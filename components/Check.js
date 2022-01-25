import React, { useState } from "react";
import { CheckBox,StyleSheet, View } from "react-native";

const Check = () => {
  const [isSelected, setSelection] = useState(false);

  return (
    <>
    <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
      </View>
    
    </>

  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'flex-end',
  },
});

export default Check;