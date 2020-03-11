# chat_app
* 双方向のチャットが可能な簡易チャットアプリ

# version
* ruby 2.7.0
* Rails 6.0.2.1

## memo
* Rails6ではデフォルトで `/app/assets/javascripts` は `app/javascript` に移動している
    * それに伴って `app/assets/config/manifest.js` にも `javascript` ディレクトリはない
* 参考にしたサイトは ruby 2.5.x, 2.6.x だったが, ruby 2.7.0 では多数の warning が出るので対策が必要

## references
* [railsでbroadcastしたが、その際にjsのreceivedが動かない](https://teratail.com/questions/170114)
* [【Rails6.0】ActionCableとDeviseの欲張りセットでリアルタイムチャット作成](https://qiita.com/eRy-sk/items/4c4e983e34a44c5ace27)