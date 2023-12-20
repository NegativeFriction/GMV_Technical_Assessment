# GMV_Technical_Assessment

Technical Assessment for a mid-level developer role with GMV

Startup Instructions using Visual Studio:

Clone this repo (git glone)

In Visual Studio, open the sln file (GMV_routes_app.sln)

Select https from the start options and click start. The project will need a few minutes to update local npm packages and build.

It should automatically open the server at https://localhost:7139 (domains 7139/routes and 7139/arrivals/[arrivalNameWithNoSpaces])

The front end is hosted at https://localhost:5173

Launch From Terminal:

Open a terminal instance and navigate to GMV_routes_app/GMV_routes_app.Server

Enter `donet run --launch-profile "https"`

Nothing will open automatically. You will need to manually navigate to https://localhost:5173
