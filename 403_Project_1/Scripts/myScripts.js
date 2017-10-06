function getNavBar()
{
    //Generated header NavBar; located here to maintain consistency across pages
    var html = '\
        <nav class="navbar navbar-default">\
        <div class="container-fluid" >\
            <div class="navbar-header">\
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#head_nav_content">\
                    <span class="icon-bar"></span>\
                    <span class="icon-bar"></span>\
                    <span class="icon-bar"></span>\
                </button>\
                <a class="navbar-brand" href="#">WebSiteName</a>\
            </div>\
            <div class="collapse navbar-collapse" id="head_nav_content">\
                <ul class="nav navbar-nav">\
                    <li><a href="Index">Home</a></li>\
                    <li><a href="Mission">Mission Page</a></li>\
                    <li><a href="About">About Us</a></li>\
                    <li><a href="Contact">Contact Us</a></li>\
                </ul>\
            </div>\
            </div >\
        </nav >\
    ';

    return html;
}

function getFootNavBar()
{
    //Generated footer NavBar; located here to maintain consistency across pages
    var html = '\
        <div class="container-fluid" >\
            <ul class="nav navbar-nav navbar-right">\
                <li><a href="Index">Home</a></li>\
                <li><a href="Mission">Mission Page</a></li>\
                <li><a href="About">About Us</a></li>\
                <li><a href="Contact">Contact Us</a></li>\
            </ul>\
        </div>\
    ';

    return html;
}