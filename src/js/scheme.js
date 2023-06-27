const refs = {
    light: document.querySelector("[rel='stylesheet'][media*='prefers-color-scheme'][media*='light']"),
    dark: document.querySelector("[rel='stylesheet'][media*='prefers-color-scheme'][media*='dark']"),
    btnCollection: document.querySelector('.switcher-input'),
    inputLabel: document.querySelector('.input-label'),
}

refs.inputLabel.addEventListener('click', () => {
    console.log(refs.btnCollection.checked);
})
console.log(refs.btnCollection.checked);
console.log(111);

setupSwitcher()
setUpScheme();

function setupSwitcher() {
    const savedScheme = getSavedScheme();
    // const systemScheme = getSystemScheme(); автоматичне отримання теми користувача matchMedia() // true || false

    if (savedScheme !== null) {
        refs.btnCollection.checked = savedScheme === 'light' ? false : true;
        // const checkedRadio = document.querySelector(`.switcher-input[value=${savedScheme}]`);
        // checkedRadio.checked = true;
    }
    console.log(2);
    refs.btnCollection.addEventListener('change', (e) => {
        // setScheme(btnCollection.checked);
        let setValue = refs.btnCollection.checked === false ? 'light' : 'dark';
        setScheme(setValue);
        saveScheme(setValue);
    })
}



function setUpScheme() {
    let savedScheme = getSavedScheme();
    // if (!savedScheme) {
    //     setScheme('auto');
    //     return;
    // }
    setScheme(savedScheme)

}

function getSavedScheme() {
    return localStorage.getItem('color-scheme');
}
function saveScheme(value) {
    localStorage.setItem('color-scheme', value);
}

function setScheme(value) {
    let lightMedia;
    let darkMedia;

    if (value === 'auto') {
        lightMedia = '(prefers-color-scheme: light)';
        darkMedia = '(prefers-color-scheme: dark)';
    }
    else {
        lightMedia = value === "light" ? 'all' : "not all"
        darkMedia = value === "dark" ? 'all' : "not all"
    }

    refs.light.media = lightMedia;
    refs.dark.media = darkMedia;

}

console.log('end');
