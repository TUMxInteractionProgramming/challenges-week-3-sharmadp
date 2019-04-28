
function switchChannel(channelName){
    console.log('Tuning into channel ' + channelName);


    

    
    var targetElement = document.getElementById("chat").getElementsByClassName("app-bar")[0];
    targetElement.innerHTML = channelName + " <small>\
                             by <strong> \
                             <a href=\"http://w3w.co/upgrading.never.helps\" style=\"color:white\" \
                             target=\"_blank\">\
                             upgrading.never.helps \
                             </a> \
                             </strong>\
                             <img src=\"http://ip.lfe.mw.tum.de/sections/star-o.png\" id=\"app-bar-star\"\
                             style=\"right:16px;top:12px;height:32px;width:32px;\" \
                             alt=\"un-starred\" onclick=\"change_star();\"> \
                             </small>"; 


    $(".channel-names li").removeClass("selected");
    $('.channel-names li:contains('+channelName+')').addClass('selected');   
}

function change_star(){
    console.log('inside')
    var image = document.getElementById('app-bar-star');
    if(image.src.match('star-o')){
        fill_star();
    }
    else{
        unfill_star();
    }
}

function unfill_star(){

    $('#app-bar-star').attr('src', 'http://ip.lfe.mw.tum.de/sections/star-o.png');
    $('#app-bar-star').attr('alt','unfilled-star')
    console.log("unfill");

}

function fill_star(){
    $('#app-bar-star').attr('src', 'http://ip.lfe.mw.tum.de/sections/star.png');
    $('#app-bar-star').attr('alt','filled-star')
    console.log("fill");
}


function selectTab(tabId){
    
    var tabId="#"+tabId;
    
    $("#tab-bar> button").removeClass(['selected']);
    $(tabId).addClass(['selected']);

}


function showEmojis(){

    console.log("emojis clicked");
    $("#emojis").toggle();
}





    






