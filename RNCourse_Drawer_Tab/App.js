import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import { Ionicons } from "@expo/vector-icons";

// const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        initialRouteName="User"
        screenOptions={{
          headerStyle: { backgroundColor: "#3C0A6B" },
          headerTintColor: "white",
          tabBarActiveTintColor: "#3C0A6B",
        }}
      >
        <BottomTab.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          name="User"
          component={UserScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         initialRouteName="User"
//         screenOptions={{
//           drawerActiveBackgroundColor: "#F0E1FF",
//           drawerActiveTintColor: "#3C0A6B",
//           // drawerStyle: { backgroundColor: "#ccc" },
//         }}
//       >
//         <Drawer.Screen
//           name="Welcome"
//           component={WelcomeScreen}
//           options={{
//             headerStyle: { backgroundColor: "#3C0A6B" },
//             headerTintColor: "white",
//             drawerLabel: "Welcome Screen",
//             // 이 화면에만 적용 된다
//             // drawerActiveBackgroundColor: "#F0E1FF",
//             // drawerActiveTintColor: "#3C0A6B",
//             // drawerStyle: { backgroundColor: "#ccc" },
//             drawerIcon: ({ color, size }) => (
//               <Ionicons name="home" color={color} size={size} />
//             ),
//           }}
//         />
//         <Drawer.Screen
//           name="User"
//           component={UserScreen}
//           options={{
//             drawerIcon: ({ color, size }) => (
//               <Ionicons name="person" color={color} size={size} />
//             ),
//           }}
//         />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }
