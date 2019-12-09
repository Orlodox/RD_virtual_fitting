import * as axios from "axios";
import React from 'react'

const instanceAJAX = axios.create({
    baseURL: 'http://localhost:9090/'
});

export const serverAPI = {
    getTypeList() {
        return instanceAJAX.get('typeList').then(response => response.data);
        // return axios.get('https://d0918q4ef4.execute-api.us-east-1.amazonaws.com/fitting_deploy/type').then(response => response.data)
    },

    createItem(typeCode, name, sizeListAsString) {
        let sizes = {};
        if (sizeListAsString)
            sizeListAsString.split(' ').forEach(it => {
                sizes[it] = {}
            });
        const newItem = {typeCode, name, sizes};
        return instanceAJAX.post('create', JSON.stringify(newItem), {
            headers: {'content-type': 'application/json'}
        }).then(response => response.data);
    },

    getItemList() {
        return instanceAJAX.get('itemList').then(response => response.data)
    },

    getItem(itemID) {
        return instanceAJAX.get(`item/${itemID}`)
            .then(response => response.data)
            .catch(e => null);
    },

    // getTypeInfo(typeCode) {
    //     return instanceAJAX.get(`type/${typeCode}`).then(response => response.data);
    // },

    saveItem(updatedItem) {
        return instanceAJAX.put(`update/${updatedItem.id}`, JSON.stringify(updatedItem), {
            headers: {'content-type': 'application/json'}
        }).then(response => response.data)
            .catch(e => -1)
    },

    deleteItem(deletedItemID) {
        return instanceAJAX.delete(`delete/${deletedItemID}`).then(response => response.data);
    },

    getBodyProfile(accountID) {
        return instanceAJAX.get(`bodyProfile/${accountID}`).then(response => response.data);
    },
    getBodyProfileInfo() {
        return instanceAJAX.get(`bodyProfileInfo`).then(response => response.data);
    },
    saveBodyProfileParam(accountID, paramName, paramValue) {
        return instanceAJAX.put(`bodyProfile/${accountID}?name=${paramName}&value=${paramValue}`)
            .then(response => response.data)
            .catch(response => -1)
    },

    auth(login, password) {
        debugger
        return instanceAJAX.post('auth', JSON.stringify({login, password}), {
            headers: {'content-type': 'application/json'}
        }).then(response => response.data);
    }
};

const info = {
    typeCode: 'MT',
    typeName: 'Мужская футболка',

    props: {
        sleeveType: {
            translate: 'Тип рукава',
            values: ['реглан', 'втачной', 'без рукавов', 'цельнокроеный']
        },
        fabricElasticity: {
            translate: 'Эластичность ткани',
            values: ['не тянется', 'слегка тянется', 'тянется', 'сильно тянется']
        }
    },

    sizes: {
        chest: 'Обхват груди',
        waist: 'Обхват талии',
        sleeve: 'Обхват рукава',
        bodyLength: 'Общая длина',
        sleeveLength: 'Длина рукава'
    },

    marks: {
        tabs: {
            chest: 'Обхват груди',
            waist: 'Обхват талии',
            sleeve: 'Обхват рукава'
        },
        columns: {
            delta: 'Дельта',
            mark: 'Балл',
            comment: 'Комментарий'
        }
    },

    params: {
        tabs: {
            sleeveLength: 'Длина рукава',
            bodyLength: 'Длина изделия'
        },
        columns: {
            comment: 'Комментарий',
            limit: 'Допуск'
        }
    }
};

const values = {
    typeCode: 'MT',
    typeName: 'Мужская футболка',
    name: 'Футболка RD',

    props: {
        sleeveType: 'реглан',
        fabricElasticity: 'сильно тянется'
    },

    sizes: {
        XS: {
            chest: 12,
            waist: 13,
            sleeve: 14,
            bodyLength: 15,
            sleeveLength: 16
        },
        M: {
            chest: 22,
            waist: 23,
            sleeve: 24,
            bodyLength: 25,
            sleeveLength: 26
        }
    },

    marks: {
        chest: [{delta: -20, mark: 1, comment: 'тесное облегание, изделие ужимает грудь'}],
        sleeve: [{delta: -10, mark: 1, comment: 'тесное облегание, изделие ужимает руку'}]
    },

    params: {
        sleeveLength: [{comment: 'короткий рукав по модели', limit: null}],
        bodyLength: [{comment: 'выше уровня талии', limit: 30}, {comment: 'ниже середины бедра', limit: null}]
    }
};

