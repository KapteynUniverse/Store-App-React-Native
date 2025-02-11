import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import useFetch from "../hooks/useFetch";
import Constants from "expo-constants";
import Loading from "../components/Loading";
import Error from "../components/Error";

const Detail = ({ route }) => {
  const { id } = route.params;
  const url = Constants.expoConfig?.extra?.API_URL;

  const { loading, error, data } = useFetch(url + "/" + id);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: data.image }} />
      <View style={styles.body_container}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.description}>{data.description}</Text>
        <Text style={styles.price}>{data.price}</Text>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height / 3,
    resizeMode: "contain",
    backgroundColor: "white",
  },
  body_container: {
    padding: 10,
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
