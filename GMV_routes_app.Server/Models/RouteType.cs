using System.Text.Json.Serialization;

namespace GMV_routes_app.Server.Models;

// Without this step, enums will be returned as 0 or 1. Need this to convert enums to "Bus" or "Train"
[JsonConverter(typeof(JsonStringEnumConverter))] 
public enum RouteType
{
    Train, Bus
}