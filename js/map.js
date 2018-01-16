var center;
function calculateCenter() {
    center = map.getCenter();
}
google.maps.event.addDomListener(map, 'idle', function() {
    calculateCenter();
});
google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(center);
});