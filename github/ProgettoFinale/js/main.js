/**
 * @file: main.js
 * @author: Francesco Panetta
 *
 * Purpose of file:
 * ...
 */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
 
$('.googleMap').ready(function() {
    // Handler for .load() called.
    
});

/*********** CUSTOM SELECT ***************/

$(".custom-select").each(function() {
    var classes = $(this).attr("class"),
        id      = $(this).attr("id"),
        name    = $(this).attr("name");
    var template =  '<div class="' + classes + '">';
        template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
        template += '<div class="custom-options">';
        $(this).find("option").each(function() {
          template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
        });
    template += '</div></div>';
    
    $(this).wrap('<div class="custom-select-wrapper"></div>');
    $(this).hide();
    $(this).after(template);
  });
  $(".custom-option:first-of-type").hover(function() {
    $(this).parents(".custom-options").addClass("option-hover");
  }, function() {
    $(this).parents(".custom-options").removeClass("option-hover");
  });
  $(".custom-select-trigger").on("click", function() {
    $('html').one('click',function() {
      $(".custom-select").removeClass("opened");
    });
    $(this).parents(".custom-select").toggleClass("opened");
    event.stopPropagation();
  });
  $(".custom-option").on("click", function() {
    $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
    $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
    $(this).addClass("selection");
    $(this).parents(".custom-select").removeClass("opened");
    $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
  });

  $("form").submit(function(){
    var $inputs = $('form :input');
    // not sure if you wanted this, but I thought I'd add it.
    // get an associative array of just the values.
    var values = {};
    var table = $('<table>').addClass('tableRiepilogo');
    $inputs.each(function() {
        values[this.name] = $(this).val();
        if ($(this).val() != "Submit") {
            var row = $('<tr>').addClass('row');
            var title = $('<th>').addClass('rowTitle').text(this.name);
            var value = $('<th>').addClass('rowValue').text(values[this.name]);
            row.append(title);
            row.append(value);
            table.append(row);
        }
    });
    $('.contactForm').empty(); // rimuove tutto l'HTML dentro
    $('.contactForm').append(table); // Appende la table al contactForm
    console.log(values);
    return false;
});