const defaultMT = {

    typeCode: "MT",
    sizes: {},

    props: {
        sleeveType: 'реглан',
        fabricElasticity: 'сильно тянется'
    },

    marks: {
        chest: [
            {
                delta: -14,
                mark: 1,
                comment: "тесное облегание, изделие ужимает грудь и подчеркивает все рельефы фигуры в этой области"
            },
            {delta: -13, mark: 2, comment: "очень плотное облегание в области груди"},
            {delta: -12, mark: 3, comment: "очень плотное облегание в области груди"},
            {delta: -11, mark: 4, comment: "очень плотное облегание в области груди"},
            {delta: -10, mark: 5, comment: "плотное облегание в области груди"},
            {delta: -9, mark: 6, comment: "плотное облегание в области груди"},
            {delta: -8, mark: 7, comment: "плотное облегание в области груди"},
            {delta: -7, mark: 8, comment: "изделие облегает в области груди"},
            {delta: -6, mark: 8, comment: "изделие облегает в области груди"},
            {delta: -5, mark: 9, comment: "изделие плавно повторяет контуры тела в области груди"},
            {delta: -4, mark: 9, comment: "изделие плавно повторяет контуры тела в области груди"},
            {delta: -3, mark: 10, comment: "комфортное облегание в области груди"},
            {delta: -2, mark: 10, comment: "комфортное облегание в области груди"},
            {delta: -1, mark: 9, comment: "комфортное облегание в области груди"},
            {delta: 0, mark: 9, comment: "комфортное облегание в области груди"},
            {
                delta: 1,
                mark: 8,
                comment: "свобода в груди немного больше оптимальной, но вполне допустимая для данной модели"
            },
            {
                delta: 2,
                mark: 8,
                comment: "свобода в груди немного больше оптимальной, но вполне допустимая для данной модели"
            },
            {delta: 3, mark: 7, comment: "свобода в груди больше оптимальной для данной модели"},
            {delta: 4, mark: 6, comment: "свобода в груди больше оптимальной для данной модели"},
            {delta: 5, mark: 5, comment: "свобода в груди больше оптимальной для данной модели"},
            {delta: 6, mark: 4, comment: "свобода в груди больше оптимальной для данной модели"},
            {delta: 7, mark: 3, comment: "свобода в груди больше оптимальной для данной модели"},
            {delta: 8, mark: 2, comment: "свобода в груди больше оптимальной для данной модели"},
            {delta: 9, mark: 1, comment: "лишняя свобода и объемность по груди, недопустимая для данной модели"}],

        waist: [
            {
                delta: -10,
                mark: 1,
                comment: "очень плотно облегает талию, нарушая необходимую свободу для данной модели"
            },
            {delta: -9, mark: 2, comment: "очень плотно облегает, подчеркивая особенности фигуры в области талии"},
            {delta: -8, mark: 3, comment: "очень плотно облегает, подчеркивая особенности фигуры в области талии"},
            {delta: -7, mark: 4, comment: "очень плотно облегает, подчеркивая особенности фигуры в области талии"},
            {delta: -6, mark: 5, comment: "изделие плотно облегает фигуру в области талии"},
            {delta: -5, mark: 6, comment: "изделие плотно облегает фигуру в области талии"},
            {delta: -4, mark: 7, comment: "изделие плотно облегает фигуру в области талии"},
            {delta: -3, mark: 8, comment: "изделие плавно облегает тело в области талии"},
            {delta: -2, mark: 9, comment: "изделие плавно облегает тело в области талии"},
            {delta: -1, mark: 9, comment: "комфортное облегание в области талии, необходимое для данной модели"},
            {delta: 0, mark: 10, comment: "комфортная свобода в области талии"},
            {delta: 1, mark: 10, comment: "комфортная свобода в области талии"},
            {delta: 2, mark: 10, comment: "комфортная свобода в области талии"},
            {delta: 3, mark: 9, comment: "комфортная свобода в области талии, необходимая для данной модели"},
            {delta: 4, mark: 9, comment: "комфортная свобода в области талии, необходимая для данной модели"},
            {delta: 5, mark: 9, comment: "комфортная свобода в области талии, необходимая для данной модели"},
            {
                delta: 6,
                mark: 8,
                comment: "свобода в талии немного больше оптимальной, но вполне допустима для данной модели, изделие скрывает талию"
            },
            {
                delta: 7,
                mark: 8,
                comment: "свобода в талии немного больше оптимальной, но вполне допустима для данной модели, изделие скрывает талию"
            },
            {
                delta: 8,
                mark: 8,
                comment: "свобода в талии немного больше оптимальной, но вполне допустима для данной модели, изделие скрывает талию"
            },
            {
                delta: 9,
                mark: 8,
                comment: "свобода в талии немного больше оптимальной, но вполне допустима для данной модели, изделие скрывает талию"
            },
            {
                delta: 10,
                mark: 7,
                comment: "свобода в талии больше оптимальной, но вполне допустима для данной модели, изделие скрывает талию"
            },
            {
                delta: 11,
                mark: 7,
                comment: "свобода в талии больше оптимальной, но вполне допустима для данной модели, изделие скрывает талию"
            },
            {
                delta: 12,
                mark: 7,
                comment: "свобода в талии больше оптимальной, но вполне допустима для данной модели, изделие скрывает талию"
            },
            {delta: 13, mark: 6, comment: "свобода в талии больше оптимальной, изделие скрывает талию"},
            {delta: 14, mark: 5, comment: "свобода в талии больше оптимальной, изделие скрывает талию"},
            {delta: 15, mark: 4, comment: "лишняя свобода в талии"},
            {delta: 16, mark: 3, comment: "лишняя свобода в талии"},
            {delta: 17, mark: 2, comment: "лишняя свобода в талии"},
            {delta: 18, mark: 1, comment: "лишняя свобода в талии"}],

        sleeve: [
            {delta: -10, mark: 1, comment: "рукав пережимает верхнюю часть руки, сложно поднять руку"},
            {delta: -9, mark: 2, comment: "рукав пережимает верхнюю часть руки, сложно поднять руку"},
            {delta: -8, mark: 3, comment: "рукав очень плотно облегает руку"},
            {delta: -7, mark: 4, comment: "рукав очень плотно облегает руку"},
            {delta: -6, mark: 5, comment: "рукав плотно облегает руку"},
            {delta: -5, mark: 6, comment: "рукав плотно облегает руку"},
            {delta: -4, mark: 7, comment: "рукав плотно облегает руку"},
            {delta: -3, mark: 8, comment: "рукав облегает руку"},
            {delta: -2, mark: 9, comment: "рукав облегает руку"},
            {delta: -1, mark: 10, comment: "рукав плавно повторяет контуры руки"},
            {delta: 0, mark: 10, comment: "рукав плавно повторяет контуры руки"},
            {delta: 1, mark: 9, comment: "комфортная ширина рукава для данной модели"},
            {delta: 2, mark: 8, comment: "комфортная свобода в рукаве для данной модели"},
            {delta: 3, mark: 8, comment: "комфортная свобода в рукаве для данной модели"},
            {delta: 4, mark: 7, comment: "свобода в рукаве больше необходимой, но вполне допустима для данной модели"},
            {delta: 5, mark: 6, comment: "свобода в рукаве больше необходимой, но допустима для данной модели"},
            {delta: 6, mark: 5, comment: "свобода в рукаве больше необходимой, но допустима для данной модели"},
            {delta: 7, mark: 4, comment: "свобода в рукаве больше необходимой"},
            {delta: 8, mark: 3, comment: "свобода в рукаве больше необходимой"},
            {delta: 9, mark: 2, comment: "свобода в рукаве больше необходимой"},
            {delta: 10, mark: 1, comment: "слишком широкий рукав, провисание ткани под руками"}]
    },

    params: {
        bodyLength: [
            {limit: 30, comment: "выше уровня талии"},
            {limit: 35.3, comment: "немного ниже уровня талии"},
            {limit: 38.27, comment: "на уровне пояса брюк"},
            {limit: 38.95, comment: "немного ниже пояса брюк"},
            {limit: 43.5, comment: "на уровне бёдер"},
            {limit: 46, comment: "немного ниже уровня бёдер"},
            {limit: 48, comment: "на уровне середины бедра"},
            {limit: null, comment: "ниже середины бедра"}],
        sleeveLength: [{limit: null, comment: "короткий рукав по модели"}]
    }
};

