// Create a new web application builder with command-line arguments.
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();

// Build the application.
var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // Use the global exception handler when not in development mode.
    app.UseExceptionHandler("/Error");
}

// Serve static files like CSS, JavaScript, and images from wwwroot folder.
app.UseStaticFiles();

// Enable routing for the application.
app.UseRouting();

// Configure authorization for your application.
app.UseAuthorization();

// Map Razor Pages, which are typically used for rendering HTML views.
app.MapRazorPages();

// Start the application.
app.Run();