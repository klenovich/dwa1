using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace dwa1.Pages;

public class IndexModel : PageModel
{
    private readonly ILogger<IndexModel> _logger;

    public IndexModel(ILogger<IndexModel> logger)
    {
        _logger = logger;
    }

    public void OnGet()
    {

    }
}

public async Task<IActionResult> OnPostPerformTradeAsync(Trade trade)
{
    if (!ModelState.IsValid)
    {
        return Page();
    }

    // Add your logic for performing the trade here

    return RedirectToPage();
}