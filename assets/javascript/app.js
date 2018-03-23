var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var apiKey = "bb134ec959784cc58e11ecfeb4e61900";
var searchTerm = "China";
var numberRecords = 5;
var startYear = '';
var endYear = '';
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
  }
}).fail(function(err) {
  throw err;
});