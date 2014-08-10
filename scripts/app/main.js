requirejs.config({
    baseUrl: "scripts/lib",
    paths: {
        "jquery": "../jquery-1.11.1.min",
        "app": "../app"
    }
});

require(["jquery", "app/sub", "app/foo"], function ($) {
    $("div").text("Works");
});