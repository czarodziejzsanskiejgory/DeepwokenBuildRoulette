//Menu
function toggleMenu() {
    const sideMenu = document.getElementById('side-menu');
    if (sideMenu.classList.contains('hidden')) {
        sideMenu.classList.remove('hidden');
        sideMenu.classList.add('visible');
    } else {
        sideMenu.classList.remove('visible');
        sideMenu.classList.add('hidden');
    }
}

//Toggle Columns
// Map of button text to column IDs
const columnMap = {
    'Weapons': 'cweapons',
    'Offhands': 'coffhands',
    'Enchants': 'cenchants',
    'Attunements': 'cattunements',
    'Secondary Attunements': 'csecondaryattunements',
    'Oaths': 'coaths',
    'Resonances': 'cresonances',
    'Aspects': 'caspects',
    'Origins': 'corigins',
    'Murmurs': 'cmurmurs'
};

// Add click event listeners to all buttons in menu-buttons
document.addEventListener('DOMContentLoaded', () => {
    const menuButtons = document.querySelector('#menu-buttons');
    if (!menuButtons) return;

    // Add click handlers to each button
    menuButtons.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            const columnId = columnMap[button.textContent];
            if (!columnId) return;

            const column = document.getElementById(columnId);
            if (!column) return;

            // Toggle the visibility
            if (column.style.display === 'none') {
                column.style.display = ''; // Reset to default display
                button.classList.remove('inactive');
            } else {
                column.style.display = 'none';
                button.classList.add('inactive');
            }
        });
    });
});

// --- Rolling & Locking functionality (uses `gameData` from data.js) ---
const lockedColumns = new Set();

const columnToDataMap = {
    'cweapons': 'weapons',
    'coffhands': 'offhands',
    'cenchants': 'enchants',
    'cattunements': 'attunements',
    'csecondaryattunements': 'secondaryAttunements',
    'coaths': 'oaths',
    'cresonances': 'resonances',
    'caspects': 'aspects',
    'corigins': 'origins',
    'cmurmurs': 'murmurs'
};

const ROLL_DURATION = 1500; // ms
const FRAMES_PER_ROLL = 12;
const FRAME_DURATION = Math.max(25, Math.floor(ROLL_DURATION / FRAMES_PER_ROLL));

function debug(msg) {
    // Uncomment next line to enable debug logs
    // console.log('[roll]', msg);
}

