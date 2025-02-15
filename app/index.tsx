import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Products from "./pages/Products";
import Detail from "./pages/Detail";
import Login from "./pages/Login";

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: "Login",
          headerStyle: { backgroundColor: "#64b5f6" },
          headerTitleStyle: { color: "white" },
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="ProductsPage"
        component={Products}
        options={{
          title: "Products",
          headerStyle: { backgroundColor: "#64b5f6" },
          headerTitleStyle: { color: "white" },
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="DetailPage"
        component={Detail}
        options={{
          title: "Product Details",
          headerStyle: { backgroundColor: "#64b5f6" },
          headerTitleStyle: { color: "white" },
          headerTitleAlign: "center",
          headerTintColor: "white",
        }}
      />
    </Stack.Navigator>
  );
}
