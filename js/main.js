function getE(a) {
    return document.getElementById(a);
}

function getC(a) {
    return document.getElementsByClassName(a);

}
var f1 = document.forms['f1'];

f1.b1.onclick = function () { // кнопочка редагувати 
    getE('style').style.display = 'none';
    getE('textArea').style.display = 'block';
    getE('ta').value = getE('text').innerHTML;

    getE('btn_save').onclick = function () { // кнопочка збрегти
        getE('text').innerHTML = getE('ta').value;
        getE('ta').value = ''
    }
}



f1.b2.onclick = function () { // кнопочка стилізувати 
    getE('textArea').style.display = 'none';
    getE('style').style.display = 'block';
}

var formSelect = document.forms['fs'];
formSelect.font.onchange = function () { // зміна шрифта 
    for (var i = 0; i < formSelect.font.length; i++) {
        if (formSelect.font.options[i].selected)
            getE('text').style.fontFamily = this.value;
    }
}

var f2 = document.forms['f2'];


var fontSize = document.forms['size'];
fontSize.onclick = function () { //зміна розміру шрифта 
    for (var i = 0; i < fontSize.length; i++) {
        if (fontSize.elements[i].checked) {
            getE('text').style.fontSize = fontSize.elements[i].value;
        }
    }
}

f2.elements[3].onclick = function () { //курсив тексту
    if (f2.elements[3].checked) {
        getE('text').style.fontStyle = 'italic'
    } else {
        getE('text').style.fontStyle = 'normal'

    }
}
f2.elements[2].onclick = function () { // жирність тексту
    if (f2.elements[2].checked) {
        getE('text').style.fontWeight = '800'
    } else {
        getE('text').style.fontWeight = '400'
    }
}
getE('colors').onblur = function () {
    alert(12)
    getE('colors').style.display = 'none';
}

f2.btn_bgc.onclick = function () { //вибір кольору
    getE('colors').style.display = 'flex';
    getC('color')[0].onclick = function () {
        getE('text').style.background = 'aqua'
        getE('colors').style.display = 'none';
    }
    getC('color')[1].onclick = function () {
        getE('text').style.background = 'black'
        getE('colors').style.display = 'none';
    }
    getC('color')[2].onclick = function () {
        getE('text').style.background = 'blue'
        getE('colors').style.display = 'none';
    }
    getC('color')[3].onclick = function () {
        getE('text').style.background = 'blueviolet'
        getE('colors').style.display = 'none';
    }
    getC('color')[4].onclick = function () {
        getE('text').style.background = 'coral'
        getE('colors').style.display = 'none';
    }
    getC('color')[5].onclick = function () {
        getE('text').style.background = 'darkcyan'
        getE('colors').style.display = 'none';
    }
    getC('color')[6].onclick = function () {
        getE('text').style.background = 'fuchsia'
        getE('colors').style.display = 'none';
    }
    getC('color')[7].onclick = function () {
        getE('text').style.background = 'cornsilk'
        getE('colors').style.display = 'none';
    }
    getC('color')[8].onclick = function () {
        getE('text').style.background = 'darkgoldenrod'
        getE('colors').style.display = 'none';
    }

}
f2.btn_tc.onclick = function () { //вибір кольору тексту
    getE('colors').style.display = 'flex';
    getC('color')[0].onclick = function () {
        getE('text').style.color = 'aqua'
        getE('colors').style.display = 'none';
    }
    getC('color')[1].onclick = function () {
        getE('text').style.color = 'black'
        getE('colors').style.display = 'none';
    }
    getC('color')[2].onclick = function () {
        getE('text').style.color = 'blue'
        getE('colors').style.display = 'none';
    }
    getC('color')[3].onclick = function () {
        getE('text').style.color = 'blueviolet'
        getE('colors').style.display = 'none';
    }
    getC('color')[4].onclick = function () {
        getE('text').style.color = 'coral'
        getE('colors').style.display = 'none';
    }
    getC('color')[5].onclick = function () {
        getE('text').style.color = 'darkcyan'
        getE('colors').style.display = 'none';
    }
    getC('color')[6].onclick = function () {
        getE('text').style.color = 'fuchsia'
        getE('colors').style.display = 'none';
    }
    getC('color')[7].onclick = function () {
        getE('text').style.color = 'cornsilk'
        getE('colors').style.display = 'none';
    }
    getC('color')[8].onclick = function () {
        getE('text').style.color = 'darkgoldenrod'
        getE('colors').style.display = 'none';
    }
}

getE('btn_add').onclick = function () { // кнопочка добавити
    getE('container').style.display = 'none';
    getE('addTable').style.display = 'block';
    getE('btn_save').onclick = function () { // кнопочка збрегти
        getE('text').innerHTML += getE('ta').value;
        getE('ta').value = ''
    }
}

var table = document.forms['table'];
var typeLine = 'solid';
var color = 'black';
table.btl.onchange = function () { //ВИЗНАЧЕННЯ ТИПУ РАМКИ 

    for (var i = 0; i < table.btl.length; i++) {
        if (table.btl.options[i].selected)
            typeLine = this.value;
    }
}
table.bc.onchange = function () {
    for (var i = 0; i < table.btl.length; i++) {
        if (table.bc.options[i].selected)
            color = this.value;
    }
}
table.createTable.onclick = function () { //побудова таблиці
    getE('container').style.display = 'block';
    getE('addTable').style.display = 'none';

    getE('ta').value += '<table style="border:' + table.thickness.value + 'px ' + typeLine + ' ' + color + '">'
    for (var i = 0; i < table.row.value; i++) {
        getE('ta').value += '<tr style="border:' + table.thickness.value + 'px ' + typeLine + ' ' + color + '">'
        for (var j = 0; j < table.col.value; j++) {
            getE('ta').value += '<td style="height:' + table.heigth.value + 'px;width:' + table.width.value + 'px; border:' + table.thickness.value + 'px ' + typeLine + ' ' + color + '">1</td>'
        }
        getE('ta').value += '</tr>'
    }
    getE('ta').value += '</table>'
}

var lst = "circle";
var list = document.forms['list'];
list.list.onchange = function () { //отримання типу маркування 
    for (var i = 0; i < list.list.length; i++) {
        if (list.list.options[i].selected) {
            lst = this.value
        }
    }
}
list.btn_createList.onclick = function () { //формування списку 
    getE('container').style.display = 'block';
    getE('addTable').style.display = 'none';
    getE('ta').value += '<ul>'
    for (var i = 0; i < list.kst.value; i++) {
        getE('ta').value += '<li style="list-style-type:' + lst + '">some text</li>\n'
    }
    getE('ta').value += '</ul>'
}


getE('addlist').onclick = function () { // добавлення списку
    getE('table').style.display = 'none';
    getE('list').style.display = 'block';
}
getE('addtable').onclick = function () { //добавлення таблиці
    getE('table').style.display = 'block';
    getE('list').style.display = 'none';
}
