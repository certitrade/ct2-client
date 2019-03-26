import * as crypto from "crypto"
import * as model from "@certitrade/ct2-model"
import { default as fetch, RequestInit } from "node-fetch"

export class Connection {
	constructor(readonly baseUrl: string, private userID: string, private userKey: string) {
	}
	private async fetch<T>(resource: string, init: RequestInit, body?: any): Promise<T | model.Error> {
		const url = this.baseUrl + resource
		const date = new Date().toUTCString()
		if (body)
			init.body = JSON.stringify(body)
		init = {
			...init,
			headers: {
				...init.headers,
				"content-type": "application/json; charset=utf-8",
				authorization: "CertiTrade " + this.userID + ":" + crypto.createHmac("sha256", this.userKey).update((init.method || "GET") + url + date + (init.body || "")).digest("hex"),
				date,
			},
		}
		console.log("fetch " + url)
		console.log(init)
		const response = await fetch(url, init)
		let result: T | model.Error
		switch (response.headers.get("content-type")) {
			case "application/hal+json":
				result = await response.json() as T
				break
			case "application/api-problem+json":
				result = await response.json() as model.Error
				break
			default:
				result = { describedBy: this.baseUrl + resource, title: "Connection model.Error", httpStatus: response.status, detail: await response.text() }
				break
		}
		return result
	}
	get<T>(resource: string): Promise<T | model.Error> {
		return this.fetch<T>(resource, { method: "GET" })
	}
	post<T>(resource: string, body: any): Promise<T | model.Error> {
		return this.fetch<T>(resource, { method: "POST" }, body)
	}
	put<T>(resource: string, body: any): Promise<T | model.Error> {
		return this.fetch<T>(resource, { method: "PUT" }, body)
	}
	delete<T>(resource: string): Promise<T | model.Error> {
		return this.fetch(resource, { method: "DELETE" })
	}
	options<T>(resource: string): Promise<T | model.Error> {
		return this.fetch(resource, { method: "OPTIONS" })
	}
}
