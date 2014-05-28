# grunt-init-regular

Grunt プロジェクトのレギュラー設定の grunt-init テンプレートです。

## How to use

`grunt-init` コアをグローバルにインストール
```
$ npm install grunt-init -g
```
ユーザ直下に `~/.grunt-init` ディレクトリが作成されます

ここに当テンプレートを `clone`

```
$ git clone https://github.com/tsumikiinc/grunt-init-regular.git ~/.grunt-init/regular
```

プロジェクトを配置するディレクトリへ移動し `grunt-init` コマンドでテンプレートを生成します

```
$ cd path/peoject/peoject_name
$ grunt-init regular
```
以下プロンプトに答えるとテンプレートは作成されます

```
Please answer the following:
[?] Project name (default) 
[?] Project title (default) 
[?] Description (default) 
[?] Version (0.1.0) 
[?] doctype (HTML5) 
[?] charset (urf-8) 
[?] siteTitle 
```

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
    └── sass
        └── import
            ├── _common.scss
            ├── _mixin.scss
            └── _normalize.scss
```