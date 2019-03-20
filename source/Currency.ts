import { CurrencyCode } from "./CurrencyCode"

export type Currency =
	"AED" |
	"AFN" |
	"ALL" |
	"AMD" |
	"ANG" |
	"AOA" |
	"ARS" |
	"AUD" |
	"AWG" |
	"AZN" |
	"BAM" |
	"BBD" |
	"BDT" |
	"BGN" |
	"BHD" |
	"BIF" |
	"BMD" |
	"BND" |
	"BOB" |
	"BOV" |
	"BRL" |
	"BSD" |
	"BTN" |
	"BWP" |
	"BYN" |
	"BZD" |
	"CAD" |
	"CDF" |
	"CHE" |
	"CHF" |
	"CHW" |
	"CLF" |
	"CLP" |
	"CNY" |
	"COP" |
	"COU" |
	"CRC" |
	"CUC" |
	"CUP" |
	"CVE" |
	"CZK" |
	"DJF" |
	"DKK" |
	"DOP" |
	"DZD" |
	"EGP" |
	"ERN" |
	"ETB" |
	"EUR" |
	"FJD" |
	"FKP" |
	"GBP" |
	"GEL" |
	"GHS" |
	"GIP" |
	"GMD" |
	"GNF" |
	"GTQ" |
	"GYD" |
	"HKD" |
	"HNL" |
	"HRK" |
	"HTG" |
	"HUF" |
	"IDR" |
	"ILS" |
	"INR" |
	"IQD" |
	"IRR" |
	"ISK" |
	"JMD" |
	"JOD" |
	"JPY" |
	"KES" |
	"KGS" |
	"KHR" |
	"KMF" |
	"KPW" |
	"KRW" |
	"KWD" |
	"KYD" |
	"KZT" |
	"LAK" |
	"LBP" |
	"LKR" |
	"LRD" |
	"LSL" |
	"LYD" |
	"MAD" |
	"MDL" |
	"MGA" |
	"MKD" |
	"MMK" |
	"MNT" |
	"MOP" |
	"MRU" |
	"MUR" |
	"MVR" |
	"MWK" |
	"MXN" |
	"MXV" |
	"MYR" |
	"MZN" |
	"NAD" |
	"NGN" |
	"NIO" |
	"NOK" |
	"NPR" |
	"NZD" |
	"OMR" |
	"PAB" |
	"PEN" |
	"PGK" |
	"PHP" |
	"PKR" |
	"PLN" |
	"PYG" |
	"QAR" |
	"RON" |
	"RSD" |
	"RUB" |
	"RWF" |
	"SAR" |
	"SBD" |
	"SCR" |
	"SDG" |
	"SEK" |
	"SGD" |
	"SHP" |
	"SLL" |
	"SOS" |
	"SRD" |
	"SSP" |
	"STN" |
	"SVC" |
	"SYP" |
	"SZL" |
	"THB" |
	"TJS" |
	"TMT" |
	"TND" |
	"TOP" |
	"TRY" |
	"TTD" |
	"TWD" |
	"TZS" |
	"UAH" |
	"UGX" |
	"USD" |
	"USN" |
	"UYI" |
	"UYU" |
	"UYW" |
	"UZS" |
	"VES" |
	"VND" |
	"VUV" |
	"WST" |
	"XAF" |
	"XAG" |
	"XAU" |
	"XBA" |
	"XBB" |
	"XBC" |
	"XBD" |
	"XCD" |
	"XDR" |
	"XOF" |
	"XPD" |
	"XPF" |
	"XPT" |
	"XSU" |
	"XTS" |
	"XUA" |
	"XXX" |
	"YER" |
	"ZAR" |
	"ZMW" |
	"ZWL"