async function animateRoll(columnId, finalItem) {
    debug(`animateRoll ${columnId}`);
    const column = document.getElementById(columnId);
    if (!column) return;
    const imageDiv = column.querySelector('.cimage');
    const textDiv = column.querySelector('.ctext');
    const dataKey = columnToDataMap[columnId];
    if (!gameData || !gameData[dataKey] || !gameData[dataKey].items) return;
    const items = gameData[dataKey].items;

    for (let i = 0; i < FRAMES_PER_ROLL; i++) {
        const randomItem = items[Math.floor(Math.random() * items.length)];
        if (imageDiv) {
            imageDiv.style.backgroundImage = `url("${randomItem.image || randomItem.img}")`;
            imageDiv.style.backgroundSize = 'cover';
            imageDiv.style.backgroundPosition = 'center';
            imageDiv.style.filter = 'brightness(1.1)';
        }
        if (textDiv) textDiv.textContent = randomItem.text || randomItem.name || '';
        await new Promise(r => setTimeout(r, FRAME_DURATION));
        if (imageDiv) imageDiv.style.filter = 'brightness(1)';
    }

    // final
    if (imageDiv) imageDiv.style.backgroundImage = `url("${finalItem.image || finalItem.img}")`;
    if (textDiv) textDiv.textContent = finalItem.text || finalItem.name || '';
    await new Promise(r => setTimeout(r, 1)); // slight pause on final item
    if (columnId === 'coaths' && finalItem.name === 'Silentheart') {
        // Force Attunements to "Attunement-less"
        const attunementCol = document.getElementById('cattunements');
        if (attunementCol) {
            const attunementImg = attunementCol.querySelector('.cimage');
            const attunementTxt = attunementCol.querySelector('.ctext');
            if (attunementImg) attunementImg.style.backgroundImage = 'url("images/placeholder.png")';
            if (attunementTxt) attunementTxt.textContent = 'None';
        }

        // Force Secondary Attunements to "None"
        const secAttunementCol = document.getElementById('csecondaryattunements');
        if (secAttunementCol) {
            const secAttunementImg = secAttunementCol.querySelector('.cimage');
            const secAttunementTxt = secAttunementCol.querySelector('.ctext');
            if (secAttunementImg) secAttunementImg.style.backgroundImage = 'url("images/placeholder.png")';
            if (secAttunementTxt) secAttunementTxt.textContent = 'None';
        }
    }
    if (columnId === 'cweapons' && finalItem.name === 'Elemental') {
        //Force Enchants to "None"
        const enchantCol = document.getElementById('cenchants');
        if (enchantCol) {
            const enchantImg = enchantCol.querySelector('.cimage');
            const enchantTxt = enchantCol.querySelector('.ctext');
            if (enchantImg) enchantImg.style.backgroundImage = 'url("images/placeholder.png")';
            if (enchantTxt) enchantTxt.textContent = 'None';
        }
    }
    if (columnId === 'cweapons' && finalItem.name === 'Rifles') {
        //Force Offhands to "None"
        const offhandsCol = document.getElementById('coffhands');
        if (offhandsCol) {
            const offhandsImg = offhandsCol.querySelector('.cimage');
            const offhandsTxt = offhandsCol.querySelector('.ctext');
            if (offhandsImg) offhandsImg.style.backgroundImage = 'url("images/placeholder.png")';
            if (offhandsTxt) offhandsTxt.textContent = 'None';
        }
    }
    if (columnId === 'cweapons' && finalItem.name === 'Bows') {
        //Force Offhands to "None"
        const offhandsCol = document.getElementById('coffhands');
        if (offhandsCol) {
            const offhandsImg = offhandsCol.querySelector('.cimage');
            const offhandsTxt = offhandsCol.querySelector('.ctext');
            if (offhandsImg) offhandsImg.style.backgroundImage = 'url("images/placeholder.png")';
            if (offhandsTxt) offhandsTxt.textContent = 'None';
        }
    }
    if (columnId === 'cattunements' && finalItem.name === 'Frostdraw' ||  finalItem.name === 'Crystalization') {
            
            // Force Secondary Attunements to "None"
            const secAttunementCol = document.getElementById('csecondaryattunements');
            const secAttunementValue = secAttunementCol ? secAttunementCol.querySelector('.ctext')?.textContent : null;
            if (secAttunementCol && secAttunementValue=='Crystalization') {
                const secAttunementImg = secAttunementCol.querySelector('.cimage');
                const secAttunementTxt = secAttunementCol.querySelector('.ctext');
                if (secAttunementImg) secAttunementImg.style.backgroundImage = 'url("images/placeholder.png")';
                if (secAttunementTxt) secAttunementTxt.textContent = 'None';
            }
            if (secAttunementCol && secAttunementValue=='Frostdraw') {
                const secAttunementImg = secAttunementCol.querySelector('.cimage');
                const secAttunementTxt = secAttunementCol.querySelector('.ctext');
                if (secAttunementImg) secAttunementImg.style.backgroundImage = 'url("images/placeholder.png")';
                if (secAttunementTxt) secAttunementTxt.textContent = 'None';
            }
        }
    if (columnId === 'cattunements' && finalItem.name === 'Galebreath' ||  finalItem.name === 'Specter') {
            
            // Force Secondary Attunements to "None"
            const secAttunementCol = document.getElementById('csecondaryattunements');
            const secAttunementValue = secAttunementCol ? secAttunementCol.querySelector('.ctext')?.textContent : null;
            if (secAttunementCol && secAttunementValue=='Specter') {
                const secAttunementImg = secAttunementCol.querySelector('.cimage');
                const secAttunementTxt = secAttunementCol.querySelector('.ctext');
                if (secAttunementImg) secAttunementImg.style.backgroundImage = 'url("images/placeholder.png")';
                if (secAttunementTxt) secAttunementTxt.textContent = 'None';
            }
            if (secAttunementCol && secAttunementValue=='Galebreath') {
                const secAttunementImg = secAttunementCol.querySelector('.cimage');
                const secAttunementTxt = secAttunementCol.querySelector('.ctext');
                if (secAttunementImg) secAttunementImg.style.backgroundImage = 'url("images/placeholder.png")';
                if (secAttunementTxt) secAttunementTxt.textContent = 'None';
            }
        }
    if (columnId === 'cattunements' && finalItem.name === 'Thundercall' ||  finalItem.name === 'Unstable Capacitor') {
            
            // Force Secondary Attunements to "None"
            const secAttunementCol = document.getElementById('csecondaryattunements');
            const secAttunementValue = secAttunementCol ? secAttunementCol.querySelector('.ctext')?.textContent : null;
            if (secAttunementCol && secAttunementValue=='Unstable Capacitor') {
                const secAttunementImg = secAttunementCol.querySelector('.cimage');
                const secAttunementTxt = secAttunementCol.querySelector('.ctext');
                if (secAttunementImg) secAttunementImg.style.backgroundImage = 'url("images/placeholder.png")';
                if (secAttunementTxt) secAttunementTxt.textContent = 'None';
            }
            if (secAttunementCol && secAttunementValue=='Thundercall') {
                const secAttunementImg = secAttunementCol.querySelector('.cimage');
                const secAttunementTxt = secAttunementCol.querySelector('.ctext');
                if (secAttunementImg) secAttunementImg.style.backgroundImage = 'url("images/placeholder.png")';
                if (secAttunementTxt) secAttunementTxt.textContent = 'None';
            }
        }
    if (columnId === 'cattunements' && finalItem.name === 'Ironsing' ||  finalItem.name === 'Scrapsinger') {
            
            // Force Secondary Attunements to "None"
            const secAttunementCol = document.getElementById('csecondaryattunements');
            const secAttunementValue = secAttunementCol ? secAttunementCol.querySelector('.ctext')?.textContent : null;
            if (secAttunementCol && secAttunementValue=='Scrapsinger') {
                const secAttunementImg = secAttunementCol.querySelector('.cimage');
                const secAttunementTxt = secAttunementCol.querySelector('.ctext');
                if (secAttunementImg) secAttunementImg.style.backgroundImage = 'url("images/placeholder.png")';
                if (secAttunementTxt) secAttunementTxt.textContent = 'None';
            }
            if (secAttunementCol && secAttunementValue=='Ironsing') {
                const secAttunementImg = secAttunementCol.querySelector('.cimage');
                const secAttunementTxt = secAttunementCol.querySelector('.ctext');
                if (secAttunementImg) secAttunementImg.style.backgroundImage = 'url("images/placeholder.png")';
                if (secAttunementTxt) secAttunementTxt.textContent = 'None';
            }
        }
    if (columnId === 'cattunements' && (finalItem.name === 'Flamecharm' || finalItem.name === 'Lava serpent' || finalItem.name === 'Twisted Puppets')) {
            
            // Force Secondary Attunements to "None"
            const secAttunementCol = document.getElementById('csecondaryattunements');
            const secAttunementValue = secAttunementCol ? secAttunementCol.querySelector('.ctext')?.textContent : null;
            if (secAttunementCol && secAttunementValue=='Lava serpent') {
                const secAttunementImg = secAttunementCol.querySelector('.cimage');
                const secAttunementTxt = secAttunementCol.querySelector('.ctext');
                if (secAttunementImg) secAttunementImg.style.backgroundImage = 'url("images/placeholder.png")';
                if (secAttunementTxt) secAttunementTxt.textContent = 'None';
            }
            if (secAttunementCol && secAttunementValue=='Twisted Puppets') {
                const secAttunementImg = secAttunementCol.querySelector('.cimage');
                const secAttunementTxt = secAttunementCol.querySelector('.ctext');
                if (secAttunementImg) secAttunementImg.style.backgroundImage = 'url("images/placeholder.png")';
                if (secAttunementTxt) secAttunementTxt.textContent = 'None';
            }
            if (secAttunementCol && secAttunementValue=='Flamecharm') {
                const secAttunementImg = secAttunementCol.querySelector('.cimage');
                const secAttunementTxt = secAttunementCol.querySelector('.ctext');
                if (secAttunementImg) secAttunementImg.style.backgroundImage = 'url("images/placeholder.png")';
                if (secAttunementTxt) secAttunementTxt.textContent = 'None';
            }
        }
    }

