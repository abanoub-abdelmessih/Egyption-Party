// start Side Bar
$(document).ready(function() {
    $("#SideBarBtn").click(function() {
        if ($("#sideBar").width() === 0) {
            $("#sideBar").animate({ width: '250px' }, 50);
            $("#homeContent").animate({ marginLeft: '250px' }, 200);
            $("#SideBarBtn").html('<i class="fa-solid fa-bars"></i> Close');
        } else {
            $("#sideBar").animate({ width: '0px' }, 100 ,function(){
                $("#homeContent").animate({ marginLeft: '0px' }, 200);
            });
            $("#SideBarBtn").html('<i class="fa-solid fa-bars"></i> Open');
        }
    });
    
    $("#closeBtn").click(function() {
        $("#sideBar").animate({ width: '0px' }, 200 ,function(){
            $("#homeContent").animate({ marginLeft: '0px' }, 200);
        });
        $("#SideBarBtn").html('<i class="fa-solid fa-bars"></i> Open');
    });
});
// end Side Bar
// Start slider Down
$(document).ready(function(){
    $('.sliderDown .inner').hide();
    $('.sliderDown .inner').first().slideDown(500);

    $('.sliderDown .toggle').on('click', function(){
        let inner = $(this).next('.inner');
        
        inner.slideToggle(300);

        $('.sliderDown .inner').not(inner).slideUp(500);
    }); 
});

// End slider Down  
// Start Counter section
$(document).ready(function() {
    const countDownDate = new Date("May 25, 2025").getTime();
    const Time = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        $(".days").text(days + ' D');
        $(".hours").text(hours + ' h');
        $(".minutes").text(minutes + ' m');
        $(".seconds").text(seconds + ' s');
        if (distance < 0) {
            clearInterval(Time);
            $(".countdown").text("EXPIRED");
        }
    }, 1000);
});
// End Counter section
// Start Contact Section
$(document).ready(function() {
    const maxText = 100;
    $('#remainingChar').text(maxText);

    $('#contactMessage').on('input', function() {
        let textLength = $(this).val().length;
        let textLeft = maxText - textLength;

        if (textLeft <= 0) {
            $('#remainingChar').text('Your available characters are finished');
            $('.textHolder').hide();
        } else {
            $('#remainingChar').text(textLeft);
            $('.textHolder').show();
        }
    });
});
// End Contact Section