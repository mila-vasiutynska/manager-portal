export default {
	run_queries_on_page_update () {
		q_pending_approvals.run()
		q_approved_leaves.run()
		return q_pending_approvals.data
	}
}