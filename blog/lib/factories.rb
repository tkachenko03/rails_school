

FactoryGirl.define do
  factory :user do
    name "myUser"
    email "user123456@gmail.com"
    password "user123456"
  end
end

FactoryGirl.define do
  factory :category do
    name "cat_name"
  end
end

FactoryGirl.define do
  factory :article do
    title "art_title"
    text "art_text"
    category_id 1
    user_id 1
  end
end

FactoryGirl.define do
  factory :comment do
    author "com_author"
    body "com_body"
    article_id 1
    user_id 1
  end
end
