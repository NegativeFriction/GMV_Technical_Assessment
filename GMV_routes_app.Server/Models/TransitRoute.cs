using System.Text.RegularExpressions;

namespace GMV_routes_app.Server.Models;

public class TransitRoute
{
    private string? _routeColor;
    private string? _textColor;

    public RouteType RouteType { get; set; }
    
    public string? RouteColor
    {
        get => _routeColor;
        set
        {
            if (!IsValidHexColor(value))
            {
                throw new ArgumentException("Please submit a valid hex color code");
            }
            _routeColor = value;
        }
    }

    public string? TextColor
    {
        get => _textColor;
        set
        {
            if (!IsValidHexColor(value))
            {
                throw new ArgumentException("Invalid hex color code for textColor.");
            }
            _textColor = value;
        }
    }

    public string? RouteName { get; set; }

    private bool IsValidHexColor(string? color)
    {
        // Hex color code regex pattern
        string hexColorPattern = @"^#(?:[0-9a-fA-F]{3}){1,2}$";

        return !string.IsNullOrEmpty(color) && Regex.IsMatch(color, hexColorPattern);
    }
}
