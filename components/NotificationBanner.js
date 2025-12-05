// components/NotificationBanner.js

import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const NotificationBanner = ({ message }) => {
  if (!message) return null;

  const [titlePart, ...rest] = message.split("!");
  const remaining = rest.join("!").trim();

  return (
    <View style={styles.notificationBanner}>
      <Text style={styles.notificationTitle}>✓ {titlePart}!</Text>
      {remaining.length > 0 && (
        <Text style={styles.notificationMessage}>{remaining}</Text>
      )}
    </View>
  );
};

export default NotificationBanner;
