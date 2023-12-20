using GMV_routes_app.Server.Models;

namespace GMV_routes_app.Server.Services;

public class ArrivalService : IArrivalService
{
    public IEnumerable<Arrival> GetArrivals(string targetRouteName)
    {
        var filteredArrivals = 
            _dummyArrivalData
                .Where(obj => obj.RouteName != null 
                              && obj.RouteName.Replace(" ", "")
                                              .Equals(targetRouteName, StringComparison.InvariantCultureIgnoreCase))
                .ToArray();

        if (filteredArrivals.Length == 0)
        {
            throw new Exception($"The route name '{targetRouteName}' is not supported.");
        }

        return filteredArrivals;
    }

    public Arrival[] _dummyArrivalData = new[]
    {
        new Arrival
        {
            RouteName="Local 1",
            RouteType=RouteType.Bus,
            RouteColor="#E33427",
            TextColor="#FFFFFF",
            DestinationsData = new[]
            {
                new Destination
                {
                    DestinationText="Westside",
                    MinutesToArrival = new[]
                    {
                        10,20,30,40,50,60
                    }
                },
                    new Destination
                {
                    DestinationText="Shortline - Downtown Only",
                    MinutesToArrival = new[]
                    {
                        15,25,35,45,55,65
                    }
                }
            }
        },

        new Arrival
        {
            RouteName = "Local 2",
            RouteType=RouteType.Bus,
            RouteColor="#7E350E",
            TextColor="#FFFFFF",
            DestinationsData = new[]
            {
                new Destination
                {
                    DestinationText= "Eastside",
                    MinutesToArrival = new[]
                    {
                        8,16,24,32,40,48,56,64,72
                    }
                }
            }
        },

        new Arrival
        {
            RouteName = "Local 3",
            RouteType=RouteType.Bus,
            RouteColor="#94DCF8",
            TextColor="#2C3242",
            DestinationsData = new[]
            {
                new Destination
                {
                    DestinationText="Bayside via Library -- detours around Main street due to City Hall Construction through January 1",
                    MinutesToArrival = new[]
                    {
                        5,10,15,20,25,30
                    }
                },
                new Destination
                {
                    DestinationText="Oceanside via Pacific",
                    MinutesToArrival = new[]
                    {
                        7,12,17,22,27
                    }
                }
            }
            },

        new Arrival
        {
            RouteName = "Local 4",
            RouteType=RouteType.Bus,
            RouteColor="#FFC000",
            TextColor="#2C3242",
            DestinationsData = new[]
            {
                new Destination
                {
                    DestinationText="Downtown Circulator",
                    MinutesToArrival = new[]
                    {
                        9,12,17,19,26,27,29,30,40
                    }
                }
            }
        },

        new Arrival
        {
            RouteName = "Local 5",
            RouteType=RouteType.Bus,
            RouteColor="#A02B93",
            TextColor="#FFFFFF",
            DestinationsData = new[]
            {
                new Destination
                {
                    DestinationText="Southtown Transit Center",
                    MinutesToArrival = new[]
                    {
                        20,40,60
                    }
                }
            }
        },

        new Arrival
        {
            RouteName = "100 - Southtown Express Rapid Bus Route",
            RouteType=RouteType.Bus,
            RouteColor="#8ED973",
            TextColor="#2C3242",
            DestinationsData = new[]
            {
                new Destination
                {
                    DestinationText="Southtown Transit Center",
                    MinutesToArrival = new[]
                    {
                        28,57,99,120
                    }
                }
            }
        },

        new Arrival
        {
            RouteName = "200 - Southtown Express Rapid Bus Route",
            RouteType=RouteType.Bus,
            RouteColor="#00B050",
            TextColor="#FFFFFF",
            DestinationsData = new[]
            {
                new Destination
                {
                    DestinationText="Southtown Transit Center - via Northglen",
                    MinutesToArrival = new[]
                    {
                        15,75,90,120
                    }
                }
            }
        },

        new Arrival
        {
            RouteName = "300 - Southtown Express Rapid Bus Route",
            RouteType=RouteType.Bus,
            RouteColor="#3C7D22",
            TextColor="#FFFFFF",
            DestinationsData = new[]
            {
                new Destination
                {
                    DestinationText="Southtown Transit Center - via Pacific",
                    MinutesToArrival = new[]
                    {
                        10,72,119
                    }
                }
            }
        },

        new Arrival
        {
            RouteName = "Blue Line Streetcar",
            RouteType=RouteType.Bus,
            RouteColor="#1B51EE",
            TextColor="#FFFFFF",
            DestinationsData = new[]
            {
                new Destination
                {
                    DestinationText="Northbound",
                    MinutesToArrival = new []
                    {
                        5,10,14,20,25
                    }
                },
                new Destination
                {
                    DestinationText="Southbound",
                    MinutesToArrival=new[]
                    {
                        6,11,16,23,28
                    }
                }
            }
        },

        new Arrival
        {
            RouteName = "Red Line Streetcar",
            RouteType=RouteType.Bus,
            RouteColor="#FF0000",
            TextColor="#FFFFFF",
            DestinationsData = new[]
            {
                new Destination
                {
                    DestinationText="Eastbound",
                    MinutesToArrival = new[]
                    {
                        5,10,14,20,25
                    }
                },
                new Destination
                {
                    DestinationText="Westbound",
                    MinutesToArrival=new[]
                    {
                        6,11,16,23,28
                    }
                }
            }
        },
    };
}
