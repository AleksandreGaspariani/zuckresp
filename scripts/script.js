
$(document).ready(function(){
    $('#dropdown-button').parent('a').on('click',function(){
        $('#dropdown-menu').toggleClass('d-none');
    });
});