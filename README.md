# grunt-init-regular

**Wikiで詳細を記載してます [grunt initについて](https://github.com/tsumikiinc/grunt-init-regular/wiki/grunt-init%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6)**

## v0.1.5
Grunt のレギュラー設定の grunt-init テンプレートです。


## Set up

`grunt-init` コアをグローバルにインストール
```
npm install grunt-init -g
```
ユーザ直下に `~/.grunt-init` ディレクトリが作成されます

ここに当テンプレートを `clone`

```
$ git clone https://github.com/tsumikiinc/grunt-init-regular.git ~/.grunt-init/regular
```

## How to use

プロジェクトを配置するディレクトリへ移動し `grunt-init` コマンドでテンプレートを生成します

```
cd path/peoject/peoject_name
grunt-init regular
```
最初に以下のプロンプトに答えます

```
プロジェクトの概要を設定します
適宜入力してください
※ Project name にはキャメルケースかハイフンシンタックスを使用してください

Please answer the following:
[?] Project name (Project name) 
[?] Project title (Project title) 
[?] Description (The best project ever.) 
[?] Version (0.1.0) 
[?] doctype (HTML5) 
[?] charset (urf-8) 
[?] siteTitle (サイトタイトル) 
[?] sitePath (root) 
[?] addMobileSite (false) 
[?] jade (true) 
[?] stylesheetLang (sass) 
[?] uglify (true) 
[?] cssmin (false) 
[?] imagemin (true) 
[?] transferProtocol (sftp) 
[?] template_dir (mytemp) 
[?] Licenses (CC) 
[?] Author name (name) 
[?] Author email (email) 
[?] Author url (url) 
[?] Do you need to make any changes to the above before continuing? (y/N) 
```

`mytemp/` ディレクトリに任意で各テンプレートファイル（_mixin.scss plugin.js 等）を追加しておけます

以下のようにテンプレートが生成されます

```
.
├── Gruntfile.js
├── gruntconfig
│   ├── banner.js
│   ├── connect.js
│   ├── copy.js
│   ├── dir.js
│   ├── html-validation.js
│   ├── imagemin.js
│   ├── jade.js
│   ├── jshint.js
│   ├── sass.js
│   ├── secretJSON.js
│   ├── sftp-deploy.js
│   ├── uglify.js
│   └── watch.js
├── package.json
└── src
    ├── mytemp
    │   └── import
    │       ├── _common.scss
    │       ├── _mixin.scss
    │       └── _normalize.scss
    ├── root
    │   ├── index.html
    │   └── js
    │       └── lib
    │           ├── jquery-1.11.1.min.js
    │           └── jquery-2.1.1.min.js
    └── sass
        └── style.scss
```

## License

The MIT License (MIT)

Copyright (c) 2014 TSUMIKI Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
