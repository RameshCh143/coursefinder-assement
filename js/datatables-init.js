(function ($) {
//    "use strict";

/*  Data Table
-------------*/
$('#bootstrap-data-table').DataTable({
    lengthMenu: [[5, 10, 15, -1], [5, 10, 15, "All"]],
    "sDom": '<"row view-filter"<"col-sm-12"<"pull-left"l><"pull-right"f><"clearfix">>>t<"row view-pager"<"col-sm-12"<"text-center"ip>>>',
    responsive: true
});

})(jQuery);