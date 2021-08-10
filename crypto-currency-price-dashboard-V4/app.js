
// BTC Last Price Data
let wsBTC = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@ticker');
let priceElementBTC = document.getElementById('BTC__Price');
let lastPrice = null;

wsBTC.onmessage = (event) => {
  let priceObject = JSON.parse(event.data);
  let price = parseFloat(priceObject.c).toFixed(2);
  priceElementBTC.innerText = "$" + price;
  priceElementBTC.style.color = !lastPrice || lastPrice === price ? 'light-grey' : price > lastPrice ? 'rgb(14, 203, 129)' : 'rgb(246, 70, 93)'; 
  lastPrice = price;
};

// BTC 24HR Price Change Data
let wsBTC_24HrPriceChangePercent = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@ticker');
let priceBTCChange24hrElement = document.getElementById('BTC__24HrPercentChange');

wsBTC_24HrPriceChangePercent.onmessage = (event) => {
  let priceChangePercent = JSON.parse(event.data);
  let percent = parseFloat(priceChangePercent.P).toFixed(2);
  priceBTCChange24hrElement.innerText = percent + "%";
    if (percent > 0 ) { 
      priceBTCChange24hrElement.style.color = 'rgb(14, 203, 129)'; //green
    } else {
      priceBTCChange24hrElement.style.color = 'rgb(246, 70, 93)'; //red
    }
};

// ETH Last Price Data
let wsETH = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@ticker');
let priceElementETH = document.getElementById('ETH__Price');

wsETH.onmessage = (event) => {
  let priceObject = JSON.parse(event.data);
  let price = parseFloat(priceObject.c).toFixed(2);
  priceElementETH.innerText = "$" + price;
  priceElementETH.style.color = !lastPrice || lastPrice === price ? 'light-grey' : price > lastPrice ? 'rgb(14, 203, 129)' : 'rgb(246, 70, 93)'; 
  lastPrice = price;
};

// ETH 24HR Price Change Data
let wsETH_24HrPriceChangePercent = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@ticker');
let priceETHChange24hrElement = document.getElementById('ETH__24HrPercentChange');

wsETH_24HrPriceChangePercent.onmessage = (event) => {
  let priceChangePercent = JSON.parse(event.data);
  let percent = parseFloat(priceChangePercent.P).toFixed(2);
  priceETHChange24hrElement.innerText = percent + "%";
    if (percent > 0 ) { 
      priceETHChange24hrElement.style.color = 'rgb(14, 203, 129)'; //green
    } else {
      priceETHChange24hrElement.style.color = 'rgb(246, 70, 93)'; //red
    }
};

// LINK Last Price Data
let wsLINK = new WebSocket('wss://stream.binance.com:9443/ws/linkusdt@ticker');
let priceElementLINK = document.getElementById('LINK__Price');

wsLINK.onmessage = (event) => {
  let priceObject = JSON.parse(event.data);
  let price = parseFloat(priceObject.c).toFixed(2);
  priceElementLINK.innerText = "$" + price;
  priceElementLINK.style.color = !lastPrice || lastPrice === price ? 'light-grey' : price > lastPrice ? 'rgb(14, 203, 129)' : 'rgb(246, 70, 93)'; 
  lastPrice = price;
};

// LINK 24HR Price Change Data
let wsLINK_24HrPriceChangePercent = new WebSocket('wss://stream.binance.com:9443/ws/linkusdt@ticker');
let priceLINKChange24hrElement = document.getElementById('LINK__24HrPercentChange');

wsLINK_24HrPriceChangePercent.onmessage = (event) => {
  let priceChangePercent = JSON.parse(event.data);
  let percent = parseFloat(priceChangePercent.P).toFixed(2);
  priceLINKChange24hrElement.innerText = percent + "%";
    if (percent > 0 ) { 
      priceLINKChange24hrElement.style.color = 'rgb(14, 203, 129)'; //green
    } else {
      priceLINKChange24hrElement.style.color = 'rgb(246, 70, 93)'; //red
    }
};

// XMR Last Price Data
let wsXMR = new WebSocket('wss://stream.binance.com:9443/ws/xmrusdt@ticker');
let priceElementXMR = document.getElementById('XMR__Price');

wsXMR.onmessage = (event) => {
  let priceObject = JSON.parse(event.data);
  let price = parseFloat(priceObject.c).toFixed(2);
  priceElementXMR.innerText = "$" + price;
  priceElementXMR.style.color = !lastPrice || lastPrice === price ? 'light-grey' : price > lastPrice ? 'rgb(14, 203, 129)' : 'rgb(246, 70, 93)'; 
  lastPrice = price;
};

// XMR 24HR Price Change Data
let wsXMR_24HrPriceChangePercent = new WebSocket('wss://stream.binance.com:9443/ws/xmrusdt@ticker');
let priceXMRChange24hrElement = document.getElementById('XMR__24HrPercentChange');

