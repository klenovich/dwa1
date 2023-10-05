// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Your JavaScript code can go here

// Document Ready Event
$(document).ready(function() {
    // Code to execute when the document is fully loaded and ready

    // Example: Change the background color of the body
    $('body').css('background-color', '#f0f0f0');

    // Example: Add a click event listener to a button
    $('#myButton').on('click', function() {
        // Code to run when the button is clicked
        alert('Button clicked!');
    });

    // You can add more code and functionality here
});

// Window Load Event
$(window).on('load', function() {
    // Code to execute when all page assets (images, styles, etc.) are loaded

    // Example: Initialize a carousel or slider
    $('.carousel').carousel();

    // Example: Load additional content or perform actions after page load
    loadAdditionalContent();
});

// Example Function to Load Additional Content
function loadAdditionalContent() {
    // Code to load content dynamically
    $.get('/api/getMoreContent', function(data) {
        // Handle the loaded content here
        $('#additionalContent').html(data);
    });
}

// Example of a Custom JavaScript Function
function customFunction(param1, param2) {
    // Code for your custom functionality
    var result = param1 + param2;
    return result;
}

// You can define more functions and add your JavaScript code as needed
