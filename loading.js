+function($) {
    "use strict";

    var alertCss = {
        backgroundColor: '#fff',
        border: '1px solid rgba(0, 0, 0, .2)',
        borderRadius: '6px',
        cursor: 'wait',
        display: 'none',
        height: '60px',
        left: '32%',
        position: 'fixed',
        textAlign: 'center',
        top: '40%',
        width: '36%',
        zIndex: 1010,
    };

    var messageCss = {
        fontSize: '24px',
        padding: '10px',
    };

    var backgroundCss = {
        backgroundColor: '#000',
        border: 'none',
        cursor: 'wait',
        display: 'none',
        height: '100%',
        left: 0,
        margin: 0,
        opacity: 0.6,
        padding: 0,
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1001,
    };

    function start() {
        var message = $('<div>loading now...</div>').css(messageCss);
        var background = $('<div class="blockUI"></div>').css(backgroundCss)
        var alert = $('<div class="blockUI"></div>').css(alertCss);

        alert.append(message);
        $('body').append(background);
        $('body').append(alert);

        background.fadeIn(200);
        alert.fadeIn(200);
    }

    function finish() {
        var els = $('.blockUI');
        els.stop().fadeOut(400, function() {
            els.remove()
        });
    }

    $(document).on('click', function() {
        $('.blockUI').length ? finish() : start();
    });
}(jQuery);
