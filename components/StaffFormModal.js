// components/StaffFormModal.js

import React from "react";
import {
  Modal,
  SafeAreaView,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";

const StaffFormModal = ({
  visible,
  isEditing,
  formValues,
  onChange,
  onSubmit,
  onClose,
}) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <SafeAreaView style={styles.modalContainer}>
        <View style={styles.modalHeader}>
          <Text style={styles.modalTitle}>
            {isEditing ? "Edit Staff Profile" : "Add New Staff Member"}
          </Text>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.modalClose}>✕</Text>
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.modalContent}>
          <View style={styles.formField}>
            <Text style={styles.label}>
              Name <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Full name"
              value={formValues.name}
              onChangeText={(text) => onChange("name", text)}
            />
          </View>

          <View style={styles.formField}>
            <Text style={styles.label}>
              Phone <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              placeholder="e.g. 02 9988 2211"
              value={formValues.phone}
              onChangeText={(text) => onChange("phone", text)}
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.formField}>
            <Text style={styles.label}>
              Department ID <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              placeholder="e.g. 1"
              value={formValues.departmentId}
              onChangeText={(text) => onChange("departmentId", text)}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.formField}>
            <Text style={styles.label}>
              Street <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Street address"
              value={formValues.address.street}
              onChangeText={(text) => onChange("street", text, true)}
            />
          </View>

          <View style={styles.formField}>
            <Text style={styles.label}>
              City <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              placeholder="City"
              value={formValues.address.city}
              onChangeText={(text) => onChange("city", text, true)}
            />
          </View>

          <View style={styles.formField}>
            <Text style={styles.label}>
              State <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              placeholder="State (e.g. NSW)"
              value={formValues.address.state}
              onChangeText={(text) => onChange("state", text, true)}
              autoCapitalize="characters"
            />
          </View>

          <View style={styles.formField}>
            <Text style={styles.label}>
              Postcode <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Postcode"
              value={formValues.address.zip}
              onChangeText={(text) => onChange("zip", text, true)}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.formField}>
            <Text style={styles.label}>
              Country <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Country"
              value={formValues.address.country}
              onChangeText={(text) => onChange("country", text, true)}
            />
          </View>
        </ScrollView>

        <View style={styles.modalFooter}>
          <TouchableOpacity style={styles.primaryButton} onPress={onSubmit}>
            <Text style={styles.primaryButtonText}>
              {isEditing ? "Update Profile" : "Add Staff Member"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton} onPress={onClose}>
            <Text style={styles.secondaryButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default StaffFormModal;
