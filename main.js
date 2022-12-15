function generateDOM() {
    let elemTmp;
    const o = Array(10).fill().map((_, i) => i),
        t = o.slice(0, 6),
        h = o.slice(0, 3);

    [ h, o, t, o, t, o ].forEach((element, index) => {
        const newClass = 'inner' + index;
        elemTmp = document.createElement('div');
        elemTmp.className = newClass;
        document.querySelector('.wrap').append(elemTmp);
        for(const n of element) {
            elemTmp = document.createElement('div');
            elemTmp.innerText = n;
            document.querySelector(`.${newClass}`).append(elemTmp);
        }
    });
};

document.addEventListener('DOMContentLoaded', function() {
    generateDOM();
    const e = [...document.querySelectorAll('body > div > div')].map(n => [...n.children]);
    let l = [];
    (function update() {
        const now = new Date();
        const a = [
            now.getHours(),
            now.getMinutes(),
            now.getSeconds()
            ].map(n => `0${n}`.slice(-2));
        const ol = l.splice(0, 6);
        for (let i = 0; i < 6; i++) {
            const el = e[i][a[~~(i * 0.5)][i % 2]];
            l.push(el);
            el.classList.add('highlight');
        }
        for (const el of ol) {
            if (!l.includes(el)) {
                el.classList.remove('highlight');
            }
        }
        requestAnimationFrame(update);
    })();
});