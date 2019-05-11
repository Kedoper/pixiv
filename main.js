//############ Подключаем необходимые библиотеки #############
const PixivAppApi = require('pixiv-app-api');          //##
var fs = require("fs");                                //##
const pixivImg = require('pixiv-img');                 //##
//############################################################

// Указываем данные для входа на сам сайт, чтобы парсить подписки
// и иметь возможность скачать изображения
const pixiv = new PixivAppApi("LOGIN", "PASSWORD");

const main = async () => {
    var posts = [];
    var all = [];

    {
        // Тут мы прогружаем список всех изображений. Тут прогружается около 1 200 изображений
        // Кстати это можно назвать костылем, так лучше не делать. Просто я не придумал как по другому это реализовать
        var ill = await pixiv.illustFollow();var ill2 = await pixiv.next();
        var ill3 = await pixiv.next();var ill4 = await pixiv.next();
        var ill5 = await pixiv.next();var ill6 = await pixiv.next();
        var ill7 = await pixiv.next();var ill8 = await pixiv.next();
        var ill9 = await pixiv.next();var ill10 = await pixiv.next();
        var ill11 = await pixiv.next();var ill12 = await pixiv.next();
        var ill13 = await pixiv.next();var ill14 = await pixiv.next();
        var ill15 = await pixiv.next();var ill16 = await pixiv.next();
        var ill17 = await pixiv.next();var ill18 = await pixiv.next();
        var ill19 = await pixiv.next();var ill20 = await pixiv.next();
        var ill21 = await pixiv.next();var ill22 = await pixiv.next();
        var ill23 = await pixiv.next();var ill24 = await pixiv.next();
        var ill25 = await pixiv.next();var ill26 = await pixiv.next();
        var ill27 = await pixiv.next();var ill28 = await pixiv.next();
        var ill29 = await pixiv.next();var ill30 = await pixiv.next();
        var ill31 = await pixiv.next();var ill32 = await pixiv.next();
        var ill33 = await pixiv.next();var ill34 = await pixiv.next();
        var ill35 = await pixiv.next();var ill36 = await pixiv.next();
        var ill37 = await pixiv.next();var ill38 = await pixiv.next();
        var ill39 = await pixiv.next();var ill40 = await pixiv.next();
        // Запихиваем все это безобразие в массив ############################################################
        all.push(ill, ill2, ill3, ill4, ill5, ill6, ill7, ill8, ill9, ill10, ill11, ill12, ill13, ill14,  //##
            ill15, ill16, ill17, ill18, ill19, ill20, ill21, ill22, ill23, ill24, ill25,                  //##
            ill26, ill27, ill28, ill29, ill30, ill31, ill32, ill33, ill34, ill35, ill36, ill37, ill38,    //##
            ill39, ill40);                                                                                //##
        //####################################################################################################

        // Цикл, проходящий весь массив, который состоит из массивов.
        for (var dds = 0; dds < all.length; dds++) {
            // Тут мы проходимся по определенному массиву, в котором храняться данные об изображениях
            for (var d = 0; d < all[dds]['illusts'].length; d++) {
                // Это массив, в который записываются:
                posts.push({
                    // ID поста
                    "post_id": all[dds]['illusts'][d]['id'],
                    // Ссылка на изображение на сервере
                    "photo": "/imgs/" + all[dds]['illusts'][d]['id'] + ".jpg",
                    // ID пользователя, который выложил изображение
                    "user_id": all[dds]['illusts'][d]['user']['id'],
                    // Имя пользователя, который выложил изображение
                    "user_name": all[dds]['illusts'][d]['user']['name'],
                });
                // Тут мы сохраняем изображение на сервер по указанному пути
                pixivImg(all[dds]['illusts'][d]['imageUrls']['large'], "./imgs/" + all[dds]['illusts'][d]['id'] + ".jpg");
            }
        }
        // Тут происходит запись массива, конвертированного в JSON в файл.
        // Он необходим для дальнейшей обработки PHP скриптом. (*)
        fs.writeFileSync("./savedPhotos.json", JSON.stringify(posts));
    }
}
main();