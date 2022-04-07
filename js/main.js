
const select = document.querySelector('select');
const allLang = ['ru', 'uz'];


select.addEventListener('change', changeURLLanguage);

// перенаправить на url с указанием языка
function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    console.log(hash);
    if( hash === 'ru'){
        
        document.querySelector('body').classList.toggle('ru');
    } else if( hash === 'uz' ) {
        document.querySelector('body').classList.toggle('uz');
    } else {
        console.log(hash);
    }
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#ru';
        location.reload();
    }
    select.value = hash;
    // document.querySelector('.lng-chip').innerHTML = langArr['chip'][hash];
    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }

    }
    
    
}

changeLanguage();


