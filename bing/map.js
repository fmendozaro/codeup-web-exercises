var map;
var searchBox = document.getElementById("address");
var searchForm = document.getElementById("search-form");
var codeup = {
    latitude: 29.4267857,
    longitude: -98.4895764
};

function loadMapScenario() {
    var mapOptions = {
        /* No need to set credentials if already passed in URL */
        center: new Microsoft.Maps.Location(codeup.latitude, codeup.longitude),
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        zoom: 18
    };

    map = new Microsoft.Maps.Map(document.getElementById('myMap'), mapOptions);
    map.entities.push(new Microsoft.Maps.Pushpin(codeup, {color: "green"}));
}

function search(){
    Microsoft.Maps.loadModule('Microsoft.Maps.Search', function () {
        var searchManager = new Microsoft.Maps.Search.SearchManager(map);
        var requestOptions = {
            bounds: map.getBounds(),
            where: searchBox.value,
            callback: function (answer, userData) {
                console.log(answer.results[0]);
                map.setView({ bounds: answer.results[0].bestView });
                map.entities.push(new Microsoft.Maps.Pushpin(answer.results[0].location));
            }
        };
        searchManager.geocode(requestOptions);
    });
}

searchForm.addEventListener("submit", function(e) {
    e.preventDefault();
    search();
});