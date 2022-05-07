import { Fetcher, AjaxRequest } from 'taco-toolkit/handlers'

export default class MyFetcher extends Fetcher {
  async fetch(request, context) {
    return await AjaxRequest.getJSON(request.data.url)
  }
}
