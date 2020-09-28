export var Constants;
(function (Constants) {
    var Youtube = /** @class */ (function () {
        function Youtube() {
        }
        Object.defineProperty(Youtube, "SITE_URL", {
            get: function () {
                return "https://youtube.com/c/VisualAcademy";
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Youtube, "START_YEAR", {
            get: function () { return 2010; },
            enumerable: false,
            configurable: true
        });
        return Youtube;
    }());
    Constants.Youtube = Youtube;
    var Blog = /** @class */ (function () {
        function Blog() {
        }
        Object.defineProperty(Blog, "SITE_URL", {
            get: function () {
                return "https://www.dotnetkorea.com";
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Blog, "START_YEAR", {
            get: function () { return 2000; },
            enumerable: false,
            configurable: true
        });
        return Blog;
    }());
    Constants.Blog = Blog;
})(Constants || (Constants = {}));
//# sourceMappingURL=_Constants.js.map