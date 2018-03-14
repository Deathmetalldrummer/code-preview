$(function() {
    var sidebar = $('.sidebar'),
    offsetTop = sidebar.offset().top,
    sidebarWidth = sidebar.width(),
    sidebarHeight = sidebar.height();
    sidebar.width(sidebarWidth);
    console.log(sidebarWidth);
    sidebar.affix({
        offset: {
            top: offsetTop,
            bottom: function() {
                return (this.bottom = $('.footer').outerHeight(true))
            }
        }
    })
})
