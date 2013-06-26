/*
 * Based on the Page Visibiity API - http://davidwalsh.name/page-visibility
 */
(function() {
    var state, visibilityChange;
    var new_title = 'My New Title'; // Customize this to your requirements

    if (typeof document.hidden !== "undefined") {
        visibilityChange = "visibilitychange";
        state = "visibilityState";
    } else if (typeof document.mozHidden !== "undefined") {
        visibilityChange = "mozvisibilitychange";
        state = "mozVisibilityState";
    } else if (typeof document.msHidden !== "undefined") {
        visibilityChange = "msvisibilitychange";
        state = "msVisibilityState";
    } else if (typeof document.webkitHidden !== "undefined") {
        visibilityChange = "webkitvisibilitychange";
        state = "webkitVisibilityState";
    }

    $(document).on(visibilityChange, function(e) {
        
        // When the document is hidden set it to our custom title
        if (document[state] === "hidden" && document.title !== new_title) {
            window.originalDocumentTitle = document.title;
            document.title = new_title;
        }

        // When document becomes visible set it back to the original title
        if (document[state] === "visible" && typeof window.originalDocumentTitle != "undefined") {
            document.title = window.originalDocumentTitle;
        }
    });

})();