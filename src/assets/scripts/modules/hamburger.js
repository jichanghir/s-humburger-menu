$(function() {
    let isOn = false;
    const hamToggle = $('#ham-toggle');
    const hamburgerMenu = $('#hamburger-menu');
    const hamburgerMenuBg = $('#hamburger-menu-bg');

    const hide = () => {
        hamToggle.removeClass("on");
        hamburgerMenu.removeClass("on");
        hamburgerMenuBg.removeClass("on");
        hamburgerMenuBg.addClass("off");
        isOn = false;
    };

    $('body').on('click', function(e) {

        if ($(e.target).closest('#ham-toggle').length) {
            if (!isOn) {
                hamToggle.addClass("on");
                hamburgerMenu.addClass("on");
                hamburgerMenuBg.addClass("on");
                hamburgerMenuBg.removeClass("off");
                isOn = true;
            }
            else {
                if (isOn) {
                    hide();
                }
            }
        }
        else if (!$(e.target).closest('.hamburger-menu__list').length) {
            if (isOn) {
                hide();
            }
        }

    });
})
