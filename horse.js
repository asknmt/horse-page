/*ページ内リンク*/
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 1000;
    var href= $(this).attr('href');
    var target = $(href == "#" || href == "" ? 'html' : href);
    $("html, body").animate(
        {scrollTop: target.offset().top}, speed, "swing");
    return false;
  });
});
  /*ハンバーガーページ内リンク*/  
  $('#humber a[href]').on('click', function(event) {
    $('.drawer-open').trigger('click');
  });

  $(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
  
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
  });
  