export default {
	tbl_peningRefresh() {
		q_pending_approvals.run();
		q_approved_leaves.run();
		q_pending_count.run();
	}
}