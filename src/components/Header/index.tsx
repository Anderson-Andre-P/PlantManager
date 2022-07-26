import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { profileAvatar } from "../../assets";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá</Text>
        <Text style={styles.userName}>Anderson</Text>
      </View>
      <Image source={profileAvatar} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // paddingVertical: 32,
    marginTop: getStatusBarHeight(),
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    // fontFamily: fonts.text,
  },
  userName: {
    fontSize: 32,
    // fontFamily: fonts.heading,
    color: colors.heading,
    fontWeight: "bold",
    lineHeight: 40,
    maxWidth: 250,
    maxHeight: 40,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});
