var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var apiKey = "bb134ec959784cc58e11ecfeb4e61900";

var searchTerm;
var numberRecords;
var startYear;
var endYear;
$("submit-search").on("click", function(){
  searchTerm = $("#search").val();
  numberRecords = $("#records").val();
  startYear = $("#start-year").val();
  endYear = $("#end-year").val();
});
$("#clear-results").on("click",function(){
  
})

url += '?' + "api-key=" + apiKey + "&q=" + searchTerm + "&fl=web_url, headline, byline, pub_date";
if (startYear !== ""){
  url += "&begin_date"+startYear+"0101";

}
if (endYear !== ""){
  url += "&end_date"+endYear+"1231";

}

$.ajax({
  url: url,
  method: 'GET',
}).then(function(result) {
  console.log(result);
  var articles = result.response.docs
  
  for (var i = 0; i < numberRecords; i++) {
    var webUrl = articles[i].web_url;
    var headline = articles[i].headline.main;
    var byLine = articles[i].byline.original;
    var pubDate = articles[i].pub_date;
    console.log(webUrl);
    console.log(headline);
    console.log(byLine);
    console.log(pubDate);
    var articleDiv = $("<div>");

    var number = $("<div>" + (i+1) + "</div>");
    articleDiv.append(number);

    var title = $("<h1>");
    title.text(headline);
    articleDiv.append(title);

    var author = $("<p>");
    author.text(byLine);
    articleDiv.append(author);

    var date = $("<p>");
    date.text(pubDate);
    articleDiv.append(date);

    var link = $("<a>");
    link.text(webUrl);
    link.attr("href", webUrl);
    articleDiv.append(link);
    $("#top-articles").append(articleDiv);
  }
}).fail(function(err) {
  throw err;
});