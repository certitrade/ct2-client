import * as dotenv from "dotenv"
import * as model from "@certitrade/ct2-model"
import * as client from "."

dotenv.config()

describe("Connection", () => {
	it("pspBaseUrl environment variable set", () => expect(process.env.pspBaseUrl).toBeTruthy())
	it("pspUserId environment variable set", () => expect(process.env.pspUserId).toBeTruthy())
	it("pspUserKey environment variable set", () => expect(process.env.pspUserKey).toBeTruthy())
	it("new", () => {
		const connection = new client.Connection(process.env.pspBaseUrl || "", "12345", "0123456789abcdefghij")
		expect(connection).toBeTruthy()
		expect(connection.baseUrl).toBe(process.env.pspBaseUrl)
	})
	it("not authorized", async () => {
		const connection = new client.Connection(process.env.pspBaseUrl || "", "12345", "0123456789abcdefghij")
		expect(connection).toBeTruthy()
		const answer = await connection.get("payment") as model.Error
		expect(answer.describedBy).toBeNull()
		expect(answer.title).toBe("Not authorized")
		expect(answer.httpStatus).toBe(403)
		expect(answer.detail).toBe("")
	})
	it("authorized", async () => {
		const connection = new client.Connection(process.env.pspBaseUrl || "", process.env.pspUserId || "", process.env.pspUserKey || "")
		expect(connection).toBeTruthy()
		const payments = await connection.get("payment")
		expect(payments).toHaveProperty("total_size")
		expect(payments).toHaveProperty("max_page_size")
	})
})
