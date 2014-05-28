# grunt-init-regular

## var 0.1.1
Grunt プロジェクトのレギュラー設定の grunt-init テンプレートです。


## How to use

`grunt-init` コアをグローバルにインストール
```
$ npm install grunt-init -g
```
ユーザ直下に `~/.grunt-init` ディレクトリが作成されます

ここに当テンプレートを `git clone`

```
$ git clone https://github.com/tsumikiinc/grunt-init-regular.git ~/.grunt-init/regular
```

プロジェクトを配置するディレクトリへ移動し `grunt-init` コマンドでテンプレートを生成します

```
$ cd path/peoject/peoject_name
$ grunt-init regular
```
最初に以下のプロンプトに答えます

```
プロジェクトの概要を設定します
適宜に入力してください
※ Project name にはキャメルケースかハイフンシンタックスを使用してください

Please answer the following:
[?] Project name (default) 
[?] Project title (default) 
[?] Description (The best project ever.) 
[?] Version (0.1.0) 
[?] doctype (HTML5) 
[?] charset (urf-8) 
[?] siteTitle 
[?] template_dir (mytemp) 
```

`mytemp/` ディレクトリに任意で各テンプレートファイル（_mixin.scss _common.js 等）を追加しておけます

以下のようにテンプレートが生成されます

```
.
├── .csslintrc
├── .gitignore
├── .jshintrc
├── Gruntfile.js
├── ignore
├── package.json
└── src
    ├── index.html
    ├── js
    │   └── lib
    │       ├── jquery-1.11.1.min.js
    │       └── jquery-2.1.1.min.js
    ├── mytemp
    │   └── import
    │       ├── _common.scss
    │       ├── _mixin.scss
    │       └── _normalize.scss
    └── sass
```
