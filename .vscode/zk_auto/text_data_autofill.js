/**
 * @param {JsonValue} dict
 */
async function fillOutfitCombos(dict) {
    console.log("Autofilling outfit combos");
    const outfitCombos = (await zk.mdb.loadTextData())["4"];

    let tlOutfitCombos = dict.get("4");
    if (!tlOutfitCombos) {
        dict.set("4", {});
        tlOutfitCombos = dict.get("4");
    }
    const tlOutfits = dict.get("5");
    const tlCharas = dict.get("6");
    if (!tlOutfits || !tlCharas) {
        console.warn("Text data categories 5 or 6 don't exist");
        return;
    }

    let count = 0;
    for (const id in outfitCombos) {
        // Outfit combos are safe, process all to reflect updates.
        // if (tlOutfitCombos.get(id)) continue;

        const outfitId = id.slice(-6);
        const charaId = id.slice(-6, -2);

        const outfit = tlOutfits.get(outfitId);
        const chara = tlCharas.get(charaId);

        if (!outfit) {
            console.warn(`Outfit ${outfitId} not found`);
            continue;
        }

        if (!chara) {
            console.warn(`Character ${charaId} not found`);
            continue;
        }

        tlOutfitCombos.set(id, `${outfit.value} ${chara.value}`);
        ++count;
    }
    return count;
}

/**
 * @param {JsonValue} dict
 */
async function fillSupportCombos(dict) {
    console.log("Autofilling support combos");
    const supportCombos = (await zk.mdb.loadTextData())["75"];

    let tlSupportCombos = dict.get("75");
    if (!tlSupportCombos) {
        dict.set("75", {});
        tlSupportCombos = dict.get("75");
    }
    const tlSupports = dict.get("76");
    const tlCharas = dict.get("77");
    const tlSupportsUnique = dict.get("150");
    if (!tlSupports || !tlCharas || !tlSupportsUnique) {
        console.warn("Text data categories 76, 77, or 150 don't exist");
        return;
    }

    let count = 0;
    for (const id in supportCombos) {
        // Support combos are safe, process all to reflect updates.
        // if (tlSupportCombos.get(id)) continue;

        const chara = tlCharas.get(id);
        const unique = tlSupportsUnique.get(id);

        if (!chara) {
            console.warn(`Character ${id} not found`);
            continue;
        }
        if (!unique) {
            console.warn(`Unique ${unique} not found`);
            continue;
        }

        tlSupports.set(id, `[${tlSupportsUnique.value}]`);
        tlSupportCombos.set(id, `[${tlSupportsUnique.value}] ${chara.value}`);
        ++count;
    }
    return count;
}

/**
 * @param {JsonValue} dict
 */
async function fillPieces(dict) {
    console.log("Autofilling pieces");
    const pieces = (await zk.mdb.loadTextData())["113"];

    let tlPieces = dict.get("113");
    if (!tlPieces) {
        dict.set("113", {});
        tlPieces = dict.get("113");
    }
    const tlCharas = dict.get("6");
    if (!tlCharas) {
        console.warn("Text data category 6 doesn't exist");
        return;
    }

    let count = 0;
    for (const id in pieces) {
        // Safe
        // if (tlPieces.get(id)) continue;

        const charaId = id.slice(0, 4);
        const chara = tlCharas.get(charaId);

        if (!chara) {
            if (charaId != "1000")
                console.warn(`Character ${charaId} not found`);

            continue;
        }

        tlPieces.set(id, `${chara.value}'s Piece`);
        ++count;
    }
    return count;
}

/**
 * @param {JsonValue} dict
 */
async function fillBirthdays(dict) {
    console.log("Autofilling birthdays");
    const birthdays = (await zk.mdb.loadTextData())["157"];
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let tlBirthdays = dict.get("157");
    if (!tlBirthdays) {
        dict.set("157", {});
        tlBirthdays = dict.get("157");
    }

    let count = 0;
    for (const id in birthdays) {
        if (tlBirthdays.get(id)) continue;

        const matches = birthdays[id].match(/(\d{1,2})月(\d{1,2})日(.*)/);
        if (!matches) {
            console.warn(`Birthday ${id} has unexpected format`);
            continue;
        }

        const [ _, month, day, trailing ] = matches;
        const monthIndex = +month - 1;
        if (monthIndex < 0 || monthIndex >= months.length) {
            console.warn(`Birthday ${id} has invalid month`);
            continue;
        }

        if (trailing) {
            zk.showWarning(`Birthday ${id} has trailing text: ${trailing}`);
        }

        tlBirthdays.set(id, `${months[monthIndex]} ${day}`);
        ++count;
    }
    return count;
}

async function run() {
    await zk.updateDict("text_data_dict.json", async dict => {
        const outfitComboCount = await fillOutfitCombos(dict);
        const supportComboCount = await fillSupportCombos(dict);
        const pieceCount = await fillPieces(dict);
        const birthdayCount = await fillBirthdays(dict);

        if (outfitComboCount || supportComboCount || pieceCount || birthdayCount) {
            zk.showInfo(`Text data autofill: \
                ${outfitComboCount} outfit combos, \
                ${supportComboCount} support combos, \
                ${pieceCount} pieces, \
                ${birthdayCount} birthdays
            `);
        }
        else {
            zk.showInfo("Text data autofill: None");
            return false;
        }
    });
}

run();