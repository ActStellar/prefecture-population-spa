# API仕様

このプロジェクトでは、以下のAPIエンドポイントを使用して都道府県データおよび人口データを取得します。  
APIの詳細は、[ゆめみフロントエンドコーディング試験 API ドキュメント](https://yumemi-frontend-engineer-codecheck-api.vercel.app/api-doc)を参照してください。

---

## 1. 都道府県一覧取得API

### 概要

日本の都道府県の一覧を取得します。このデータは、チェックボックスでユーザーが選択できる都道府県のリストに使用されます。

- **エンドポイント**: `https://yumemi-frontend-engineer-codecheck-api.vercel.app/api/prefectures`
- **メソッド**: `GET`

### レスポンス

```json
[
    {
        "prefCode": 1,
        "prefName": "北海道"
    },
    {
        "prefCode": 2,
        "prefName": "青森県"
    },
    ...
]
```

---

## 2. 人口構成データ取得API

### 概要

指定された都道府県の人口構成データを取得します。データは総人口、年少人口、生産年齢人口、老年人王の各区分に分けられており、X軸に年度、Y軸に人口数を指定した折れ線グラフの表示に使用します。

- **エンドポイント**: `https://yumemi-frontend-engineer-codecheck-api.vercel.app/api/population/composition/perYear`
- **メソッド**: `GET`
- **パラメータ**: `prefCode` (必須) - 都道府県のID

### クエリパラメータ

|   パラメータ    |     型      |           説明           |
|----------------|-------------|--------------------------|
|   `prefCode`   |    `int`    | 都道府県を識別するためのID |

### レスポンス

- 内容: 都道府県ごとの人口構成データ
- 形式: JSONオブジェクト

```json
{
  "message": null,
  "result": {
    "boundaryYear": 2022,
    "data": [
      {
        "label": "総人口",
        "data": [
          { "year": 1980, "value": 12817 },
          { "year": 1985, "value": 12707 },
          ...
        ]
      },
      {
        "label": "年少人口",
        "data": [
          { "year": 1980, "value": 2365 },
          { "year": 1985, "value": 2187 },
          ...
        ]
      },
      {
        "label": "生産年齢人口",
        "data": [
          { "year": 1980, "value": 8136 },
          { "year": 1985, "value": 8300 },
          ...
        ]
      },
      {
        "label": "老年人口",
        "data": [
          { "year": 1980, "value": 2316 },
          { "year": 1985, "value": 2450 },
          ...
        ]
      }
    ]
  }
}
```

---

## エラーレスポンス

- 形式: エラー時はHTTPステータスコードとともに、エラーメッセージが返されます。
- 例:

  ```json
    {
        "message": "Invalid request"
    }
  ```

---
