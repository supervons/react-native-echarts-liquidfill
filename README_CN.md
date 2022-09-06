🚧请使用 [react-native-echarts-pro](https://supervons.github.io/react-native-echarts-pro-docs/zh-cn/docs/tutorial-basics/props/#extension)

# react-native-echarts-pro
[![NPM Version](https://img.shields.io/npm/v/react-native-echarts-liquidfill.svg?style=flat)](https://www.npmjs.com/package/react-native-echarts-pro)
[![NPM Version](https://img.shields.io/npm/dm/react-native-echarts-liquidfill.svg?style=flat)](https://www.npmjs.com/package/react-native-echarts-pro)

[English](/README.md "english readme")  简体中文
### 一款基于echarts 4.8 版本的水球图，同时也支持图表。

## 让我们开始吧

`$ npm install react-native-echarts-liquidfill --save`

## 依赖
`$ npm install react-native-webview --save`

## 示例
### 1.基本示例
<img src="https://raw.githubusercontent.com/supervons/ImageLibrary/master/react-native-echarts-liquidfill/baseDemo.png" alt="iOS基本使用" height="500" align="center" /><img src="https://github.com/supervons/ImageLibrary/blob/master/react-native-echarts-liquidfill/baseDemo_android.png?raw=true" alt="androd基本使用" height="500" align="center" />

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
### 2.更多示例
请访问 [Echarts开源图库大全](https://www.makeapie.com/explore.html#sort=rank~timeframe=all~query=liquidfill~author=all)


## 属性

|      属性       |  类型  |   默认值    | 描述                                                         |
| :-------------: | :----: | :---------: | ------------------------------------------------------------ |
|     height      | number |     400     | 图表区域高度                                                 |
|     option      | object |    null     | 图表数据配置项，详情参看：https://echarts.apache.org/zh/option.html#title |
| backgroundColor | string | transparent | 图表背景颜色                                                 |
|    themeName    | string |      -      | 目前仅有官方提供的六个主题：<br />vintage \|\| dark \|\| macarons \|\| infographic \|\| shine \|\| roma |

## 方法

|    方法名    |     参数     |                  描述                  |
| :----------: | :----------: | :------------------------------------: |
| setNewOption |    option    |           重新赋值并渲染图表           |
|   onPress    | callbackData | 图表点击事件，callbackData为点击的数据 |

