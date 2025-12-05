// components/styles.js

import { StyleSheet } from "react-native";

export const primaryRed = "#b0163c";
export const borderGrey = "#d4d4d4";

export const cardShadow = {
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.08,
  shadowRadius: 4,
  elevation: 2,
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  header: {
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  appTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
  },
  appSubtitle: {
    fontSize: 13,
    color: "#6b7280",
    marginTop: 2,
  },
  addButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#111827",
  },
  addButtonText: {
    fontSize: 13,
    fontWeight: "500",
  },
  listContent: {
    paddingBottom: 80,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    padding: 12,
  },
  errorText: {
    color: "#b91c1c",
    fontSize: 13,
  },
  errorHint: {
    fontSize: 12,
    color: "#6b7280",
    marginTop: 4,
  },
  staffCard: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: borderGrey,
    ...cardShadow,
  },
  staffName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },
  staffPhone: {
    fontSize: 13,
    color: "#4b5563",
    marginTop: 4,
  },
  staffLocation: {
    fontSize: 12,
    color: "#6b7280",
    marginTop: 2,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#f9fafb",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: borderGrey,
    backgroundColor: "#ffffff",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  modalClose: {
    fontSize: 18,
  },
  modalContent: {
    padding: 16,
  },
  profileName: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 12,
    color: "#111827",
  },
  detailRow: {
    flexDirection: "row",
    marginBottom: 6,
  },
  detailLabel: {
    width: 110,
    fontSize: 13,
    fontWeight: "600",
    color: "#374151",
  },
  detailValue: {
    flex: 1,
    fontSize: 13,
    color: "#111827",
  },
  modalFooter: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: borderGrey,
    backgroundColor: "#ffffff",
  },
  primaryButton: {
    backgroundColor: primaryRed,
    paddingVertical: 10,
    borderRadius: 999,
    alignItems: "center",
    marginBottom: 8,
  },
  primaryButtonText: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 14,
  },
  secondaryButton: {
    paddingVertical: 9,
    borderRadius: 999,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#111827",
    marginTop: 4,
  },
  secondaryButtonText: {
    color: "#111827",
    fontWeight: "500",
    fontSize: 14,
  },
  dangerButton: {
    paddingVertical: 9,
    borderRadius: 999,
    alignItems: "center",
    backgroundColor: "#fee2e2",
    marginTop: 4,
  },
  dangerButtonText: {
    color: "#b91c1c",
    fontWeight: "600",
    fontSize: 14,
  },
  formField: {
    marginBottom: 12,
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 4,
    color: "#374151",
  },
  required: {
    color: "#b91c1c",
  },
  input: {
    borderWidth: 1,
    borderColor: borderGrey,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 14,
    backgroundColor: "#ffffff",
  },
  notificationBanner: {
    position: "absolute",
    left: 16,
    right: 16,
    bottom: 24,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: "#dcfce7",
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#22c55e",
    ...cardShadow,
  },
  notificationTitle: {
    fontWeight: "700",
    fontSize: 13,
    marginBottom: 2,
    color: "#166534",
  },
  notificationMessage: {
    fontSize: 12,
    color: "#166534",
  },
});

export default styles;