wsXMR_24HrPriceChangePercent.onmessage = (event) => {
  let priceChangePercent = JSON.parse(event.data);
  let percent = parseFloat(priceChangePercent.P).toFixed(2);
  priceXMRChange24hrElement.innerText = percent + "%";
    if (percent > 0 ) { 
      priceXMRChange24hrElement.style.color = 'rgb(14, 203, 129)'; //green
    } else {
      priceXMRChange24hrElement.style.color = 'rgb(246, 70, 93)'; //red
    }
};

// BAT Last Price Data
let wsBAT = new WebSocket('wss://stream.binance.com:9443/ws/batusdt@ticker');
let priceElementBAT = document.getElementById('BAT__Price');

wsBAT.onmessage = (event) => {
  let priceObject = JSON.parse(event.data);
  let price = parseFloat(priceObject.c).toFixed(2);
  priceElementBAT.innerText = "$" + price;
  priceElementBAT.style.color = !lastPrice || lastPrice === price ? 'light-grey' : price > lastPrice ? 'rgb(14, 203, 129)' : 'rgb(246, 70, 93)'; 
  lastPrice = price;
};

// BAT 24HR Price Change Data
let wsBAT_24HrPriceChangePercent = new WebSocket('wss://stream.binance.com:9443/ws/batusdt@ticker');
let priceBATChange24hrElement = document.getElementById('BAT__24HrPercentChange');

wsBAT_24HrPriceChangePercent.onmessage = (event) => {
  let priceChangePercent = JSON.parse(event.data);
  let percent = parseFloat(priceChangePercent.P).toFixed(2);
  priceBATChange24hrElement.innerText = percent + "%";
    if (percent > 0 ) { 
      priceBATChange24hrElement.style.color = 'rgb(14, 203, 129)'; //green
    } else {
      priceBATChange24hrElement.style.color = 'rgb(246, 70, 93)'; //red
    }
};

// DOT Last Price Data
let wsDOT = new WebSocket('wss://stream.binance.com:9443/ws/dotusdt@ticker');
let priceElementDOT = document.getElementById('DOT__Price');

wsDOT.onmessage = (event) => {
  let priceObject = JSON.parse(event.data);
  let price = parseFloat(priceObject.c).toFixed(2);
  priceElementDOT.innerText = "$" + price;
  priceElementDOT.style.color = !lastPrice || lastPrice === price ? 'light-grey' : price > lastPrice ? 'rgb(14, 203, 129)' : 'rgb(246, 70, 93)'; 
  lastPrice = price;
};

// DOT 24HR Price Change Data
let wsDOT_24HrPriceChangePercent = new WebSocket('wss://stream.binance.com:9443/ws/dotusdt@ticker');
let priceDOTChange24hrElement = document.getElementById('DOT__24HrPercentChange');

wsDOT_24HrPriceChangePercent.onmessage = (event) => {
  let priceChangePercent = JSON.parse(event.data);
  let percent = parseFloat(priceChangePercent.P).toFixed(2);
  priceDOTChange24hrElement.innerText = percent + "%";
    if (percent > 0 ) { 
      priceDOTChange24hrElement.style.color = 'rgb(14, 203, 129)'; //green
    } else {
      priceDOTChange24hrElement.style.color = 'rgb(246, 70, 93)'; //red
    }
};

// XRP Last Price Data
let wsXRP = new WebSocket('wss://stream.binance.com:9443/ws/xrpusdt@ticker');
let priceElementXRP = document.getElementById('XRP__Price');

wsXRP.onmessage = (event) => {
  let priceObject = JSON.parse(event.data);
  let price = parseFloat(priceObject.c).toFixed(2);
  priceElementXRP.innerText = "$" + price;
  priceElementXRP.style.color = !lastPrice || lastPrice === price ? 'light-grey' : price > lastPrice ? 'rgb(14, 203, 129)' : 'rgb(246, 70, 93)'; 
  lastPrice = price;
};

// XRP 24HR Price Change Data
let wsXRP_24HrPriceChangePercent = new WebSocket('wss://stream.binance.com:9443/ws/xrpusdt@ticker');
let priceXRPChange24hrElement = document.getElementById('XRP__24HrPercentChange');

wsXRP_24HrPriceChangePercent.onmessage = (event) => {
  let priceChangePercent = JSON.parse(event.data);
  let percent = parseFloat(priceChangePercent.P).toFixed(2);
  priceXRPChange24hrElement.innerText = percent + "%";
    if (percent > 0 ) { 
      priceXRPChange24hrElement.style.color = 'rgb(14, 203, 129)'; //green
    } else {
      priceXRPChange24hrElement.style.color = 'rgb(246, 70, 93)'; //red
    }
};

// DOGE Last Price Data
let wsDOGE = new WebSocket('wss://stream.binance.com:9443/ws/dogeusdt@ticker');
let priceElementDOGE = document.getElementById('DOGE__Price');

