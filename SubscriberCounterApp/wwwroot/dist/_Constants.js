export var Constants;
(function (Constants) {
    class Youtube {
        static get SITE_URL() {
            return "https://youtube.com/c/VisualAcademy";
        }
        static get START_YEAR() { return 2010; }
    }
    Constants.Youtube = Youtube;
    class Blog {
        static get SITE_URL() {
            return "https://www.dotnetkorea.com";
        }
        static get START_YEAR() { return 2000; }
    }
    Constants.Blog = Blog;
})(Constants || (Constants = {}));
