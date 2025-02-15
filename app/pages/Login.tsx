import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";
import { Formik } from "formik";
import usePost from "../hooks/usePost";

const Login = ({ navigation }) => {
  const authUrl = process.env.EXPO_PUBLIC_API_AUTH_URL;
  const { error, loading, data, post } = usePost();

  function handleLogin(values) {
    console.log(values);
    post(authUrl + "login", values);
  }

  if (error) {
    console.log(error);
  }

  if (data) {
    if (data.status === "Error") {
      console.log("error");
    } else {
      navigation.navigate("ProductsPage");
    }
    console.log(data);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          style={styles.image}
          source={require("../../assets/images/login-logo.webp")}
        />
      </View>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={handleLogin}
      >
        {({ handleSubmit, handleChange, values }) => (
          <View style={styles.body_container}>
            <Input
              placeholder="Username"
              value={values.username}
              onChangeText={handleChange("username")}
              iconName="user"
              isSecure={false}
            />
            <Input
              placeholder="Password"
              value={values.password}
              onChangeText={handleChange("password")}
              iconName="key"
              isSecure
            />
            <Button title="Login" onPress={handleSubmit} loading={loading} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo_container: {},
  body_container: {
    flex: 1,
  },
  image: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height / 4,
    resizeMode: "contain",
    backgroundColor: "white",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  description: {},
  price: {
    textAlign: "right",
    fontSize: 16,
    fontStyle: "italic",
  },
});
