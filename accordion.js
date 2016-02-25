var allPanels = jQuery('.home-accordion > dd').hide();

jQuery('.home-accordion > dt > a').click(function () {
    if (jQuery(this).hasClass('pager-active')) {
        jQuery(this).parent().next().stop().slideUp();
        jQuery('.home-accordion dt a').removeClass('pager-active');
    } else {
        jQuery('.home-accordion dt a').removeClass('pager-active');
        allPanels.slideUp();
        jQuery(this).parent().next().stop().slideDown();
        jQuery(this).addClass('pager-active');
    }
    return false;
});
