FactoryGirl.define do
  factory :user do
    name "user123456"
    email "123@gmail.com"
    encrypted_password "Qwerty123456"
    sign_in_count "1"
  end
end
