angular.module('template').run(['$templateCache', function ($templateCache) {
  $templateCache.put("template.tpl.html",
    "<div class=\"foo\" aria-relevant=\"all\" aria-atomic=\"false\" aria-hidden=\"true\">\n"   +
    "    <div class=\"bar\">\n" +
    "        Test Example\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
