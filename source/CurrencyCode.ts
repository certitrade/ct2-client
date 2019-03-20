import { Currency } from "./Currency"

export type CurrencyCode =
	"008" |
	"012" |
	"032" |
	"036" |
	"044" |
	"048" |
	"050" |
	"051" |
	"052" |
	"060" |
	"064" |
	"068" |
	"072" |
	"084" |
	"090" |
	"096" |
	"104" |
	"108" |
	"116" |
	"124" |
	"132" |
	"136" |
	"144" |
	"152" |
	"156" |
	"170" |
	"174" |
	"188" |
	"191" |
	"192" |
	"203" |
	"208" |
	"214" |
	"222" |
	"230" |
	"232" |
	"238" |
	"242" |
	"262" |
	"270" |
	"292" |
	"320" |
	"324" |
	"328" |
	"332" |
	"340" |
	"344" |
	"348" |
	"352" |
	"356" |
	"360" |
	"364" |
	"368" |
	"376" |
	"388" |
	"392" |
	"398" |
	"400" |
	"404" |
	"408" |
	"410" |
	"414" |
	"417" |
	"418" |
	"422" |
	"426" |
	"430" |
	"434" |
	"446" |
	"454" |
	"458" |
	"462" |
	"480" |
	"484" |
	"496" |
	"498" |
	"504" |
	"512" |
	"516" |
	"524" |
	"532" |
	"533" |
	"548" |
	"554" |
	"558" |
	"566" |
	"578" |
	"586" |
	"590" |
	"598" |
	"600" |
	"604" |
	"608" |
	"634" |
	"643" |
	"646" |
	"654" |
	"682" |
	"690" |
	"694" |
	"702" |
	"704" |
	"706" |
	"710" |
	"728" |
	"748" |
	"752" |
	"756" |
	"760" |
	"764" |
	"776" |
	"780" |
	"784" |
	"788" |
	"800" |
	"807" |
	"818" |
	"826" |
	"834" |
	"840" |
	"858" |
	"860" |
	"882" |
	"886" |
	"901" |
	"927" |
	"928" |
	"929" |
	"930" |
	"931" |
	"932" |
	"933" |
	"934" |
	"936" |
	"938" |
	"940" |
	"941" |
	"943" |
	"944" |
	"946" |
	"947" |
	"948" |
	"949" |
	"950" |
	"951" |
	"952" |
	"953" |
	"955" |
	"956" |
	"957" |
	"958" |
	"959" |
	"960" |
	"961" |
	"962" |
	"963" |
	"964" |
	"965" |
	"967" |
	"968" |
	"969" |
	"970" |
	"971" |
	"972" |
	"973" |
	"975" |
	"976" |
	"977" |
	"978" |
	"979" |
	"980" |
	"981" |
	"984" |
	"985" |
	"986" |
	"990" |
	"994" |
	"997" |
	"999"

