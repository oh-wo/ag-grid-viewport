const socket = global.socket;

class FilesService {
    constructor() {
        this._files = [{"id": 0, "name": "File 0"}, {"id": 1, "name": "File 1"}, {"id": 2, "name": "File 2"}, {
            "id": 3,
            "name": "File 3"
        }, {"id": 4, "name": "File 4"}, {"id": 5, "name": "File 5"}, {"id": 6, "name": "File 6"}, {
            "id": 7,
            "name": "File 7"
        }, {"id": 8, "name": "File 8"}, {"id": 9, "name": "File 9"}, {"id": 10, "name": "File 10"}, {
            "id": 11,
            "name": "File 11"
        }, {"id": 12, "name": "File 12"}, {"id": 13, "name": "File 13"}, {"id": 14, "name": "File 14"}, {
            "id": 15,
            "name": "File 15"
        }, {"id": 16, "name": "File 16"}, {"id": 17, "name": "File 17"}, {"id": 18, "name": "File 18"}, {
            "id": 19,
            "name": "File 19"
        }, {"id": 20, "name": "File 20"}, {"id": 21, "name": "File 21"}, {"id": 22, "name": "File 22"}, {
            "id": 23,
            "name": "File 23"
        }, {"id": 24, "name": "File 24"}, {"id": 25, "name": "File 25"}, {"id": 26, "name": "File 26"}, {
            "id": 27,
            "name": "File 27"
        }, {"id": 28, "name": "File 28"}, {"id": 29, "name": "File 29"}, {"id": 30, "name": "File 30"}, {
            "id": 31,
            "name": "File 31"
        }, {"id": 32, "name": "File 32"}, {"id": 33, "name": "File 33"}, {"id": 34, "name": "File 34"}, {
            "id": 35,
            "name": "File 35"
        }, {"id": 36, "name": "File 36"}, {"id": 37, "name": "File 37"}, {"id": 38, "name": "File 38"}, {
            "id": 39,
            "name": "File 39"
        }, {"id": 40, "name": "File 40"}, {"id": 41, "name": "File 41"}, {"id": 42, "name": "File 42"}, {
            "id": 43,
            "name": "File 43"
        }, {"id": 44, "name": "File 44"}, {"id": 45, "name": "File 45"}, {"id": 46, "name": "File 46"}, {
            "id": 47,
            "name": "File 47"
        }, {"id": 48, "name": "File 48"}, {"id": 49, "name": "File 49"}, {"id": 50, "name": "File 50"}, {
            "id": 51,
            "name": "File 51"
        }, {"id": 52, "name": "File 52"}, {"id": 53, "name": "File 53"}, {"id": 54, "name": "File 54"}, {
            "id": 55,
            "name": "File 55"
        }, {"id": 56, "name": "File 56"}, {"id": 57, "name": "File 57"}, {"id": 58, "name": "File 58"}, {
            "id": 59,
            "name": "File 59"
        }, {"id": 60, "name": "File 60"}, {"id": 61, "name": "File 61"}, {"id": 62, "name": "File 62"}, {
            "id": 63,
            "name": "File 63"
        }, {"id": 64, "name": "File 64"}, {"id": 65, "name": "File 65"}, {"id": 66, "name": "File 66"}, {
            "id": 67,
            "name": "File 67"
        }, {"id": 68, "name": "File 68"}, {"id": 69, "name": "File 69"}, {"id": 70, "name": "File 70"}, {
            "id": 71,
            "name": "File 71"
        }, {"id": 72, "name": "File 72"}, {"id": 73, "name": "File 73"}, {"id": 74, "name": "File 74"}, {
            "id": 75,
            "name": "File 75"
        }, {"id": 76, "name": "File 76"}, {"id": 77, "name": "File 77"}, {"id": 78, "name": "File 78"}, {
            "id": 79,
            "name": "File 79"
        }, {"id": 80, "name": "File 80"}, {"id": 81, "name": "File 81"}, {"id": 82, "name": "File 82"}, {
            "id": 83,
            "name": "File 83"
        }, {"id": 84, "name": "File 84"}, {"id": 85, "name": "File 85"}, {"id": 86, "name": "File 86"}, {
            "id": 87,
            "name": "File 87"
        }, {"id": 88, "name": "File 88"}, {"id": 89, "name": "File 89"}, {"id": 90, "name": "File 90"}, {
            "id": 91,
            "name": "File 91"
        }, {"id": 92, "name": "File 92"}, {"id": 93, "name": "File 93"}, {"id": 94, "name": "File 94"}, {
            "id": 95,
            "name": "File 95"
        }, {"id": 96, "name": "File 96"}, {"id": 97, "name": "File 97"}, {"id": 98, "name": "File 98"}, {
            "id": 99,
            "name": "File 99"
        }, {"id": 100, "name": "File 100"}, {"id": 101, "name": "File 101"}, {
            "id": 102,
            "name": "File 102"
        }, {"id": 103, "name": "File 103"}, {"id": 104, "name": "File 104"}, {
            "id": 105,
            "name": "File 105"
        }, {"id": 106, "name": "File 106"}, {"id": 107, "name": "File 107"}, {
            "id": 108,
            "name": "File 108"
        }, {"id": 109, "name": "File 109"}, {"id": 110, "name": "File 110"}, {
            "id": 111,
            "name": "File 111"
        }, {"id": 112, "name": "File 112"}, {"id": 113, "name": "File 113"}, {
            "id": 114,
            "name": "File 114"
        }, {"id": 115, "name": "File 115"}, {"id": 116, "name": "File 116"}, {
            "id": 117,
            "name": "File 117"
        }, {"id": 118, "name": "File 118"}, {"id": 119, "name": "File 119"}, {
            "id": 120,
            "name": "File 120"
        }, {"id": 121, "name": "File 121"}, {"id": 122, "name": "File 122"}, {
            "id": 123,
            "name": "File 123"
        }, {"id": 124, "name": "File 124"}, {"id": 125, "name": "File 125"}, {
            "id": 126,
            "name": "File 126"
        }, {"id": 127, "name": "File 127"}, {"id": 128, "name": "File 128"}, {
            "id": 129,
            "name": "File 129"
        }, {"id": 130, "name": "File 130"}, {"id": 131, "name": "File 131"}, {
            "id": 132,
            "name": "File 132"
        }, {"id": 133, "name": "File 133"}, {"id": 134, "name": "File 134"}, {
            "id": 135,
            "name": "File 135"
        }, {"id": 136, "name": "File 136"}, {"id": 137, "name": "File 137"}, {
            "id": 138,
            "name": "File 138"
        }, {"id": 139, "name": "File 139"}, {"id": 140, "name": "File 140"}, {
            "id": 141,
            "name": "File 141"
        }, {"id": 142, "name": "File 142"}, {"id": 143, "name": "File 143"}, {
            "id": 144,
            "name": "File 144"
        }, {"id": 145, "name": "File 145"}, {"id": 146, "name": "File 146"}, {
            "id": 147,
            "name": "File 147"
        }, {"id": 148, "name": "File 148"}, {"id": 149, "name": "File 149"}, {
            "id": 150,
            "name": "File 150"
        }, {"id": 151, "name": "File 151"}, {"id": 152, "name": "File 152"}, {
            "id": 153,
            "name": "File 153"
        }, {"id": 154, "name": "File 154"}, {"id": 155, "name": "File 155"}, {
            "id": 156,
            "name": "File 156"
        }, {"id": 157, "name": "File 157"}, {"id": 158, "name": "File 158"}, {
            "id": 159,
            "name": "File 159"
        }, {"id": 160, "name": "File 160"}, {"id": 161, "name": "File 161"}, {
            "id": 162,
            "name": "File 162"
        }, {"id": 163, "name": "File 163"}, {"id": 164, "name": "File 164"}, {
            "id": 165,
            "name": "File 165"
        }, {"id": 166, "name": "File 166"}, {"id": 167, "name": "File 167"}, {
            "id": 168,
            "name": "File 168"
        }, {"id": 169, "name": "File 169"}, {"id": 170, "name": "File 170"}, {
            "id": 171,
            "name": "File 171"
        }, {"id": 172, "name": "File 172"}, {"id": 173, "name": "File 173"}, {
            "id": 174,
            "name": "File 174"
        }, {"id": 175, "name": "File 175"}, {"id": 176, "name": "File 176"}, {
            "id": 177,
            "name": "File 177"
        }, {"id": 178, "name": "File 178"}, {"id": 179, "name": "File 179"}, {
            "id": 180,
            "name": "File 180"
        }, {"id": 181, "name": "File 181"}, {"id": 182, "name": "File 182"}, {
            "id": 183,
            "name": "File 183"
        }, {"id": 184, "name": "File 184"}, {"id": 185, "name": "File 185"}, {
            "id": 186,
            "name": "File 186"
        }, {"id": 187, "name": "File 187"}, {"id": 188, "name": "File 188"}, {
            "id": 189,
            "name": "File 189"
        }, {"id": 190, "name": "File 190"}, {"id": 191, "name": "File 191"}, {
            "id": 192,
            "name": "File 192"
        }, {"id": 193, "name": "File 193"}, {"id": 194, "name": "File 194"}, {
            "id": 195,
            "name": "File 195"
        }, {"id": 196, "name": "File 196"}, {"id": 197, "name": "File 197"}, {
            "id": 198,
            "name": "File 198"
        }, {"id": 199, "name": "File 199"}, {"id": 200, "name": "File 200"}, {
            "id": 201,
            "name": "File 201"
        }, {"id": 202, "name": "File 202"}, {"id": 203, "name": "File 203"}, {
            "id": 204,
            "name": "File 204"
        }, {"id": 205, "name": "File 205"}, {"id": 206, "name": "File 206"}, {
            "id": 207,
            "name": "File 207"
        }, {"id": 208, "name": "File 208"}, {"id": 209, "name": "File 209"}, {
            "id": 210,
            "name": "File 210"
        }, {"id": 211, "name": "File 211"}, {"id": 212, "name": "File 212"}, {
            "id": 213,
            "name": "File 213"
        }, {"id": 214, "name": "File 214"}, {"id": 215, "name": "File 215"}, {
            "id": 216,
            "name": "File 216"
        }, {"id": 217, "name": "File 217"}, {"id": 218, "name": "File 218"}, {
            "id": 219,
            "name": "File 219"
        }, {"id": 220, "name": "File 220"}, {"id": 221, "name": "File 221"}, {
            "id": 222,
            "name": "File 222"
        }, {"id": 223, "name": "File 223"}, {"id": 224, "name": "File 224"}, {
            "id": 225,
            "name": "File 225"
        }, {"id": 226, "name": "File 226"}, {"id": 227, "name": "File 227"}, {
            "id": 228,
            "name": "File 228"
        }, {"id": 229, "name": "File 229"}, {"id": 230, "name": "File 230"}, {
            "id": 231,
            "name": "File 231"
        }, {"id": 232, "name": "File 232"}, {"id": 233, "name": "File 233"}, {
            "id": 234,
            "name": "File 234"
        }, {"id": 235, "name": "File 235"}, {"id": 236, "name": "File 236"}, {
            "id": 237,
            "name": "File 237"
        }, {"id": 238, "name": "File 238"}, {"id": 239, "name": "File 239"}, {
            "id": 240,
            "name": "File 240"
        }, {"id": 241, "name": "File 241"}, {"id": 242, "name": "File 242"}, {
            "id": 243,
            "name": "File 243"
        }, {"id": 244, "name": "File 244"}, {"id": 245, "name": "File 245"}, {
            "id": 246,
            "name": "File 246"
        }, {"id": 247, "name": "File 247"}, {"id": 248, "name": "File 248"}, {
            "id": 249,
            "name": "File 249"
        }, {"id": 250, "name": "File 250"}, {"id": 251, "name": "File 251"}, {
            "id": 252,
            "name": "File 252"
        }, {"id": 253, "name": "File 253"}, {"id": 254, "name": "File 254"}, {
            "id": 255,
            "name": "File 255"
        }, {"id": 256, "name": "File 256"}, {"id": 257, "name": "File 257"}, {
            "id": 258,
            "name": "File 258"
        }, {"id": 259, "name": "File 259"}, {"id": 260, "name": "File 260"}, {
            "id": 261,
            "name": "File 261"
        }, {"id": 262, "name": "File 262"}, {"id": 263, "name": "File 263"}, {
            "id": 264,
            "name": "File 264"
        }, {"id": 265, "name": "File 265"}, {"id": 266, "name": "File 266"}, {
            "id": 267,
            "name": "File 267"
        }, {"id": 268, "name": "File 268"}, {"id": 269, "name": "File 269"}, {
            "id": 270,
            "name": "File 270"
        }, {"id": 271, "name": "File 271"}, {"id": 272, "name": "File 272"}, {
            "id": 273,
            "name": "File 273"
        }, {"id": 274, "name": "File 274"}, {"id": 275, "name": "File 275"}, {
            "id": 276,
            "name": "File 276"
        }, {"id": 277, "name": "File 277"}, {"id": 278, "name": "File 278"}, {
            "id": 279,
            "name": "File 279"
        }, {"id": 280, "name": "File 280"}, {"id": 281, "name": "File 281"}, {
            "id": 282,
            "name": "File 282"
        }, {"id": 283, "name": "File 283"}, {"id": 284, "name": "File 284"}, {
            "id": 285,
            "name": "File 285"
        }, {"id": 286, "name": "File 286"}, {"id": 287, "name": "File 287"}, {
            "id": 288,
            "name": "File 288"
        }, {"id": 289, "name": "File 289"}, {"id": 290, "name": "File 290"}, {
            "id": 291,
            "name": "File 291"
        }, {"id": 292, "name": "File 292"}, {"id": 293, "name": "File 293"}, {
            "id": 294,
            "name": "File 294"
        }, {"id": 295, "name": "File 295"}, {"id": 296, "name": "File 296"}, {
            "id": 297,
            "name": "File 297"
        }, {"id": 298, "name": "File 298"}, {"id": 299, "name": "File 299"}, {
            "id": 300,
            "name": "File 300"
        }, {"id": 301, "name": "File 301"}, {"id": 302, "name": "File 302"}, {
            "id": 303,
            "name": "File 303"
        }, {"id": 304, "name": "File 304"}, {"id": 305, "name": "File 305"}, {
            "id": 306,
            "name": "File 306"
        }, {"id": 307, "name": "File 307"}, {"id": 308, "name": "File 308"}, {
            "id": 309,
            "name": "File 309"
        }, {"id": 310, "name": "File 310"}, {"id": 311, "name": "File 311"}, {
            "id": 312,
            "name": "File 312"
        }, {"id": 313, "name": "File 313"}, {"id": 314, "name": "File 314"}, {
            "id": 315,
            "name": "File 315"
        }, {"id": 316, "name": "File 316"}, {"id": 317, "name": "File 317"}, {
            "id": 318,
            "name": "File 318"
        }, {"id": 319, "name": "File 319"}, {"id": 320, "name": "File 320"}, {
            "id": 321,
            "name": "File 321"
        }, {"id": 322, "name": "File 322"}, {"id": 323, "name": "File 323"}, {
            "id": 324,
            "name": "File 324"
        }, {"id": 325, "name": "File 325"}, {"id": 326, "name": "File 326"}, {
            "id": 327,
            "name": "File 327"
        }, {"id": 328, "name": "File 328"}, {"id": 329, "name": "File 329"}, {
            "id": 330,
            "name": "File 330"
        }, {"id": 331, "name": "File 331"}, {"id": 332, "name": "File 332"}, {
            "id": 333,
            "name": "File 333"
        }, {"id": 334, "name": "File 334"}, {"id": 335, "name": "File 335"}, {
            "id": 336,
            "name": "File 336"
        }, {"id": 337, "name": "File 337"}, {"id": 338, "name": "File 338"}, {
            "id": 339,
            "name": "File 339"
        }, {"id": 340, "name": "File 340"}, {"id": 341, "name": "File 341"}, {
            "id": 342,
            "name": "File 342"
        }, {"id": 343, "name": "File 343"}, {"id": 344, "name": "File 344"}, {
            "id": 345,
            "name": "File 345"
        }, {"id": 346, "name": "File 346"}, {"id": 347, "name": "File 347"}, {
            "id": 348,
            "name": "File 348"
        }, {"id": 349, "name": "File 349"}, {"id": 350, "name": "File 350"}, {
            "id": 351,
            "name": "File 351"
        }, {"id": 352, "name": "File 352"}, {"id": 353, "name": "File 353"}, {
            "id": 354,
            "name": "File 354"
        }, {"id": 355, "name": "File 355"}, {"id": 356, "name": "File 356"}, {
            "id": 357,
            "name": "File 357"
        }, {"id": 358, "name": "File 358"}, {"id": 359, "name": "File 359"}, {
            "id": 360,
            "name": "File 360"
        }, {"id": 361, "name": "File 361"}, {"id": 362, "name": "File 362"}, {
            "id": 363,
            "name": "File 363"
        }, {"id": 364, "name": "File 364"}, {"id": 365, "name": "File 365"}, {
            "id": 366,
            "name": "File 366"
        }, {"id": 367, "name": "File 367"}, {"id": 368, "name": "File 368"}, {
            "id": 369,
            "name": "File 369"
        }, {"id": 370, "name": "File 370"}, {"id": 371, "name": "File 371"}, {
            "id": 372,
            "name": "File 372"
        }, {"id": 373, "name": "File 373"}, {"id": 374, "name": "File 374"}, {
            "id": 375,
            "name": "File 375"
        }, {"id": 376, "name": "File 376"}, {"id": 377, "name": "File 377"}, {
            "id": 378,
            "name": "File 378"
        }, {"id": 379, "name": "File 379"}, {"id": 380, "name": "File 380"}, {
            "id": 381,
            "name": "File 381"
        }, {"id": 382, "name": "File 382"}, {"id": 383, "name": "File 383"}, {
            "id": 384,
            "name": "File 384"
        }, {"id": 385, "name": "File 385"}, {"id": 386, "name": "File 386"}, {
            "id": 387,
            "name": "File 387"
        }, {"id": 388, "name": "File 388"}, {"id": 389, "name": "File 389"}, {
            "id": 390,
            "name": "File 390"
        }, {"id": 391, "name": "File 391"}, {"id": 392, "name": "File 392"}, {
            "id": 393,
            "name": "File 393"
        }, {"id": 394, "name": "File 394"}, {"id": 395, "name": "File 395"}, {
            "id": 396,
            "name": "File 396"
        }, {"id": 397, "name": "File 397"}, {"id": 398, "name": "File 398"}, {
            "id": 399,
            "name": "File 399"
        }, {"id": 400, "name": "File 400"}, {"id": 401, "name": "File 401"}, {
            "id": 402,
            "name": "File 402"
        }, {"id": 403, "name": "File 403"}, {"id": 404, "name": "File 404"}, {
            "id": 405,
            "name": "File 405"
        }, {"id": 406, "name": "File 406"}, {"id": 407, "name": "File 407"}, {
            "id": 408,
            "name": "File 408"
        }, {"id": 409, "name": "File 409"}, {"id": 410, "name": "File 410"}, {
            "id": 411,
            "name": "File 411"
        }, {"id": 412, "name": "File 412"}, {"id": 413, "name": "File 413"}, {
            "id": 414,
            "name": "File 414"
        }, {"id": 415, "name": "File 415"}, {"id": 416, "name": "File 416"}, {
            "id": 417,
            "name": "File 417"
        }, {"id": 418, "name": "File 418"}, {"id": 419, "name": "File 419"}, {
            "id": 420,
            "name": "File 420"
        }, {"id": 421, "name": "File 421"}, {"id": 422, "name": "File 422"}, {
            "id": 423,
            "name": "File 423"
        }, {"id": 424, "name": "File 424"}, {"id": 425, "name": "File 425"}, {
            "id": 426,
            "name": "File 426"
        }, {"id": 427, "name": "File 427"}, {"id": 428, "name": "File 428"}, {
            "id": 429,
            "name": "File 429"
        }, {"id": 430, "name": "File 430"}, {"id": 431, "name": "File 431"}, {
            "id": 432,
            "name": "File 432"
        }, {"id": 433, "name": "File 433"}, {"id": 434, "name": "File 434"}, {
            "id": 435,
            "name": "File 435"
        }, {"id": 436, "name": "File 436"}, {"id": 437, "name": "File 437"}, {
            "id": 438,
            "name": "File 438"
        }, {"id": 439, "name": "File 439"}, {"id": 440, "name": "File 440"}, {
            "id": 441,
            "name": "File 441"
        }, {"id": 442, "name": "File 442"}, {"id": 443, "name": "File 443"}, {
            "id": 444,
            "name": "File 444"
        }, {"id": 445, "name": "File 445"}, {"id": 446, "name": "File 446"}, {
            "id": 447,
            "name": "File 447"
        }, {"id": 448, "name": "File 448"}, {"id": 449, "name": "File 449"}, {
            "id": 450,
            "name": "File 450"
        }, {"id": 451, "name": "File 451"}, {"id": 452, "name": "File 452"}, {
            "id": 453,
            "name": "File 453"
        }, {"id": 454, "name": "File 454"}, {"id": 455, "name": "File 455"}, {
            "id": 456,
            "name": "File 456"
        }, {"id": 457, "name": "File 457"}, {"id": 458, "name": "File 458"}, {
            "id": 459,
            "name": "File 459"
        }, {"id": 460, "name": "File 460"}, {"id": 461, "name": "File 461"}, {
            "id": 462,
            "name": "File 462"
        }, {"id": 463, "name": "File 463"}, {"id": 464, "name": "File 464"}, {
            "id": 465,
            "name": "File 465"
        }, {"id": 466, "name": "File 466"}, {"id": 467, "name": "File 467"}, {
            "id": 468,
            "name": "File 468"
        }, {"id": 469, "name": "File 469"}, {"id": 470, "name": "File 470"}, {
            "id": 471,
            "name": "File 471"
        }, {"id": 472, "name": "File 472"}, {"id": 473, "name": "File 473"}, {
            "id": 474,
            "name": "File 474"
        }, {"id": 475, "name": "File 475"}, {"id": 476, "name": "File 476"}, {
            "id": 477,
            "name": "File 477"
        }, {"id": 478, "name": "File 478"}, {"id": 479, "name": "File 479"}, {
            "id": 480,
            "name": "File 480"
        }, {"id": 481, "name": "File 481"}, {"id": 482, "name": "File 482"}, {
            "id": 483,
            "name": "File 483"
        }, {"id": 484, "name": "File 484"}, {"id": 485, "name": "File 485"}, {
            "id": 486,
            "name": "File 486"
        }, {"id": 487, "name": "File 487"}, {"id": 488, "name": "File 488"}, {
            "id": 489,
            "name": "File 489"
        }, {"id": 490, "name": "File 490"}, {"id": 491, "name": "File 491"}, {
            "id": 492,
            "name": "File 492"
        }, {"id": 493, "name": "File 493"}, {"id": 494, "name": "File 494"}, {
            "id": 495,
            "name": "File 495"
        }, {"id": 496, "name": "File 496"}, {"id": 497, "name": "File 497"}, {
            "id": 498,
            "name": "File 498"
        }, {"id": 499, "name": "File 499"}, {"id": 500, "name": "File 500"}, {
            "id": 501,
            "name": "File 501"
        }, {"id": 502, "name": "File 502"}, {"id": 503, "name": "File 503"}, {
            "id": 504,
            "name": "File 504"
        }, {"id": 505, "name": "File 505"}, {"id": 506, "name": "File 506"}, {
            "id": 507,
            "name": "File 507"
        }, {"id": 508, "name": "File 508"}, {"id": 509, "name": "File 509"}, {
            "id": 510,
            "name": "File 510"
        }, {"id": 511, "name": "File 511"}, {"id": 512, "name": "File 512"}, {
            "id": 513,
            "name": "File 513"
        }, {"id": 514, "name": "File 514"}, {"id": 515, "name": "File 515"}, {
            "id": 516,
            "name": "File 516"
        }, {"id": 517, "name": "File 517"}, {"id": 518, "name": "File 518"}, {
            "id": 519,
            "name": "File 519"
        }, {"id": 520, "name": "File 520"}, {"id": 521, "name": "File 521"}, {
            "id": 522,
            "name": "File 522"
        }, {"id": 523, "name": "File 523"}, {"id": 524, "name": "File 524"}, {
            "id": 525,
            "name": "File 525"
        }, {"id": 526, "name": "File 526"}, {"id": 527, "name": "File 527"}, {
            "id": 528,
            "name": "File 528"
        }, {"id": 529, "name": "File 529"}, {"id": 530, "name": "File 530"}, {
            "id": 531,
            "name": "File 531"
        }, {"id": 532, "name": "File 532"}, {"id": 533, "name": "File 533"}, {
            "id": 534,
            "name": "File 534"
        }, {"id": 535, "name": "File 535"}, {"id": 536, "name": "File 536"}, {
            "id": 537,
            "name": "File 537"
        }, {"id": 538, "name": "File 538"}, {"id": 539, "name": "File 539"}, {
            "id": 540,
            "name": "File 540"
        }, {"id": 541, "name": "File 541"}, {"id": 542, "name": "File 542"}, {
            "id": 543,
            "name": "File 543"
        }, {"id": 544, "name": "File 544"}, {"id": 545, "name": "File 545"}, {
            "id": 546,
            "name": "File 546"
        }, {"id": 547, "name": "File 547"}, {"id": 548, "name": "File 548"}, {
            "id": 549,
            "name": "File 549"
        }, {"id": 550, "name": "File 550"}, {"id": 551, "name": "File 551"}, {
            "id": 552,
            "name": "File 552"
        }, {"id": 553, "name": "File 553"}, {"id": 554, "name": "File 554"}, {
            "id": 555,
            "name": "File 555"
        }, {"id": 556, "name": "File 556"}, {"id": 557, "name": "File 557"}, {
            "id": 558,
            "name": "File 558"
        }, {"id": 559, "name": "File 559"}, {"id": 560, "name": "File 560"}, {
            "id": 561,
            "name": "File 561"
        }, {"id": 562, "name": "File 562"}, {"id": 563, "name": "File 563"}, {
            "id": 564,
            "name": "File 564"
        }, {"id": 565, "name": "File 565"}, {"id": 566, "name": "File 566"}, {
            "id": 567,
            "name": "File 567"
        }, {"id": 568, "name": "File 568"}, {"id": 569, "name": "File 569"}, {
            "id": 570,
            "name": "File 570"
        }, {"id": 571, "name": "File 571"}, {"id": 572, "name": "File 572"}, {
            "id": 573,
            "name": "File 573"
        }, {"id": 574, "name": "File 574"}, {"id": 575, "name": "File 575"}, {
            "id": 576,
            "name": "File 576"
        }, {"id": 577, "name": "File 577"}, {"id": 578, "name": "File 578"}, {
            "id": 579,
            "name": "File 579"
        }, {"id": 580, "name": "File 580"}, {"id": 581, "name": "File 581"}, {
            "id": 582,
            "name": "File 582"
        }, {"id": 583, "name": "File 583"}, {"id": 584, "name": "File 584"}, {
            "id": 585,
            "name": "File 585"
        }, {"id": 586, "name": "File 586"}, {"id": 587, "name": "File 587"}, {
            "id": 588,
            "name": "File 588"
        }, {"id": 589, "name": "File 589"}, {"id": 590, "name": "File 590"}, {
            "id": 591,
            "name": "File 591"
        }, {"id": 592, "name": "File 592"}, {"id": 593, "name": "File 593"}, {
            "id": 594,
            "name": "File 594"
        }, {"id": 595, "name": "File 595"}, {"id": 596, "name": "File 596"}, {
            "id": 597,
            "name": "File 597"
        }, {"id": 598, "name": "File 598"}, {"id": 599, "name": "File 599"}, {
            "id": 600,
            "name": "File 600"
        }, {"id": 601, "name": "File 601"}, {"id": 602, "name": "File 602"}, {
            "id": 603,
            "name": "File 603"
        }, {"id": 604, "name": "File 604"}, {"id": 605, "name": "File 605"}, {
            "id": 606,
            "name": "File 606"
        }, {"id": 607, "name": "File 607"}, {"id": 608, "name": "File 608"}, {
            "id": 609,
            "name": "File 609"
        }, {"id": 610, "name": "File 610"}, {"id": 611, "name": "File 611"}, {
            "id": 612,
            "name": "File 612"
        }, {"id": 613, "name": "File 613"}, {"id": 614, "name": "File 614"}, {
            "id": 615,
            "name": "File 615"
        }, {"id": 616, "name": "File 616"}, {"id": 617, "name": "File 617"}, {
            "id": 618,
            "name": "File 618"
        }, {"id": 619, "name": "File 619"}, {"id": 620, "name": "File 620"}, {
            "id": 621,
            "name": "File 621"
        }, {"id": 622, "name": "File 622"}, {"id": 623, "name": "File 623"}, {
            "id": 624,
            "name": "File 624"
        }, {"id": 625, "name": "File 625"}, {"id": 626, "name": "File 626"}, {
            "id": 627,
            "name": "File 627"
        }, {"id": 628, "name": "File 628"}, {"id": 629, "name": "File 629"}, {
            "id": 630,
            "name": "File 630"
        }, {"id": 631, "name": "File 631"}, {"id": 632, "name": "File 632"}, {
            "id": 633,
            "name": "File 633"
        }, {"id": 634, "name": "File 634"}, {"id": 635, "name": "File 635"}, {
            "id": 636,
            "name": "File 636"
        }, {"id": 637, "name": "File 637"}, {"id": 638, "name": "File 638"}, {
            "id": 639,
            "name": "File 639"
        }, {"id": 640, "name": "File 640"}, {"id": 641, "name": "File 641"}, {
            "id": 642,
            "name": "File 642"
        }, {"id": 643, "name": "File 643"}, {"id": 644, "name": "File 644"}, {
            "id": 645,
            "name": "File 645"
        }, {"id": 646, "name": "File 646"}, {"id": 647, "name": "File 647"}, {
            "id": 648,
            "name": "File 648"
        }, {"id": 649, "name": "File 649"}, {"id": 650, "name": "File 650"}, {
            "id": 651,
            "name": "File 651"
        }, {"id": 652, "name": "File 652"}, {"id": 653, "name": "File 653"}, {
            "id": 654,
            "name": "File 654"
        }, {"id": 655, "name": "File 655"}, {"id": 656, "name": "File 656"}, {
            "id": 657,
            "name": "File 657"
        }, {"id": 658, "name": "File 658"}, {"id": 659, "name": "File 659"}, {
            "id": 660,
            "name": "File 660"
        }, {"id": 661, "name": "File 661"}, {"id": 662, "name": "File 662"}, {
            "id": 663,
            "name": "File 663"
        }, {"id": 664, "name": "File 664"}, {"id": 665, "name": "File 665"}, {
            "id": 666,
            "name": "File 666"
        }, {"id": 667, "name": "File 667"}, {"id": 668, "name": "File 668"}, {
            "id": 669,
            "name": "File 669"
        }, {"id": 670, "name": "File 670"}, {"id": 671, "name": "File 671"}, {
            "id": 672,
            "name": "File 672"
        }, {"id": 673, "name": "File 673"}, {"id": 674, "name": "File 674"}, {
            "id": 675,
            "name": "File 675"
        }, {"id": 676, "name": "File 676"}, {"id": 677, "name": "File 677"}, {
            "id": 678,
            "name": "File 678"
        }, {"id": 679, "name": "File 679"}, {"id": 680, "name": "File 680"}, {
            "id": 681,
            "name": "File 681"
        }, {"id": 682, "name": "File 682"}, {"id": 683, "name": "File 683"}, {
            "id": 684,
            "name": "File 684"
        }, {"id": 685, "name": "File 685"}, {"id": 686, "name": "File 686"}, {
            "id": 687,
            "name": "File 687"
        }, {"id": 688, "name": "File 688"}, {"id": 689, "name": "File 689"}, {
            "id": 690,
            "name": "File 690"
        }, {"id": 691, "name": "File 691"}, {"id": 692, "name": "File 692"}, {
            "id": 693,
            "name": "File 693"
        }, {"id": 694, "name": "File 694"}, {"id": 695, "name": "File 695"}, {
            "id": 696,
            "name": "File 696"
        }, {"id": 697, "name": "File 697"}, {"id": 698, "name": "File 698"}, {
            "id": 699,
            "name": "File 699"
        }, {"id": 700, "name": "File 700"}, {"id": 701, "name": "File 701"}, {
            "id": 702,
            "name": "File 702"
        }, {"id": 703, "name": "File 703"}, {"id": 704, "name": "File 704"}, {
            "id": 705,
            "name": "File 705"
        }, {"id": 706, "name": "File 706"}, {"id": 707, "name": "File 707"}, {
            "id": 708,
            "name": "File 708"
        }, {"id": 709, "name": "File 709"}, {"id": 710, "name": "File 710"}, {
            "id": 711,
            "name": "File 711"
        }, {"id": 712, "name": "File 712"}, {"id": 713, "name": "File 713"}, {
            "id": 714,
            "name": "File 714"
        }, {"id": 715, "name": "File 715"}, {"id": 716, "name": "File 716"}, {
            "id": 717,
            "name": "File 717"
        }, {"id": 718, "name": "File 718"}, {"id": 719, "name": "File 719"}, {
            "id": 720,
            "name": "File 720"
        }, {"id": 721, "name": "File 721"}, {"id": 722, "name": "File 722"}, {
            "id": 723,
            "name": "File 723"
        }, {"id": 724, "name": "File 724"}, {"id": 725, "name": "File 725"}, {
            "id": 726,
            "name": "File 726"
        }, {"id": 727, "name": "File 727"}, {"id": 728, "name": "File 728"}, {
            "id": 729,
            "name": "File 729"
        }, {"id": 730, "name": "File 730"}, {"id": 731, "name": "File 731"}, {
            "id": 732,
            "name": "File 732"
        }, {"id": 733, "name": "File 733"}, {"id": 734, "name": "File 734"}, {
            "id": 735,
            "name": "File 735"
        }, {"id": 736, "name": "File 736"}, {"id": 737, "name": "File 737"}, {
            "id": 738,
            "name": "File 738"
        }, {"id": 739, "name": "File 739"}, {"id": 740, "name": "File 740"}, {
            "id": 741,
            "name": "File 741"
        }, {"id": 742, "name": "File 742"}, {"id": 743, "name": "File 743"}, {
            "id": 744,
            "name": "File 744"
        }, {"id": 745, "name": "File 745"}, {"id": 746, "name": "File 746"}, {
            "id": 747,
            "name": "File 747"
        }, {"id": 748, "name": "File 748"}, {"id": 749, "name": "File 749"}, {
            "id": 750,
            "name": "File 750"
        }, {"id": 751, "name": "File 751"}, {"id": 752, "name": "File 752"}, {
            "id": 753,
            "name": "File 753"
        }, {"id": 754, "name": "File 754"}, {"id": 755, "name": "File 755"}, {
            "id": 756,
            "name": "File 756"
        }, {"id": 757, "name": "File 757"}, {"id": 758, "name": "File 758"}, {
            "id": 759,
            "name": "File 759"
        }, {"id": 760, "name": "File 760"}, {"id": 761, "name": "File 761"}, {
            "id": 762,
            "name": "File 762"
        }, {"id": 763, "name": "File 763"}, {"id": 764, "name": "File 764"}, {
            "id": 765,
            "name": "File 765"
        }, {"id": 766, "name": "File 766"}, {"id": 767, "name": "File 767"}, {
            "id": 768,
            "name": "File 768"
        }, {"id": 769, "name": "File 769"}, {"id": 770, "name": "File 770"}, {
            "id": 771,
            "name": "File 771"
        }, {"id": 772, "name": "File 772"}, {"id": 773, "name": "File 773"}, {
            "id": 774,
            "name": "File 774"
        }, {"id": 775, "name": "File 775"}, {"id": 776, "name": "File 776"}, {
            "id": 777,
            "name": "File 777"
        }, {"id": 778, "name": "File 778"}, {"id": 779, "name": "File 779"}, {
            "id": 780,
            "name": "File 780"
        }, {"id": 781, "name": "File 781"}, {"id": 782, "name": "File 782"}, {
            "id": 783,
            "name": "File 783"
        }, {"id": 784, "name": "File 784"}, {"id": 785, "name": "File 785"}, {
            "id": 786,
            "name": "File 786"
        }, {"id": 787, "name": "File 787"}, {"id": 788, "name": "File 788"}, {
            "id": 789,
            "name": "File 789"
        }, {"id": 790, "name": "File 790"}, {"id": 791, "name": "File 791"}, {
            "id": 792,
            "name": "File 792"
        }, {"id": 793, "name": "File 793"}, {"id": 794, "name": "File 794"}, {
            "id": 795,
            "name": "File 795"
        }, {"id": 796, "name": "File 796"}, {"id": 797, "name": "File 797"}, {
            "id": 798,
            "name": "File 798"
        }, {"id": 799, "name": "File 799"}, {"id": 800, "name": "File 800"}, {
            "id": 801,
            "name": "File 801"
        }, {"id": 802, "name": "File 802"}, {"id": 803, "name": "File 803"}, {
            "id": 804,
            "name": "File 804"
        }, {"id": 805, "name": "File 805"}, {"id": 806, "name": "File 806"}, {
            "id": 807,
            "name": "File 807"
        }, {"id": 808, "name": "File 808"}, {"id": 809, "name": "File 809"}, {
            "id": 810,
            "name": "File 810"
        }, {"id": 811, "name": "File 811"}, {"id": 812, "name": "File 812"}, {
            "id": 813,
            "name": "File 813"
        }, {"id": 814, "name": "File 814"}, {"id": 815, "name": "File 815"}, {
            "id": 816,
            "name": "File 816"
        }, {"id": 817, "name": "File 817"}, {"id": 818, "name": "File 818"}, {
            "id": 819,
            "name": "File 819"
        }, {"id": 820, "name": "File 820"}, {"id": 821, "name": "File 821"}, {
            "id": 822,
            "name": "File 822"
        }, {"id": 823, "name": "File 823"}, {"id": 824, "name": "File 824"}, {
            "id": 825,
            "name": "File 825"
        }, {"id": 826, "name": "File 826"}, {"id": 827, "name": "File 827"}, {
            "id": 828,
            "name": "File 828"
        }, {"id": 829, "name": "File 829"}, {"id": 830, "name": "File 830"}, {
            "id": 831,
            "name": "File 831"
        }, {"id": 832, "name": "File 832"}, {"id": 833, "name": "File 833"}, {
            "id": 834,
            "name": "File 834"
        }, {"id": 835, "name": "File 835"}, {"id": 836, "name": "File 836"}, {
            "id": 837,
            "name": "File 837"
        }, {"id": 838, "name": "File 838"}, {"id": 839, "name": "File 839"}, {
            "id": 840,
            "name": "File 840"
        }, {"id": 841, "name": "File 841"}, {"id": 842, "name": "File 842"}, {
            "id": 843,
            "name": "File 843"
        }, {"id": 844, "name": "File 844"}, {"id": 845, "name": "File 845"}, {
            "id": 846,
            "name": "File 846"
        }, {"id": 847, "name": "File 847"}, {"id": 848, "name": "File 848"}, {
            "id": 849,
            "name": "File 849"
        }, {"id": 850, "name": "File 850"}, {"id": 851, "name": "File 851"}, {
            "id": 852,
            "name": "File 852"
        }, {"id": 853, "name": "File 853"}, {"id": 854, "name": "File 854"}, {
            "id": 855,
            "name": "File 855"
        }, {"id": 856, "name": "File 856"}, {"id": 857, "name": "File 857"}, {
            "id": 858,
            "name": "File 858"
        }, {"id": 859, "name": "File 859"}, {"id": 860, "name": "File 860"}, {
            "id": 861,
            "name": "File 861"
        }, {"id": 862, "name": "File 862"}, {"id": 863, "name": "File 863"}, {
            "id": 864,
            "name": "File 864"
        }, {"id": 865, "name": "File 865"}, {"id": 866, "name": "File 866"}, {
            "id": 867,
            "name": "File 867"
        }, {"id": 868, "name": "File 868"}, {"id": 869, "name": "File 869"}, {
            "id": 870,
            "name": "File 870"
        }, {"id": 871, "name": "File 871"}, {"id": 872, "name": "File 872"}, {
            "id": 873,
            "name": "File 873"
        }, {"id": 874, "name": "File 874"}, {"id": 875, "name": "File 875"}, {
            "id": 876,
            "name": "File 876"
        }, {"id": 877, "name": "File 877"}, {"id": 878, "name": "File 878"}, {
            "id": 879,
            "name": "File 879"
        }, {"id": 880, "name": "File 880"}, {"id": 881, "name": "File 881"}, {
            "id": 882,
            "name": "File 882"
        }, {"id": 883, "name": "File 883"}, {"id": 884, "name": "File 884"}, {
            "id": 885,
            "name": "File 885"
        }, {"id": 886, "name": "File 886"}, {"id": 887, "name": "File 887"}, {
            "id": 888,
            "name": "File 888"
        }, {"id": 889, "name": "File 889"}, {"id": 890, "name": "File 890"}, {
            "id": 891,
            "name": "File 891"
        }, {"id": 892, "name": "File 892"}, {"id": 893, "name": "File 893"}, {
            "id": 894,
            "name": "File 894"
        }, {"id": 895, "name": "File 895"}, {"id": 896, "name": "File 896"}, {
            "id": 897,
            "name": "File 897"
        }, {"id": 898, "name": "File 898"}, {"id": 899, "name": "File 899"}, {
            "id": 900,
            "name": "File 900"
        }, {"id": 901, "name": "File 901"}, {"id": 902, "name": "File 902"}, {
            "id": 903,
            "name": "File 903"
        }, {"id": 904, "name": "File 904"}, {"id": 905, "name": "File 905"}, {
            "id": 906,
            "name": "File 906"
        }, {"id": 907, "name": "File 907"}, {"id": 908, "name": "File 908"}, {
            "id": 909,
            "name": "File 909"
        }, {"id": 910, "name": "File 910"}, {"id": 911, "name": "File 911"}, {
            "id": 912,
            "name": "File 912"
        }, {"id": 913, "name": "File 913"}, {"id": 914, "name": "File 914"}, {
            "id": 915,
            "name": "File 915"
        }, {"id": 916, "name": "File 916"}, {"id": 917, "name": "File 917"}, {
            "id": 918,
            "name": "File 918"
        }, {"id": 919, "name": "File 919"}, {"id": 920, "name": "File 920"}, {
            "id": 921,
            "name": "File 921"
        }, {"id": 922, "name": "File 922"}, {"id": 923, "name": "File 923"}, {
            "id": 924,
            "name": "File 924"
        }, {"id": 925, "name": "File 925"}, {"id": 926, "name": "File 926"}, {
            "id": 927,
            "name": "File 927"
        }, {"id": 928, "name": "File 928"}, {"id": 929, "name": "File 929"}, {
            "id": 930,
            "name": "File 930"
        }, {"id": 931, "name": "File 931"}, {"id": 932, "name": "File 932"}, {
            "id": 933,
            "name": "File 933"
        }, {"id": 934, "name": "File 934"}, {"id": 935, "name": "File 935"}, {
            "id": 936,
            "name": "File 936"
        }, {"id": 937, "name": "File 937"}, {"id": 938, "name": "File 938"}, {
            "id": 939,
            "name": "File 939"
        }, {"id": 940, "name": "File 940"}, {"id": 941, "name": "File 941"}, {
            "id": 942,
            "name": "File 942"
        }, {"id": 943, "name": "File 943"}, {"id": 944, "name": "File 944"}, {
            "id": 945,
            "name": "File 945"
        }, {"id": 946, "name": "File 946"}, {"id": 947, "name": "File 947"}, {
            "id": 948,
            "name": "File 948"
        }, {"id": 949, "name": "File 949"}, {"id": 950, "name": "File 950"}, {
            "id": 951,
            "name": "File 951"
        }, {"id": 952, "name": "File 952"}, {"id": 953, "name": "File 953"}, {
            "id": 954,
            "name": "File 954"
        }, {"id": 955, "name": "File 955"}, {"id": 956, "name": "File 956"}, {
            "id": 957,
            "name": "File 957"
        }, {"id": 958, "name": "File 958"}, {"id": 959, "name": "File 959"}, {
            "id": 960,
            "name": "File 960"
        }, {"id": 961, "name": "File 961"}, {"id": 962, "name": "File 962"}, {
            "id": 963,
            "name": "File 963"
        }, {"id": 964, "name": "File 964"}, {"id": 965, "name": "File 965"}, {
            "id": 966,
            "name": "File 966"
        }, {"id": 967, "name": "File 967"}, {"id": 968, "name": "File 968"}, {
            "id": 969,
            "name": "File 969"
        }, {"id": 970, "name": "File 970"}, {"id": 971, "name": "File 971"}, {
            "id": 972,
            "name": "File 972"
        }, {"id": 973, "name": "File 973"}, {"id": 974, "name": "File 974"}, {
            "id": 975,
            "name": "File 975"
        }, {"id": 976, "name": "File 976"}, {"id": 977, "name": "File 977"}, {
            "id": 978,
            "name": "File 978"
        }, {"id": 979, "name": "File 979"}, {"id": 980, "name": "File 980"}, {
            "id": 981,
            "name": "File 981"
        }, {"id": 982, "name": "File 982"}, {"id": 983, "name": "File 983"}, {
            "id": 984,
            "name": "File 984"
        }, {"id": 985, "name": "File 985"}, {"id": 986, "name": "File 986"}, {
            "id": 987,
            "name": "File 987"
        }, {"id": 988, "name": "File 988"}, {"id": 989, "name": "File 989"}, {
            "id": 990,
            "name": "File 990"
        }, {"id": 991, "name": "File 991"}, {"id": 992, "name": "File 992"}, {
            "id": 993,
            "name": "File 993"
        }, {"id": 994, "name": "File 994"}, {"id": 995, "name": "File 995"}, {
            "id": 996,
            "name": "File 996"
        }, {"id": 997, "name": "File 997"}, {"id": 998, "name": "File 998"}, {"id": 999, "name": "File 999"}];
    }

    get(start = 0, stop = 100) {
        console.log(`Getting rows for start: ${start}, stop: ${stop}`);

        return {
            data: this._files.slice(start, stop),
            metadata: {
                total: this._files.length,
                start,
                stop
            }
        };
    }

    delete(id) {
        const index = this._files.findIndex(item => item.id === id);

        console.log(id, typeof id, 'index', index, 'files', this._files)

        if (index === -1) {
            return false;
        } else {
            this._files.splice(index, 1);
            this._notifyRelevant(id, index);
            return true;
        }
    }

    _notifyRelevant(id, index) {
        socket.send('fileDeleted', {rowCount: this._files.length});
        // if (socket.start <= index && index <= socket.end) {
        // }
    }
}

// Risk of instantiating twice.
module.exports = new FilesService();