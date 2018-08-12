$(document).ready(function(){
var options = {
    animateThreshold: 100,
    scrollPollInterval: 1
}
$('.aniview').AniView(options);
    $(function() {
    $("[data-toggle=popover]").popover({
        html : true,
		content: function() {
			var content = $(this).attr("data-popover-content");
			return $(content).children(".popover-body").html();
		}
    });
 
	$('.map').maphilight({
		fillColor: 'e1c3c3',
		strokeColor: 'e1c3c3',
		fillOpacity: 0.8
	});
	
	$('.wing1').mouseover(function(e) {$('.wing-area').mouseover();}).mouseout(function(e) {$('.wing-area').mouseout();}).click(function(e) { e.preventDefault();});
	$('.wing2').mouseover(function(e) {$('.wing-area').mouseover();}).mouseout(function(e) {$('.wing-area').mouseout();}).click(function(e) { e.preventDefault(); });
	$('.door').mouseover(function(e) {$('.door-area').mouseover();}).mouseout(function(e) {$('.door-area').mouseout();}).click(function(e) { e.preventDefault(); });
	$('.roof').mouseover(function(e) {$('.roof-area').mouseover();}).mouseout(function(e) {$('.roof-area').mouseout();}).click(function(e) { e.preventDefault(); });
	$('.lights').mouseover(function(e) {$('.lights-area').mouseover();}).mouseout(function(e) {$('.lights-area').mouseout();}).click(function(e) { e.preventDefault(); });
	$('.hood').mouseover(function(e) {$('.hood-area').mouseover();}).mouseout(function(e) {	$('.hood-area').mouseout();	}).click(function(e) { e.preventDefault(); });
	$('.bumper').mouseover(function(e) {	$('.bumper-area').mouseover();}).mouseout(function(e) {$('.bumper-area').mouseout();}).click(function(e) { e.preventDefault(); });
		
});
});
