$(document).ready(function() {
    const d = new Date();
    document.getElementById("year").innerHTML = d.getFullYear();

    $('.class-information-content').hide()

    $('li').on('click', function() {
        $('li').removeClass('active')

        $(this).addClass('active')
    })

    $('#classInformationsContent').on('click', 'li', function() {
        if ($(this).find('i').hasClass('fa-arrow-down')) {
            // show materi description
            $(this).next().slideDown(200)

            // change icon
            $(this).find('.fa-arrow-down').removeClass('fa-arrow-down').addClass('fa-arrow-up')
        } else if ($(this).find('i').hasClass('fa-arrow-up')) {
            // hide materi description
            $(this).next().slideUp(200)

            // change icon
            $(this).find('.fa-arrow-up').removeClass('fa-arrow-up').addClass('fa-arrow-down')
        }
    })

    let countDownDate = new Date("Aug 20, 2021 20:30:00").getTime()

    let x = setInterval(function() {
        // get right now time
        var now = new Date().getTime()

        // get time between target time and right now time
        var distance = countDownDate - now

        // calculate time for day, hour, minute, second
        var days = Math.floor(distance / (1000 * 60 * 60 * 24))
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        var seconds = Math.floor((distance % (1000 * 60)) / 1000)

        if (days < 10) days = `00${days}`
        else if (days < 100) days = `0${days}`

        if (hours < 10) hours = `0${hours}`
        if (minutes < 10) minutes = `0${minutes}`
        if (seconds < 10) seconds = `0${seconds}`

        // show timer
        $('#countdown-day').text(days)
            // $('#countdown-day').append('&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;')
        $('#countdown-hour').text(hours)
            // $('#countdown-hour').append('&nbsp&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;')
        $('#countdown-minute').text(minutes)
            // $('#countdown-minute').append('&nbsp&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;')
        $('#countdown-second').text(seconds)

        if (distance < 0) {
            clearInterval(x)
            $('#countdown').remove()
        }
    }, 1000)

    $('.accordion__header').click(function() {

        $(".accordion__body").not($(this).next()).slideUp(400);
        $(this).next().slideToggle(400);

        $(".accordion__item").not($(this).closest(".accordion__item")).removeClass("open-accordion");
        $(this).closest(".accordion__item").toggleClass("open-accordion");
    });
});