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

    })


	$(".deleteAction").click( function(event){
    event.preventDefault();
		var current_article_tr = $(this).parents('tr')[0];
		  if(confirm("Точно удалить?")) {
			  $.ajax({
				  url: '/articles/' + $(current_article_tr).attr('data-article_id'),
				  type: 'DELETE',
				    success: function (result) {
					    $(current_article_tr).fadeOut(200);
					    console.log(result);
				    }
			  })
   		}
	})
})
