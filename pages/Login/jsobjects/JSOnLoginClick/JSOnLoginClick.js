export default {
	btn_loginonClick () {
		q_login.run().then(() => {
			if (!q_login.data || q_login.data.length === 0) {
				showAlert("Invalid credentials", "error");
				return;
			}

			const user = q_login.data[0];

			storeValue("emp_id", user.emp_id);
			storeValue("role", user.role);
			storeValue("full_name", user.first_name + " " + user.last_name);

			if (appsmith.store.role !== "manager") {
				showAlert("Access denied", "error");
				navigateTo("Login");
			} else navigateTo("Dashboard");
		});
	}
}