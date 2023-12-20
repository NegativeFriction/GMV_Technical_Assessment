using GMV_routes_app.Server.Models;

namespace GMV_routes_app.Server.Services;

public interface IArrivalService
{
    IEnumerable<Arrival> GetArrivals(string targetRouteName);
}
