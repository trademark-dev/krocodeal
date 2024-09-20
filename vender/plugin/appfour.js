(function($) {
    "use strict";

    function rt_countdown() {
        if ($('.count-down-style-1').length) {
            $('.count-down-style-1').each(function() {
                var $CountdownSelector = $(this).find('.countdown');
                var eventCountdownTime = $(this).data('time');
                $CountdownSelector.countdown(eventCountdownTime).on('update.countdown', function(event) {
                    var totalHours = event.offset.totalHours;
                    var totalMinutes = event.offset.totalMinutes;
                    var totalSeconds = event.offset.totalSeconds;

                    // Days Section
                    var daysHtml = (totalHours > 23) ?
                        '<div class="count-down-block"><span>%D</span> <div class="inner_rtyth">D</div></div>' :
                        '';
                    // Hours Section
                    var hoursHtml = (totalMinutes > 59) ?
                        '<div class="count-down-block"><span>%H</span> <div class="inner_rtyth">H</div></div>' :
                        '';
                    // Minutes Section
                    var minutesHtml = (totalSeconds > 59) ?
                        '<div class="count-down-block"><span>%M</span><div class="inner_rtyth">M</div></div>' :
                        '';
                    // Seconds Section (Always Shown)
                    var secondsHtml = '<div class="count-down-block"><span>%S</span> <div class="inner_rtyth">S</div></div>';

                    $(this).html(
                        event.strftime(daysHtml + hoursHtml + minutesHtml + secondsHtml)
                    );
                }).on('finish.countdown', function(event) {
                    // Displaying a message when the countdown ends
                    $(this).html('<div class="time-up-message" style="color: red; font-size: 16px; text-shadow:1px 1px 4px black;">Time\'s Up!</div>');
                });
            });
        }
    }

    $(window).on('load', function() {
        rt_countdown();
    });

})(jQuery);