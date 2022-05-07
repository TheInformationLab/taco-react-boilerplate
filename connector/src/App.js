import React, { useState, useEffect } from "react";
import Connector from 'taco-toolkit';
import ConnectorUI from "./ConnectorUI/ConnectorUI";

const App = () => {
   const [loading, setLoading] = useState(true);
   const [hadTimeout, setHadTimeout] = useState(false);
   const [connector, setConnector] = useState();

  useEffect(() => {
    const timeoutHandle = setTimeout(() => {
      if (loading) {
        setHadTimeout(true)
      }
    }, 30000)

    const onInitialized = () => {
      setLoading(false)
      clearTimeout(timeoutHandle)
    }

    setConnector(new Connector(onInitialized))

    return () => clearTimeout(timeoutHandle)
  }, [])

  if (loading || !connector) {
   return (
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-6 is-offset-3">
              <h2 className="has-text-centered title is-2">
                {hadTimeout ? 'Error: There was a timeout waiting for the connector to initialize.' : 'Loading ...'}
              </h2>
              <div className="has-text-centered">
                <div className="loader-wrapper is-active">
                  <div className="loader is-loading"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return <ConnectorUI connector={connector} loading={loading}/>;
};

export default App;