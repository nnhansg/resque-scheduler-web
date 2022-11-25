$(document).ready(function() {
  jqTable = $('#resque-scheduler-schedules-table').DataTable({
    colReorder: true,
    responsive: true,
    drawCallback: function () {
      ResqueWebCommon.initPopover();
      console.log('drawCallback');
    }
  });

  jqTable.on('responsive-display', function(e, datatable, row, showHide, update) {
    ResqueWebCommon.initPopover();
  });

  jqTable.on('responsive-resize', function(e, datatable, columns) {
    ResqueWebCommon.initPopover();
  });
});
