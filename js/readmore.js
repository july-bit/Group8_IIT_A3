function AddReadMore() {
    var carLmt = 604;
    var readMoreTxt = " ... Read More";
    var readLessTxt = " Read Less";

    $(".addReadMore").each(function () {
        if ($(this).find(".firstSec").length)
            return;

        var allstr = $(this).text();
        if (allstr.length > carLmt) {
            var firstSet = allstr.substring(0, carLmt);
            var secdHalf = allstr.substring(carLmt, allstr.length);
            var strtoadd = firstSet + "<span class='SecSec'>" + secdHalf + "</span><span class='readMore'  title='Click to Show More'>" + readMoreTxt + "</span><span class='readLess' title='Click to Show Less'>" + readLessTxt + "</span>";
            $(this).html(strtoadd);
        }

    });
    $(document).on("click", ".readMore,.readLess", function () {
        $(this).closest(".addReadMore").toggleClass("showlesscontent showmorecontent");
    });
}
$(function () {
    AddReadMore();
});


$('ul').each(function () {

    var LiN = $(this).find('li').length;

    if (LiN > 0) {
        $('li', this).eq(0).nextAll().hide().addClass('toggleable');
        $(this).append('<li class="more" style = "color: #F2CC8F">More...</li>');
    }

});


$('ul').on('click', '.more', function () {

    if ($(this).hasClass('less')) {
        $(this).text('More...').removeClass('less');
    } else {
        $(this).text('Less').addClass('less');
    }

    $(this).siblings('li.toggleable').slideToggle();

}); 