using Microsoft.AspNetCore.Mvc;
using GMV_routes_app.Server.Services;
using GMV_routes_app.Server.Models;

namespace GMV_routes_app.Server.Controllers;

[ApiController]
[Route("arrivals")]
public class ArrivalsController : ControllerBase
{
    private readonly IArrivalService _arrivalsService;
    private readonly ILogger<ArrivalsController> _logger;

    public ArrivalsController(
        IArrivalService arrivalsService,
        ILogger<ArrivalsController> logger)
    {
        _arrivalsService = arrivalsService;
        _logger = logger;
    }

    [HttpGet("{targetRouteName}")]
    public ActionResult<IEnumerable<Arrival>> Get(string targetRouteName)
    {
        try
        {
            var result = _arrivalsService.GetArrivals(targetRouteName);
            return Ok(result);
        }
        catch (Exception ex)
        {
            
            return StatusCode(500, "An error occurred while processing the request." + ex.Message);
        }
    }


}
