import React from 'react';

const ConnectorUI = (props) => {

  const handleSubmit = () => {
    props.connector.handlerInputs = [
      {
        fetcher: 'MyFetcher',
        parser: 'MyParser',
        data: {
          url: 'https://www.google.com'
        },
      },
    ];
    props.connector.submit();
  }
  
  return (
    <div className="min-h-full">
      <div className="py-10">
        <header>
        <div className="flex flex-inline max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="pt-4 text-2xl font-normal leading-tight text-gray-900">Web Data Connector by</h1>
            <img
              src="https://www.theinformationlab.co.uk/wp-content/uploads/2016/01/Website-Logo-01.png"
              className="h-10 ml-4"
            />
        </div>
        </header>
        <main className="mt-20">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="space-y-8 divide-y divide-gray-200">
                <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                <div>
                    <div>
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Add Instructions & Form</h3>
                      <p className="mt-1 max-w-2xl text-sm text-gray-500">This would be a great place for your connector's instructions & a form for credentials.</p>
                    </div>
                </div>
                </div>
                <div className="pt-5">
                <div className="flex justify-end">

                    <button
                      type="button" 
                      onClick={() => props.connector.cancel()} 
                      className="bg-white pointer py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Cancel
                    </button>

                    <button 
                      type="button" 
                      onClick={() => handleSubmit()}
                      disabled={props.loading} 
                      className="ml-3 flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                      <svg
                        style={{display: props.loading ? 'unset' : 'none'}}
                        className="flex-inline w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-400 fill-gray-400 dark:fill-gray-300" 
                        viewBox="0 0 100 101" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                      </svg>
                      <span className="flex-inline">Submit</span>
                    </button>
                </div>
                </div>
              </div> 
          </div>
        </main>
      </div>
  </div>
)};

export default ConnectorUI;
