// components/StaffCard.js

import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

const StaffCard = ({ item, onPress }) => (
  <TouchableOpacity style={styles.staffCard} onPress={onPress}>
    <Text style={styles.staffName}>{item.name}</Text>
    <Text style={styles.staffPhone}>{item.phone}</Text>
    {item.address && (
      <Text style={styles.staffLocation}>
        {item.address.city}, {item.address.state}
      </Text>
    )}
  </TouchableOpacity>
);

export default StaffCard;
