var $dark_mode_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('body').hasClass('dark-mode'),
    class: 'mr-1'
}).on('click', function () {
    if ($(this).is(':checked')) {
        $('body').addClass('dark-mode')
    } else {
        $('body').removeClass('dark-mode')
    }
})
var $dark_mode_container = $('<div />', { class: 'mb-4' }).append($dark_mode_checkbox).append('<span>Dark Mode</span>')
$container.append($dark_mode_container)