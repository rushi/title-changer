$(window).visibilityChange(function(e) {
    var new_title = "Hello World!";
    // When the document is hidden set it to our custom title
    if (document[e.state] === "hidden" && document.title !== new_title) {
        window.originalDocumentTitle = document.title;
        document.title = new_title;
    }

    // When document becomes visible set it back to the original title
    if (document[e.state] === "visible" && typeof window.originalDocumentTitle != "undefined") {
        document.title = window.originalDocumentTitle;
    }   
});