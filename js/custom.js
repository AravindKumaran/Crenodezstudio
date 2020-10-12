

$(document).ready(function(){

     /** Banner Change Text**/
    // var text = ['Engineering Design.'
    
    // , '3D Printing.' ,'Digital Manufacturing.',];
       
    //     i = 0,
    //     $word1 = $('.changeBannerText');

    // setInterval(function ()
    // {
    //     $word1.fadeOut(function () {
    //         $word1.text(text[i++ % text.length]).animate({
    //           height: 'toggle'
    //         });
    //     });

    // }, 4000);

    const bannerContentDiv = document.getElementById('bannerContentDiv');

    var bannerContent = [
        `<p class="changeBannerText"> Engineering Design </p>
        <a href="enclosure.html" class="theme-btn btn-style-one" style="transition: none 0s ease 0s;
        text-align: inherit;
        line-height: 24px;
        border-width: 2px;
        margin: 9px 25px 0px 0px;
        padding: 12px 28px 11px!important;
        letter-spacing: 0px;
        font-size: 14px;">Learn More</a>
        `, `<p class="changeBannerText"> 3D Printing</p>
        <a href="fdm.html" class="theme-btn btn-style-one" style="transition: none 0s ease 0s;
        text-align: inherit;
        line-height: 24px;
        border-width: 2px;
        margin: 9px 25px 0px 0px;
        padding: 12px 28px 11px!important;
        letter-spacing: 0px;
        font-size: 14px;">Learn More</a>
        `,
        `<p class="changeBannerText"> Digital Manufacturing </p>
        <a href="fdm.html" class="theme-btn btn-style-one" style="transition: none 0s ease 0s;
        text-align: inherit;
        line-height: 24px;
        border-width: 2px;
        margin: 9px 25px 0px 0px;
        padding: 12px 28px 11px!important;
        letter-spacing: 0px;
        font-size: 14px;">Learn More</a>
        `
    ];

    loopCount = 0;

    setInterval( function(){
        loopCount++;
        if(loopCount == bannerContent.length){
            loopCount = 0;
        }
        bannerContentDiv.innerHTML=  bannerContent[loopCount];
    }, 4000);

    /** Sidebar **/
    $(document).on('click', '#getQuote', function(e){
        $('.side-menu').toggleClass("side-menu-opened");
    });
    $(document).on('click', '#closeSideBar', function(e){
        $('.side-menu').toggleClass("side-menu-opened");
    });
  
    /** Header **/
    $.ajax({
        url:'common/header.html',
        success: function(result){
            $("#commonHeader").html(result);
        }
    });
     /** Footer**/
     $.ajax({
        url:'common/contactCommon.html',
        success: function(result){
            $("#commonContact").html(result);
        }
    });
     /** Footer**/
    $.ajax({
        url:'common/footer.html',
        success: function(result){
            $("#commonFooter").html(result);
        }
    });
   /** sidebar **/
   $.ajax({
       url:'common/sidebar.html',
       success: function(result){
           $('#sidebar').html(result);
       }
   });
}); 
    