

export default class MyFetcher extends Fetcher {
  async fetch(request, context) {
    return await AjaxRequest.getJSON(request.data.url)
  }
}

				globalRefs["MyFetcher"] = MyFetcher