export type Language =
	"ab" |
	"aa" |
	"af" |
	"ak" |
	"sq" |
	"am" |
	"ar" |
	"an" |
	"hy" |
	"as" |
	"av" |
	"ae" |
	"ay" |
	"az" |
	"bm" |
	"ba" |
	"eu" |
	"be" |
	"bn" |
	"bh" |
	"bi" |
	"bs" |
	"br" |
	"bg" |
	"my" |
	"ca" |
	"ch" |
	"ce" |
	"ny" |
	"zh" |
	"cv" |
	"kw" |
	"co" |
	"cr" |
	"hr" |
	"cs" |
	"da" |
	"dv" |
	"nl" |
	"dz" |
	"en" |
	"eo" |
	"et" |
	"ee" |
	"fo" |
	"fj" |
	"fi" |
	"fr" |
	"ff" |
	"gl" |
	"ka" |
	"de" |
	"el" |
	"gn" |
	"gu" |
	"ht" |
	"ha" |
	"he" |
	"hz" |
	"hi" |
	"ho" |
	"hu" |
	"ia" |
	"id" |
	"ie" |
	"ga" |
	"ig" |
	"ik" |
	"io" |
	"is" |
	"it" |
	"iu" |
	"ja" |
	"jv" |
	"kl" |
	"kn" |
	"kr" |
	"ks" |
	"kk" |
	"km" |
	"ki" |
	"rw" |
	"ky" |
	"kv" |
	"kg" |
	"ko" |
	"ku" |
	"kj" |
	"la" |
	"lb" |
	"lg" |
	"li" |
	"ln" |
	"lo" |
	"lt" |
	"lu" |
	"lv" |
	"gv" |
	"mk" |
	"mg" |
	"ms" |
	"ml" |
	"mt" |
	"mi" |
	"mr" |
	"mh" |
	"mn" |
	"na" |
	"nv" |
	"nd" |
	"ne" |
	"ng" |
	"nb" |
	"nn" |
	"no" |
	"ii" |
	"nr" |
	"oc" |
	"oj" |
	"cu" |
	"om" |
	"or" |
	"os" |
	"pa" |
	"pi" |
	"fa" |
	"pl" |
	"ps" |
	"pt" |
	"qu" |
	"rm" |
	"rn" |
	"ro" |
	"ru" |
	"sa" |
	"sc" |
	"sd" |
	"se" |
	"sm" |
	"sg" |
	"sr" |
	"gd" |
	"sn" |
	"si" |
	"sk" |
	"sl" |
	"so" |
	"st" |
	"es" |
	"su" |
	"sw" |
	"ss" |
	"sv" |
	"ta" |
	"te" |
	"tg" |
	"th" |
	"ti" |
	"bo" |
	"tk" |
	"tl" |
	"tn" |
	"to" |
	"tr" |
	"ts" |
	"tt" |
	"tw" |
	"ty" |
	"ug" |
	"uk" |
	"ur" |
	"uz" |
	"ve" |
	"vi" |
	"vo" |
	"wa" |
	"cy" |
	"wo" |
	"fy" |
	"xh" |
	"yi" |
	"yo" |
	"za" |
	"zu"

