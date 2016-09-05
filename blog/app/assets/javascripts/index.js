function Articles(){$.ajax({url: 'articles',success: function(data) {$('.results').html(data)}
     						  })
					   };
