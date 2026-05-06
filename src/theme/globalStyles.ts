import { StyleSheet } from "react-native";
import { colors } from "./appTheme";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 35,
  },

  header: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },

  title: {
    color: colors.textSecondary,
    fontSize: 16,
  },

  card: {
    backgroundColor: colors.card,
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 15,
    marginBottom: 10,
  },

  subtitle: {
    color: colors.textSecondary,
    fontSize: 20,
  },

  total: {
    color: colors.textPrimary,
    fontSize: 48,
    fontWeight: "bold",
    marginVertical: 10,
  },

  detail: {
    color: colors.textSecondary,
    fontSize: 14,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  label: {
    color: colors.textPrimary,
    fontSize: 16,
  },

  tipButton: {
    backgroundColor: colors.button,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 12,
    marginHorizontal: 5,
  },

  tipButtonText: {
    color: colors.textPrimary,
    fontSize: 25,
    fontWeight: "bold",
  },

  tipButtonActive: {
    backgroundColor: colors.accent,
    transform: [{ scale: 1.07 }],
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 12,
    marginHorizontal: 5,
    color: "#fff",
  },

  circleBtn: {
    backgroundColor: colors.button,
    width: 110,
    height: 60,
    borderRadius: 20,
    textAlign: "center",
    textAlignVertical: "center",
    color: "#fff",
    fontSize: 18,
  },

  people: {
    color: "#fff",
    fontSize: 20,
    marginHorizontal: 15,
  },
  counterNumber: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    marginHorizontal: 15,
  },

  keypadContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },

  button: {
    flex: 1,
    height: 70,
    backgroundColor: colors.button,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },

  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  buttonDanger: {
    backgroundColor: colors.accent,
  },

  buttonSecondary: {
    backgroundColor: "#3A3F47",
  },

  amountRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  amountLabel: {
    color: "#A0A4AA",
    fontSize: 16,
  },

  amountValue: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
  },
});
