$('.btn').click(function(){
var query = $("#user-input").val();
console.log(query);
var beginDate = $('#begin-date').val();
var endDate = $('#end-date').val();
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "169661b32aaf416b8072795f6981218f",
  'sort': "newest",
  'q': query,
  "begin_date": beginDate,
  "end_date": endDate,
});
$("button").on("click", function() {
    var animal = $(this).attr("data-animal");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      animal + "&api_key=dc6zaTOxFJmzC&limit=10";
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
  console.log(url);
}).fail(function(err) {
  throw err;
});
})});
