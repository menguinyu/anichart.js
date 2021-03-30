<p align="center">
    <img height="250px" src="https://github.com/Jannchie/anichart.js/blob/master/public/image/ANI.png?raw=true"><br/>
</p>

<p align="center">
    <img alt="Code Time" src="https://img.shields.io/endpoint?style=flat-square&url=https://codetime-api.datreks.com/badge/2?logoColor=white%26project=anichart%26recentMS=0%26showProject=false" />
    <img src="https://data.jsdelivr.com/v1/package/npm/anichart/badge">
    <img alt="NPM" src="https://img.shields.io/npm/l/anichart?style=flat-square">
    <img alt="npm" src="https://img.shields.io/npm/v/anichart?style=flat-square">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Jannchie/anichart.js?style=flat-square">
    <img alt="GitHub closed issues" src="https://img.shields.io/github/issues-closed/Jannchie/anichart.js?style=flat-square">
    <a href="https://lgtm.com/projects/g/Jannchie/anichart.js/context:javascript"><img alt="Language grade: JavaScript" src="https://img.shields.io/lgtm/grade/javascript/g/Jannchie/anichart.js.svg?style=flat-square&logo=lgtm&logoWidth=18"/></a>
</p>

[中文](/README-CN.md) | English

Easily create data visualization animated video.

## 示例

![anichart-preview](/public/image/anichart-preview.png)

### Online editable DEMO（v2.x）

[![Edit anichart 2.x](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/anichart-2x-m3xbz?fontsize=14&hidenavigation=1&theme=dark)

### Online editable DEMO（v1.x）

<a href="https://codesandbox.io/s/dreamy-microservice-e8em0?fontsize=14&hidenavigation=1&theme=dark&view=preview">
    <img alt="Edit e8em0" src="https://codesandbox.io/static/img/play-codesandbox.svg">
</a>

### Effect Show

[Click to go to the sample project](https://jannchie.github.io/anichart.io/en/demo-list)

## 写在前面

This project is open source, free and free.

This is a Web, Node and other environments, using TypeScript or JavaScript programming animation library. It can be used in data visualization, video animation display, opening and ending and other fields.

Currently under development, although the functions have been implemented, but there is no friendly interface, to make their own works need to read the source code and understand JavaScript programming.

At present, both front-end and back-end exported video use built-in FFMPEG. Ability to export MP4 directly. If the WASM version of FFMPEG is too slow, it also supports exporting PNG sequences and calling local FFMPEG to generate video.

The construction of a human-computer friendly website is already underway, but it will be a long time before it is complete.

This project needs the technical support of all the technical personnel. But if you're just a regular user, you can also support it through sponsorship. You can use Alipay or WeChat to support through [AZZ](https://azz.net/jannchie). It can also be supported by GitHub Sponsor (one credit card is required).

## Brief

This is a better template for visualization.

Compared with its [predecessor](https://github.com/Jannchie/Historical-ranking-data-visualization-based-on-js)，the main advantage lies in:

- Programmable: Open interfaces that allow the insertion of custom code, data calculated by the framework, drawing based on the Canvas API.
- Straight out video: Video can be rendered directly from each image frame without any screen recording tools. Maintains FPS stability and rendering speed.And thanks to this, you can now export any resolution, regardless of the screen range displayed. At the same time through the built-in API to achieve the progress of the drag, easy debugging.
- Convention over configuration: simplifies the user's configuration to the greatest extent, without too many complex Settings you can get a beautiful chart.
- Virtual components: Similar to virtual DOM, it further enhances extensibility by splitting components and renderers. Ease of porting to more platforms and support for more efficient WebGL rendering in the future.

## Setup

### Via Yarn

```bash
yarn add anichart
```

### Via Npm

```bash
npm i anichart
```

### Via HTML tags

```html
<script src="https://cdn.jsdelivr.net/npm/anichart@1.1.12/dist/anichart.min.js"></script>
```

## Usage

### Use Npm or Yarn imports

You can skip this step if you are using label imports, but if you are using NPM or Yarn you need to import the package with the following code:

``` js
const anichart = require("anichart");
```

或者

``` js
import * as anichart from "anichart";
```

### Prepare Data

For example, use CSV file.

``` csv
name,date,value,channel,other
Jannchie,2020-01-01,1,科技,other
Jannchie,2020-01-03,6,科技,other
Jannchie,2020-01-05,3,科技,other
Jannchie,2020-01-07,-,科技,other
Jannchie,2020-01-09,7,科技,other
Jannchie,2020-01-12,12,科技,other
Cake47,2020-01-03,10,生活,other
Cake47,2020-01-02,5,生活,other
Cake47,2020-01-06,2,生活,other
Cake47,2020-01-09,3,生活,other
Cake47,2020-01-11,4,生活,other
```

### Load Data

```js
// Recourse By default, data needs to be loaded through a built-in recourse object
// The first argument is the path of the data, and the second argument is the name of the data
anichart.recourse.loadData("path/to/data.csv", "data")
```

### Create the Object

```js
// Create a Stage
let stage = new anichart.Stage();
// Create a chart that loads data named "data" by default
let chart = new anichart.BarChart();
// Mount the chart
stage.addChild(chart);
```

### Play the Animation

You can use code to control playback.

```js
stage.play();
```

### Output Video

Built-in FFMPEG for export. The output is printed in the Console.

```js
// Configure to export video
stage.output = true;
```

### Test

#### Browser

``` bash
yarn serve
# or
npm run serve
```

#### Node.js

If you have special needs, such as server side users who regularly export video, you can use the Node.js environment.

Node.js support is now available, you can run the project with Node without any configuration, you will be able to export PNG sequences directly for video integration in tools like FFmpeg (there are no plans to call native FFmpeg functionality at this time, we look forward to the developer coming up with PR). However, the Node environment is not the primary development test environment, and you may encounter unknown bugs while developing in this environment. My energy is limited and I may not be able to give feedback in time. I hope capable developers can work with me to maintain it.

You can test Anichart under Node.js using the following command:

```bash
cd test
ts-node index.ts # This project is written in TypeScript, so it requires a TS-Node environment. You can also compile it into JS and test the compiled file.
```