export namespace Currency {
	export function is(value: Currency | any): value is Currency {
		return typeof(value) == "string" && (
		value == "AED" ||
		value == "AFN" ||
		value == "ALL" ||
		value == "AMD" ||
		value == "ANG" ||
		value == "AOA" ||
		value == "ARS" ||
		value == "AUD" ||
		value == "AWG" ||
		value == "AZN" ||
		value == "BAM" ||
		value == "BBD" ||
		value == "BDT" ||
		value == "BGN" ||
		value == "BHD" ||
		value == "BIF" ||
		value == "BMD" ||
		value == "BND" ||
		value == "BOB" ||
		value == "BOV" ||
		value == "BRL" ||
		value == "BSD" ||
		value == "BTN" ||
		value == "BWP" ||
		value == "BYN" ||
		value == "BZD" ||
		value == "CAD" ||
		value == "CDF" ||
		value == "CHE" ||
		value == "CHF" ||
		value == "CHW" ||
		value == "CLF" ||
		value == "CLP" ||
		value == "CNY" ||
		value == "COP" ||
		value == "COU" ||
		value == "CRC" ||
		value == "CUC" ||
		value == "CUP" ||
		value == "CVE" ||
		value == "CZK" ||
		value == "DJF" ||
		value == "DKK" ||
		value == "DOP" ||
		value == "DZD" ||
		value == "EGP" ||
		value == "ERN" ||
		value == "ETB" ||
		value == "EUR" ||
		value == "FJD" ||
		value == "FKP" ||
		value == "GBP" ||
		value == "GEL" ||
		value == "GHS" ||
		value == "GIP" ||
		value == "GMD" ||
		value == "GNF" ||
		value == "GTQ" ||
		value == "GYD" ||
		value == "HKD" ||
		value == "HNL" ||
		value == "HRK" ||
		value == "HTG" ||
		value == "HUF" ||
		value == "IDR" ||
		value == "ILS" ||
		value == "INR" ||
		value == "IQD" ||
		value == "IRR" ||
		value == "ISK" ||
		value == "JMD" ||
		value == "JOD" ||
		value == "JPY" ||
		value == "KES" ||
		value == "KGS" ||
		value == "KHR" ||
		value == "KMF" ||
		value == "KPW" ||
		value == "KRW" ||
		value == "KWD" ||
		value == "KYD" ||
		value == "KZT" ||
		value == "LAK" ||
		value == "LBP" ||
		value == "LKR" ||
		value == "LRD" ||
		value == "LSL" ||
		value == "LYD" ||
		value == "MAD" ||
		value == "MDL" ||
		value == "MGA" ||
		value == "MKD" ||
		value == "MMK" ||
		value == "MNT" ||
		value == "MOP" ||
		value == "MRU" ||
		value == "MUR" ||
		value == "MVR" ||
		value == "MWK" ||
		value == "MXN" ||
		value == "MXV" ||
		value == "MYR" ||
		value == "MZN" ||
		value == "NAD" ||
		value == "NGN" ||
		value == "NIO" ||
		value == "NOK" ||
		value == "NPR" ||
		value == "NZD" ||
		value == "OMR" ||
		value == "PAB" ||
		value == "PEN" ||
		value == "PGK" ||
		value == "PHP" ||
		value == "PKR" ||
		value == "PLN" ||
		value == "PYG" ||
		value == "QAR" ||
		value == "RON" ||
		value == "RSD" ||
		value == "RUB" ||
		value == "RWF" ||
		value == "SAR" ||
		value == "SBD" ||
		value == "SCR" ||
		value == "SDG" ||
		value == "SEK" ||
		value == "SGD" ||
		value == "SHP" ||
		value == "SLL" ||
		value == "SOS" ||
		value == "SRD" ||
		value == "SSP" ||
		value == "STN" ||
		value == "SVC" ||
		value == "SYP" ||
		value == "SZL" ||
		value == "THB" ||
		value == "TJS" ||
		value == "TMT" ||
		value == "TND" ||
		value == "TOP" ||
		value == "TRY" ||
		value == "TTD" ||
		value == "TWD" ||
		value == "TZS" ||
		value == "UAH" ||
		value == "UGX" ||
		value == "USD" ||
		value == "USN" ||
		value == "UYI" ||
		value == "UYU" ||
		value == "UYW" ||
		value == "UZS" ||
		value == "VES" ||
		value == "VND" ||
		value == "VUV" ||
		value == "WST" ||
		value == "XAF" ||
		value == "XAG" ||
		value == "XAU" ||
		value == "XBA" ||
		value == "XBB" ||
		value == "XBC" ||
		value == "XBD" ||
		value == "XCD" ||
		value == "XDR" ||
		value == "XOF" ||
		value == "XPD" ||
		value == "XPF" ||
		value == "XPT" ||
		value == "XSU" ||
		value == "XTS" ||
		value == "XUA" ||
		value == "XXX" ||
		value == "YER" ||
		value == "ZAR" ||
		value == "ZMW" ||
		value == "ZWL")
	}
	export function from(currencyCode: CurrencyCode): Currency | undefined {
		let result: Currency | undefined
		switch (currencyCode) {
			case "784": result = "AED"; break
			case "971": result = "AFN"; break
			case "008": result = "ALL"; break
			case "051": result = "AMD"; break
			case "532": result = "ANG"; break
			case "973": result = "AOA"; break
			case "032": result = "ARS"; break
			case "036": result = "AUD"; break
			case "533": result = "AWG"; break
			case "944": result = "AZN"; break
			case "977": result = "BAM"; break
			case "052": result = "BBD"; break
			case "050": result = "BDT"; break
			case "975": result = "BGN"; break
			case "048": result = "BHD"; break
			case "108": result = "BIF"; break
			case "060": result = "BMD"; break
			case "096": result = "BND"; break
			case "068": result = "BOB"; break
			case "984": result = "BOV"; break
			case "986": result = "BRL"; break
			case "044": result = "BSD"; break
			case "064": result = "BTN"; break
			case "072": result = "BWP"; break
			case "933": result = "BYN"; break
			case "084": result = "BZD"; break
			case "124": result = "CAD"; break
			case "976": result = "CDF"; break
			case "947": result = "CHE"; break
			case "756": result = "CHF"; break
			case "948": result = "CHW"; break
			case "990": result = "CLF"; break
			case "152": result = "CLP"; break
			case "156": result = "CNY"; break
			case "170": result = "COP"; break
			case "970": result = "COU"; break
			case "188": result = "CRC"; break
			case "931": result = "CUC"; break
			case "192": result = "CUP"; break
			case "132": result = "CVE"; break
			case "203": result = "CZK"; break
			case "262": result = "DJF"; break
			case "208": result = "DKK"; break
			case "214": result = "DOP"; break
			case "012": result = "DZD"; break
			case "818": result = "EGP"; break
			case "232": result = "ERN"; break
			case "230": result = "ETB"; break
			case "978": result = "EUR"; break
			case "242": result = "FJD"; break
			case "238": result = "FKP"; break
			case "826": result = "GBP"; break
			case "981": result = "GEL"; break
			case "936": result = "GHS"; break
			case "292": result = "GIP"; break
			case "270": result = "GMD"; break
			case "324": result = "GNF"; break
			case "320": result = "GTQ"; break
			case "328": result = "GYD"; break
			case "344": result = "HKD"; break
			case "340": result = "HNL"; break
			case "191": result = "HRK"; break
			case "332": result = "HTG"; break
			case "348": result = "HUF"; break
			case "360": result = "IDR"; break
			case "376": result = "ILS"; break
			case "356": result = "INR"; break
			case "368": result = "IQD"; break
			case "364": result = "IRR"; break
			case "352": result = "ISK"; break
			case "388": result = "JMD"; break
			case "400": result = "JOD"; break
			case "392": result = "JPY"; break
			case "404": result = "KES"; break
			case "417": result = "KGS"; break
			case "116": result = "KHR"; break
			case "174": result = "KMF"; break
			case "408": result = "KPW"; break
			case "410": result = "KRW"; break
			case "414": result = "KWD"; break
			case "136": result = "KYD"; break
			case "398": result = "KZT"; break
			case "418": result = "LAK"; break
			case "422": result = "LBP"; break
			case "144": result = "LKR"; break
			case "430": result = "LRD"; break
			case "426": result = "LSL"; break
			case "434": result = "LYD"; break
			case "504": result = "MAD"; break
			case "498": result = "MDL"; break
			case "969": result = "MGA"; break
			case "807": result = "MKD"; break
			case "104": result = "MMK"; break
			case "496": result = "MNT"; break
			case "446": result = "MOP"; break
			case "929": result = "MRU"; break
			case "480": result = "MUR"; break
			case "462": result = "MVR"; break
			case "454": result = "MWK"; break
			case "484": result = "MXN"; break
			case "979": result = "MXV"; break
			case "458": result = "MYR"; break
			case "943": result = "MZN"; break
			case "516": result = "NAD"; break
			case "566": result = "NGN"; break
			case "558": result = "NIO"; break
			case "578": result = "NOK"; break
			case "524": result = "NPR"; break
			case "554": result = "NZD"; break
			case "512": result = "OMR"; break
			case "590": result = "PAB"; break
			case "604": result = "PEN"; break
			case "598": result = "PGK"; break
			case "608": result = "PHP"; break
			case "586": result = "PKR"; break
			case "985": result = "PLN"; break
			case "600": result = "PYG"; break
			case "634": result = "QAR"; break
			case "946": result = "RON"; break
			case "941": result = "RSD"; break
			case "643": result = "RUB"; break
			case "646": result = "RWF"; break
			case "682": result = "SAR"; break
			case "090": result = "SBD"; break
			case "690": result = "SCR"; break
			case "938": result = "SDG"; break
			case "752": result = "SEK"; break
			case "702": result = "SGD"; break
			case "654": result = "SHP"; break
			case "694": result = "SLL"; break
			case "706": result = "SOS"; break
			case "968": result = "SRD"; break
			case "728": result = "SSP"; break
			case "930": result = "STN"; break
			case "222": result = "SVC"; break
			case "760": result = "SYP"; break
			case "748": result = "SZL"; break
			case "764": result = "THB"; break
			case "972": result = "TJS"; break
			case "934": result = "TMT"; break
			case "788": result = "TND"; break
			case "776": result = "TOP"; break
			case "949": result = "TRY"; break
			case "780": result = "TTD"; break
			case "901": result = "TWD"; break
			case "834": result = "TZS"; break
			case "980": result = "UAH"; break
			case "800": result = "UGX"; break
			case "840": result = "USD"; break
			case "997": result = "USN"; break
			case "940": result = "UYI"; break
			case "858": result = "UYU"; break
			case "927": result = "UYW"; break
			case "860": result = "UZS"; break
			case "928": result = "VES"; break
			case "704": result = "VND"; break
			case "548": result = "VUV"; break
			case "882": result = "WST"; break
			case "950": result = "XAF"; break
			case "961": result = "XAG"; break
			case "959": result = "XAU"; break
			case "955": result = "XBA"; break
			case "956": result = "XBB"; break
			case "957": result = "XBC"; break
			case "958": result = "XBD"; break
			case "951": result = "XCD"; break
			case "960": result = "XDR"; break
			case "952": result = "XOF"; break
			case "964": result = "XPD"; break
			case "953": result = "XPF"; break
			case "962": result = "XPT"; break
			case "994": result = "XSU"; break
			case "963": result = "XTS"; break
			case "965": result = "XUA"; break
			case "999": result = "XXX"; break
			case "886": result = "YER"; break
			case "710": result = "ZAR"; break
			case "967": result = "ZMW"; break
			case "932": result = "ZWL"; break
		}
		return result
	}
	export function decimalDigits(currency: Currency): number | undefined {
		let result: number | undefined
		switch (currency) {
			case "AED": result = 2; break
			case "AFN": result = 2; break
			case "ALL": result = 2; break
			case "AMD": result = 2; break
			case "ANG": result = 2; break
			case "AOA": result = 2; break
			case "ARS": result = 2; break
			case "AUD": result = 2; break
			case "AWG": result = 2; break
			case "AZN": result = 2; break
			case "BAM": result = 2; break
			case "BBD": result = 2; break
			case "BDT": result = 2; break
			case "BGN": result = 2; break
			case "BHD": result = 3; break
			case "BIF": result = 0; break
			case "BMD": result = 2; break
			case "BND": result = 2; break
			case "BOB": result = 2; break
			case "BOV": result = 2; break
			case "BRL": result = 2; break
			case "BSD": result = 2; break
			case "BTN": result = 2; break
			case "BWP": result = 2; break
			case "BYN": result = 2; break
			case "BZD": result = 2; break
			case "CAD": result = 2; break
			case "CDF": result = 2; break
			case "CHE": result = 2; break
			case "CHF": result = 2; break
			case "CHW": result = 2; break
			case "CLF": result = 4; break
			case "CLP": result = 0; break
			case "CNY": result = 2; break
			case "COP": result = 2; break
			case "COU": result = 2; break
			case "CRC": result = 2; break
			case "CUC": result = 2; break
			case "CUP": result = 2; break
			case "CVE": result = 2; break
			case "CZK": result = 2; break
			case "DJF": result = 0; break
			case "DKK": result = 2; break
			case "DOP": result = 2; break
			case "DZD": result = 2; break
			case "EGP": result = 2; break
			case "ERN": result = 2; break
			case "ETB": result = 2; break
			case "EUR": result = 2; break
			case "FJD": result = 2; break
			case "FKP": result = 2; break
			case "GBP": result = 2; break
			case "GEL": result = 2; break
			case "GHS": result = 2; break
			case "GIP": result = 2; break
			case "GMD": result = 2; break
			case "GNF": result = 0; break
			case "GTQ": result = 2; break
			case "GYD": result = 2; break
			case "HKD": result = 2; break
			case "HNL": result = 2; break
			case "HRK": result = 2; break
			case "HTG": result = 2; break
			case "HUF": result = 2; break
			case "IDR": result = 2; break
			case "ILS": result = 2; break
			case "INR": result = 2; break
			case "IQD": result = 3; break
			case "IRR": result = 2; break
			case "ISK": result = 0; break
			case "JMD": result = 2; break
			case "JOD": result = 3; break
			case "JPY": result = 0; break
			case "KES": result = 2; break
			case "KGS": result = 2; break
			case "KHR": result = 2; break
			case "KMF": result = 0; break
			case "KPW": result = 2; break
			case "KRW": result = 0; break
			case "KWD": result = 3; break
			case "KYD": result = 2; break
			case "KZT": result = 2; break
			case "LAK": result = 2; break
			case "LBP": result = 2; break
			case "LKR": result = 2; break
			case "LRD": result = 2; break
			case "LSL": result = 2; break
			case "LYD": result = 3; break
			case "MAD": result = 2; break
			case "MDL": result = 2; break
			case "MGA": result = 2; break
			case "MKD": result = 2; break
			case "MMK": result = 2; break
			case "MNT": result = 2; break
			case "MOP": result = 2; break
			case "MRU": result = 2; break
			case "MUR": result = 2; break
			case "MVR": result = 2; break
			case "MWK": result = 2; break
			case "MXN": result = 2; break
			case "MXV": result = 2; break
			case "MYR": result = 2; break
			case "MZN": result = 2; break
			case "NAD": result = 2; break
			case "NGN": result = 2; break
			case "NIO": result = 2; break
			case "NOK": result = 2; break
			case "NPR": result = 2; break
			case "NZD": result = 2; break
			case "OMR": result = 3; break
			case "PAB": result = 2; break
			case "PEN": result = 2; break
			case "PGK": result = 2; break
			case "PHP": result = 2; break
			case "PKR": result = 2; break
			case "PLN": result = 2; break
			case "PYG": result = 0; break
			case "QAR": result = 2; break
			case "RON": result = 2; break
			case "RSD": result = 2; break
			case "RUB": result = 2; break
			case "RWF": result = 0; break
			case "SAR": result = 2; break
			case "SBD": result = 2; break
			case "SCR": result = 2; break
			case "SDG": result = 2; break
			case "SEK": result = 2; break
			case "SGD": result = 2; break
			case "SHP": result = 2; break
			case "SLL": result = 2; break
			case "SOS": result = 2; break
			case "SRD": result = 2; break
			case "SSP": result = 2; break
			case "STN": result = 2; break
			case "SVC": result = 2; break
			case "SYP": result = 2; break
			case "SZL": result = 2; break
			case "THB": result = 2; break
			case "TJS": result = 2; break
			case "TMT": result = 2; break
			case "TND": result = 3; break
			case "TOP": result = 2; break
			case "TRY": result = 2; break
			case "TTD": result = 2; break
			case "TWD": result = 2; break
			case "TZS": result = 2; break
			case "UAH": result = 2; break
			case "UGX": result = 0; break
			case "USD": result = 2; break
			case "USN": result = 2; break
			case "UYI": result = 0; break
			case "UYU": result = 2; break
			case "UYW": result = 4; break
			case "UZS": result = 2; break
			case "VES": result = 2; break
			case "VND": result = 0; break
			case "VUV": result = 0; break
			case "WST": result = 2; break
			case "XAF": result = 0; break
			case "XAG": result = undefined; break
			case "XAU": result = undefined; break
			case "XBA": result = undefined; break
			case "XBB": result = undefined; break
			case "XBC": result = undefined; break
			case "XBD": result = undefined; break
			case "XCD": result = 2; break
			case "XDR": result = undefined; break
			case "XOF": result = 0; break
			case "XPD": result = undefined; break
			case "XPF": result = 0; break
			case "XPT": result = undefined; break
			case "XSU": result = undefined; break
			case "XTS": result = undefined; break
			case "XUA": result = undefined; break
			case "XXX": result = undefined; break
			case "YER": result = 2; break
			case "ZAR": result = 2; break
			case "ZMW": result = 2; break
			case "ZWL": result = 2; break
		}
		return result
	}
}