const fitting = {
    item_id: 123,
    account_id: 321,
    unavailableBodyProfileFields: null,
    marks: {
        XS: {
            main: {
                title: 'Хороший размер',
                comment: '8 из 10 баллов',
                mark: 8
            },
            estimated: [{
                title: 'Грудь',
                comment: 'комфортная свобода в области груди для данной модели',
                mark: 9
            }, {
                title: 'Талия',
                comment: 'комфортная свобода в области талии',
                mark: 8
            }, {
                title: 'Обхват рукава',
                comment: 'достаточная свобода облегания в рукаве для данной модели',
                mark: 8
            }],
            informational: [
                {
                    title: 'Длина рукава',
                    comment: 'короткий рукав по модели'
                }, {
                    title: 'Длина изделия',
                    comment: 'немного ниже уровня талии'
                }
            ]
        }
    }
};

const itemWidgetInfo = {
    itemID: 123,
    info: {
        bodyLength: {
            translate: 'Длина изделия',
            image: ''
        },

        chest: {
            translate: 'Обхват груди',
            image: ''
        },
        waist: {
            translate: 'Обхват талии',
            image: ''
        }
    },
    XS: {
        bodyLength: 66.0,
        chest: 102.0,
        waist: 98.0
    },
    S: {
        bodyLength: 67.5,
        chest: 107.0,
        waist: 103.0
    },
    M: {
        bodyLength: 70.5,
        chest: 119.0,
        waist: 115.0
    }
};

