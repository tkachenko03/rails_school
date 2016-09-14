FactoryGirl.define do
  factory :comment do
    body "com_body"
    association(:article)
  end
end
