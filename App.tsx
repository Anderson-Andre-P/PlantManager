import React, { useCallback, useEffect, useState } from "react";
import { Welcome } from "./src/pages/Welcome";

// import {
//   useFonts,
//   Jost_400Regular,
//   Jost_600SemiBold,
// } from "@expo-google-fonts/jost";
// import AppLoading from "expo-app-loading";

import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { Entypo } from "@expo/vector-icons";
import { View } from "react-native";
import { UserIdentification } from "./src/pages/UserIdentification";
import { Confirmation } from "./src/pages/Confirmation";
import { Routes } from "./src/routes";

// SplashScreen.preventAutoHideAsync();

export default function App() {
  // let [fontsLoaded] = useFonts({
  //   Jost_400Regular,
  //   Jost_600SemiBold,
  // });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  // const [appIsReady, setAppIsReady] = useState(false);

  // useEffect(() => {
  //   async function prepare() {
  //     try {
  //       await Font.loadAsync(Entypo.font);
  //       await new Promise((resolve) => setTimeout(resolve, 2000));
  //     } catch (e) {
  //       console.warn(e);
  //     } finally {
  //       setAppIsReady(true);
  //     }
  //   }

  //   prepare();
  // }, []);

  // const onLayoutRootView = useCallback(async () => {
  //   if (appIsReady) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [appIsReady]);

  // if (!appIsReady) {
  //   return null;
  // }

  return (
    // <View
    //   style={{
    //     flex: 1,
    //     alignItems: "center",
    //     justifyContent: "center",
    //     paddingHorizontal: 60,
    //   }}
    //   onLayout={onLayoutRootView}
    // >
    <Routes />
    // {/* </View> */}
  );
}
