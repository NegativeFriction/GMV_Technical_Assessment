using Microsoft.AspNetCore.Mvc;

namespace GMV_routes_app.Server.Controllers
{
    [ApiController]
    [Route("routes")]
    public class RouteController : ControllerBase
    {

        private readonly ILogger<RouteController> _logger;

        public RouteController(ILogger<RouteController> logger)
        {
            _logger = logger;
        }

        private readonly Route[] routesDummyData = [
            new Route
            {
            routeType = Route.RouteType.Bus,
            routeColor = "#E33427",
            textColor = "#FFFFFF",
            routeName = "Local 1"
        },
            new Route
            {
                routeType = Route.RouteType.Bus,
                routeColor = "#7E350E",
                textColor = "#FFFFFF",
                routeName = "Local 2"
            },
            new Route
            {
                routeType = Route.RouteType.Bus,
                routeColor = "#94DCF8",
                textColor = "#2C3242",
                routeName = "Local 3"
            },
            new Route
            {
                routeType = Route.RouteType.Bus,
                routeColor = "#FFC000",
                textColor = "#2C3242",
                routeName = "Local 4"
            },
            new Route
            {
                routeType = Route.RouteType.Bus,
                routeColor = "#A02B93",
                textColor = "#FFFFFF",
                routeName = "Local 5"
            },
            new Route
            {
                routeType = Route.RouteType.Bus,
                routeColor = "#8ED973",
                textColor = "#2C3242",
                routeName = "100 - Southtown Express Rapid Bus Route"
            },
            new Route
            {
                routeType = Route.RouteType.Bus,
                routeColor = "#00B050",
                textColor = "#FFFFFF",
                routeName = "200 - Southtown Express Rapid Bus Route"
            },
            new Route
            {
                routeType = Route.RouteType.Bus,
                routeColor = "#3C7D22",
                textColor = "#FFFFFF",
                routeName = "300 - Southtown Express Rapid Bus Route"
            },
            new Route
            {
                routeType = Route.RouteType.Train,
                routeColor = "#1B51EE",
                textColor = "#FFFFFF",
                routeName = "Blue Line Streetcar"
            },
            new Route
            {
                routeType = Route.RouteType.Train,
                routeColor = "#FF0000",
                textColor = "#FFFFFF",
                routeName = "Red Line Streetcar"
            },
        ];


        [HttpGet]
        public IEnumerable<Route> Get()
        {
            return routesDummyData;

        }
    }
}
