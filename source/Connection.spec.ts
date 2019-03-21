import { Connection } from "./Connection"
import * as model from "@certitrade/ct2-model"
import "../environment.local"

describe("Connection", () => {
	it("CertitradeBaseUrl environment variable set", () => expect(process.env.CertitradeBaseUrl).toBeTruthy())
	it("CertitradeUserId environment variable set", () => expect(process.env.CertitradeUserId).toBeTruthy())
	it("CertitradeUserKey environment variable set", () => expect(process.env.CertitradeUserKey).toBeTruthy())
	it("new", () => {
		const connection = new Connection(process.env.CertitradeBaseUrl || "", "12345", "0123456789abcdefghij")
		expect(connection).toBeTruthy()
		expect(connection.baseUrl).toBe(process.env.CertitradeBaseUrl)
	})
	it("not authorized", async () => {
		const connection = new Connection(process.env.CertitradeBaseUrl || "", "12345", "0123456789abcdefghij")
		expect(connection).toBeTruthy()
		const answer = await connection.get("payment") as model.Error
		expect(answer.describedBy).toBeNull()
		expect(answer.title).toBe("Not authorized")
		expect(answer.httpStatus).toBe(403)
		expect(answer.detail).toBe("")
	})
	it("authorized", async () => {
		const connection = new Connection(process.env.CertitradeBaseUrl || "", process.env.CertitradeUserId || "", process.env.CertitradeUserKey || "")
		expect(connection).toBeTruthy()
		const payments = await connection.get("payment") as model.hal.Collection
		expect(payments).toHaveProperty("total_size")
		expect(payments).toHaveProperty("max_page_size")
	})
})
