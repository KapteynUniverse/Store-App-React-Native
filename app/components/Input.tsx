import { View, StyleSheet, TextInput } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Input = ({ placeholder, value, onChangeText, iconName, isSecure }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        style={styles.input}
        secureTextEntry={isSecure}
      />
      <FontAwesome name={iconName} size={24} color="gray" />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#e0e0e0",
    flexDirection: "row",
  },
  input: { flex: 1 },
});
