FactoryGirl.define do
  factory :article do
    title "art_title"
    text "art_text"
    category_id 1
  end
end

FactoryGirl.define do
  factory :comment do
    body "com_body"
    article_id 1
  end
end

FactoryGirl.define do
  factory :category do
    name "cat_name"
  end
end
