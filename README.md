
# react-native-echarts-liquidfill
[![NPM Version](https://img.shields.io/npm/v/react-native-echarts-pro.svg?style=flat)](https://www.npmjs.com/package/react-native-echarts-pro)
[![NPM Version](https://img.shields.io/npm/dm/react-native-echarts-pro.svg?style=flat)](https://www.npmjs.com/package/react-native-echarts-pro)

English  [简体中文](/README_CN.md "中文介绍")
### echarts-liquidfill based on echarts.

## Getting started

`$ npm install react-native-echarts-liquidfill --save`

## Rely
`$ npm install react-native-webview --save`

## Usage
### 1.Base Usage

```javascript
import React from 'react';
import { View } from 'react-native';
import RNEChartsLiquidFill from 'react-native-echarts-liquidfill';
export default function ChartsComponent() {
  const pieOption = {
    title: {
      text: '水球图',
      left: 'center'
    },
    series: [
      {
        type: 'liquidFill',
        data: [0.6],
        color: ['#afb11b'],
        itemStyle: {
          //普通样式
          opacity: 0.6
        },
        emphasis: {
          itemStyle: {
            //悬停样式
            opacity: 0.9
          }
        }
      }
    ]
  };

  return (
    <View style={{ height: 300, paddingTop: 25 }}>
      <RNEChartsLiquidFill height={250} onPress={tt => alert(tt)} option={pieOption} />
    </View>
  );
}

```

## Props

|      Prop       |  Type  |   Default   | Description                                                  |
| :-------------: | :----: | :---------: | ------------------------------------------------------------ |
|     height      | number |     400     | Chart area height                                            |
|     option      | object |    null     | Chart data configuration items, see details：https://echarts.apache.org/zh/option.html#title |
| backgroundColor | string | transparent | Chart background color                                       |
|    themeName    | string |      -      | There are only six officially available themes:<br />vintage \|\| dark \|\| macarons \|\| infographic \|\| shine \|\| roma |

## Method

| Method name  |    Params    |                     Description                     |
| :----------: | :----------: | :-------------------------------------------------: |
| setNewOption |    option    |            Reassign and render the chart            |
|   onPress    | callbackData | Chart click event, callbackData is the clicked data |
