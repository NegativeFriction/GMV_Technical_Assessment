namespace GMV_routes_app.Server
{ 
    public class Destination
{
    public  required string destinationText {  get; set;}

    public required int[] minutesToArrival { get; set;}
}

    public class Arrival: Route
    {
        
        public required Destination[] destinationsData { get; set; }

    }
}
