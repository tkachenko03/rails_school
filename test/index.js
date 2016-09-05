function newArticles(){$.ajax({url: 'articles/new',success: function(data) {$('.results').html(data)}
     						  })
					   };

function showArticles(){$.ajax({url: 'articles/2',success: function(data) {$('.results').html(data)}
     						  })
					   };

function editArticles(){$.ajax({url: 'articles/2/edit',success: function(data) {$('.results').html(data)}
     						  })
					   };

function destroyArticles(){$.ajax({url: 'articles/9',type:'DELETE'})
						  };
jQuery(function($){
	$(".deleteAction").click( function(){
		alert ($(this).parents('tr')[0]);
		var current_article_tr = $(this).parents('tr')[0];
		alert (current_article_tr);
		alert ($(current_article_tr).attr('data-article_id='));
		if(confirm("Точно удалить?")) {
			$.ajax({
				url: '/articles/' + $(current_article_tr).attr('data-article_id'),
				type: 'POST',
				data: {_metod:'DELETE'},
				success: function (result) {
					$(current_article_tr).fadeOut(200);
					console.log(result);
				}
			})
 		}
	})
})


