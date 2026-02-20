export default {
	protect_dashboard_page(){
  if (!appsmith.store.emp_id) {
    navigateTo("Login");
  }
	}
}