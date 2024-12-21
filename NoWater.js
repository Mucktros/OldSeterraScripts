const water1 = document.getElementById('WATER_1_');
const water2 = document.getElementById('WATER_2_');

if (water1) water1.style.display = 'none';
if (water2) water2.style.display = 'none';

const waterObserver = new MutationObserver(() => {
    const water1 = document.getElementById('WATER_1_');
    const water2 = document.getElementById('WATER_2_');
    if (water1) water1.style.display = 'none';
    if (water2) water2.style.display = 'none';
});

waterObserver.observe(document.body, { childList: true, subtree: true });
