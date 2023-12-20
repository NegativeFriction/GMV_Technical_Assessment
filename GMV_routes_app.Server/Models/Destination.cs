namespace GMV_routes_app.Server.Models;

public class Destination
{
    public required string DestinationText { get; set; }
    public required int[] MinutesToArrival { get; set; }
}
