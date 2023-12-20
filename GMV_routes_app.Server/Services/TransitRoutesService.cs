namespace GMV_routes_app.Server.Services;

using GMV_routes_app.Server.Models;

public class TransitRoutesService : ITransitRouteService
{
    public IEnumerable<TransitRoute> GetRoutes()
    {
        return _routesDummyData;
    }

    private readonly TransitRoute[] _routesDummyData = [
        new TransitRoute
        {
            RouteType = RouteType.Bus,
            RouteColor = "#E33427",
            TextColor = "#FFFFFF",
            RouteName = "Local 1"
        },
        new TransitRoute
        {
            RouteType = RouteType.Bus,
            RouteColor = "#7E350E",
            TextColor = "#FFFFFF",
            RouteName = "Local 2"
        },
        new TransitRoute
        {
            RouteType = RouteType.Bus,
            RouteColor = "#94DCF8",
            TextColor = "#2C3242",
            RouteName = "Local 3"
        },
        new TransitRoute
        {
            RouteType = RouteType.Bus,
            RouteColor = "#FFC000",
            TextColor = "#2C3242",
            RouteName = "Local 4"
        },
        new TransitRoute
        {
            RouteType = RouteType.Bus,
            RouteColor = "#A02B93",
            TextColor = "#FFFFFF",
            RouteName = "Local 5"
        },
        new TransitRoute
        {
            RouteType = RouteType.Bus,
            RouteColor = "#8ED973",
            TextColor = "#2C3242",
            RouteName = "100 - Southtown Express Rapid Bus Route"
        },
        new TransitRoute
        {
            RouteType = RouteType.Bus,
            RouteColor = "#00B050",
            TextColor = "#FFFFFF",
            RouteName = "200 - Southtown Express Rapid Bus Route"
        },
        new TransitRoute
        {
            RouteType = RouteType.Bus,
            RouteColor = "#3C7D22",
            TextColor = "#FFFFFF",
            RouteName = "300 - Southtown Express Rapid Bus Route"
        },
        new TransitRoute
        {
            RouteType = RouteType.Train,
            RouteColor = "#1B51EE",
            TextColor = "#FFFFFF",
            RouteName = "Blue Line Streetcar"
        },
        new TransitRoute
        {
            RouteType = RouteType.Train,
            RouteColor = "#FF0000",
            TextColor = "#FFFFFF",
            RouteName = "Red Line Streetcar"
        },
    ];

}
