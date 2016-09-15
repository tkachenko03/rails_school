class NewCommentMailer < ApplicationMailer
  default from: 'notifications@example.com'

  def new_comment(comment, article)
    @comment = comment
    @article = article
    mail(to: "azon031284@rambler.ru", subject: 'new coment')
  end
end
