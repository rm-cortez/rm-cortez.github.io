
jQuery(document).ready(function(){
  jQuery('[data-toggle="popover"]').popover();

  jQuery('.popover-dismiss').popover({
    trigger: 'focus'
  });
});
