(function (Scratch) {
    'use strict';
    const Cast = Scratch.Cast;
    const ArgumentType = Scratch.ArgumentType;
    const BlockType = Scratch.BlockType;
    Scratch.translate.setup({
        "zh-cn": {
            "OPERATION_EXT_NAME": "运算",
            "OPERATION.BOOLEAN_LABEL": "布尔值",
            "OPERATION.STRING_LABEL": "字符",
            "OPERATION.GRAPH_LABEL": "图形",
            "OPERATION.BITWISE_LABEL": "位运算",
            "OPERATION.CONSTANT_LABEL": "常量",
            "OPERATION.CONSTRAIN": "限制 [NUM] 在 [LOW] 与 [HIGH] 之间",
            "OPERATION.ROUND": "四舍五入 [NUM1] 到小数点后 [NUM2] 位",
            "OPERATION.MAP_OFF": "映射 [NUM] 从 [START1] ~ [END1] 到 [START2] ~ [END2]",
            "OPERATION.BASE": "把 [INTO1] 进制的 [NUM] 转换为 [INTO2] 进制",
            "OPERATION.CALCULATE": "计算 [TEXT]",
            "OPERATION.FIND_PARTITION": "把 [RANGE_START] 到 [RANGE_END] 等分为 [NUM_PARTITIONS] 个部分并获取 [VALUE] 的分区",
            "OPERATION.BOOLEAN_TO_NUMBER": "转换 [BOOLEAN] 为二进制数字",
            "OPERATION.NUMBER_NOT": "二进制取反 [NUM]",
            "OPERATION.IS_TRUE": "[OPERAND] 为真？",
            "OPERATION.CHECK_TYPE": "[INPUT] 是 [MODE] ？",
            "OPERATION.TEXT": "文本 [STRING]",
            "OPERATION.TEST": "如果 [BOOLEAN] 那么 [STRING1] 否则 [STRING2]",
            "OPERATION.REPEAT": "重复 [STRING] [NUMBER] 次",
            "OPERATION.TRIM": "消除 [STRING] 两侧的空白文本",
            "OPERATION.INTERCEPT": "截取 [STRING] 的 [START] 到 [END]",
            "OPERATION.REPLACE": "替换 [STRING1] 中的 [STRING2] 为 [STRING3]",
            "OPERATION.REPLACE_INDEX": "替换 [STRING] 中的第 [START] 到 [END] 为 [REPLACEMENT]",
            "OPERATION.SPLIT": "按 [SYMBOL] 分割 [STRING] 取第 [NUM] 项",
            "OPERATION.TOGGLE_CASE": "[STRING1] 在 [STRING2] 中 [MODE]",
            "OPERATION.CONVERT": "转换 [STRING] 为 [MODE]",
            "OPERATION.GET_TO_UNICODE": "[STRING] 的 Unicode",
            "OPERATION.UNICODE_TO_STRING": "Unicode 为 [STRING] 的字符",
            "OPERATION.CALCULATE_LINE_LENGTH": "([X1],[Y1]) 到 ([X2],[Y2]) 的长度",
            "OPERATION.CALCULATE_LINE_DIRECTION": "([X1],[Y1]) 到 ([X2],[Y2]) 的角度",
            "OPERATION.CALCULATE_INTERSECTION": "计算交点 ([X1],[Y1]) 到 ([X2],[Y2]) 与 ([X3],[Y3]) 到 ([X4],[Y4])",
            "OPERATION.TRIANGLE": "三角形 ([X1],[Y1]) ([X2],[Y2]) ([X3],[Y3]) 的 [MODE]",
            "OPERATION.TRIANGLE_AREA": "三角形 [S1] [S2] [S3] 的面积",
            "OPERATION.RECTANGLE": "四边形 ([X1],[Y1]) ([X2],[Y2]) ([X3],[Y3]) ([X4],[Y4]) 的 [MODE]",
            "OPERATION.GRAPH": "多边形 [GRAPH] 的 [MODE]",
            "OPERATION.CIRCLE": "[UNITS] 为 [LENGTH] 的圆的 [MODE]",
            "OPERATION.CALCULATE_ANGLE_DIFFERENCE": "角度 [ANGLE1] 到 [ANGLE2] 的 [MODE]",
            "OPERATION.GET_CONSTANT": "常量 [OPTION]",
            "OPERATION.TRUE": "真",
            "OPERATION.FALSE": "假",
            "OPERATION.RANDOM": "随机",
            "OPERATION.TYPE_NUMBER": "数字",
            "OPERATION.TYPE_POSITIVE_NUMBER": "正数",
            "OPERATION.TYPE_NEGATIVE_NUMBER": "负数",
            "OPERATION.TYPE_EVEN_NUMBER": "偶数",
            "OPERATION.TYPE_ODD_NUMBER": "奇数",
            "OPERATION.TYPE_INTEGER_NUMBER": "整数",
            "OPERATION.TYPE_DECIMAL_NUMBER": "小数",
            "OPERATION.TYPE_PRIME_NUMBER": "质数",
            "OPERATION.TYPE_COMPOSITE_NUMBER": "合数",
            "OPERATION.TYPE_TEXT": "文字",
            "OPERATION.TYPE_BOOLEAN": "布尔值",
            "OPERATION.NAND": "与非",
            "OPERATION.NOR": "或非",
            "OPERATION.XOR": "异或",
            "OPERATION.XNOR": "同或",
            "OPERATION.FIRST_OCCURRENCE": "第一次出现的位置",
            "OPERATION.LAST_OCCURRENCE": "最后出现的位置",
            "OPERATION.NUMBER_OF": "出现的次数",
            "OPERATION.UPPERCASE": "大写",
            "OPERATION.LOWERCASE": "小写",
            "OPERATION.CAPITALIZE": "首字母大写",
            "OPERATION.REVERSE": "倒序",
            "OPERATION.AREA": "面积",
            "OPERATION.CIRCUMFERENCE": "周长",
            "OPERATION.RADIUS": "半径",
            "OPERATION.DIAMETER": "直径",
            "OPERATION.INTERIOR_ANGLE": "内角",
            "OPERATION.EXTERIOR_ANGLE": "外角",
            "OPERATION.CLOCKWISE": "顺时针",
            "OPERATION.COUNTER_CLOCKWISE": "逆时针",
            "OPERATION.ARG_APPLE": "苹果",
            "OPERATION.ARG_BANANA": "香蕉"
        },
        "zh-tw": {
            "OPERATION_EXT_NAME": "運算",
            "OPERATION.BOOLEAN_LABEL": "布林值",
            "OPERATION.STRING_LABEL": "字串",
            "OPERATION.GRAPH_LABEL": "幾何",
            "OPERATION.BITWISE_LABEL": "位元運算",
            "OPERATION.CONSTANT_LABEL": "常數",
            "OPERATION.CONSTRAIN": "約束 [NUM] 介於 [LOW] 與 [HIGH] 之間",
            "OPERATION.ROUND": "四捨五入 [NUM1] 到小數點後 [NUM2] 位",
            "OPERATION.MAP_OFF": "映射 [NUM] 從 [START1] ~ [END1] 到 [START2] ~ [END2]",
            "OPERATION.BASE": "把 [INTO1] 進位的 [NUM] 變為 [INTO2] 進位",
            "OPERATION.CALCULATE": "計算 [TEXT]",
            "OPERATION.FIND_PARTITION": "將 [RANGE_START] 到 [RANGE_END] 等分為 [NUM_PARTITIONS] 個部分，並獲取 [VALUE] 所屬的分區",
            "OPERATION.BOOLEAN_TO_NUMBER": "轉換 [BOOLEAN] 为二位數字",
            "OPERATION.NUMBER_NOT": "二位制取反 [NUM]",
            "OPERATION.IS_TRUE": "[OPERAND] 為真？",
            "OPERATION.CHECK_TYPE": "[INPUT] 是 [MODE] ？",
            "OPERATION.TEXT": "字串 [STRING]",
            "OPERATION.TEST": "如果 [BOOLEAN] 那麼 [STRING1] 否則 [STRING2]",
            "OPERATION.REPEAT": "重複 [STRING] [NUMBER] 次",
            "OPERATION.TRIM": "消除 [STRING] 兩側的空白文本",
            "OPERATION.INTERCEPT": "截取 [STRING] 的 [START] 到 [END]",
            "OPERATION.REPLACE": "將 [STRING1] 中的 [STRING2] 替換為 [STRING3]",
            "OPERATION.REPLACE_INDEX": "將 [STRING] 中的第 [START] 到 [END] 替換為 [REPLACEMENT]",
            "OPERATION.SPLIT": "用 [SYMBOL] 分解 [STRING] 取第 [NUM] 個",
            "OPERATION.TOGGLE_CASE": "[STRING1] 在 [STRING2] 中 [MODE]",
            "OPERATION.CONVERT": "轉換 [STRING] 為 [MODE]",
            "OPERATION.GET_TO_UNICODE": "[STRING] 的 Unicode 編碼",
            "OPERATION.UNICODE_TO_STRING": "Unicode 編碼為 [STRING] 的字串",
            "OPERATION.CALCULATE_LINE_LENGTH": "([X1],[Y1]) 到 ([X2],[Y2]) 的間距",
            "OPERATION.CALCULATE_LINE_DIRECTION": "([X1],[Y1]) 到 ([X2],[Y2]) 的方向",
            "OPERATION.CALCULATE_INTERSECTION": "計算交点 ([X1],[Y1]) 到 ([X2],[Y2]) 與 ([X3],[Y3]) 到 ([X4],[Y4])",
            "OPERATION.TRIANGLE": "三角形 ([X1],[Y1]) ([X2],[Y2]) ([X3],[Y3]) 的 [MODE]",
            "OPERATION.TRIANGLE_AREA": "三角形 [S1] [S2] [S3] 的面積",
            "OPERATION.RECTANGLE": "四邊形 ([X1],[Y1]) ([X2],[Y2]) ([X3],[Y3]) ([X4],[Y4]) 的 [MODE]",
            "OPERATION.GRAPH": "多邊形 [GRAPH] 的 [MODE]",
            "OPERATION.CIRCLE": "[UNITS] 為 [LENGTH] 的圆的 [MODE]",
            "OPERATION.CALCULATE_ANGLE_DIFFERENCE": "角度 [ANGLE1] 到 [ANGLE2] 的 [MODE]",
            "OPERATION.GET_CONSTANT": "常數 [OPTION]",
            "OPERATION.TRUE": "真",
            "OPERATION.FALSE": "假",
            "OPERATION.RANDOM": "隨機",
            "OPERATION.TYPE_NUMBER": "數字",
            "OPERATION.TYPE_POSITIVE_NUMBER": "正數",
            "OPERATION.TYPE_NEGATIVE_NUMBER": "負數",
            "OPERATION.TYPE_EVEN_NUMBER": "偶數",
            "OPERATION.TYPE_ODD_NUMBER": "奇數",
            "OPERATION.TYPE_INTEGER_NUMBER": "整數",
            "OPERATION.TYPE_DECIMAL_NUMBER": "小數",
            "OPERATION.TYPE_PRIME_NUMBER": "質數",
            "OPERATION.TYPE_COMPOSITE_NUMBER": "合數",
            "OPERATION.TYPE_TEXT": "文字",
            "OPERATION.TYPE_BOOLEAN": "布林值",
            "OPERATION.NAND": "與非",
            "OPERATION.NOR": "或非",
            "OPERATION.XOR": "異或",
            "OPERATION.XNOR": "同或",
            "OPERATION.FIRST_OCCURRENCE": "首次出現的位置",
            "OPERATION.LAST_OCCURRENCE": "最後出現的位置",
            "OPERATION.NUMBER_OF": "出現的次數",
            "OPERATION.UPPERCASE": "大寫",
            "OPERATION.LOWERCASE": "小寫",
            "OPERATION.CAPITALIZE": "首字大寫",
            "OPERATION.REVERSE": "翻轉",
            "OPERATION.AREA": "面積",
            "OPERATION.CIRCUMFERENCE": "周長",
            "OPERATION.RADIUS": "半徑",
            "OPERATION.DIAMETER": "直徑",
            "OPERATION.INTERIOR_ANGLE": "內角",
            "OPERATION.EXTERIOR_ANGLE": "外角",
            "OPERATION.CLOCKWISE": "順時針",
            "OPERATION.COUNTER_CLOCKWISE": "逆時針",
            "OPERATION.ARG_APPLE": "apple",
            "OPERATION.ARG_BANANA": "banna"
        }
    });
    const formatMessage = Scratch.translate;

    class Operation {
        getInfo() {
            return {
                color1: '#6050ff',
                color2: '#5648E6',
                color3: '#4D40CC',
                id: 'OPERATION',
                name: formatMessage({
                    id: 'OPERATION_EXT_NAME',
                    default: 'Operation'
                }),
                blocks: [
                    {
                        opcode: 'exponent',
                        blockType: BlockType.REPORTER,
                        text: '[NUM1] ^ [NUM2]',
                        arguments: {
                            NUM1: {
                                type: ArgumentType.NUMBER,
                                defaultValue: ''
                            },
                            NUM2: {
                                type: ArgumentType.NUMBER,
                                defaultValue: ''
                            }
                        }
                    },
                    {
                        opcode: 'root',
                        blockType: BlockType.REPORTER,
                        text: '[NUM1] √ [NUM2]',
                        arguments: {
                            NUM1: {
                                type: ArgumentType.NUMBER,
                                defaultValue: ''
                            },
                            NUM2: {
                                type: ArgumentType.NUMBER,
                                defaultValue: ''
                            }
                        }
                    },
                    {
                        opcode: 'negative',
                        blockType: BlockType.REPORTER,
                        text: '- [NUM]',
                        arguments: {
                            NUM: {
                                type: ArgumentType.NUMBER,
                                defaultValue: ''
                            }
                        }
                    },
                    '---',
                    {
                        opcode: 'constrain',
                        blockType: BlockType.REPORTER,
                        text: formatMessage({
                            id: 'OPERATION.CONSTRAIN',
                            default: 'constrain [NUM] low [LOW] high [HIGH]'
                        }),
                        arguments: {
                            NUM: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '50'
                            },
                            LOW: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '1'
                            },
                            HIGH: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '100'
                            }
                        }
                    },
                    {
                        opcode: 'round',
                        blockType: BlockType.REPORTER,
                        text: formatMessage({
                            id: 'OPERATION.ROUND',
                            default: 'round [NUM1] to [NUM2] decimal places'
                        }),
                        arguments: {
                            NUM1: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '3.14'
                            },
                            NUM2: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '1'
                            },
                        }
                    },
                    {
                        opcode: 'mapOff',
                        blockType: BlockType.REPORTER,
                        text: formatMessage({
                            id: 'OPERATION.MAP_OFF',
                            default: 'map [NUM] from [START1] ~ [END1] to [START2] ~ [END2]'
                        }),
                        arguments: {
                            NUM: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '10'
                            },
                            START1: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '0'
                            },
                            END1: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '100'
                            },
                            START2: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '0'
                            },
                            END2: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '1000'
                            }
                        }
                    },
                    {
                        opcode: 'base',
                        blockType: BlockType.REPORTER,
                        text: formatMessage({
                            id: 'OPERATION.BASE',
                            default: 'convert [NUM] in base [INTO1] to base [INTO2]'
                        }),
                        arguments: {
                            NUM: {
                                type: ArgumentType.STRING,
                                defaultValue: '10'
                            },
                            INTO1: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '10'
                            },
                            INTO2: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '2'
                            }
                        }
                    },
                    '---',
                    {
                        opcode: 'findPartition',
                        blockType: BlockType.REPORTER,
                        text: formatMessage({
                            id: 'OPERATION.FIND_PARTITION',
                            default: 'find partition of [VALUE] in range [RANGE_START] to [RANGE_END] divided into [NUM_PARTITIONS] partitions'
                        }),
                        arguments: {
                            VALUE: {
                                type: ArgumentType.NUMBER,
                                defaultValue: 10
                            },
                            RANGE_START: {
                                type: ArgumentType.NUMBER,
                                defaultValue: 1
                            },
                            RANGE_END: {
                                type: ArgumentType.NUMBER,
                                defaultValue: 20
                            },
                            NUM_PARTITIONS: {
                                type: ArgumentType.NUMBER,
                                defaultValue: 10
                            }
                        }
                    },
                    '---',
                    {
                        opcode: 'booleanToNumber',
                        blockType: BlockType.REPORTER,
                        text: formatMessage({
                            id: 'OPERATION.BOOLEAN_TO_NUMBER',
                            default: 'converts [BOOLEAN] to binary num'
                        }),
                        arguments: {
                            BOOLEAN: {
                                type: ArgumentType.BOOLEAN,
                                defaultValue: ''
                            }
                        }
                    },
                    {
                        opcode: 'numberNot',
                        blockType: BlockType.REPORTER,
                        text: formatMessage({
                            id: 'OPERATION.NUMBER_NOT',
                            default: 'binary Inversion [NUM]'
                        }),
                        arguments: {
                            NUM: {
                                type: ArgumentType.NUMBER,
                                defaultValue: ''
                            }
                        }
                    },
                    {
                        blockType: BlockType.LABEL,
                        text: formatMessage({
                            id: 'OPERATION.BOOLEAN_LABEL',
                            default: 'Boolean'
                        })
                    },
                    {
                        opcode: 'booleanMenu',
                        blockType: BlockType.BOOLEAN,
                        disableMonitor: true,
                        text: '[BOOLEAN]',
                        arguments: {
                            BOOLEAN: {
                                type: ArgumentType.STRING,
                                menu: 'BOOLEAN_MENU'
                            }
                        }
                    },
                    {
                        opcode: 'isTrue',
                        blockType: BlockType.BOOLEAN,
                        text: formatMessage({
                            id: 'OPERATION.IS_TRUE',
                            default: '[OPERAND] is true?'
                        }),
                        arguments: {
                            OPERAND: {
                                type: ArgumentType.STRING,
                                defaultValue: ''
                            }
                        }
                    },
                    {
                        opcode: 'checkType',
                        blockType: BlockType.BOOLEAN,
                        text: formatMessage({
                            id: 'OPERATION.CHECK_TYPE',
                            default: '[INPUT] is [MODE] ?'
                        }),
                        arguments: {
                            INPUT: {
                                type: ArgumentType.STRING,
                                defaultValue: ''
                            },
                            MODE: {
                                type: ArgumentType.STRING,
                                menu: 'CHECK_TYPE',
                                defaultValue: 'number'
                            }
                        }
                    },
                    '---',
                    {
                        opcode: 'compare',
                        blockType: BlockType.BOOLEAN,
                        text: '[OPERAND1] [SYMBOL] [OPERAND2]',
                        arguments: {
                            OPERAND1: {
                                type: ArgumentType.STRING,
                                defaultValue: ''
                            },
                            OPERAND2: {
                                type: ArgumentType.STRING,
                                defaultValue: '50'
                            },
                            SYMBOL: {
                                type: ArgumentType.STRING,
                                menu: 'EQUAL_SYMBOL',
                                defaultValue: 'unequal'
                            }
                        }
                    },
                    {
                        opcode: 'continuousCompare',
                        blockType: BlockType.BOOLEAN,
                        text: '[OPERAND1] [SYMBOL1] [OPERAND2] [SYMBOL2] [OPERAND3]',
                        arguments: {
                            OPERAND1: {
                                type: ArgumentType.STRING,
                                defaultValue: ''
                            },
                            OPERAND2: {
                                type: ArgumentType.STRING,
                                defaultValue: ''
                            },
                            OPERAND3: {
                                type: ArgumentType.STRING,
                                defaultValue: ''
                            },
                            SYMBOL1: {
                                type: ArgumentType.STRING,
                                menu: 'EQUAL_SYMBOL',
                                defaultValue: 'lessOrEqual'
                            },
                            SYMBOL2: {
                                type: ArgumentType.STRING,
                                menu: 'EQUAL_SYMBOL',
                                defaultValue: 'lessOrEqual'
                            }
                        }
                    },
                    {
                        opcode: 'approximatelyEqual',
                        blockType: BlockType.BOOLEAN,
                        text: '[OPERAND1] ≈ [OPERAND2] ± [NUM]',
                        arguments: {
                            OPERAND1: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '5'
                            },
                            OPERAND2: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '6'
                            },
                            NUM: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '1'
                            }
                        }
                    },
                    '---',
                    {
                        opcode: 'logicGateOperation',
                        blockType: BlockType.BOOLEAN,
                        text: '[OPERAND1] [SYMBOL] [OPERAND2]',
                        arguments: {
                            OPERAND1: {
                                type: ArgumentType.BOOLEAN
                            },
                            OPERAND2: {
                                type: ArgumentType.BOOLEAN
                            },
                            SYMBOL: {
                                type: ArgumentType.STRING,
                                menu: 'LOGIC_GATE_SYMBOL'
                            }
                        }
                    },
                    {
                        blockType: BlockType.LABEL,
                        text: formatMessage({
                            id: 'OPERATION.STRING_LABEL',
                            default: 'String'
                        })
                    },
                    {
                        opcode: 'text',
                        blockType: BlockType.REPORTER,
                        text: formatMessage({
                            id: 'OPERATION.TEXT',
                            default: 'text [STRING]'
                        }),
                        arguments: {
                            STRING: {
                                type: ArgumentType.STRING,
                                defaultValue: formatMessage({
                                    id: 'OPERATION.ARG_APPLE',
                                    default: 'apple'
                                })
                            }
                        }
                    },
                    {
                        opcode: 'test',
                        blockType: BlockType.REPORTER,
                        text: formatMessage({
                            id: 'OPERATION.TEST',
                            default: 'test [BOOLEAN] true: [STRING1] false: [STRING2]'
                        }),
                        arguments: {
                            BOOLEAN: {
                                type: ArgumentType.BOOLEAN
                            },
                            STRING1: {
                                type: ArgumentType.STRING,
                                defaultValue: 'a'
                            },
                            STRING2: {
                                type: ArgumentType.STRING,
                                defaultValue: 'b'
                            }
                        }
                    },
                    '---',
                    {
                        opcode: 'repeat',
                        blockType: BlockType.REPORTER,
                        text: formatMessage({
                            id: 'OPERATION.REPEAT',
                            default: 'repeat [STRING] [NUMBER] times'
                        }),
                        arguments: {
                            STRING: {
                                type: ArgumentType.STRING,
                                defaultValue: formatMessage({
                                    id: 'OPERATION.ARG_APPLE',
                                    default: 'apple'
                                }) + ' '
                            },
                            NUMBER: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '3'
                            }
                        }
                    },
                    {
                        opcode: 'trim',
                        blockType: BlockType.REPORTER,
                        text: formatMessage({
                            id: 'OPERATION.TRIM',
                            default: 'trim whitespace from [STRING]'
                        }),
                        arguments: {
                            STRING: {
                                type: ArgumentType.STRING,
                                defaultValue: '     ' + formatMessage({
                                    id: 'OPERATION.ARG_APPLE',
                                    default: 'apple'
                                }) + '     '
                            }
                        }
                    },
                    {
                        opcode: 'letters',
                        blockType: BlockType.REPORTER,
                        text: formatMessage({
                            id: 'OPERATION.INTERCEPT',
                            default: 'letters [START] to [END] of [STRING]'
                        }),
                        arguments: {
                            START: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '4'
                            },
                            END: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '6'
                            },
                            STRING: {
                                type: ArgumentType.STRING,
                                defaultValue: '123456'
                            }
                        }
                    },
                    {
                        opcode: 'replace',
                        blockType: BlockType.REPORTER,
                        text: formatMessage({
                            id: 'OPERATION.REPLACE',
                            default: 'replace [STRING2] with [STRING3] in [STRING1]'
                        }),
                        arguments: {
                            STRING2: {
                                type: ArgumentType.STRING,
                                defaultValue: 'world'
                            },
                            STRING3: {
                                type: ArgumentType.STRING,
                                defaultValue: 'Scratch'
                            },
                            STRING1: {
                                type: ArgumentType.STRING,
                                defaultValue: 'Hello world!'
                            }
                        }
                    },
                    {
                        opcode: 'replaceIndex',
                        blockType: BlockType.REPORTER,
                        text: formatMessage({
                            id: 'OPERATION.REPLACE_INDEX',
                            default: 'replace [STRING] from [START] to [END] with [REPLACEMENT]'
                        }),
                        arguments: {
                            START: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '7'
                            },
                            END: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '11'
                            },
                            STRING: {
                                type: ArgumentType.STRING,
                                defaultValue: 'Hello world!'
                            },
                            REPLACEMENT: {
                                type: ArgumentType.STRING,
                                defaultValue: 'Scratch'
                            }
                        }
                    },
                    {
                        opcode: 'split',
                        blockType: BlockType.REPORTER,
                        text: formatMessage({
                            id: 'OPERATION.SPLIT',
                            default: 'split [STRING] by [SYMBOL] and take the [NUM]th item'
                        }),
                        arguments: {
                            STRING: {
                                type: ArgumentType.STRING,
                                defaultValue: formatMessage({
                                    id: 'OPERATION.ARG_APPLE',
                                    default: 'apple'
                                }) + '_' + formatMessage({
                                    id: 'OPERATION.ARG_BANANA',
                                    default: 'banana'
                                })
                            },
                            SYMBOL: {
                                type: ArgumentType.STRING,
                                defaultValue: '_'
                            },
                            NUM: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '1'
                            }
                        }
                    },
                    {
                        opcode: 'toggleCase',
                        blockType: BlockType.REPORTER,
                        text: formatMessage({
                            id: 'OPERATION.TOGGLE_CASE',
                            default: '[MODE] of [STRING2] in [STRING1]'
                        }),
                        arguments: {
                            MODE: {
                                type: ArgumentType.STRING,
                                menu: 'TOGGLE_CASE_MODE'
                            },
                            STRING2: {
                                type: ArgumentType.STRING,
                                defaultValue: 'te'
                            },
                            STRING1: {
                                type: ArgumentType.STRING,
                                defaultValue: 'The text test'
                            }
                        }
                    },
                    {
                        opcode: 'convert',
                        blockType: BlockType.REPORTER,
                        text: formatMessage({
                            id: 'OPERATION.CONVERT',
                            default: 'convert [STRING] to [MODE]'
                        }),
                        arguments: {
                            MODE: {
                                type: ArgumentType.STRING,
                                menu: 'CONVERT_MODE'
                            },
                            STRING: {
                                type: ArgumentType.STRING,
                                defaultValue: 'apple banana'
                            }
                        }
                    },
                    '---',
                    {
                        opcode: 'getUnicode',
                        blockType: BlockType.REPORTER,
                        text: formatMessage({
                            id: 'OPERATION.GET_TO_UNICODE',
                            default: 'unicode of [STRING]'
                        }),
                        arguments: {
                            STRING: {
                                type: ArgumentType.STRING,
                                defaultValue: 'a'
                            }
                        }
                    },
                    {
                        opcode: 'unicodeToString',
                        blockType: BlockType.REPORTER,
                        text: formatMessage({
                            id: 'OPERATION.UNICODE_TO_STRING',
                            default: 'character with Unicode [STRING]'
                        }),
                        arguments: {
                            STRING: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '97'
                            }
                        }
                    },
                    {
                        blockType: BlockType.LABEL,
                        text: formatMessage({
                            id: 'OPERATION.GRAPH_LABEL',
                            default: 'Graph'
                        })
                    },
                    {
                        opcode: 'calculateLineLength',
                        blockType: BlockType.REPORTER,
                        text: formatMessage({
                            id: 'OPERATION.CALCULATE_LINE_LENGTH',
                            default: 'length from ([X1],[Y1]) to ([X2],[Y2])'
                        }),
                        arguments: {
                            X1: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '0'
                            },
                            Y1: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '0'
                            },
                            X2: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '100'
                            },
                            Y2: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '0'
                            }
                        }
                    },
                    {
                        opcode: 'calculateLineDirection',
                        blockType: BlockType.REPORTER,
                        text: formatMessage({
                            id: 'OPERATION.CALCULATE_LINE_DIRECTION',
                            default: 'direction from ([X1],[Y1]) to ([X2],[Y2])'
                        }),
                        arguments: {
                            X1: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '0'
                            },
                            Y1: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '0'
                            },
                            X2: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '100'
                            },
                            Y2: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '0'
                            }
                        }
                    },
                    {
                        opcode: 'calculateIntersection',
                        blockType: BlockType.REPORTER,
                        text: formatMessage({
                            id: 'OPERATION.CALCULATE_INTERSECTION',
                            default: 'calculate intersection ([X1],[Y1]) to ([X2],[Y2]) & ([X3],[Y3]) to ([X4],[Y4])'
                        }),
                        arguments: {
                            X1: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '-100'
                            },
                            Y1: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '0'
                            },
                            X2: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '100'
                            },
                            Y2: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '0'
                            },
                            X3: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '0'
                            },
                            Y3: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '100'
                            },
                            X4: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '0'
                            },
                            Y4: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '-100'
                            }
                        }
                    },
                    '---',
                    {
                        opcode: 'triangle',
                        blockType: BlockType.REPORTER,
                        text: formatMessage({
                            id: 'OPERATION.TRIANGLE',
                            default: 'triangle ([X1],[Y1]) ([X2],[Y2]) ([X3],[Y3]) \'s [MODE]'
                        }),
                        arguments: {
                            X1: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '0'
                            },
                            Y1: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '10'
                            },
                            X2: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '10'
                            },
                            Y2: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '10'
                            },
                            X3: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '10'
                            },
                            Y3: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '0'
                            },
                            MODE: {
                                type: ArgumentType.STRING,
                                menu: 'GRAPH_MODE'
                            }
                        }
                    },
                    {
                        opcode: 'triangleArea',
                        blockType: BlockType.REPORTER,
                        text: formatMessage({
                            id: 'OPERATION.TRIANGLE_AREA',
                            default: 'triangle [S1] [S2] [S3] \'s area'
                        }),
                        arguments: {
                            S1: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '3'
                            },
                            S2: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '4'
                            },
                            S3: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '5'
                            }
                        }
                    },
                    {
                        opcode: 'rectangle',
                        blockType: BlockType.REPORTER,
                        text: formatMessage({
                            id: 'OPERATION.RECTANGLE',
                            default: 'quadrangle ([X1],[Y1]) ([X2],[Y2]) ([X3],[Y3]) ([X4],[Y4]) \'s [MODE]'
                        }),
                        arguments: {
                            X1: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '0'
                            },
                            Y1: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '10'
                            },
                            X2: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '10'
                            },
                            Y2: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '10'
                            },
                            X3: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '10'
                            },
                            Y3: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '0'
                            },
                            X4: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '0'
                            },
                            Y4: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '0'
                            },
                            MODE: {
                                type: ArgumentType.STRING,
                                menu: 'GRAPH_MODE'
                            }
                        }
                    },
                    {
                        opcode: 'graph',
                        blockType: BlockType.REPORTER,
                        text: formatMessage({
                            id: 'OPERATION.GRAPH',
                            default: 'graph [GRAPH] \'s [MODE]'
                        }),
                        arguments: {
                            GRAPH: {
                                type: ArgumentType.STRING,
                                defaultValue: '[[0,0], [0,2], [2,4], [4,2], [4,0]]'
                            },
                            MODE: {
                                type: ArgumentType.STRING,
                                menu: 'GRAPH_MODE'
                            }
                        }
                    },
                    '---',
                    {
                        opcode: 'circle',
                        blockType: BlockType.REPORTER,
                        text: formatMessage({
                            id: 'OPERATION.CIRCLE',
                            default: 'circle of [UNITS] [LENGTH] \'s [MODE]'
                        }),
                        arguments: {
                            UNITS: {
                                type: ArgumentType.STRING,
                                menu: 'LENGTH_UNITS'
                            },
                            LENGTH: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '10'
                            },
                            MODE: {
                                type: ArgumentType.STRING,
                                menu: 'GRAPH_MODE'
                            }
                        }
                    },
                    '---',
                    {
                        opcode: 'calculateAngleDifference',
                        blockType: BlockType.REPORTER,
                        text: formatMessage({
                            id: 'OPERATION.CALCULATE_ANGLE_DIFFERENCE',
                            default: 'calculate angle difference [ANGLE1] to [ANGLE2] [MODE]'
                        }),
                        arguments: {
                            ANGLE1: {
                                type: ArgumentType.ANGLE,
                                defaultValue: 0
                            },
                            ANGLE2: {
                                type: ArgumentType.ANGLE,
                                defaultValue: 90
                            },
                            MODE: {
                                type: ArgumentType.STRING,
                                menu: 'ANGLE_MODE'
                            }
                        }
                    },
                    {
                        blockType: BlockType.LABEL,
                        text: formatMessage({
                            id: 'OPERATION.BITWISE_LABEL',
                            default: 'Bitwise'
                        })
                    },
                    {
                        opcode: 'bitwiseBlock',
                        blockType: BlockType.REPORTER,
                        text: '[NUM1] [SYMBOL] [NUM2]',
                        arguments: {
                            NUM1: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '1'
                            },
                            NUM2: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '0'
                            },
                            SYMBOL: {
                                type: ArgumentType.NUMBER,
                                menu: 'BITWISE_SYMBOL'
                            }
                        }
                    },
                    {
                        opcode: 'bitwiseNot',
                        blockType: BlockType.REPORTER,
                        text: '~ [NUM]',
                        arguments: {
                            NUM: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '0'
                            }
                        }
                    },
                    {
                        blockType: BlockType.LABEL,
                        text: formatMessage({
                            id: 'OPERATION.CONSTANT_LABEL',
                            default: 'Constant'
                        })
                    },
                    {
                        opcode: 'getConstant',
                        blockType: BlockType.REPORTER,
                        disableMonitor: true,
                        text: formatMessage({
                            id: 'OPERATION.GET_CONSTANT',
                            default: 'constant [OPTION]'
                        }),
                        arguments: {
                            OPTION: {
                                type: ArgumentType.STRING,
                                menu: 'CONSTANT'
                            }
                        }
                    }
                ],
                menus: {
                    BOOLEAN_MENU: {
                        acceptReporters: false,
                        items: [
                            {
                                text: formatMessage({
                                    id: 'OPERATION.TRUE',
                                    default: 'true'
                                }),
                                value: 'true'
                            },
                            {
                                text: formatMessage({
                                    id: 'OPERATION.FALSE',
                                    default: 'false'
                                }),
                                value: 'false'
                            },
                            {
                                text: formatMessage({
                                    id: 'OPERATION.RANDOM',
                                    default: 'random'
                                }),
                                value: 'random'
                            }
                        ]
                    },
                    EQUAL_SYMBOL: {
                        acceptReporters: false,
                        items: [
                            {
                                text: '=',
                                value: 'equal'
                            },
                            {
                                text: '≡',
                                value: 'strictlyEqual'
                            },
                            {
                                text: '>',
                                value: 'greater'
                            },
                            {
                                text: '<',
                                value: 'less'
                            },
                            {
                                text: '≥',
                                value: 'greaterOrEqual'
                            },
                            {
                                text: '≤',
                                value: 'lessOrEqual'
                            },
                            {
                                text: '≠',
                                value: 'unequal'
                            },
                            {
                                text: '≢',
                                value: 'strictlyUnequal'
                            },
                            {
                                text: '=-',
                                value: 'equalNegative'
                            },
                            {
                                text: '=±',
                                value: 'EqualPON'
                            },
                            {
                                text: '≈',
                                value: 'approximatelyEqual'
                            },
                            {
                                text: '⊥',
                                value: 'vertical'
                            },
                            {
                                text: '∥',
                                value: 'parallel'
                            }
                        ]
                    },
                    LOGIC_GATE_SYMBOL: {
                        acceptReporters: false,
                        items: [
                            {
                                text: formatMessage({
                                    id: 'OPERATION.NAND',
                                    default: 'nand'
                                }),
                                value: 'nand'
                            },
                            {
                                text: formatMessage({
                                    id: 'OPERATION.NOR',
                                    default: 'nor'
                                }),
                                value: 'nor'
                            },
                            {
                                text: formatMessage({
                                    id: 'OPERATION.XOR',
                                    default: 'xor'
                                }),
                                value: 'xor'
                            },
                            {
                                text: formatMessage({
                                    id: 'OPERATION.XNOR',
                                    default: 'xnor'
                                }),
                                value: 'xnor'
                            }
                        ]
                    },
                    CHECK_TYPE: {
                        acceptReporters: false,
                        items: [
                            {
                                text: formatMessage({
                                    id: 'OPERATION.TYPE_NUMBER',
                                    default: 'number'
                                }),
                                value: 'number'
                            },
                            {
                                text: formatMessage({
                                    id: 'OPERATION.TYPE_POSITIVE_NUMBER',
                                    default: 'positive number'
                                }),
                                value: 'positiveNumber'
                            },
                            {
                                text: formatMessage({
                                    id: 'OPERATION.TYPE_NEGATIVE_NUMBER',
                                    default: 'negative number'
                                }),
                                value: 'negativeNumber'
                            },
                            {
                                text: formatMessage({
                                    id: 'OPERATION.TYPE_EVEN_NUMBER',
                                    default: 'even number'
                                }),
                                value: 'evenNumber'
                            },
                            {
                                text: formatMessage({
                                    id: 'OPERATION.TYPE_ODD_NUMBER',
                                    default: 'odd number'
                                }),
                                value: 'oddNumber'
                            },
                            {
                                text: formatMessage({
                                    id: 'OPERATION.TYPE_INTEGER_NUMBER',
                                    default: 'integer number'
                                }),
                                value: 'integerNumber'
                            },
                            {
                                text: formatMessage({
                                    id: 'OPERATION.TYPE_DECIMAL_NUMBER',
                                    default: 'decimal number'
                                }),
                                value: 'decimalNumber'
                            },
                            {
                                text: formatMessage({
                                    id: 'OPERATION.TYPE_PRIME_NUMBER',
                                    default: 'prime number'
                                }),
                                value: 'primeNumber'
                            },
                            {
                                text: formatMessage({
                                    id: 'OPERATION.TYPE_COMPOSITE_NUMBER',
                                    default: 'composite number'
                                }),
                                value: 'compositeNumber'
                            },
                            {
                                text: formatMessage({
                                    id: 'OPERATION.TYPE_TEXT',
                                    default: 'text'
                                }),
                                value: 'text'
                            },
                            {
                                text: formatMessage({
                                    id: 'OPERATION.TYPE_BOOLEAN',
                                    default: 'boolean'
                                }),
                                value: 'boolean'
                            }
                        ]
                    },
                    TOGGLE_CASE_MODE: {
                        acceptReporters: false,
                        items: [
                            {
                                text: formatMessage({
                                    id: 'OPERATION.FIRST_OCCURRENCE',
                                    default: 'first occurrence'
                                }),
                                value: 'first'
                            },
                            {
                                text: formatMessage({
                                    id: 'OPERATION.LAST_OCCURRENCE',
                                    default: 'last occurrence'
                                }),
                                value: 'last'
                            },
                            {
                                text: formatMessage({
                                    id: 'OPERATION.NUMBER_OF',
                                    default: 'number'
                                }),
                                value: 'number'
                            }
                        ]
                    },
                    CONVERT_MODE: {
                        acceptReporters: false,
                        items: [
                            {
                                text: formatMessage({
                                    id: 'OPERATION.UPPERCASE',
                                    default: 'uppercase'
                                }),
                                value: 'uppercase'
                            },
                            {
                                text: formatMessage({
                                    id: 'OPERATION.LOWERCASE',
                                    default: 'lowercase'
                                }),
                                value: 'lowercase'
                            },
                            {
                                text: formatMessage({
                                    id: 'OPERATION.CAPITALIZE',
                                    default: 'capitalize the first letter'
                                }),
                                value: 'capitalize'
                            },
                            {
                                text: formatMessage({
                                    id: 'OPERATION.REVERSE',
                                    default: 'reverse'
                                }),
                                value: 'reverse'
                            }
                        ]
                    },
                    GRAPH_MODE: {
                        acceptReporters: true,
                        items: [
                            {
                                text: formatMessage({
                                    id: 'OPERATION.AREA',
                                    default: 'area'
                                }),
                                value: 'area'
                            },
                            {
                                text: formatMessage({
                                    id: 'OPERATION.CIRCUMFERENCE',
                                    default: 'circumference'
                                }),
                                value: 'circumference'
                            }
                        ]
                    },
                    LENGTH_UNITS: {
                        acceptReporters: true,
                        items: [
                            {
                                text: formatMessage({
                                    id: 'OPERATION.RADIUS',
                                    default: 'radius'
                                }),
                                value: 'radius'
                            },
                            {
                                text: formatMessage({
                                    id: 'OPERATION.DIAMETER',
                                    default: 'diameter'
                                }),
                                value: 'diameter'
                            }
                        ]
                    },
                    ANGLE_MODE: {
                        acceptReporters: true,
                        items: [
                            {
                                text: formatMessage({
                                    id: 'OPERATION.INTERIOR_ANGLE',
                                    default: 'interior angle'
                                }),
                                value: 'interiorAngle'
                            },
                            {
                                text: formatMessage({
                                    id: 'OPERATION.EXTERIOR_ANGLE',
                                    default: 'exterior angle'
                                }),
                                value: 'exteriorAngle'
                            },
                            {
                                text: formatMessage({
                                    id: 'OPERATION.CLOCKWISE',
                                    default: 'clockwise'
                                }),
                                value: 'clockwise'
                            },
                            {
                                text: formatMessage({
                                    id: 'OPERATION.COUNTER_CLOCKWISE',
                                    default: 'counter clockwise'
                                }),
                                value: 'counterClockwise'
                            }
                        ]
                    },
                    BITWISE_SYMBOL: {
                        acceptReporters: false,
                        items: [
                            {
                                text: '&',
                                value: 'and'
                            },
                            {
                                text: '|',
                                value: 'or'
                            },
                            {
                                text: '^',
                                value: 'xor'
                            },
                            {
                                text: '<<',
                                value: 'leftShift'
                            },
                            {
                                text: '>>',
                                value: 'rightShift'
                            },
                            {
                                text: '>>>',
                                value: 'logicalRightShift'
                            }
                        ]
                    },
                    CONSTANT: {
                        acceptReporters: false,
                        items: [
                            {
                                text: 'π',
                                value: 'pi'
                            },
                            {
                                text: 'φ',
                                value: 'phi'
                            },
                            {
                                text: 'γ',
                                value: 'gamma'
                            },
                            {
                                text: 'e',
                                value: 'e'
                            },
                            {
                                text: '√2',
                                value: 'sqrt2'
                            },
                            {
                                text: '∞',
                                value: 'Infinity'
                            },
                            {
                                text: 'NaN',
                                value: 'NaN'
                            },
                            {
                                text: '\\n',
                                value: 'newLine'
                            }
                        ]
                    }
                }
            };
        }
        exponent({ NUM1, NUM2 }) {
            return Cast.toNumber(NUM1) ** Cast.toNumber(NUM2);
        }
        root({ NUM1, NUM2 }) {
            return Math.pow(Cast.toNumber(NUM2), 1 / Cast.toNumber(NUM1));
        }
        negative({ NUM }) {
            return 0 - Cast.toNumber(NUM);
        }
        constrain({ NUM, LOW, HIGH }) {
            return Math.min(Math.max(NUM, LOW), HIGH);
        }
        round({ NUM1, NUM2 }) {
            return Cast.toNumber(NUM1).toFixed(Cast.toNumber(NUM2));
        }
        mapOff({ NUM, START1, END1, START2, END2 }) {
            NUM = Cast.toNumber(NUM);
            START1 = Cast.toNumber(START1);
            END1 = Cast.toNumber(END1);
            START2 = Cast.toNumber(START2);
            END2 = Cast.toNumber(END2);
            return ((NUM - START1) / (END1 - START1)) * (END2 - START2) + START2;
        }
        base({ NUM, INTO1, INTO2 }) {
            INTO1 = Cast.toNumber(INTO1);
            INTO2 = Cast.toNumber(INTO2);
            if (INTO1 > 1 && INTO1 < 37 && INTO2 > 1 && INTO2 < 37) {
                const dec = parseInt(NUM, INTO1);
                const result = dec.toString(INTO2);
                return result;
            }
            else {
                return '';
            }
        }
        findPartition({ VALUE, RANGE_START, RANGE_END, NUM_PARTITIONS }) {
            VALUE = Cast.toNumber(VALUE);
            RANGE_START = Cast.toNumber(RANGE_START) - 1;
            RANGE_END = Cast.toNumber(RANGE_END);
            NUM_PARTITIONS = Cast.toNumber(NUM_PARTITIONS);
            const partitionSize = (RANGE_END - RANGE_START) / NUM_PARTITIONS;
            const partitionIndex = Math.floor((VALUE - RANGE_START) / partitionSize + 0.5);
            return partitionIndex;
        }
        booleanToNumber({ BOOLEAN }) {
            BOOLEAN = Cast.toNumber(
                Cast.toBoolean(BOOLEAN)
            );
            return BOOLEAN ? 1 : 0;
        }
        numberNot({ NUM }) {
            NUM = Cast.toBoolean(NUM);
            return NUM ? 0 : 1;
        }
        booleanMenu({ BOOLEAN }) {
            if (BOOLEAN === 'random') return Math.random() < 0.5 ? true : false
            return BOOLEAN == 'true' ? true : false;
        }
        isTrue({ OPERAND }) {
            return Cast.toBoolean(OPERAND);
        }
        checkType({ INPUT, MODE }) {
            INPUT = String(INPUT);
            const isNumRegex = /^-?\d+(\.\d+)?$/;
            const isPrime = (number) => {
                if (number <= 1) return false;
                if (number <= 3) return true;
                if (number % 2 === 0 || number % 3 === 0) return false;
                let i = 5;
                while (i * i <= number) {
                    if (number % i === 0 || number % (i + 2) === 0) return false;
                    i += 6;
                }
                return true;
            }
            const isComposite = (number) => {
                if (number <= 1) return false;
                for (let i = 2; i <= Math.sqrt(number); i++) {
                    if (number % i === 0) return true;
                }
                return false;
            }
            switch (MODE) {
                case 'number': return isNumRegex.test(INPUT);
                case 'positiveNumber': return Cast.toNumber(INPUT) > 0 && isNumRegex.test(INPUT);
                case 'negativeNumber': return Cast.toNumber(INPUT) < 0 && isNumRegex.test(INPUT);
                case 'evenNumber': return Cast.toNumber(INPUT) % 2 === 0 && isNumRegex.test(INPUT);
                case 'oddNumber': return Cast.toNumber(INPUT) % 2 !== 0 && isNumRegex.test(INPUT);
                case 'integerNumber': return Cast.toNumber(INPUT) % 1 === 0 && isNumRegex.test(INPUT);
                case 'decimalNumber': return Cast.toNumber(INPUT) % 1 !== 0 && isNumRegex.test(INPUT);
                case 'primeNumber': return isPrime(Cast.toNumber(INPUT)) && isNumRegex.test(INPUT);
                case 'compositeNumber': return isComposite(Cast.toNumber(INPUT)) && isNumRegex.test(INPUT);
                case 'text': return !isNumRegex.test(INPUT) && INPUT.length >= 1;
                case 'boolean': return INPUT === 'true' || INPUT === 'false';
                default: return false;
            }
        }
        _compare(arg1, arg2, symbol) {
            if (symbol === 'equal') return Cast.compare(arg1, arg2) === 0;
            if (symbol === 'strictlyEqual') return arg1 === arg2;
            if (symbol === 'greater') return Cast.compare(arg1, arg2) > 0;
            if (symbol === 'less') return Cast.compare(arg1, arg2) < 0;
            if (symbol === 'greaterOrEqual') return Cast.compare(arg1, arg2) >= 0;
            if (symbol === 'lessOrEqual') return Cast.compare(arg1, arg2) <= 0;
            if (symbol === 'unequal') return Cast.compare(arg1, arg2) !== 0;
            if (symbol === 'strictlyUnequal') return arg1 !== arg2;
            if (symbol === 'equalNegative') return Cast.compare(arg1, -arg2) === 0;
            if (symbol === 'EqualPON') return Cast.compare(arg1, -arg2) === 0 || Cast.compare(arg1, arg2) === 0;
            if (symbol === 'approximatelyEqual') return Math.abs(arg1 - arg2) <= 0.5;
            if (symbol === 'vertical') return ((arg1 - (arg2 - 90)) % 180) === 0;
            if (symbol === 'parallel') return ((arg1 - arg2) % 180) === 0;
            return false;
        }
        compare({ OPERAND1, OPERAND2, SYMBOL }) {
            return this._compare(OPERAND1, OPERAND2, SYMBOL);
        }
        continuousCompare({ OPERAND1, OPERAND2, OPERAND3, SYMBOL1, SYMBOL2 }) {
            const result1 = this._compare(OPERAND1, OPERAND2, SYMBOL1);
            const result2 = this._compare(OPERAND2, OPERAND3, SYMBOL2);
            return result1 && result2;
        }
        approximatelyEqual({ OPERAND1, OPERAND2, NUM }) {
            OPERAND1 = Cast.toNumber(OPERAND1);
            OPERAND2 = Cast.toNumber(OPERAND2);
            NUM = Cast.toNumber(NUM);
            return Math.abs(OPERAND1 - OPERAND2) <= NUM;
        }
        logicGateOperation({ OPERAND1, OPERAND2, SYMBOL }) {
            OPERAND1 = Cast.toBoolean(OPERAND1);
            OPERAND2 = Cast.toBoolean(OPERAND2);
            if (SYMBOL === 'nand') return !(OPERAND1 && OPERAND2);
            if (SYMBOL === 'nor') return !(OPERAND1 || OPERAND2);
            if (SYMBOL === 'xor') return OPERAND1 !== OPERAND2;
            if (SYMBOL === 'xnor') return OPERAND1 === OPERAND2;
            return false;
        }
        text({ STRING }) {
            return Cast.toString(STRING);
        }
        test({ BOOLEAN, STRING1, STRING2 }) {
            return Cast.toBoolean(BOOLEAN) ? STRING1 : STRING2;
        }
        repeat({ STRING, NUMBER }) {
            let result = '';
            for (let i = 0; i < NUMBER; i++) {
                result += String(STRING);
            }
            return result;
        }
        trim({ STRING }) {
            return String(STRING).trim();
        }
        letters({ START, END, STRING }) {
            return String(STRING).slice(
                Cast.toNumber(START) - 1, Cast.toNumber(END)
            );
        }
        replace({ STRING1, STRING2, STRING3 }) {
            const replaceText = (text, oldStr, newStr) => text.replace(new RegExp(oldStr, 'g'), newStr);
            return replaceText(String(STRING1), String(STRING2), String(STRING3));
        }
        replaceIndex({ STRING, START, END, REPLACEMENT }) {
            STRING = String(STRING);
            START = Cast.toNumber(START) - 1;
            END = Cast.toNumber(END);
            START = Math.max(0, START);
            END = Math.min(STRING.length, END);
            return STRING.slice(0, START) + REPLACEMENT + STRING.slice(END);
        }
        split({ STRING, SYMBOL, NUM }) {
            STRING = String(STRING);
            SYMBOL = String(SYMBOL);
            NUM = Cast.toNumber(NUM);
            return (STRING.split(SYMBOL)[(NUM - 1)]);
        }
        toggleCase({ MODE, STRING2, STRING1 }) {
            const countKeyword = (sentence, keyword) => (sentence.match(new RegExp(keyword, 'gi')) || []).length;
            if (MODE === 'first') return String(STRING1).indexOf(String(STRING2)) + 1;
            if (MODE === 'last') return String(STRING1).lastIndexOf(String(STRING2)) + 1;
            if (MODE === 'number') return countKeyword(String(STRING1), String(STRING2));
            return '';
        }
        convert({ STRING, MODE }) {
            const textToTitleCase = (str) => str.replace(/\S+/g, function (txt) {
                return txt[0].toUpperCase() + txt.substring(1).toLowerCase();
            });
            if (MODE === 'uppercase') return String(STRING).toUpperCase();
            if (MODE === 'lowercase') return String(STRING).toLowerCase();
            if (MODE === 'capitalize') return textToTitleCase(String(STRING));
            if (MODE === 'reverse') return (String(STRING)).split('').reverse().join('');
            return '';
        }
        getUnicode({ STRING }) {
            STRING = String(STRING);
            if (STRING.length < 1) return '';
            return STRING.charCodeAt();
        }
        unicodeToString({ STRING }) {
            if (isNaN(STRING)) return '';
            return String.fromCharCode(STRING);
        }
        calculateLineLength({ X1, Y1, X2, Y2 }) {
            X1 = Cast.toNumber(X1);
            Y1 = Cast.toNumber(Y1);
            X2 = Cast.toNumber(X2);
            Y2 = Cast.toNumber(Y2);
            return Math.sqrt(Math.pow(X1 - X2, 2) + Math.pow(Y1 - Y2, 2));
        }
        calculateLineDirection({ X1, Y1, X2, Y2 }) {
            X1 = Cast.toNumber(X1);
            Y1 = Cast.toNumber(Y1);
            X2 = Cast.toNumber(X2);
            Y2 = Cast.toNumber(Y2);
            let angleRadians = Math.atan2(Y2 - Y1, X2 - X1);
            let angleDegrees = angleRadians * 180 / Math.PI;
            let scratchAngle = -angleDegrees + 90;
            if (scratchAngle < -180) {
                scratchAngle = 360 + scratchAngle;
            }
            else if (scratchAngle > 180) {
                scratchAngle = scratchAngle - 360;
            }
            return scratchAngle;
        }
        calculateIntersection({ X1, Y1, X2, Y2, X3, Y3, X4, Y4 }) {
            X1 = Cast.toNumber(X1);
            Y1 = Cast.toNumber(Y1);
            X2 = Cast.toNumber(X2);
            Y2 = Cast.toNumber(Y2);
            X3 = Cast.toNumber(X3);
            Y3 = Cast.toNumber(Y3);
            X4 = Cast.toNumber(X4);
            Y4 = Cast.toNumber(Y4);
            let denominator = (X2 - X1) * (Y4 - Y3) - (Y2 - Y1) * (X4 - X3);
            if (denominator === 0) {
                return '';
            }
            let ua = ((X4 - X3) * (Y1 - Y3) - (Y4 - Y3) * (X1 - X3)) / denominator;
            let x = X1 + ua * (X2 - X1);
            let y = Y1 + ua * (Y2 - Y1);
            return [x, y];
        }
        triangle({ X1, Y1, X2, Y2, X3, Y3, MODE }) {
            X1 = Cast.toNumber(X1);
            Y1 = Cast.toNumber(Y1);
            X2 = Cast.toNumber(X2);
            Y2 = Cast.toNumber(Y2);
            X3 = Cast.toNumber(X3);
            Y3 = Cast.toNumber(Y3);
            if (MODE === 'area') {
                let points = [[X1, Y1], [X2, Y2], [X3, Y3]];
                let area = 0;
                let n = points.length;
                for (let i = 0; i < n; i++) {
                    let X1 = points[i][0];
                    let Y1 = points[i][1];
                    let X2 = points[(i + 1) % n][0];
                    let Y2 = points[(i + 1) % n][1];
                    area += X1 * Y2;
                    area -= X2 * Y1;
                }
                area = Math.abs(area) / 2;
                return (area);
            }
            if (MODE === 'circumference') {
                let i = 0;
                i += Math.sqrt(Math.pow(X1 - Cast.toNumber(X2), 2) + Math.pow(Y1 - Y2, 2));
                i += Math.sqrt(Math.pow(X2 - Cast.toNumber(X3), 2) + Math.pow(Y2 - Y3, 2));
                i += Math.sqrt(Math.pow(X3 - Cast.toNumber(X1), 2) + Math.pow(Y3 - Y1, 2));
                return i;
            }
            return 0;
        }
        triangleArea({ S1, S2, S3 }) {
            S1 = Cast.toNumber(S1);
            S2 = Cast.toNumber(S2);
            S3 = Cast.toNumber(S3);
            const s = (S1 + S2 + S3) / 2;
            const area = Math.sqrt(s * (s - S1) * (s - S2) * (s - S3));
            return area;
        }
        rectangle({ X1, Y1, X2, Y2, X3, Y3, X4, Y4, MODE }) {
            X1 = Cast.toNumber(X1);
            Y1 = Cast.toNumber(Y1);
            X2 = Cast.toNumber(X2);
            Y2 = Cast.toNumber(Y2);
            X3 = Cast.toNumber(X3);
            Y3 = Cast.toNumber(Y3);
            X4 = Cast.toNumber(X4);
            Y4 = Cast.toNumber(Y4);
            if (MODE === 'area') {
                let points = [[X1, Y1], [X2, Y2], [X3, Y3], [X4, Y4]];
                let area = 0;
                let n = points.length;
                for (let i = 0; i < n; i++) {
                    let X1 = points[i][0];
                    let Y1 = points[i][1];
                    let X2 = points[(i + 1) % n][0];
                    let Y2 = points[(i + 1) % n][1];
                    area += X1 * Y2;
                    area -= X2 * Y1;
                }
                area = Math.abs(area) / 2;
                return (area);
            }
            if (MODE === 'circumference') {
                let i = 0;
                i += Math.sqrt(Math.pow(X1 - X2, 2) + Math.pow(Y1 - Y2, 2));
                i += Math.sqrt(Math.pow(X2 - X3, 2) + Math.pow(Y2 - Y3, 2));
                i += Math.sqrt(Math.pow(X3 - X4, 2) + Math.pow(Y3 - Y4, 2));
                i += Math.sqrt(Math.pow(X4 - X1, 2) + Math.pow(Y4 - Y1, 2));
                return i;
            }
            return 0;
        }
        graph({ GRAPH, MODE }) {
            try {
                let points = JSON.parse(GRAPH);
                let n = points.length;
                if (MODE === 'area') {
                    let area = 0;
                    for (let i = 0; i < n; i++) {
                        let x1 = points[i][0];
                        let y1 = points[i][1];
                        let x2 = points[(i + 1) % n][0];
                        let y2 = points[(i + 1) % n][1];
                        area += x1 * y2;
                        area -= x2 * y1;
                    }
                    area = Math.abs(area) / 2;
                    return (area);
                }
                if (MODE === 'circumference') {
                    let j = 0;
                    const numPoints = points.length;
                    for (let i = 0; i < numPoints; i++) {
                        const x1 = points[i][0];
                        const y1 = points[i][1];
                        const x2 = points[(i + 1) % numPoints][0];
                        const y2 = points[(i + 1) % numPoints][1];
                        j += Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
                    }
                    return j;
                }
            }
            catch {
                return 0;
            }
            return 0;
        }
        circle({ UNITS, LENGTH, MODE }) {
            LENGTH = Cast.toNumber(LENGTH);
            if (MODE === 'circumference') {
                return 2 * Math.PI * (UNITS === 'radius' ? LENGTH : LENGTH / 2);
            }
            if (MODE === 'area') {
                return Math.PI * ((UNITS === 'radius' ? LENGTH : LENGTH / 2) ** 2);
            }
            return 0;
        }
        calculateAngleDifference({ ANGLE1, ANGLE2, MODE }) {
            ANGLE1 = Cast.toNumber(ANGLE1);
            ANGLE2 = Cast.toNumber(ANGLE2);
            let diff = Math.abs(ANGLE1 - ANGLE2) % 360;
            switch (MODE) {
                case 'interiorAngle': return diff <= 180 ? diff : 360 - diff;
                case 'exteriorAngle': return diff <= 180 ? 360 - diff : diff;
                case 'clockwise': return ANGLE1 <= ANGLE2 ? (ANGLE2 - ANGLE1) % 360 : (360 - (ANGLE1 - ANGLE2) % 360);
                case 'counterClockwise': return ANGLE1 >= ANGLE2 ? (ANGLE1 - ANGLE2) % 360 : (360 - (ANGLE2 - ANGLE1) % 360);
            }
            return 0;
        }
        bitwiseBlock({ NUM1, SYMBOL, NUM2 }) {
            NUM1 = Cast.toNumber(NUM1);
            NUM2 = Cast.toNumber(NUM2);
            if (SYMBOL === 'and') return NUM1 & NUM2;
            if (SYMBOL === 'or') return NUM1 | NUM2;
            if (SYMBOL === 'xor') return NUM1 ^ NUM2;
            if (SYMBOL === 'leftShift') return NUM1 << NUM2;
            if (SYMBOL === 'rightShift') return NUM1 >> NUM2;
            if (SYMBOL === 'logicalRightShift') return NUM1 >>> NUM2;
            return 0;
        }
        bitwiseNot({ NUM }) {
            return ~Cast.toNumber(NUM);
        }
        getConstant({ OPTION }) {
            if (OPTION === 'pi') return Math.PI;
            if (OPTION === 'phi') return (1 + Math.sqrt(5)) / 2;
            if (OPTION === 'gamma') return 0.577215664901532;
            if (OPTION === 'e') return Math.E;
            if (OPTION === 'sqrt2') return Math.sqrt(2);
            if (OPTION === 'Infinity') return Infinity;
            if (OPTION === 'NaN') return NaN;
            if (OPTION === 'newLine') return '\n';
            return OPTION;
        }
    }
    Scratch.extensions.register(new Operation());
})(Scratch);
