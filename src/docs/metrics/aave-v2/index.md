---
title: Aave v2
author: Filip
date: 2022-12-05
description: Aave V2 Metrics
---

## Description
Metrics related to Aave v2 protocol.

Action metrics:
* `aave_v2_action_deposits` - Amount of deposited tokens
* `aave_v2_action_liquidations` - Amount of liquidated tokens
* `aave_v2_action_new_debt` - Amount of borrowed tokens
* `aave_v2_action_repayments` - Amount of repaid tokens

> Note: All of the above metrics are also available in USD using the `_usd` 
suffix (for example: `aave_v2_action_deposits_usd`). 

Total action metrics:
* `aave_v2_total_deposits_usd` - Amount of all deposits in usd
* `aave_v2_total_liquidations_usd` - Amount of all liquidations in usd
* `aave_v2_total_new_debt_usd` - Amount of all borrowings in usd
* `aave_v2_total_repayments_usd` - Amount of all repayments in usd

Total supplied/borrowed metrics:
* `aave_v2_total_supplied` - Total supplied tokens
* `aave_v2_total_supplied_usd` - Total supplied tokens in usd
* `aave_v2_total_borrowed` - Total borrowed tokens
* `aave_v2_total_borrowed_usd` - Total borrowed tokens in usd

---

## Access

[Restricted Access](/metrics/details/access#restricted-access).

---

## Measuring Unit

Amount in tokens/USD

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

[Five-minute Intervals](/metrics/details/frequency#five-minute-frequency)

---

## Latency

[On-Chain Latency](/metrics/details/latency#on-chain-latency)

---

## Available Assets

Total action metrics: available for `aave`

Other metrics: 
available for [these assets](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22aave_v2_action_deposits%22)%7B%0A%20%20%20%20metadata%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

---

### SanAPI

Action metrics: `aave_v2_action_deposits<_usd>`, `aave_v2_action_liquidations<_usd>`, 
`aave_v2_action_new_debt<_usd>` and `aave_v2_action_repayments<_usd>`

```graphql
{
  getMetric(metric: "aave_v2_action_deposits_usd"){
    timeseriesData(
      slug: "weth"
      from: "2022-11-01T00:00:00Z"
      to: "2022-11-03T00:00:00Z"
      includeIncompleteData: true
      interval: "5m"){
        datetime
        value
      }
  }
}
```
[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22aave_v2_action_deposits_usd%22)%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22weth%22%0A%20%20%20%20%20%20from%3A%20%222022-11-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222022-11-03T00%3A00%3A00Z%22%0A%20%20%20%20%20%20includeIncompleteData%3A%20true%0A%20%20%20%20%20%20interval%3A%20%225m%22)%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%7D>)

Total action metrics: `aave_v2_total_deposits_usd`, `aave_v2_total_liquidations_usd`, 
`aave_v2_total_new_debt_usd` and `aave_v2_total_repayments_usd`

```graphql
{
  getMetric(metric: "aave_v2_total_new_debt_usd"){
    timeseriesData(
      slug: "aave"
      from: "2022-11-01T00:00:00Z"
      to: "2022-11-03T00:00:00Z"
      includeIncompleteData: true
      interval: "5m"){
        datetime
        value
      }
  }
}
```
[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22aave_v2_total_new_debt_usd%22)%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22aave%22%0A%20%20%20%20%20%20from%3A%20%222022-11-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222022-11-03T00%3A00%3A00Z%22%0A%20%20%20%20%20%20includeIncompleteData%3A%20true%0A%20%20%20%20%20%20interval%3A%20%225m%22)%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%7D>)

Total supplied/borrowed metrics: `aave_v2_total_supplied<_usd>` and 
`aave_v2_total_borrowed<_usd>`

```graphql
{
  getMetric(metric: "aave_v2_total_supplied"){
    timeseriesData(
      slug: "wrapped-bitcoin"
      from: "2022-11-01T00:00:00Z"
      to: "2022-11-03T00:00:00Z"
      includeIncompleteData: true
      interval: "5m"){
        datetime
        value
      }
  }
}
```
[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22aave_v2_total_supplied%22)%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22wrapped-bitcoin%22%0A%20%20%20%20%20%20from%3A%20%222022-11-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222022-11-03T00%3A00%3A00Z%22%0A%20%20%20%20%20%20includeIncompleteData%3A%20true%0A%20%20%20%20%20%20interval%3A%20%225m%22)%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%7D>)