wsDOGE.onmessage = (event) => {
  let priceObject = JSON.parse(event.data);
  let price = parseFloat(priceObject.c).toFixed(2);
  priceElementDOGE.innerText = "$" + price;
  priceElementDOGE.style.color = !lastPrice || lastPrice === price ? 'light-grey' : price > lastPrice ? 'rgb(14, 203, 129)' : 'rgb(246, 70, 93)'; 
  lastPrice = price;
};

// DOGE 24HR Price Change Data
let wsDOGE_24HrPriceChangePercent = new WebSocket('wss://stream.binance.com:9443/ws/dogeusdt@ticker');
let priceDOGEChange24hrElement = document.getElementById('DOGE__24HrPercentChange');

wsDOGE_24HrPriceChangePercent.onmessage = (event) => {
  let priceChangePercent = JSON.parse(event.data);
  let percent = parseFloat(priceChangePercent.P).toFixed(2);
  priceDOGEChange24hrElement.innerText = percent + "%";
    if (percent > 0 ) { 
      priceDOGEChange24hrElement.style.color = 'rgb(14, 203, 129)'; //green
    } else {
      priceDOGEChange24hrElement.style.color = 'rgb(246, 70, 93)'; //red
    }
};

// LTC Last Price Data
let wsLTC = new WebSocket('wss://stream.binance.com:9443/ws/ltcusdt@ticker');
let priceElementLTC = document.getElementById('LTC__Price');

wsLTC.onmessage = (event) => {
  let priceObject = JSON.parse(event.data);
  let price = parseFloat(priceObject.c).toFixed(2);
  priceElementLTC.innerText = "$" + price;
  priceElementLTC.style.color = !lastPrice || lastPrice === price ? 'light-grey' : price > lastPrice ? 'rgb(14, 203, 129)' : 'rgb(246, 70, 93)'; 
  lastPrice = price;
};

// LTC 24HR Price Change Data
let wsLTC_24HrPriceChangePercent = new WebSocket('wss://stream.binance.com:9443/ws/ltcusdt@ticker');
let priceLTCChange24hrElement = document.getElementById('LTC__24HrPercentChange');

wsLTC_24HrPriceChangePercent.onmessage = (event) => {
  let priceChangePercent = JSON.parse(event.data);
  let percent = parseFloat(priceChangePercent.P).toFixed(2);
  priceLTCChange24hrElement.innerText = percent + "%";
    if (percent > 0 ) { 
      priceLTCChange24hrElement.style.color = 'rgb(14, 203, 129)'; //green
    } else {
      priceLTCChange24hrElement.style.color = 'rgb(246, 70, 93)'; //red
    }
};

// ADA Last Price Data
let wsADA = new WebSocket('wss://stream.binance.com:9443/ws/adausdt@ticker');
let priceElementADA = document.getElementById('ADA__Price');

wsADA.onmessage = (event) => {
  let priceObject = JSON.parse(event.data);
  let price = parseFloat(priceObject.c).toFixed(2);
  priceElementADA.innerText = "$" + price;
  priceElementADA.style.color = !lastPrice || lastPrice === price ? 'light-grey' : price > lastPrice ? 'rgb(14, 203, 129)' : 'rgb(246, 70, 93)'; 
  lastPrice = price;
};

// ADA 24HR Price Change Data
let wsADA_24HrPriceChangePercent = new WebSocket('wss://stream.binance.com:9443/ws/adausdt@ticker');
let priceADAChange24hrElement = document.getElementById('ADA__24HrPercentChange');

wsADA_24HrPriceChangePercent.onmessage = (event) => {
  let priceChangePercent = JSON.parse(event.data);
  let percent = parseFloat(priceChangePercent.P).toFixed(2);
  priceADAChange24hrElement.innerText = percent + "%";
    if (percent > 0 ) { 
      priceADAChange24hrElement.style.color = 'rgb(14, 203, 129)'; //green
    } else {
      priceADAChange24hrElement.style.color = 'rgb(246, 70, 93)'; //red
    }
};


// {
//    "e": "24hrTicker",  Event type
//    "E": 123456789,     Event time
//    "s": "BNBBTC",      Symbol
//    "p": "0.0015",      Price change
//    "P": "250.00",      Price change percent
//    "w": "0.0018",      Weighted average price
//    "x": "0.0009",      First trade(F)-1 price (first trade before the 24hr rolling window)
//    "c": "0.0025",      Last price
//    "Q": "10",          Last quantity
//    "b": "0.0024",      Best bid price
//    "B": "10",          Best bid quantity
//    "a": "0.0026",      Best ask price
//    "A": "100",         Best ask quantity
//    "o": "0.0010",      Open price
//    "h": "0.0025",      High price
//    "l": "0.0010",      Low price
//    "v": "10000",       Total traded base asset volume
//    "q": "18",          Total traded quote asset volume
//    "O": 0,             Statistics open time
//    "C": 86400000,      Statistics close time
//    "F": 0,             First trade ID
//    "L": 18150,         Last trade Id
//    "n": 18151          Total number of trades
// }
