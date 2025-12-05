// components/ViewProfileModal.js

import React from "react";
import {
  Modal,
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";

const ViewProfileModal = ({
  visible,
  staffMember,
  onClose,
  onEdit,
  onRemove,
}) => {
  if (!staffMember) return null;

  const { name, phone, departmentId, address } = staffMember;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <SafeAreaView style={styles.modalContainer}>
        <View style={styles.modalHeader}>
          <Text style={styles.modalTitle}>Staff Profile</Text>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.modalClose}>✕</Text>
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.modalContent}>
          <Text style={styles.profileName}>{name}</Text>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Phone:</Text>
            <Text style={styles.detailValue}>{phone}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Department ID:</Text>
            <Text style={styles.detailValue}>{departmentId}</Text>
          </View>

          {address && (
            <>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Street:</Text>
                <Text style={styles.detailValue}>{address.street}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>City:</Text>
                <Text style={styles.detailValue}>{address.city}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>State:</Text>
                <Text style={styles.detailValue}>{address.state}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Postcode:</Text>
                <Text style={styles.detailValue}>{address.zip}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Country:</Text>
                <Text style={styles.detailValue}>{address.country}</Text>
              </View>
            </>
          )}
        </ScrollView>

        <View style={styles.modalFooter}>
          <TouchableOpacity style={styles.primaryButton} onPress={onEdit}>
            <Text style={styles.primaryButtonText}>Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.dangerButton} onPress={onRemove}>
            <Text style={styles.dangerButtonText}>Remove</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton} onPress={onClose}>
            <Text style={styles.secondaryButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default ViewProfileModal;
