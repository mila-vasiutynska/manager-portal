export default {
	tbl_pendingOnCancelClickSetRow () {

  if (!tbl_pending.selectedRow?.request_id) {
    showAlert("Please select a row first", "warning");
    return;
  }
  q_set_canceled_leave
    .run({ request_id: tbl_pending.selectedRow.request_id })
    .then(() => {
      JSRefresh.tbl_peningRefresh();
    })
    .catch(() => {
      showAlert('Something went wrong', 'error');
    });
	}
}