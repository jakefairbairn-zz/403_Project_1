function getNavBar()
{
    //Generated NavBar; located here to maintain consistency across pages
    var html = '\
        <nav class="navbar navbar-default">\
            <div class="container-fluid">\
                <div class="navbar-header">\
                    <a class="navbar-brand" href="#">WebSiteName</a>\
                </div>\
                <ul class="nav navbar-nav">\
                    <li><a href="Index">Home</a></li>\
                    <li><a href="Mission">Mission Page</a></li>\
                    <li><a href="About">About Us</a></li>\
                    <li><a href="Contact">Contact Us</a></li>\
                </ul>\
            </div >\
        </nav >\
    ';

    return html;
}

function getFootNavBar()
{
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