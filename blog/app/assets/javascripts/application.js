// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//=require jquery_ujs
//require turbolinks
//= require_tree .

jQuery(function ($) {
    $(document).ready(function(){

        $('.save-article').click(function (event) {
            event.preventDefault();

            var articleData   = $('form#new_article').serialize();
            alert(articleData);

                $.ajax({
                    url: '/articles/',
                    type: 'POST',
                    data: articleData
                })
            
        })
        $('.save-category').click(function (event) {
            event.preventDefault();

            var categoryData   = $('form#new_category').serialize();
            alert(categoryData);

                $.ajax({
                    url: '/categories/',
                    type: 'POST',
                    data: categoryData
                })
            
        })



	      $(".delete-article").click( function(event){
          event.preventDefault();
		      var current_article_tr = $(this).parents('tr')[0];
		        if(confirm("Точно удалить эту статью?")) {
			        $.ajax({
				        url: '/articles/' + $(current_article_tr).attr('data-item_id'),
				        type: 'DELETE',
				          success: function (result) {
					          $(current_article_tr).fadeOut(200);
					          console.log(result);
				          }
			        })
         		}
	      })
         // Удалить выбранную категорию
	      $(".delete-category").click( function(event){
          event.preventDefault();
		      var current_сategory_tr = $(this).parents('tr')[0];
		        if(confirm("Точно удалить?")) {
			        $.ajax({
				        url: '/categories/' + $(current_сategory_tr).attr('data-item_id'),
				        type: 'DELETE',
				          success: function (result) {
					          $(current_сategory_tr).fadeOut(200);
					          console.log(result);
				          }
			        })
         		}
	      })



    })
})
