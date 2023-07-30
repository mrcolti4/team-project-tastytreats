const refs = {
    light: document.querySelector("[rel='stylesheet'][media*='prefers-color-scheme'][media*='light']"),
    dark: document.querySelector("[rel='stylesheet'][media*='prefers-color-scheme'][media*='dark']"),
    btnCollection: document.querySelectorAll('.switcher-input'),
    inputLabel: document.querySelector('.input-label'),
}

setupSwitcher()
setUpScheme();


function setupSwitcher() {
    const savedScheme = getSavedScheme();

    if (savedScheme !== null) {
        // refs.btnCollection.checked = savedScheme === 'light' ? false : true;
        refs.btnCollection.forEach((btn) => {
            btn.checked = savedScheme === 'light' ? false : true;
        })
    }

    refs.btnCollection.forEach((btn) => {
        btn.addEventListener('change', (e) => {
            let setValue = btn.checked === false ? 'light' : 'dark';
            setScheme(setValue);
            saveScheme(setValue);

            refs.btnCollection.forEach((btnSet) => {
                btnSet.checked = btn.checked;
            })
        })
    })
}

function setUpScheme() {
    let savedScheme = getSavedScheme();
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

