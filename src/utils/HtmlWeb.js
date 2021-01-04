import eCharts from "../dist-file/echarts.min";
import eChartsLiquidFill from "../dist-file/echarts-liquidfill.min";
import { Theme } from "../dist-file/theme/index";
const HtmlWeb = `<!DOCTYPE html>
        <html>
        <head>
          <link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon">
          <title>echarts</title>
          <meta http-equiv="content-type" content="text/html; charset=utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
          <style type="text/css">
            html,body {
              height: 100%;
              width: 100%;
              margin: 0;
              padding: 0;
        
            }
            #main {
              height: 100%;
            }
          </style>
          <script>${eCharts}</script>
          <script>${eChartsLiquidFill}</script>
          <script>${Theme}</script>
        </head>
        
        <body>
        <div id="main" ></div>
        <body>
        <html>`;
export default HtmlWeb;
