export default {
	tbl_pendingOnApproveClickSetRow () {

  if (!tbl_pending.selectedRow?.request_id) {
    showAlert("Please select a row first", "warning");
    return;
  }
  q_set_approved
    .run({ request_id: tbl_pending.selectedRow.request_id })
    .then(() => {
      JSOnApprovalClick.tbl_peningOnApprovalClick();
    })
    .catch(() => {
      showAlert('Something went wrong', 'error');
    });
	}
}