const profileItemInfo = {
    arr:
        [
            {
                name: "chest",
                image: "",
                translate: "Грудь",
                description: "Обхват груди в наиболее выступающих точках. Лента проходит по нижней части лопаток",
                minValue: 75,
                maxValue: 170
            },
            {
                name: "waist",
                image: "",
                translate: "Талия",
                description: "Обхват талии в самом узком месте, лента параллельно полу",
                minValue: 60,
                maxValue: 160
            },
            {
                name: "hips_girth",
                image: "",
                translate: "Бёдра",
                description: "Обхват бедер в наиболее выступающих точках, ноги вместе",
                minValue: 80,
                maxValue: 160
            },
            {
                name: "sleeve",
                image: "",
                translate: "Обхват руки",
                description: "Обхват руки в самом широком месте предплечья",
                minValue: 20,
                maxValue: 50
            },
            {
                name: "height",
                image: "",
                translate: "Рост",
                description: "Укажите свой рост",
                minValue: 150,
                maxValue: 220,
            },
            {
                name: "hip",
                image: "",
                translate: "Обхват бедра",
                description: "Измеряем в самом широком месте бедра, под ягодичной складкой",
                minValue: 45,
                maxValue: 90,
            },
            {
                name: "head",
                image: "",
                translate: "Обхват головы",
                description: "Оберните ленту вокруг головы, лента должна проходить по самым выступающим частям лба и затылка над ушами",
                minValue: 50,
                maxValue: 70
            }
        ]
}
// http://modahunt.com.ua/catalog/test-modahunt-mh-17249