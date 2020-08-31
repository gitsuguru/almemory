# README
![画面収録 2020-08-30 3 23 11 mov](https://user-images.githubusercontent.com/67818465/91643698-83ff3a00-ea70-11ea-8455-305b5f3f7a6f.gif)

## アプリ名
Almemory

# 概要（このアプリでできること）
・メモ

・グループ作成

・グループ編集

・ユーザー情報の編集

・非同期通信でのチャット

・料理レシピサイトへの遷移

・ユーザー登録、ログイン、ログアウト

・商品の値段登録、非同期通信での検索

・計算（消費税額等の自動計算）

# 本番環境
デプロイ先：

ログインEメール：

ログインパスワード：

# 制作背景(意図)
今回このアプリを作成した理由としては、大きく2点あります。

1点目が買い物の際の、値段に対する課題を解決するためです。近年の社会情勢の中、節約や自炊に注目が集まっています。その中で買い物に行く際、できるだけ無駄なく安い商品を買いたいという意識も高まっています。しかし、実際に買い物に行って商品をみて、これは安い商品なのかどうか判断するのは難しく、また以前買ったときの値段を記憶しておくのも限界があります。そこでその問題を解決しようとこのアプリを制作しました。商品の値段登録ができ検索できることで、安いかどうかの基準を作ることができます。そのため、商品を買うべきかどうかの判断を手助けしてくれます。また一度買った商品は登録することで、いつでも以前買ったときの値段が確認でき記憶する必要もなくなります。

2点目としては、登録した値段を自分だけが保有するのではなく必要なグループで保有させたかったからです。例えば、母が僕のためにサッカーのソックスを買ってきてくれたとします。しかしその値段をみたら、いつも買っているソックスの2倍の値段。そこで発するぼくの「 もっと安いのでよかったのに〜 」発言。母の優しい気持ちが報われません（実体験）。そこでもし母とのグループで値段を共有できていたら、母はもっと良い判断を降せていたに違いないと思いこのアプリを作成しました。LINEや電話で直接聞けばいいと思われるかもしれませんが、いつ返事がくるかわからない、電話に出るかもわからないではリスクが高すぎます。必要なときに必要なグループで必要な情報を手に入れることができるというのを目指しました。

また上記の２点に付属して、僕が実際に買い物をする際にあったらいいなと思う機能を実装しています。

# DEMO
・メモ

・グループ作成

・グループ編集

・ユーザー情報の編集

・非同期通信でのチャット

・料理レシピサイトへの遷移

・ユーザー登録、ログイン、ログアウト

・商品の値段登録、非同期通信での検索

・計算（消費税額等の自動計算）

  　⇒gifで動画や写真を貼って、ビューのイメージを掴んでもらいます。
   　特に、デプロイがまだできていない場合はDEMOをつけることで見た目を企業側に伝えることができます。

# 工夫したポイント
工夫したポイントとしては、グループごとで情報を持たせるということです。商品の登録、検索、メモ機能にしてもグループごとで情報を持たせることで、同じグループで同じ情報を共有できるようにしました。また、グループごとに持っている情報が異なるので、そのグループにあった情報のみを共有することができます。

# 使用技術(開発環境)
・ruby '2.6.5'

・gem 'rails', '~> 6.0.0'

・gem 'mysql2', '>= 0.4.4'

・gem 'sass-rails', '~> 5'

・gem 'jbuilder', '~> 2.7'

・gem "haml-rails", ">= 1.0", '<= 2.0.1'

・gem 'font-awesome-sass'

・gem 'devise'

・gem 'carrierwave'

・gem 'mini_magick'

・gem 'jquery-rails'

・gem 'pry-rails'

・gem 'rakuten_web_service'

・slick

## 課題や今後実装したい機能
・

・

# DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|
|password|string|null: false|
|email|string|null: false, unique: true|
|image|string||
### アソシエーション
-has_many :group_users

-has_many :groups, through: :group_users

-has_many :messages
## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|
### アソシエーション
-has_many :group_users, dependent: :destroy

-has_many :users, through: :group_users, dependent: :destroy

-has_many :messages, dependent: :destroy

-has_many :prices, dependent: :destroy

-has_many :memos, dependent: :destroy
## group_usersテーブル
|Column|Type|Options|
|------|----|-------|
|group|reference|foreign_key: true|
|user|reference|foreign_key: true|
### アソシエーション
-belongs_to :group

-belongs_to :user
## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|content|string|null: false, unless: :image?|
|image|string||
|group|reference|foreign_key: true|
|user|reference|foreign_key: true|
### アソシエーション
-belongs_to :group

-belongs_to :user
## pricesテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|number|integer|null: false|
|group|reference|foreign_key: true|
### アソシエーション
-belongs_to :group
## memosテーブル
|Column|Type|Options|
|------|----|-------|
|text|string|null: false|
|group|reference|foreign_key: true|
### アソシエーション
-belongs_to :group
