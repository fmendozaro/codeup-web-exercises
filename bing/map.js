var map;
var searchBox = document.getElementById("address");
var searchForm = document.getElementById("search-form");

function loadMapScenario() {
    var mapOptions = {
        /* No need to set credentials if already passed in URL */
        center: new Microsoft.Maps.Location(51.50632, -0.12714),
        mapTypeId: Microsoft.Maps.MapTypeId.aerial,
        zoom: 10
    };

    map = new Microsoft.Maps.Map(document.getElementById('myMap'), mapOptions);
}

function search(){
    Microsoft.Maps.loadModule('Microsoft.Maps.Search', function () {
        var searchManager = new Microsoft.Maps.Search.SearchManager(map);
        var requestOptions = {
            bounds: map.getBounds(),
            where: searchBox.value,
            callback: function (answer, userData) {
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