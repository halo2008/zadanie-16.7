var url = 'https://restcountries.eu/rest/v2/name/';
var capital = $('#capital');

$('#search').click(searchCountries);

function searchCountries() {
    clearTable();
    var countryName = $('#country-name').val();
    $('#tab').css('dispaly', 'block');
    if(!countryName.length) countryName = 'Poland';
    $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList
    });
}

function clearTable() {
    var countriesList = $('.list');
    countriesList.empty(); 
}

function showCountriesList(resp) {    
    resp.forEach(function(item) {
        $('#co-name').text(item.name);
        $('<td>').text(item.capital).appendTo($('#capital')).attr('class', 'list');
        $('<td>').text(item.population).appendTo($('#population')).attr('class', 'list');
        $('<td>').text(item.area).appendTo($('#land')).attr('class', 'list');
        $('<td>').text(item.borders).appendTo($('#border')).attr('class', 'list');
        $('<td>').text(item.nativeName).appendTo($('#native')).attr('class', 'list');
        $('<td>').text(item.region).appendTo($('#region')).attr('class', 'list');
        $('<td>').text(item.currencies.name).appendTo($('#currency')).attr('class', 'list');
        $('#flag').attr('src', item.flag).css('display', 'block');
    });    
}