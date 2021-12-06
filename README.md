

## 概要

Google Analyticsのノードです。

## インストール

```
npm i node-red-contrib-google-analytics
```

or

AdminタブからInstall

## 利用イメージ

とりあえずリアルタイムに閲覧しているユーザー数だけを取得するノードとなっています。

> ![](https://i.gyazo.com/ad8e0962b3763e63cda30ee621eb96fe.png)

> ![](https://i.gyazo.com/5d9e1d4ed32fd89c7d6d7507e5aafe48.png)

## 利用準備

### アカウントの追加

- 1. credentialsのJSONの発行

> ![](https://i.gyazo.com/c5aa5a6a409ea0e34542529b2191bf90.png)

- 2. credentialsのJSONを発行した際に記載があるアカウントをGAに追加

> ![](https://i.gyazo.com/cea73f0b893e9c137a20b54e357256b4.png)

`client_email`に記載があるメールアドレスを利用して、管理画面からユーザーを追加します。

> ![](https://i.gyazo.com/f84dc560fea207e5c6cff42270edc503.png)

アナリストの権限を付与して追加します。

### アルファ版のみ

- credentialsのJSONファイルのパスを通す必要があります。

```
export GOOGLE_APPLICATION_CREDENTIALS=xxxxx.json
```

## LINK

## release

- 2021/12/6: アルファ版 公開