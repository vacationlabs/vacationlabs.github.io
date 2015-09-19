// timestamp : 1286664800735, //

var STTAF = {
userid : "2010100945838",
version : "20100922",
widgetUrl : "http://taf.socialtwist.com:80/taf",
widgetHostUrl : "http://taf.socialtwist.com:80",
cdnUrl : "s3.amazonaws.com/cdn.socialtwist.com",
contentUrl : "http://content.socialtwist.com/",
imagesUrl : "images.socialtwist.com",
isButtonExpandable : true,
isOverlaySelected : false,
isPopupMode : false,
isHideFlashSelected : true,
frameHeight : "510",
frameBorderColor : "gray",
frameWidth : "482",
cssTheme : "quicksilver",
loadJS : "getScriptJS.js",
widgetFile : "widget",
serviceOrder : {"bookmark":["digg","delicious","google","stumbleupon","technorati","reddit","slashdot","misterwong","newsvine","propeller","windowslive","yahoobuzz","blinklist","yahoomyweb","faves","blogmarks","diigo","folkd","mixx","yahoobookmarks","backflip","current","bebo","yardbarker","yigg","sphinn","squidoo","shoutwire","indiapad","spurl","myaol","symbaloo","multiply","kaboodle","netvouz","xanga","tipd","care2","kirtsy","fresqui","meneame","funp","segnalo","oknotiziealiceit","n4g","linkagogo","hugg","stumpedia","healthranker","tagza","hotklix","aimshare","fark","dropjack","addio","tweetmeme"],"email":["gmail","msnmail","ymail","aol","email"],"social":["facebook","myspace","linkedin","twitter","friendfeed","identica","orkut","googlebuzz"],"im":["gtalk","msnim","yim","aim"],"blog":["wordpress","blogger","livejournal","typepad","movabletype","xanga"],"tabs":["bookmark","blog","social","email","im"]},
    enableHoverBranding : true,    

    //emod//
    ie : document.all && !window.opera,
    ishttps: ((document.location.href + "").substring(0, 5) == "https"),
    addJavascript: function(jsname) {
        var heads = document.getElementsByTagName('head');
        var th = null;

        if (heads && heads.length && heads.length > 0) {
            for (var i = 0; i < heads.length; i++) {
                if (heads[i] && heads[i].lastChild && heads[i].lastChild.src == jsname) {
                    return false;
                }
            }
            th = document.getElementsByTagName('head')[0];
        } else {
            th = document.getElementById("st" + STTAF.userid);
        }

        var s = document.createElement('script');
        s.setAttribute('type', 'text/javascript');
        s.setAttribute('src', jsname);
        th.appendChild(s);
    }
};


if (STTAF.ishttps) {
STTAF.addJavascript("https://" + STTAF.cdnUrl + "/" + STTAF.loadJS + "");
} else {
    STTAF.addJavascript("http://" + STTAF.cdnUrl + "/" + STTAF.loadJS + "");
}
