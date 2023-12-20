namespace GMV_routes_app.Server.Models;



    public class Arrival: TransitRoute
    {
        public required Destination[] DestinationsData { get; set; }

    }
