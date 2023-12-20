using GMV_routes_app.Server.Models;

namespace GMV_routes_app.Server.Services;

public interface ITransitRouteService
{
    IEnumerable<TransitRoute> GetRoutes();
}
