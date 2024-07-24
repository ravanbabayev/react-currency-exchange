import { supportedCurrencies } from './config';

const jsonData = {
    "success": true,
    "base": "USD",
    "rates": [
        {
            "base": "USD",
            "symbol": "EUR",
            "rate": "0.919571",
            "timestamp": "2024-07-23T16:59:19.000Z"
        },
        {
            "base": "USD",
            "symbol": "GBP",
            "rate": "0.773899",
            "timestamp": "2024-07-23T16:59:19.000Z"
        },
        {
            "base": "USD",
            "symbol": "TRY",
            "rate": "32.928106",
            "timestamp": "2024-07-23T16:59:19.000Z"
        }
    ]
};

const convertData = {
    "success": true,
    "query": {
        "from": "USD",
        "to": "EUR",
        "amount": "1"
    },
    "info": {
        "rate": "0.919571"
    },
    "result": 0.919571
};

function App() {
  return (
      <div className="my-10 mx-6 lg:my-20 lg:max-w-5xl lg:mx-auto">
          <div className="text-center">
              <h1 className="text-xl lg:text-4xl text-gray-700">Foreign exchange rates and currency conversion JSON API</h1>
              <h5 className="text-lg lg:text-2xl text-gray-500">A lightweight and simple api for current exchange rates</h5>
          </div>

          <div>

              <div className="my-8 lg:my-16">
                  <b>Supported Currencies</b>
                  <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-8 mt-6">
                      {supportedCurrencies.map(currency => (
                          <div className="bg-gray-200 rounded-lg text-center py-2 px-4" key={currency}>
                              <span className="text-slate-700 uppercase font-medium">{currency}</span>
                          </div>
                      ))}
                  </div>
              </div>

              <b>API Documentation</b>

              <div className="bg-slate-200 p-6 my-6 rounded">
                  <div className="mb-4">
                      <h3 className="text-lg font-medium text-gray-700">Latest Rates Endpoint</h3>
                      <p>The API's <code>latest</code> endpoint will return real-time exchange rate data updated daily.
                      </p>
                  </div>

                  <div className="space-y-4 mb-8">
                      <span className="text-gray-600 font-medium text-sm">API Request:</span>
                      <div className="text-gray-400 bg-gray-900 py-4 px-4 rounded-lg">
                          https://currency-api.epincms.com/<span className="text-yellow-500">latest</span><br/>
                          /USD <br/>
                          ? symbols = EUR,TRY,GBP <br/>
                      </div>
                  </div>

                  <div className="space-y-4">
                      <span className="text-gray-600 font-medium text-sm">API Response:</span>
                      <div className="text-gray-400 bg-gray-900 py-4 px-4 rounded-lg text-sm lg:text-base">
                          <pre>{JSON.stringify(jsonData, null, 2)}</pre>
                      </div>
                  </div>

              </div>

              <div className="bg-slate-200 p-6 my-6 rounded">
                  <div className="mb-4">
                      <h3 className="text-lg font-medium text-gray-700">Convert Endpoint</h3>
                      <p>It comes with a <code>convert</code> endpoint that can be used to convert any amount from one currency to another. To convert currencies, please use the API's conversion endpoint, add the from and to parameters and set them to your preferred base and destination currency codes.
                      </p>
                  </div>

                  <div className="space-y-4 mb-8">
                      <span className="text-gray-600 font-medium text-sm">API Request:</span>
                      <div className="text-gray-400 bg-gray-900 py-4 px-4 rounded-lg">
                          https://currency-api.epincms.com/<span className="text-yellow-500">convert</span><br/>
                          ? base = USD <br/>
                          & to = EUR <br/>
                          & amount = 1 <br/>
                      </div>
                  </div>

                  <div className="space-y-4">
                      <span className="text-gray-600 font-medium text-sm">API Response:</span>
                      <div className="text-gray-400 bg-gray-900 py-4 px-4 rounded-lg text-sm lg:text-base">
                          <pre>{JSON.stringify(convertData, null, 2)}</pre>
                      </div>
                  </div>

              </div>


          </div>

      </div>
  );
}

export default App;
