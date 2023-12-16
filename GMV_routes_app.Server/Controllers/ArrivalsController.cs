using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Text.Json;

namespace GMV_routes_app.Server.Controllers
{
    [ApiController]
    [Route("arrivals")]
    public class ArrivalsController : ControllerBase
    {

        private readonly ILogger<ArrivalsController> _logger;

        public ArrivalsController(ILogger<ArrivalsController> logger)
        {
            _logger = logger;
        }


        public Arrival[] dummyArrivalData = new Arrival[]
    {
            new Arrival
        {
            routeName="Local 1",
            destinationsData = new Destination[]
            {
                new Destination
                {
                    destinationText="Westside",
                    minutesToArrival = new int[]
                    {
                        10,20,30,40,50,60
                    }
                },
                  new Destination
                {
                    destinationText="Shortline - Downtown Only",
                    minutesToArrival = new int[]
                    {
                        15,25,35,45,55,65
                    }
                }
            }
        },

            new Arrival
            {
                routeName = "Local 2",
                destinationsData = new Destination[]
            {
                new Destination
                {
                    destinationText="Eastside",
                    minutesToArrival = new int[]
                    {
                       8,16,24,32,40,48,56,64,72
                    }
                }
            }
            },

            new Arrival
            {
                routeName = "Local 3",
                destinationsData = new Destination[]
            {
                new Destination
                {
                    destinationText="Bayside via Library -- detours around Main street due to City Hall Construction through January 1",
                    minutesToArrival = new int[]
                    {
                       5,10,15,20,25,30
                    }
                },
                new Destination
                {
                    destinationText="Oceanside via Pacific",
                    minutesToArrival = new int[]
                    {
                       7,12,17,22,27
                    }
                }
            }
            },

            new Arrival
            {
                routeName = "Local 4",
                destinationsData = new Destination[]
            {
                new Destination
                {
                    destinationText="Downtown Circulator",
                    minutesToArrival = new int[]
                    {
                       9,12,17,19,26,27,29,30,40
                    }
                }
            }
            },

            new Arrival
            {
                routeName = "Local 5",
                destinationsData = new Destination[]
            {
                new Destination
                {
                    destinationText="Southtown Transit Center",
                    minutesToArrival = new int[]
                    {
                       20,40,60
                    }
                }
            }
            },

            new Arrival
            {
                routeName = "100 - Southtown Express Rapid Bus Route",
                destinationsData = new Destination[]
            {
                new Destination
                {
                    destinationText="Southtown Transit Center",
                    minutesToArrival = new int[]
                    {
                       28,57,99,120
                    }
                }
            }
            },

            new Arrival
            {
                routeName = "200 - Southtown Express Rapid Bus Route",
                destinationsData = new Destination[]
            {
                new Destination
                {
                    destinationText="Southtown Transit Center - via Northglen",
                    minutesToArrival = new int[]
                    {
                       15,75,90,120
                    }
                }
            }
            },

            new Arrival
            {
                routeName = "300 - Southtown Express Rapid Bus Route",
                destinationsData = new Destination[]
            {
                new Destination
                {
                    destinationText="Southtown Transit Center - via Pacific",
                    minutesToArrival = new int[]
                    {
                       10,72,119
                    }
                }
            }
            },

            new Arrival
            {
                routeName = "Blue Line Streetcar",
                destinationsData = new Destination[]
            {
                new Destination
                {
                    destinationText="Northbound",
                    minutesToArrival = new int[]
                    {
                       5,10,14,20,25
                    }
                },
                new Destination
                {
                    destinationText="Southbound",
                    minutesToArrival=new int[]
                    {
                        6,11,16,23,28
                    }
                }
            }
            },

            new Arrival
            {
                routeName = "Red Line Streetcar",
                destinationsData = new Destination[]
            {
                new Destination
                {
                    destinationText="Eastbound",
                    minutesToArrival = new int[]
                    {
                       5,10,14,20,25
                    }
                },
                new Destination
                {
                    destinationText="Westbound",
                    minutesToArrival=new int[]
                    {
                        6,11,16,23,28
                    }
                }
            }
            },
    };


        [HttpGet("{targetRouteName}")]
        public ActionResult<Arrival[]> myMethod(string targetRouteName)
        {
            try
            {

                Arrival[] filteredArrivals = dummyArrivalData
                    .Where(obj => obj.routeName != null && obj.routeName.Replace(" ", "").ToLowerInvariant() == targetRouteName.ToLowerInvariant())
                    .ToArray();

                if (filteredArrivals.Length == 0)
                {
                    return BadRequest($"The route name '{targetRouteName}' is not supported.");
                }

                return filteredArrivals;
            }
            catch (Exception ex)
            {
                // Log the exception for debugging purposes
                // logger.LogError(ex, "An error occurred in myMethod.");
                return StatusCode(500, "An error occurred while processing the request.");
            }
        }


    }
}
