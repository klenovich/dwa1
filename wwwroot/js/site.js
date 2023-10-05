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

    // Example: Toggle a CSS class on an element
    $('.toggle-element').on('click', function() {
        $(this).toggleClass('active');
    });

    // Example: Show a hidden element
    $('#showElementButton').on('click', function() {
        $('#hiddenElement').show();
    });

    // Example: Hide an element
    $('#hideElementButton').on('click', function() {
        $('#hiddenElement').hide();
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

// Example AJAX Request
function fetchData() {
    // Make an AJAX request to an API
    $.ajax({
        url: '/api/data',
        method: 'GET',
        success: function(data) {
            // Handle the data returned from the API
            console.log(data);
        },
        error: function(error) {
            // Handle any errors that occur during the request
            console.error('Error:', error);
        }
    });
}

// Example Form Submission
$('#myForm').submit(function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather form data
    var formData = $(this).serialize();

    // Submit the data via AJAX
    $.ajax({
        url: '/api/submitForm',
        method: 'POST',
        data: formData,
        success: function(response) {
            // Handle the response from the server
            console.log('Form submitted successfully:', response);
        },
        error: function(error) {
            // Handle any errors that occur during the request
            console.error('Error:', error);
        }
    });
});