export default {
  checkAccess() {
    if (!appsmith.store.emp_id) {
      navigateTo("Login");
      return;
    }

    if (appsmith.store.role !== "manager") {
      showAlert("No access", "error");
      navigateTo("Dashboard");
      return;
    }
  }
}