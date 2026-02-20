export default {
	tbl_peningOnApprovalClick() {
		const res = q_set_approved.data;
		
		// q_set_approved should return RETURNING request_id;
		const hasRow = Array.isArray(res) ? res.length > 0 : !!res?.request_id;

		if (!hasRow) {
			showAlert("Nothing approved (already processed).", "warning");
			return;
		}

		showAlert("Approved.", "success");

		q_pending_approvals.run();
		q_approved_leaves.run();
		q_pending_count.run();
	}
}