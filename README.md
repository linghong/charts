#Stock-Charts

##About
This is a D3 charts page that displays daily bid/ask price and trading activities.The d3 charts were built with D3 v4.5.0 and ES6. 

##Features
###1. zoom 
To zoom, tap twice on the location that you want to zoom; reload the page to return to the original status. 

###2. bid/ask price display
When a mouse cursor hovers over the border line of  the "bid" or "ask" areas, it will display information about the "ask" or "bid" price for that particular time and particular price unless that time doesn't have a "bid" or "ask" order. 

###3. trading infomation display
When a mouse cursor hovers over a black or red trade circle, it will display a tooltip with the information for the relevant trade data. In the meantime, all circles that have different trade type will disappear; 

When a mouse cursor moves out of the circle, the tooltip will disappear and both E and P trade type circles will show again.
 
###4 trade share volume 
The size of the circle is proportional to the stock share amount.

## Demo
 [http://stock-charts.surge.sh/](http://stock-charts.surge.sh/)

##Clone Repo
```bash
$ git clone https://github.com/linghong/stock-charts.git
```

##Installation
```bash
$ npm install
```

##Start Dev Server
```bash
$ npm run dev
```

##View the Site
http://localhost:8080

##Build a Production Version
```bash
$ npm run build
```
It will generate a build folder called dist for the production version of the code. 

##License
MIT