export namespace CurrencyCode {
	export function is(value: CurrencyCode | any): value is CurrencyCode {
		return typeof(value) == "string" && (
		value == "008" ||
		value == "012" ||
		value == "032" ||
		value == "036" ||
		value == "044" ||
		value == "048" ||
		value == "050" ||
		value == "051" ||
		value == "052" ||
		value == "060" ||
		value == "064" ||
		value == "068" ||
		value == "072" ||
		value == "084" ||
		value == "090" ||
		value == "096" ||
		value == "104" ||
		value == "108" ||
		value == "116" ||
		value == "124" ||
		value == "132" ||
		value == "136" ||
		value == "144" ||
		value == "152" ||
		value == "156" ||
		value == "170" ||
		value == "174" ||
		value == "188" ||
		value == "191" ||
		value == "192" ||
		value == "203" ||
		value == "208" ||
		value == "214" ||
		value == "222" ||
		value == "230" ||
		value == "232" ||
		value == "238" ||
		value == "242" ||
		value == "262" ||
		value == "270" ||
		value == "292" ||
		value == "320" ||
		value == "324" ||
		value == "328" ||
		value == "332" ||
		value == "340" ||
		value == "344" ||
		value == "348" ||
		value == "352" ||
		value == "356" ||
		value == "360" ||
		value == "364" ||
		value == "368" ||
		value == "376" ||
		value == "388" ||
		value == "392" ||
		value == "398" ||
		value == "400" ||
		value == "404" ||
		value == "408" ||
		value == "410" ||
		value == "414" ||
		value == "417" ||
		value == "418" ||
		value == "422" ||
		value == "426" ||
		value == "430" ||
		value == "434" ||
		value == "446" ||
		value == "454" ||
		value == "458" ||
		value == "462" ||
		value == "480" ||
		value == "484" ||
		value == "496" ||
		value == "498" ||
		value == "504" ||
		value == "512" ||
		value == "516" ||
		value == "524" ||
		value == "532" ||
		value == "533" ||
		value == "548" ||
		value == "554" ||
		value == "558" ||
		value == "566" ||
		value == "578" ||
		value == "586" ||
		value == "590" ||
		value == "598" ||
		value == "600" ||
		value == "604" ||
		value == "608" ||
		value == "634" ||
		value == "643" ||
		value == "646" ||
		value == "654" ||
		value == "682" ||
		value == "690" ||
		value == "694" ||
		value == "702" ||
		value == "704" ||
		value == "706" ||
		value == "710" ||
		value == "728" ||
		value == "748" ||
		value == "752" ||
		value == "756" ||
		value == "760" ||
		value == "764" ||
		value == "776" ||
		value == "780" ||
		value == "784" ||
		value == "788" ||
		value == "800" ||
		value == "807" ||
		value == "818" ||
		value == "826" ||
		value == "834" ||
		value == "840" ||
		value == "858" ||
		value == "860" ||
		value == "882" ||
		value == "886" ||
		value == "901" ||
		value == "927" ||
		value == "928" ||
		value == "929" ||
		value == "930" ||
		value == "931" ||
		value == "932" ||
		value == "933" ||
		value == "934" ||
		value == "936" ||
		value == "938" ||
		value == "940" ||
		value == "941" ||
		value == "943" ||
		value == "944" ||
		value == "946" ||
		value == "947" ||
		value == "948" ||
		value == "949" ||
		value == "950" ||
		value == "951" ||
		value == "952" ||
		value == "953" ||
		value == "955" ||
		value == "956" ||
		value == "957" ||
		value == "958" ||
		value == "959" ||
		value == "960" ||
		value == "961" ||
		value == "962" ||
		value == "963" ||
		value == "964" ||
		value == "965" ||
		value == "967" ||
		value == "968" ||
		value == "969" ||
		value == "970" ||
		value == "971" ||
		value == "972" ||
		value == "973" ||
		value == "975" ||
		value == "976" ||
		value == "977" ||
		value == "978" ||
		value == "979" ||
		value == "980" ||
		value == "981" ||
		value == "984" ||
		value == "985" ||
		value == "986" ||
		value == "990" ||
		value == "994" ||
		value == "997" ||
		value == "999"
		)
	}
	export function from(currency: Currency): CurrencyCode | undefined {
		let result: CurrencyCode | undefined
		switch (currency) {
			case "ALL": result = "008"; break
			case "DZD": result = "012"; break
			case "ARS": result = "032"; break
			case "AUD": result = "036"; break
			case "BSD": result = "044"; break
			case "BHD": result = "048"; break
			case "BDT": result = "050"; break
			case "AMD": result = "051"; break
			case "BBD": result = "052"; break
			case "BMD": result = "060"; break
			case "BTN": result = "064"; break
			case "BOB": result = "068"; break
			case "BWP": result = "072"; break
			case "BZD": result = "084"; break
			case "SBD": result = "090"; break
			case "BND": result = "096"; break
			case "MMK": result = "104"; break
			case "BIF": result = "108"; break
			case "KHR": result = "116"; break
			case "CAD": result = "124"; break
			case "CVE": result = "132"; break
			case "KYD": result = "136"; break
			case "LKR": result = "144"; break
			case "CLP": result = "152"; break
			case "CNY": result = "156"; break
			case "COP": result = "170"; break
			case "KMF": result = "174"; break
			case "CRC": result = "188"; break
			case "HRK": result = "191"; break
			case "CUP": result = "192"; break
			case "CZK": result = "203"; break
			case "DKK": result = "208"; break
			case "DOP": result = "214"; break
			case "SVC": result = "222"; break
			case "ETB": result = "230"; break
			case "ERN": result = "232"; break
			case "FKP": result = "238"; break
			case "FJD": result = "242"; break
			case "DJF": result = "262"; break
			case "GMD": result = "270"; break
			case "GIP": result = "292"; break
			case "GTQ": result = "320"; break
			case "GNF": result = "324"; break
			case "GYD": result = "328"; break
			case "HTG": result = "332"; break
			case "HNL": result = "340"; break
			case "HKD": result = "344"; break
			case "HUF": result = "348"; break
			case "ISK": result = "352"; break
			case "INR": result = "356"; break
			case "IDR": result = "360"; break
			case "IRR": result = "364"; break
			case "IQD": result = "368"; break
			case "ILS": result = "376"; break
			case "JMD": result = "388"; break
			case "JPY": result = "392"; break
			case "KZT": result = "398"; break
			case "JOD": result = "400"; break
			case "KES": result = "404"; break
			case "KPW": result = "408"; break
			case "KRW": result = "410"; break
			case "KWD": result = "414"; break
			case "KGS": result = "417"; break
			case "LAK": result = "418"; break
			case "LBP": result = "422"; break
			case "LSL": result = "426"; break
			case "LRD": result = "430"; break
			case "LYD": result = "434"; break
			case "MOP": result = "446"; break
			case "MWK": result = "454"; break
			case "MYR": result = "458"; break
			case "MVR": result = "462"; break
			case "MUR": result = "480"; break
			case "MXN": result = "484"; break
			case "MNT": result = "496"; break
			case "MDL": result = "498"; break
			case "MAD": result = "504"; break
			case "OMR": result = "512"; break
			case "NAD": result = "516"; break
			case "NPR": result = "524"; break
			case "ANG": result = "532"; break
			case "AWG": result = "533"; break
			case "VUV": result = "548"; break
			case "NZD": result = "554"; break
			case "NIO": result = "558"; break
			case "NGN": result = "566"; break
			case "NOK": result = "578"; break
			case "PKR": result = "586"; break
			case "PAB": result = "590"; break
			case "PGK": result = "598"; break
			case "PYG": result = "600"; break
			case "PEN": result = "604"; break
			case "PHP": result = "608"; break
			case "QAR": result = "634"; break
			case "RUB": result = "643"; break
			case "RWF": result = "646"; break
			case "SHP": result = "654"; break
			case "SAR": result = "682"; break
			case "SCR": result = "690"; break
			case "SLL": result = "694"; break
			case "SGD": result = "702"; break
			case "VND": result = "704"; break
			case "SOS": result = "706"; break
			case "ZAR": result = "710"; break
			case "SSP": result = "728"; break
			case "SZL": result = "748"; break
			case "SEK": result = "752"; break
			case "CHF": result = "756"; break
			case "SYP": result = "760"; break
			case "THB": result = "764"; break
			case "TOP": result = "776"; break
			case "TTD": result = "780"; break
			case "AED": result = "784"; break
			case "TND": result = "788"; break
			case "UGX": result = "800"; break
			case "MKD": result = "807"; break
			case "EGP": result = "818"; break
			case "GBP": result = "826"; break
			case "TZS": result = "834"; break
			case "USD": result = "840"; break
			case "UYU": result = "858"; break
			case "UZS": result = "860"; break
			case "WST": result = "882"; break
			case "YER": result = "886"; break
			case "TWD": result = "901"; break
			case "UYW": result = "927"; break
			case "VES": result = "928"; break
			case "MRU": result = "929"; break
			case "STN": result = "930"; break
			case "CUC": result = "931"; break
			case "ZWL": result = "932"; break
			case "BYN": result = "933"; break
			case "TMT": result = "934"; break
			case "GHS": result = "936"; break
			case "SDG": result = "938"; break
			case "UYI": result = "940"; break
			case "RSD": result = "941"; break
			case "MZN": result = "943"; break
			case "AZN": result = "944"; break
			case "RON": result = "946"; break
			case "CHE": result = "947"; break
			case "CHW": result = "948"; break
			case "TRY": result = "949"; break
			case "XAF": result = "950"; break
			case "XCD": result = "951"; break
			case "XOF": result = "952"; break
			case "XPF": result = "953"; break
			case "XBA": result = "955"; break
			case "XBB": result = "956"; break
			case "XBC": result = "957"; break
			case "XBD": result = "958"; break
			case "XAU": result = "959"; break
			case "XDR": result = "960"; break
			case "XAG": result = "961"; break
			case "XPT": result = "962"; break
			case "XTS": result = "963"; break
			case "XPD": result = "964"; break
			case "XUA": result = "965"; break
			case "ZMW": result = "967"; break
			case "SRD": result = "968"; break
			case "MGA": result = "969"; break
			case "COU": result = "970"; break
			case "AFN": result = "971"; break
			case "TJS": result = "972"; break
			case "AOA": result = "973"; break
			case "BGN": result = "975"; break
			case "CDF": result = "976"; break
			case "BAM": result = "977"; break
			case "EUR": result = "978"; break
			case "MXV": result = "979"; break
			case "UAH": result = "980"; break
			case "GEL": result = "981"; break
			case "BOV": result = "984"; break
			case "PLN": result = "985"; break
			case "BRL": result = "986"; break
			case "CLF": result = "990"; break
			case "XSU": result = "994"; break
			case "USN": result = "997"; break
			case "XXX": result = "999"; break
		}
		return result
	}
	export function decimalDigits(currencyCode: CurrencyCode): number | undefined {
		let result: number | undefined
		switch (currencyCode) {
			case "008": result = 2; break
			case "012": result = 2; break
			case "032": result = 2; break
			case "036": result = 2; break
			case "044": result = 2; break
			case "048": result = 3; break
			case "050": result = 2; break
			case "051": result = 2; break
			case "052": result = 2; break
			case "060": result = 2; break
			case "064": result = 2; break
			case "068": result = 2; break
			case "072": result = 2; break
			case "084": result = 2; break
			case "090": result = 2; break
			case "096": result = 2; break
			case "104": result = 2; break
			case "108": result = 0; break
			case "116": result = 2; break
			case "124": result = 2; break
			case "132": result = 2; break
			case "136": result = 2; break
			case "144": result = 2; break
			case "152": result = 0; break
			case "156": result = 2; break
			case "170": result = 2; break
			case "174": result = 0; break
			case "188": result = 2; break
			case "191": result = 2; break
			case "192": result = 2; break
			case "203": result = 2; break
			case "208": result = 2; break
			case "214": result = 2; break
			case "222": result = 2; break
			case "230": result = 2; break
			case "232": result = 2; break
			case "238": result = 2; break
			case "242": result = 2; break
			case "262": result = 0; break
			case "270": result = 2; break
			case "292": result = 2; break
			case "320": result = 2; break
			case "324": result = 0; break
			case "328": result = 2; break
			case "332": result = 2; break
			case "340": result = 2; break
			case "344": result = 2; break
			case "348": result = 2; break
			case "352": result = 0; break
			case "356": result = 2; break
			case "360": result = 2; break
			case "364": result = 2; break
			case "368": result = 3; break
			case "376": result = 2; break
			case "388": result = 2; break
			case "392": result = 0; break
			case "398": result = 2; break
			case "400": result = 3; break
			case "404": result = 2; break
			case "408": result = 2; break
			case "410": result = 0; break
			case "414": result = 3; break
			case "417": result = 2; break
			case "418": result = 2; break
			case "422": result = 2; break
			case "426": result = 2; break
			case "430": result = 2; break
			case "434": result = 3; break
			case "446": result = 2; break
			case "454": result = 2; break
			case "458": result = 2; break
			case "462": result = 2; break
			case "480": result = 2; break
			case "484": result = 2; break
			case "496": result = 2; break
			case "498": result = 2; break
			case "504": result = 2; break
			case "512": result = 3; break
			case "516": result = 2; break
			case "524": result = 2; break
			case "532": result = 2; break
			case "533": result = 2; break
			case "548": result = 0; break
			case "554": result = 2; break
			case "558": result = 2; break
			case "566": result = 2; break
			case "578": result = 2; break
			case "586": result = 2; break
			case "590": result = 2; break
			case "598": result = 2; break
			case "600": result = 0; break
			case "604": result = 2; break
			case "608": result = 2; break
			case "634": result = 2; break
			case "643": result = 2; break
			case "646": result = 0; break
			case "654": result = 2; break
			case "682": result = 2; break
			case "690": result = 2; break
			case "694": result = 2; break
			case "702": result = 2; break
			case "704": result = 0; break
			case "706": result = 2; break
			case "710": result = 2; break
			case "728": result = 2; break
			case "748": result = 2; break
			case "752": result = 2; break
			case "756": result = 2; break
			case "760": result = 2; break
			case "764": result = 2; break
			case "776": result = 2; break
			case "780": result = 2; break
			case "784": result = 2; break
			case "788": result = 3; break
			case "800": result = 0; break
			case "807": result = 2; break
			case "818": result = 2; break
			case "826": result = 2; break
			case "834": result = 2; break
			case "840": result = 2; break
			case "858": result = 2; break
			case "860": result = 2; break
			case "882": result = 2; break
			case "886": result = 2; break
			case "901": result = 2; break
			case "927": result = 4; break
			case "928": result = 2; break
			case "929": result = 2; break
			case "930": result = 2; break
			case "931": result = 2; break
			case "932": result = 2; break
			case "933": result = 2; break
			case "934": result = 2; break
			case "936": result = 2; break
			case "938": result = 2; break
			case "940": result = 0; break
			case "941": result = 2; break
			case "943": result = 2; break
			case "944": result = 2; break
			case "946": result = 2; break
			case "947": result = 2; break
			case "948": result = 2; break
			case "949": result = 2; break
			case "950": result = 0; break
			case "951": result = 2; break
			case "952": result = 0; break
			case "953": result = 0; break
			case "955": result = undefined; break
			case "956": result = undefined; break
			case "957": result = undefined; break
			case "958": result = undefined; break
			case "959": result = undefined; break
			case "960": result = undefined; break
			case "961": result = undefined; break
			case "962": result = undefined; break
			case "963": result = undefined; break
			case "964": result = undefined; break
			case "965": result = undefined; break
			case "967": result = 2; break
			case "968": result = 2; break
			case "969": result = 2; break
			case "970": result = 2; break
			case "971": result = 2; break
			case "972": result = 2; break
			case "973": result = 2; break
			case "975": result = 2; break
			case "976": result = 2; break
			case "977": result = 2; break
			case "978": result = 2; break
			case "979": result = 2; break
			case "980": result = 2; break
			case "981": result = 2; break
			case "984": result = 2; break
			case "985": result = 2; break
			case "986": result = 2; break
			case "990": result = 4; break
			case "994": result = undefined; break
			case "997": result = 2; break
			case "999": result = undefined; break
		}
		return result
	}
}