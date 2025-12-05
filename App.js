// App.js

import React, { useState, useEffect } from "react";

import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";

import styles from "./components/styles";
import { STAFF_JSON_URL, emptyForm } from "./components/staffData";

import StaffCard from "./components/StaffCard";
import StaffFormModal from "./components/StaffFormModal";
import ViewProfileModal from "./components/ViewProfileModal";
import NotificationBanner from "./components/NotificationBanner";
 // Comment added for the git pull Request
const App = () => {
  const [staff, setStaff] = useState([]);
  const [selectedStaff, setSelectedStaff] = useState(null);

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isViewVisible, setIsViewVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [formValues, setFormValues] = useState(emptyForm);

  const [notification, setNotification] = useState(null);

  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);

  // Load staff data from remote JSON once, on mount
  useEffect(() => {
    const loadStaff = async () => {
      try {
        setLoading(true);
        setLoadError(null);

        const response = await fetch(STAFF_JSON_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Invalid staff data format (expected an array).");
        }

        setStaff(data);
      } catch (error) {
        console.error("Error loading staff data:", error);
        setLoadError("Unable to load staff data from the server.");
      } finally {
        setLoading(false);
      }
    };

    loadStaff();
  }, []);

  const staffCount = staff.length;

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 2500);
  };

  const openAddForm = () => {
    setFormValues(emptyForm);
    setIsEditing(false);
    setIsFormVisible(true);
  };

  const openEditForm = () => {
    if (!selectedStaff) return;

    setIsViewVisible(false);

    setFormValues({
      name: selectedStaff.name || "",
      phone: selectedStaff.phone || "",
      departmentId:
        selectedStaff.departmentId !== undefined &&
        selectedStaff.departmentId !== null
          ? String(selectedStaff.departmentId)
          : "",
      address: {
        street: selectedStaff.address?.street || "",
        city: selectedStaff.address?.city || "",
        state: selectedStaff.address?.state || "",
        zip: selectedStaff.address?.zip || "",
        country: selectedStaff.address?.country || "",
      },
    });

    setIsEditing(true);
    setIsFormVisible(true);
  };

  const openViewProfile = (item) => {
    setSelectedStaff(item);
    setIsViewVisible(true);
  };

  const closeForm = () => {
    setIsFormVisible(false);
  };

  const closeViewProfile = () => {
    setIsViewVisible(false);
  };

  // onChange handler used by the form
  const handleChange = (field, value, isAddress = false) => {
    if (isAddress) {
      setFormValues((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [field]: value,
        },
      }));
    } else {
      setFormValues((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  const validateForm = () => {
    const requiredTopLevel = ["name", "phone", "departmentId"];
    const requiredAddress = ["street", "city", "state", "zip", "country"];

    for (const field of requiredTopLevel) {
      if (!formValues[field] || String(formValues[field]).trim() === "") {
        Alert.alert(
          "Missing information",
          "Please complete all required fields."
        );
        return false;
      }
    }

    for (const field of requiredAddress) {
      if (
        !formValues.address[field] ||
        String(formValues.address[field]).trim() === ""
      ) {
        Alert.alert(
          "Missing information",
          "Please complete all required fields."
        );
        return false;
      }
    }

    return true;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    const trimmed = {
      name: formValues.name.trim(),
      phone: formValues.phone.trim(),
      departmentId: Number(formValues.departmentId),
      address: {
        street: formValues.address.street.trim(),
        city: formValues.address.city.trim(),
        state: formValues.address.state.trim(),
        zip: formValues.address.zip.trim(),
        country: formValues.address.country.trim(),
      },
    };

    if (isEditing && selectedStaff) {
      // update existing
      const updated = staff.map((s) =>
        s.id === selectedStaff.id ? { ...s, ...trimmed } : s
      );
      setStaff(updated);
      setSelectedStaff({ ...selectedStaff, ...trimmed });
      showNotification("Profile updated successfully!");
    } else {
      // add new
      const maxId =
        staff.length > 0 ? Math.max(...staff.map((s) => Number(s.id))) : 0;
      const newStaffMember = {
        id: maxId + 1,
        ...trimmed,
      };
      setStaff((prev) => [...prev, newStaffMember]);
      showNotification("New staff member added!");
    }

    setIsFormVisible(false);
  };

  const handleRemoveStaff = () => {
    if (!selectedStaff) return;

    Alert.alert(
      "Remove staff member",
      `Are you sure you want to remove ${selectedStaff.name} from the directory?`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Remove",
          style: "destructive",
          onPress: () => {
            setStaff((prev) => prev.filter((s) => s.id !== selectedStaff.id));
            setIsViewVisible(false);
            setSelectedStaff(null);
            showNotification("Staff member removed.");
          },
        },
      ]
    );
  };

  const renderStaffCard = ({ item }) => (
    <StaffCard item={item} onPress={() => openViewProfile(item)} />
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 26,
            fontWeight: "800",
            marginTop: 20,
            color: "#c12323ff",
          }}
        >
          Red Opal
        </Text>

        <View style={styles.header}>
          <View>
            <Text style={styles.appTitle}>Staff Directory</Text>
            <Text style={styles.appSubtitle}>
              {loading
                ? "Loading staff..."
                : `${staffCount} staff member${
                    staffCount === 1 ? "" : "s"
                  } in directory`}
            </Text>
          </View>

          <TouchableOpacity
            style={styles.addButton}
            onPress={openAddForm}
            disabled={loading}
          >
            <Text style={styles.addButtonText}>
              {loading ? "Loading..." : "＋ Add Staff"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Content */}
        {loading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" />
          </View>
        )}

        {!loading && loadError && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{loadError}</Text>
            <Text style={styles.errorHint}>
              You can still add staff manually using the “Add Staff” button.
            </Text>
          </View>
        )}

        {!loading && !loadError && (
          <FlatList
            data={staff}
            keyExtractor={(item) => String(item.id)}
            renderItem={renderStaffCard}
            contentContainerStyle={styles.listContent}
          />
        )}
      </View>

      {/* Add/Edit modal */}
      <StaffFormModal
        visible={isFormVisible}
        isEditing={isEditing}
        formValues={formValues}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onClose={closeForm}
      />

      {/* View Profile modal */}
      <ViewProfileModal
        visible={isViewVisible && !!selectedStaff}
        staffMember={selectedStaff}
        onClose={closeViewProfile}
        onEdit={openEditForm}
        onRemove={handleRemoveStaff}
      />

      {/* Notification banner */}
      <NotificationBanner message={notification} />
    </SafeAreaView>
  );
};

export default App;
