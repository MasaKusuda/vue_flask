# Yamitter

コマンド，使い方をまとめておきます

## 最初にpullした後

```bash
docker-compose build
```

## パッケージのインストール

フロント

```bash
yarn install
```

バック

```bash
pip install -r requirements.txt
```

## docker

### buildしてup

```bash
docker-compose up --build
```

### フロントとバックの立ち上げ

```bash
docker-compose up
```

フロント

```bash
docker-compose exec vue sh
yarn run build
yarn run dev
```

バック

```bash
docker-compose exec flask bash
python app.py
```

### docker containerの停止

```bash
docker-compose stop
```

### 全部のdocker containerを削除

```bash
docker rm $(docker ps -aq)
```

## Yarnで入れたパッケージを動かす

```bash
yarn run [package]
```

### linterに合わせてfixする

```bash
yarn run lint --fix
```

### prettierで整形-->eslintで静的解析

```bash
yarn run prettier-eslint --write
```

## git全般

不要なリモートブランチの削除

```bash
git fetch -p
```

## yarnの設定とか

```bash
yarn config set ignore-optional true
```