export namespace Language {
	export function is(value: Language | any): value is Language {
		return typeof(value) == "string" && (
			value == "ab" ||
			value == "aa" ||
			value == "af" ||
			value == "ak" ||
			value == "sq" ||
			value == "am" ||
			value == "ar" ||
			value == "an" ||
			value == "hy" ||
			value == "as" ||
			value == "av" ||
			value == "ae" ||
			value == "ay" ||
			value == "az" ||
			value == "bm" ||
			value == "ba" ||
			value == "eu" ||
			value == "be" ||
			value == "bn" ||
			value == "bh" ||
			value == "bi" ||
			value == "bs" ||
			value == "br" ||
			value == "bg" ||
			value == "my" ||
			value == "ca" ||
			value == "ch" ||
			value == "ce" ||
			value == "ny" ||
			value == "zh" ||
			value == "cv" ||
			value == "kw" ||
			value == "co" ||
			value == "cr" ||
			value == "hr" ||
			value == "cs" ||
			value == "da" ||
			value == "dv" ||
			value == "nl" ||
			value == "dz" ||
			value == "en" ||
			value == "eo" ||
			value == "et" ||
			value == "ee" ||
			value == "fo" ||
			value == "fj" ||
			value == "fi" ||
			value == "fr" ||
			value == "ff" ||
			value == "gl" ||
			value == "ka" ||
			value == "de" ||
			value == "el" ||
			value == "gn" ||
			value == "gu" ||
			value == "ht" ||
			value == "ha" ||
			value == "he" ||
			value == "hz" ||
			value == "hi" ||
			value == "ho" ||
			value == "hu" ||
			value == "ia" ||
			value == "id" ||
			value == "ie" ||
			value == "ga" ||
			value == "ig" ||
			value == "ik" ||
			value == "io" ||
			value == "is" ||
			value == "it" ||
			value == "iu" ||
			value == "ja" ||
			value == "jv" ||
			value == "kl" ||
			value == "kn" ||
			value == "kr" ||
			value == "ks" ||
			value == "kk" ||
			value == "km" ||
			value == "ki" ||
			value == "rw" ||
			value == "ky" ||
			value == "kv" ||
			value == "kg" ||
			value == "ko" ||
			value == "ku" ||
			value == "kj" ||
			value == "la" ||
			value == "lb" ||
			value == "lg" ||
			value == "li" ||
			value == "ln" ||
			value == "lo" ||
			value == "lt" ||
			value == "lu" ||
			value == "lv" ||
			value == "gv" ||
			value == "mk" ||
			value == "mg" ||
			value == "ms" ||
			value == "ml" ||
			value == "mt" ||
			value == "mi" ||
			value == "mr" ||
			value == "mh" ||
			value == "mn" ||
			value == "na" ||
			value == "nv" ||
			value == "nd" ||
			value == "ne" ||
			value == "ng" ||
			value == "nb" ||
			value == "nn" ||
			value == "no" ||
			value == "ii" ||
			value == "nr" ||
			value == "oc" ||
			value == "oj" ||
			value == "cu" ||
			value == "om" ||
			value == "or" ||
			value == "os" ||
			value == "pa" ||
			value == "pi" ||
			value == "fa" ||
			value == "pl" ||
			value == "ps" ||
			value == "pt" ||
			value == "qu" ||
			value == "rm" ||
			value == "rn" ||
			value == "ro" ||
			value == "ru" ||
			value == "sa" ||
			value == "sc" ||
			value == "sd" ||
			value == "se" ||
			value == "sm" ||
			value == "sg" ||
			value == "sr" ||
			value == "gd" ||
			value == "sn" ||
			value == "si" ||
			value == "sk" ||
			value == "sl" ||
			value == "so" ||
			value == "st" ||
			value == "es" ||
			value == "su" ||
			value == "sw" ||
			value == "ss" ||
			value == "sv" ||
			value == "ta" ||
			value == "te" ||
			value == "tg" ||
			value == "th" ||
			value == "ti" ||
			value == "bo" ||
			value == "tk" ||
			value == "tl" ||
			value == "tn" ||
			value == "to" ||
			value == "tr" ||
			value == "ts" ||
			value == "tt" ||
			value == "tw" ||
			value == "ty" ||
			value == "ug" ||
			value == "uk" ||
			value == "ur" ||
			value == "uz" ||
			value == "ve" ||
			value == "vi" ||
			value == "vo" ||
			value == "wa" ||
			value == "cy" ||
			value == "wo" ||
			value == "fy" ||
			value == "xh" ||
			value == "yi" ||
			value == "yo" ||
			value == "za" ||
			value == "zu")
	}
	export function toName(language: Language): string {
		let result: string = ""
		switch (language) {
			case "ab": result = "Abkhazian"; break
			case "aa": result = "Afar"; break
			case "af": result = "Afrikaans"; break
			case "ak": result = "Akan"; break
			case "sq": result = "Albanian"; break
			case "am": result = "Amharic"; break
			case "ar": result = "Arabic"; break
			case "an": result = "Aragonese"; break
			case "hy": result = "Armenian"; break
			case "as": result = "Assamese"; break
			case "av": result = "Avaric"; break
			case "ae": result = "Avestan"; break
			case "ay": result = "Aymara"; break
			case "az": result = "Azerbaijani"; break
			case "bm": result = "Bambara"; break
			case "ba": result = "Bashkir"; break
			case "eu": result = "Basque"; break
			case "be": result = "Belarusian"; break
			case "bn": result = "Bengali"; break
			case "bh": result = "Bihari languages"; break
			case "bi": result = "Bislama"; break
			case "bs": result = "Bosnian"; break
			case "br": result = "Breton"; break
			case "bg": result = "Bulgarian"; break
			case "my": result = "Burmese"; break
			case "ca": result = "Catalan, Valencian"; break
			case "ch": result = "Chamorro"; break
			case "ce": result = "Chechen"; break
			case "ny": result = "Chichewa, Chewa, Nyanja"; break
			case "zh": result = "Chinese"; break
			case "cv": result = "Chuvash"; break
			case "kw": result = "Cornish"; break
			case "co": result = "Corsican"; break
			case "cr": result = "Cree"; break
			case "hr": result = "Croatian"; break
			case "cs": result = "Czech"; break
			case "da": result = "Danish"; break
			case "dv": result = "Divehi, Dhivehi, Maldivian"; break
			case "nl": result = "Dutch, Flemish"; break
			case "dz": result = "Dzongkha"; break
			case "en": result = "English"; break
			case "eo": result = "Esperanto"; break
			case "et": result = "Estonian"; break
			case "ee": result = "Ewe"; break
			case "fo": result = "Faroese"; break
			case "fj": result = "Fijian"; break
			case "fi": result = "Finnish"; break
			case "fr": result = "French"; break
			case "ff": result = "Fulah"; break
			case "gl": result = "Galician"; break
			case "ka": result = "Georgian"; break
			case "de": result = "German"; break
			case "el": result = "Greek, Modern (1453-)"; break
			case "gn": result = "Guarani"; break
			case "gu": result = "Gujarati"; break
			case "ht": result = "Haitian, Haitian Creole"; break
			case "ha": result = "Hausa"; break
			case "he": result = "Hebrew"; break
			case "hz": result = "Herero"; break
			case "hi": result = "Hindi"; break
			case "ho": result = "Hiri Motu"; break
			case "hu": result = "Hungarian"; break
			case "ia": result = "Interlingua (International Auxiliary Language Association)"; break
			case "id": result = "Indonesian"; break
			case "ie": result = "Interlingue, Occidental"; break
			case "ga": result = "Irish"; break
			case "ig": result = "Igbo"; break
			case "ik": result = "Inupiaq"; break
			case "io": result = "Ido"; break
			case "is": result = "Icelandic"; break
			case "it": result = "Italian"; break
			case "iu": result = "Inuktitut"; break
			case "ja": result = "Japanese"; break
			case "jv": result = "Javanese"; break
			case "kl": result = "Kalaallisut, Greenlandic"; break
			case "kn": result = "Kannada"; break
			case "kr": result = "Kanuri"; break
			case "ks": result = "Kashmiri"; break
			case "kk": result = "Kazakh"; break
			case "km": result = "Central Khmer"; break
			case "ki": result = "Kikuyu, Gikuyu"; break
			case "rw": result = "Kinyarwanda"; break
			case "ky": result = "Kirghiz, Kyrgyz"; break
			case "kv": result = "Komi"; break
			case "kg": result = "Kongo"; break
			case "ko": result = "Korean"; break
			case "ku": result = "Kurdish"; break
			case "kj": result = "Kuanyama, Kwanyama"; break
			case "la": result = "Latin"; break
			case "lb": result = "Luxembourgish, Letzeburgesch"; break
			case "lg": result = "Ganda"; break
			case "li": result = "Limburgan, Limburger, Limburgish"; break
			case "ln": result = "Lingala"; break
			case "lo": result = "Lao"; break
			case "lt": result = "Lithuanian"; break
			case "lu": result = "Luba-Katanga"; break
			case "lv": result = "Latvian"; break
			case "gv": result = "Manx"; break
			case "mk": result = "Macedonian"; break
			case "mg": result = "Malagasy"; break
			case "ms": result = "Malay"; break
			case "ml": result = "Malayalam"; break
			case "mt": result = "Maltese"; break
			case "mi": result = "Maori"; break
			case "mr": result = "Marathi"; break
			case "mh": result = "Marshallese"; break
			case "mn": result = "Mongolian"; break
			case "na": result = "Nauru"; break
			case "nv": result = "Navajo, Navaho"; break
			case "nd": result = "North Ndebele"; break
			case "ne": result = "Nepali"; break
			case "ng": result = "Ndonga"; break
			case "nb": result = "Norwegian Bokmål"; break
			case "nn": result = "Norwegian Nynorsk"; break
			case "no": result = "Norwegian"; break
			case "ii": result = "Sichuan Yi, Nuosu"; break
			case "nr": result = "South Ndebele"; break
			case "oc": result = "Occitan"; break
			case "oj": result = "Ojibwa"; break
			case "cu": result = "Church Slavic, Old Slavonic, Church Slavonic, Old Bulgarian, Old Church Slavonic"; break
			case "om": result = "Oromo"; break
			case "or": result = "Oriya"; break
			case "os": result = "Ossetian, Ossetic"; break
			case "pa": result = "Panjabi, Punjabi"; break
			case "pi": result = "Pali"; break
			case "fa": result = "Persian"; break
			case "pl": result = "Polish"; break
			case "ps": result = "Pashto, Pushto"; break
			case "pt": result = "Portuguese"; break
			case "qu": result = "Quechua"; break
			case "rm": result = "Romansh"; break
			case "rn": result = "Rundi"; break
			case "ro": result = "Romanian, Moldavian, Moldovan"; break
			case "ru": result = "Russian"; break
			case "sa": result = "Sanskrit"; break
			case "sc": result = "Sardinian"; break
			case "sd": result = "Sindhi"; break
			case "se": result = "Northern Sami"; break
			case "sm": result = "Samoan"; break
			case "sg": result = "Sango"; break
			case "sr": result = "Serbian"; break
			case "gd": result = "Gaelic, Scottish Gaelic"; break
			case "sn": result = "Shona"; break
			case "si": result = "Sinhala, Sinhalese"; break
			case "sk": result = "Slovak"; break
			case "sl": result = "Slovenian"; break
			case "so": result = "Somali"; break
			case "st": result = "Southern Sotho"; break
			case "es": result = "Spanish, Castilian"; break
			case "su": result = "Sundanese"; break
			case "sw": result = "Swahili"; break
			case "ss": result = "Swati"; break
			case "sv": result = "Swedish"; break
			case "ta": result = "Tamil"; break
			case "te": result = "Telugu"; break
			case "tg": result = "Tajik"; break
			case "th": result = "Thai"; break
			case "ti": result = "Tigrinya"; break
			case "bo": result = "Tibetan"; break
			case "tk": result = "Turkmen"; break
			case "tl": result = "Tagalog"; break
			case "tn": result = "Tswana"; break
			case "to": result = "Tonga (Tonga Islands)"; break
			case "tr": result = "Turkish"; break
			case "ts": result = "Tsonga"; break
			case "tt": result = "Tatar"; break
			case "tw": result = "Twi"; break
			case "ty": result = "Tahitian"; break
			case "ug": result = "Uighur, Uyghur"; break
			case "uk": result = "Ukrainian"; break
			case "ur": result = "Urdu"; break
			case "uz": result = "Uzbek"; break
			case "ve": result = "Venda"; break
			case "vi": result = "Vietnamese"; break
			case "vo": result = "Volapük"; break
			case "wa": result = "Walloon"; break
			case "cy": result = "Welsh"; break
			case "wo": result = "Wolof"; break
			case "fy": result = "Western Frisian"; break
			case "xh": result = "Xhosa"; break
			case "yi": result = "Yiddish"; break
			case "yo": result = "Yoruba"; break
			case "za": result = "Zhuang, Chuang"; break
			case "zu": result = "Zulu"; break
		}
		return result
	}
	export function toNativeName(language: Language): string {
		let result: string = ""
		switch (language) {
			case "ab": result = "аҧсуа бызшәа, аҧсшәа"; break
			case "aa": result = "Afaraf"; break
			case "af": result = "Afrikaans"; break
			case "ak": result = "Akan"; break
			case "sq": result = "Shqip"; break
			case "am": result = "አማርኛ"; break
			case "ar": result = "العربية"; break
			case "an": result = "aragonés"; break
			case "hy": result = "Հայերեն"; break
			case "as": result = "অসমীয়া"; break
			case "av": result = "авар мацӀ, магӀарул мацӀ"; break
			case "ae": result = "avesta"; break
			case "ay": result = "aymar aru"; break
			case "az": result = "azərbaycan dili"; break
			case "bm": result = "bamanankan"; break
			case "ba": result = "башҡорт теле"; break
			case "eu": result = "euskara, euskera"; break
			case "be": result = "беларуская мова"; break
			case "bn": result = "বাংলা"; break
			case "bh": result = "ोजपुरी"; break
			case "bi": result = "Bislama"; break
			case "bs": result = "bosanski jezik"; break
			case "br": result = "brezhoneg"; break
			case "bg": result = "български език"; break
			case "my": result = "ဗမာစာ"; break
			case "ca": result = ";català, valencià"; break
			case "ch": result = "Chamoru"; break
			case "ce": result = "нохчийн мотт"; break
			case "ny": result = "chiCheŵa, chinyanja"; break
			case "zh": result = "中文 (Zhōngwén), 汉语, 漢語"; break
			case "cv": result = "чӑваш чӗлхи"; break
			case "kw": result = "Kernewek"; break
			case "co": result = "corsu, lingua corsa"; break
			case "cr": result = "ᓀᐦᐃᔭᐍᐏᐣ"; break
			case "hr": result = "hrvatski jezik"; break
			case "cs": result = "čeština, český jazyk"; break
			case "da": result = "dansk"; break
			case "dv": result = ";ދިވެހި"; break
			case "nl": result = "Nederlands, Vlaams"; break
			case "dz": result = "རྫོང་ཁ"; break
			case "en": result = "English"; break
			case "eo": result = "Esperanto"; break
			case "et": result = "eesti, eesti keel"; break
			case "ee": result = "Eʋegbe"; break
			case "fo": result = "føroyskt"; break
			case "fj": result = "vosa Vakaviti"; break
			case "fi": result = "suomi, suomen kieli"; break
			case "fr": result = "français, langue française"; break
			case "ff": result = "Fulfulde, Pulaar, Pular"; break
			case "gl": result = "Galego"; break
			case "ka": result = "ქართული"; break
			case "de": result = "Deutsch"; break
			case "el": result = "ελληνικά"; break
			case "gn": result = "Avañe'ẽ"; break
			case "gu": result = "ગુજરાતી"; break
			case "ht": result = "Kreyòl ayisyen"; break
			case "ha": result = "(Hausa) هَوُسَ"; break
			case "he": result = "עברית"; break
			case "hz": result = "Otjiherero"; break
			case "hi": result = "हिन्दी, हिंदी"; break
			case "ho": result = ";Hiri Motu"; break
			case "hu": result = "magyar"; break
			case "ia": result = "Interlingua"; break
			case "id": result = "Bahasa Indonesia"; break
			case "ie": result = "Interlingue"; break
			case "ga": result = "Gaeilge"; break
			case "ig": result = "Asụsụ Igbo"; break
			case "ik": result = "Iñupiaq, Iñupiatun"; break
			case "io": result = "Ido"; break
			case "is": result = "Íslenska"; break
			case "it": result = "Italiano"; break
			case "iu": result = "ᐃᓄᒃᑎᑐᑦ"; break
			case "ja": result = "日本語 (にほんご)"; break
			case "jv": result = "ꦧꦱꦗꦮ, Basa Jawa"; break
			case "kl": result = "kalaallisut, kalaallit oqaasii"; break
			case "kn": result = "ಕನ್ನಡ"; break
			case "kr": result = "Kanuri"; break
			case "ks": result = "कश्मीरी, كشميري‎"; break
			case "kk": result = "қазақ тілі"; break
			case "km": result = "្មែរ, ខេមរភាសា, ភាសាខ្មែរ"; break
			case "ki": result = "Gĩkũyũ"; break
			case "rw": result = "Ikinyarwanda"; break
			case "ky": result = "Кыргызча, Кыргыз тили"; break
			case "kv": result = "коми кыв"; break
			case "kg": result = "Kikongo"; break
			case "ko": result = "한국어"; break
			case "ku": result = "Kurdî, کوردی‎"; break
			case "kj": result = "Kuanyama"; break
			case "la": result = "latine, lingua latina"; break
			case "lb": result = "Lëtzebuergesch"; break
			case "lg": result = "Luganda"; break
			case "li": result = "Limburgs"; break
			case "ln": result = "Lingála"; break
			case "lo": result = "ພາສາລາວ"; break
			case "lt": result = "lietuvių kalba"; break
			case "lu": result = ";Kiluba"; break
			case "lv": result = "latviešu valoda"; break
			case "gv": result = "Gaelg, Gailck"; break
			case "mk": result = "македонски јазик"; break
			case "mg": result = "fiteny malagasy"; break
			case "ms": result = "Bahasa Melayu, بهاس ملايو‎"; break
			case "ml": result = "മലയാളം"; break
			case "mt": result = "Malti"; break
			case "mi": result = "te reo Māori"; break
			case "mr": result = "मराठी"; break
			case "mh": result = "Kajin M̧ajeļ"; break
			case "mn": result = "Монгол хэл"; break
			case "na": result = "Dorerin Naoero"; break
			case "nv": result = ";Diné bizaad"; break
			case "nd": result = ";isiNdebele"; break
			case "ne": result = "नेपाली"; break
			case "ng": result = "Owambo"; break
			case "nb": result = "Norsk Bokmål"; break
			case "nn": result = "Norsk Nynorsk"; break
			case "no": result = "Norsk"; break
			case "ii": result = ";ꆈꌠ꒿ Nuosuhxop"; break
			case "nr": result = ";isiNdebele"; break
			case "oc": result = "occitan, lenga d'òc"; break
			case "oj": result = "ᐊᓂᔑᓈᐯᒧᐎᓐ"; break
			case "cu": result = ";ѩзыкъ словѣньскъ"; break
			case "om": result = "Afaan Oromoo"; break
			case "or": result = "ଓଡ଼ିଆ"; break
			case "os": result = ";ирон æвзаг"; break
			case "pa": result = ";ਪੰਜਾਬੀ"; break
			case "pi": result = "पाऴि"; break
			case "fa": result = "فارسی"; break
			case "pl": result = "język polski, polszczyzna"; break
			case "ps": result = "پښتو"; break
			case "pt": result = "Português"; break
			case "qu": result = "Runa Simi, Kichwa"; break
			case "rm": result = "Rumantsch Grischun"; break
			case "rn": result = "Ikirundi"; break
			case "ro": result = ";Română"; break
			case "ru": result = "русский"; break
			case "sa": result = "संस्कृतम्"; break
			case "sc": result = "sardu"; break
			case "sd": result = "सिन्धी, سنڌي، سندھی‎"; break
			case "se": result = ";Davvisámegiella"; break
			case "sm": result = "gagana fa'a Samoa"; break
			case "sg": result = "yângâ tî sängö"; break
			case "sr": result = "српски језик"; break
			case "gd": result = ";Gàidhlig"; break
			case "sn": result = "chiShona"; break
			case "si": result = ";සිංහල"; break
			case "sk": result = "Slovenčina, Slovenský Jazyk"; break
			case "sl": result = "Slovenski Jezik, Slovenščina"; break
			case "so": result = "Soomaaliga, af Soomaali"; break
			case "st": result = ";Sesotho"; break
			case "es": result = ";Español"; break
			case "su": result = "Basa Sunda"; break
			case "sw": result = "Kiswahili"; break
			case "ss": result = "SiSwati"; break
			case "sv": result = "Svenska"; break
			case "ta": result = "தமிழ்"; break
			case "te": result = "తెలుగు"; break
			case "tg": result = "тоҷикӣ, toçikī, تاجیکی‎"; break
			case "th": result = "ไทย"; break
			case "ti": result = "ትግርኛ"; break
			case "bo": result = "བོད་ཡིག"; break
			case "tk": result = "Türkmen, Түркмен"; break
			case "tl": result = "Wikang Tagalog"; break
			case "tn": result = "Setswana"; break
			case "to": result = "Faka Tonga"; break
			case "tr": result = "Türkçe"; break
			case "ts": result = "Xitsonga"; break
			case "tt": result = "татар теле, tatar tele"; break
			case "tw": result = "Twi"; break
			case "ty": result = "Reo Tahiti"; break
			case "ug": result = ";ئۇيغۇرچە‎, Uyghurche"; break
			case "uk": result = "Українська"; break
			case "ur": result = "اردو"; break
			case "uz": result = "Oʻzbek, Ўзбек, أۇزبېك‎"; break
			case "ve": result = "Tshivenḓa"; break
			case "vi": result = "Tiếng Việt"; break
			case "vo": result = "Volapük"; break
			case "wa": result = "Walon"; break
			case "cy": result = "Cymraeg"; break
			case "wo": result = "Wollof"; break
			case "fy": result = ";Frysk"; break
			case "xh": result = "isiXhosa"; break
			case "yi": result = "ייִדיש"; break
			case "yo": result = "Yorùbá"; break
			case "za": result = "Saɯ cueŋƅ, Saw cuengh"; break
			case "zu": result = "isiZu"; break
		}
		return result
	}
}
