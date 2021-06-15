const mapBox = document.getElementById('map');

mapboxgl.accessToken = 'pk.eyJ1IjoibGFzb3YiLCJhIjoiY2tram9mcnZiMjEwazJ3cXVyeXYxbDhvbyJ9.5qn0Dv9MKMPXXh32haHYxQ';
let map = new mapboxgl.Map({
    container: mapBox,
    style: 'mapbox://styles/examples/cjgiiz9ck002j2ss5zur1vjji',
    center: [-87.661557, 41.893748],
    zoom:9
});
map.scrollZoom.disable();
map.addControl(new mapboxgl.NavigationControl());
