export
const BASE_64_CHARACTERS : string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

export
const CHAR_CODE_TO_BASE64_VALUE : { [ charCode : number ] : number } = {
    65 :  0,
    66 :  1,
    67 :  2,
    68 :  3,
    69 :  4,
    70 :  5,
    71 :  6,
    72 :  7,
    73 :  8,
    74 :  9,
    75 : 10,
    76 : 11,
    77 : 12,
    78 : 13,
    79 : 14,
    80 : 15,
    81 : 16,
    82 : 17,
    83 : 18,
    84 : 19,
    85 : 20,
    86 : 21,
    87 : 22,
    88 : 23,
    89 : 24,
    90 : 25,
    97 : 26,
    98 : 27,
    99 : 28,
    100: 29,
    101: 30,
    102: 31,
    103: 32,
    104: 33,
    105: 34,
    106: 35,
    107: 36,
    108: 37,
    109: 38,
    110: 39,
    111: 40,
    112: 41,
    113: 42,
    114: 43,
    115: 44,
    116: 45,
    117: 46,
    118: 47,
    119: 48,
    120: 49,
    121: 50,
    122: 51,
    48 : 52,
    49 : 53,
    50 : 54,
    51 : 55,
    52 : 56,
    53 : 57,
    54 : 58,
    55 : 59,
    56 : 60,
    57 : 61,
    43 : 62,
    47 : 63,

    // This is to support Base64URL, as specified in the IETF's RFC 4648.
   45 : 62,
   95 : 63
};

export
const BASE64_VALUE_TO_CHAR_CODE : { [ value : number ] : string } = {
    0 :  'A',
    1 :  'B',
    2 :  'C',
    3 :  'D',
    4 :  'E',
    5 :  'F',
    6 :  'G',
    7 :  'H',
    8 :  'I',
    9 :  'J',
    10:  'K',
    11:  'L',
    12:  'M',
    13:  'N',
    14:  'O',
    15:  'P',
    16:  'Q',
    17:  'R',
    18:  'S',
    19:  'T',
    20:  'U',
    21:  'V',
    22:  'W',
    23:  'X',
    24:  'Y',
    25:  'Z',
    26:  'a',
    27:  'b',
    28:  'c',
    29:  'd',
    30:  'e',
    31:  'f',
    32:  'g',
    33:  'h',
    34:  'i',
    35:  'j',
    36:  'k',
    37:  'l',
    38:  'm',
    39:  'n',
    40:  'o',
    41:  'p',
    42:  'q',
    43:  'r',
    44:  's',
    45:  't',
    46:  'u',
    47:  'v',
    48:  'w',
    49:  'x',
    50:  'y',
    51:  'z',
    52:  '0',
    53:  '1',
    54:  '2',
    55:  '3',
    56:  '4',
    57:  '5',
    58:  '6',
    59:  '7',
    60:  '8',
    61:  '9',
    62:  '+',
    63:  '/'
};