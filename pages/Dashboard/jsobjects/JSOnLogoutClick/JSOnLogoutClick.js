export default {
	b_logout_on_click () {
		storeValue("emp_id", undefined);
		storeValue("role", undefined);
		storeValue("full_name", undefined);
		navigateTo("Login");
	}
}