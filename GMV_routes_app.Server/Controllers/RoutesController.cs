using Microsoft.AspNetCore.Mvc;
using GMV_routes_app.Server.Services;
 using GMV_routes_app.Server.Models;

namespace GMV_routes_app.Server.Controllers;


[ApiController]
[Route("routes")]

public class RouteController : ControllerBase
{
    private readonly ITransitRouteService _routeService;
    private readonly ILogger<RouteController> _logger;

    public RouteController(
        ITransitRouteService routeService,
        ILogger<RouteController> logger)
    {
        _routeService = routeService;
        _logger = logger;
    }

    [HttpGet]
    public IEnumerable<TransitRoute> Get()
    {
        return _routeService.GetRoutes();
    }
}
