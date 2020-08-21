
$(document).ready(function()
{          
$(".block button").mouseenter(function()          
{
$('button').removeClass('active');
})
$(".block button").mouseleave(function()          
{
$('button:nth-child(1)').addClass('active');
})
})
//*------------------------
$(document).ready(function()
{                    
$('button:nth-child(8)').animate({marginRight:'0px'},1000);
$('.logo img').animate({marginLeft:'0px'},1000)
})
//*------------
$(document).ready(function()
{          
$(".Option button").click(function()          
{
$('.account').fadeToggle(600);
})
})
//*-------------------------
$(window).on('resize',function () {
    $(window).width($('.container').width());
    var wid=$(window).width();
    console.log(wid)
    
})
//*-------------------------
$('.block button').click(function() {
    $('html , body').animate({
        scrollTop:$('#'+$(this).data('scroll')).offset().top
    },1000)
})
//$(window).scroll(function() {
    $('.block').each(function(){
        console.log($('.block').offset().top)
        if($(window).scrollTop() >= $(this).offset().top){
            $('.navbar li').removeClass('active');
            var blockid=$(this).attr('id');
            $('.navbar li[data-scroll="'+ blockid+'"]').addClass('active');  

          
        }
    })
//})

