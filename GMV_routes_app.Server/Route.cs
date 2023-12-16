using System.Text.RegularExpressions;
using System;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Mvc;


namespace GMV_routes_app.Server
{
    public class Route
    {
        [JsonConverter(typeof(JsonStringEnumConverter))] // Without this step, enums will be returned as 0 or 1. Need this to convert enums to "Bus" or "Train"
        public enum RouteType
        {
            Train, Bus
        }

        private string _routeColor;
        private string _textColor;
        public RouteType routeType { get; set; }
        
        public string routeColor
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

        public string textColor
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

        public string routeName { get; set; }

        private bool IsValidHexColor(string color)
        {
            // Hex color code regex pattern
            string hexColorPattern = @"^#(?:[0-9a-fA-F]{3}){1,2}$";

            return !string.IsNullOrEmpty(color) && Regex.IsMatch(color, hexColorPattern);
        }
    }

}
