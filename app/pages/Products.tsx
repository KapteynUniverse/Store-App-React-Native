import { FlatList, SafeAreaView } from "react-native";
import Constants from "expo-constants";
import ProductCard from "../components/ProductCard";
import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading";
import Error from "../components/Error";

const Products = ({ navigation }) => {
  const { loading, error, data } = useFetch(
    Constants.expoConfig?.extra?.API_URL
  );

  const handleProductSelect = (id: number) => {
    navigation.navigate("DetailPage", { id });
  };

  const renderProduct = ({ item }) => (
    <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <SafeAreaView>
      <FlatList data={data} renderItem={renderProduct} />
    </SafeAreaView>
  );
};

export default Products;
