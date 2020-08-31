# README
![画面収録 2020-08-30 3 23 11 mov](https://user-images.githubusercontent.com/67818465/91643698-83ff3a00-ea70-11ea-8455-305b5f3f7a6f.gif)

## アプリ名
### Almemory（オルメモリー）

# 概要（このアプリでできること）
・メモ

・グループ作成

・グループ編集

・ユーザー情報の編集

・非同期通信でのチャット

・料理レシピサイトへの遷移

・ユーザー登録、ログイン、ログアウト

・商品の値段登録、非同期通信での検索、編集

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
## メモ
![画面収録 2020-08-31 16 02 42 mov](https://user-images.githubusercontent.com/67818465/91692179-e73db900-eba3-11ea-8e4f-0645556d0a8c.gif)

メモページよりメモの作成、編集、削除が行えます。

表示するにあたり、文字数制限、スクロール機能を使用し、ビューの統一性を保っています。

またグループで管理しているためグループに属しているユーザーであれば、そのグループに属しているメモの作成、編集、削除を行うことができます。

## グループ作成
![画面収録 2020-08-31 16 22 45 mov](https://user-images.githubusercontent.com/67818465/91693900-b27f3100-eba6-11ea-80c0-b47c1c4da60b.gif)

グループ作成ページより、非同期での名前検索でユーザーを追加しグループを作成することができます。

また1度にユーザー検索で表示される人数に制限をかけ、ビュー崩れを防いでいます。

## グループ編集
![FireShot Capture 196 - Almemory - localhost](https://user-images.githubusercontent.com/67818465/91695585-5bc72680-eba9-11ea-99cd-d0ab9fb877b0.png)

グループ編集ページより、グループの編集、削除を行うことができます。

また1度にユーザー検索で表示される人数に制限をかけ、ビュー崩れを防いでいます。

## ユーザー情報の編集
![画面収録 2020-08-31 16 55 51 mov](https://user-images.githubusercontent.com/67818465/91696889-36d3b300-ebab-11ea-92fa-fbe908e1bf60.gif)

アカウント編集ページより、ユーザー情報の編集、アイコン画像の追加を行うことができます。

## 非同期通信でのチャット
![画面収録 2020-08-31 17 25 26 mov](https://user-images.githubusercontent.com/67818465/91699448-4654fb00-ebaf-11ea-80da-e99b024c7517.gif)

チャット画面よりテキスト、画像のどちらも非同期でチャットを行うことができます。（現時点でユーザーアイコンのみ同期）

## 料理レシピサイトへの遷移
<img width="1439" alt="f692aabd812b2dd16dc611cfc679daaf" src="https://user-images.githubusercontent.com/67818465/91700023-283bca80-ebb0-11ea-8fef-37485f500edc.png">

チャット画面ヘッダーのアイコンクリック後、アラーム表示後に遷移します。

## ログイン、新規登録画面、トップページ
![画面収録 2020-08-31 17 40 47 mov](https://user-images.githubusercontent.com/67818465/91700771-553cad00-ebb1-11ea-9638-8e84fa8bb0ce.gif)

deviseを使い実装しています。

キーフレーム、カルーセル（slick）、hoverを使い動きのあるビューにしました。

![FireShot Capture 202 - Almemory - localhost](https://user-images.githubusercontent.com/67818465/91701444-430f3e80-ebb2-11ea-85b6-6b85724278ea.png)

最後に送信されたメッセージの表示やグループ名を表示するにあたり、文字数制限、スクロール機能を使用し、ビューの統一性を保っています。

## 商品の値段登録、非同期通信での検索、編集
![画面収録 2020-08-31 17 57 37 mov](https://user-images.githubusercontent.com/67818465/91702482-c3826f00-ebb3-11ea-9875-16ce817f29c9.gif)

登録画面から商品の名前、値段を登録できます。

非同期で登録した商品名を検索でき、登録した値段も同時に表示しています。

この際、表示される商品の数に制限かけ、また自分の所属しているグループで登録されたもののみ表示されるように制限をかけています。

表示された商品からは編集を行うことができ、編集ページからは削除も行うこともできます。

## 計算（消費税額等の自動計算）
![画面収録 2020-08-31 18 11 20 mov](https://user-images.githubusercontent.com/67818465/91703777-af3f7180-ebb5-11ea-890f-0e839ad78343.gif)

計算ページより数字を入力することによって自動で計算することができます。

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
#### ＜課題＞

課題としては脆弱性対策やレスポンシブデザインなど、皆さんに実用的に使ってもらうとなると対策しなければならないことがまだまだあるということです。特に脆弱性対策については現段階ではまだまだ知識が薄く、自分がアプリやサイト制作などに携わっていく中で必須の知識だと強く感じました。

#### ＜今後実装した機能＞

現段階で気になるものとしては、チャット表示の仕方を自分とその他で右と左にわけたり、アイコンも非同期対応にしたりなど大きな機能よりは、ちょっとした細かい機能が気になっています。またその中でSNSと関連づけたり、商品登録をバーコードで行えたりなど時間が許す限り、様々な機能にチャレンジし知識を深めていきたいです。

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