function rollColumn(columnId) {
    debug(`rollColumn ${columnId}`);
    if (lockedColumns.has(columnId)) return;
    const dataKey = columnToDataMap[columnId];
    if (!gameData || !gameData[dataKey] || !gameData[dataKey].items) return;
    const items = gameData[dataKey].items;
    let randomItem;
    if (columnId === 'csecondaryattunements') {
        // 60% chance to be none (Attunement-less), 40% chance to normal roll
        if (Math.random() < 0.6) {
            randomItem = items[13]; // None
        } else {
            randomItem = items[Math.floor(Math.random() * items.length)];
        }
    } else {
        randomItem = items[Math.floor(Math.random() * items.length)];
    }
    animateRoll(columnId, randomItem);
}

function rollAllColumns() {
    debug('rollAllColumns');
    Object.keys(columnToDataMap).forEach(colId => {
        rollColumn(colId);
    });
}

function toggleLock(columnId) {
    const lockButton = document.querySelector(`#${columnId} .cbutton button:last-child`);
    if (!lockButton) return;
    if (lockedColumns.has(columnId)) {
        lockedColumns.delete(columnId);
        lockButton.textContent = lockButton.textContent.replace(/^Unlock/, 'Lock');
        lockButton.classList.remove('locked');
    } else {
        lockedColumns.add(columnId);
        lockButton.textContent = lockButton.textContent.replace(/^Lock/, 'Unlock');
        lockButton.classList.add('locked');
    }
}

// Hook roll and lock buttons after DOM ready
document.addEventListener('DOMContentLoaded', () => {
    // Roll a Build (first button in #menu-main)
    const rollAllBtn = document.querySelector('#menu-main button');
    if (rollAllBtn) rollAllBtn.addEventListener('click', rollAllColumns);

    // For each content column, wire roll and lock
    Object.keys(columnToDataMap).forEach(columnId => {
        const col = document.getElementById(columnId);
        if (!col) {
            debug(`no column element for ${columnId}`);
            return;
        }
        const rollBtn = col.querySelector('.cbutton button:first-child');
        const lockBtn = col.querySelector('.cbutton button:last-child');
        if (rollBtn) rollBtn.addEventListener('click', () => rollColumn(columnId));
        if (lockBtn) lockBtn.addEventListener('click', () => toggleLock(columnId));
    });
});

