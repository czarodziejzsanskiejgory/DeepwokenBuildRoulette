// Consolidated game data with image paths and text
const gameData = {
    weapons: { items: [
        { name: "Daggers", img: "images/weapons/dagger.png", text: "Daggers" },
        { name: "Fists", img: "images/weapons/fist.png", text: "Fists" },
        { name: "Guns", img: "images/weapons/gun.png", text: "Guns" },
        { name: "Rapiers", img: "images/weapons/rapier.png", text: "Rapiers" },
        { name: "Swords", img: "images/weapons/sword.png", text: "Swords" },
        { name: "Spears", img: "images/weapons/spear.png", text: "Spears" },
        { name: "Staves", img:"images/weapons/staff.png", text: "Staves"},
        { name: "Clubs", img: "images/weapons/club.png", text: "Clubs" },
        { name: "Rifles", img: "images/weapons/rifle.png", text: "Rifles" },
        { name: "Twinblades", img: "images/weapons/twinblade.png", text: "Twinblades" },
        { name: "Bows", img: "images/weapons/bow.png", text: "Bows" },
        { name: "Greataxes", img: "images/weapons/greataxe.png", text: "Greataxes" },
        { name: "Greatswords", img: "images/weapons/greatsword.png", text: "Greatswords" },
        { name: "Greathammers", img: "images/weapons/greathammer.png", text: "Greathammers" },
        { name: "Greatcannons", img: "images/weapons/greatcannon.png", text: "Greatcannons" },
        { name: "Elemental", img: "images/placeholder.png", text: "Elemental" }
    ] },

    //Offhands
    offhands: { items: [
        { name: "Shield", img: "images/offhands/shield.png", text: "Shield" },
        { name: "Parrying Dagger", img: "images/weapons/dagger.png", text: "Parrying Dagger" },
        { name: "Side guns", img: "images/weapons/gun.png", text: "Side guns" },
        { name: "None", img: "images/placeholder.png", text: "None" }
    ] },

    //Enchants
    enchants: { items: [
        { name: "Astral", img: "images/placeholder.png", text: "Astral" },
        { name: "Blazing", img: "images/enchants/blazing.png", text: "Blazing" },
        { name: "Bluster", img: "images/placeholder.png", text: "Bluster" },
        { name: "Chilling", img: "images/enchants/chilling.png", text: "Chilling" },
        { name: "Curse of the Authoritative", img: "images/enchants/authoritative.png", text: "Curse of the Authoritative" },
        { name: "Curse of the Bloodthirsty", img: "images/enchants/bloodthirsty.png", text: "Curse of the Bloodthirsty" },
        {name: "Curse of the Captain Greene", img: "images/placeholder.png", text: "Curse of the Captain Greene" },
        { name: "Curse of the No Life King", img: "images/enchants/nlk.png", text: "Curse of the No Life King" },
        { name: "Curse of Repulsion", img: "images/enchants/repulsion.png", text: "Curse of Repulsion" },
        { name: "Curse of the Unbidden", img: "images/enchants/unbidden.png", text: "Curse of the Unbidden" },
        { name: "Curse of Void", img: "images/enchants/void.png", text: "Curse of Void" },
        { name: "Curse of Ysley's Ember", img: "images/placeholder.png", text: "Curse of Ysley's Ember" },
        { name: "Curse of the Yun'Shul", img: "images/enchants/yunshul.png", text: "Curse of the Yun'Shul" },
        { name: "Deferred", img: "images/enchants/deferred.png", text: "Deferred" },
        { name: "Detonation", img: "images/enchants/detonation.png", text: "Detonation" },
        { name: "Elastic", img: "images/enchants/elastic.png", text: "Elastic" },
        { name: "Gluttony", img: "images/enchants/gluttony.png", text: "Gluttony" },
        { name: "Grim", img: "images/enchants/grim.png", text: "Grim" },
        { name: "Harrowing", img: "images/enchants/harrowing.png", text: "Harrowing" },
        { name: "Heroism", img: "images/enchants/heroism.png", text: "Heroism" },
        { name: "Kyrsan Chill", img: "images/placeholder.png", text: "Kyrsan Chill" },
        { name: "Metal", img: "images/enchants/metal.png", text: "Metal" },
        { name: "Nemesis", img: "images/enchants/nemesis.png", text: "Nemesis" },
        { name: "Nightbringer", img: "images/placeholder.png", text: "Nightbringer" },
        { name: "Obfuscation", img: "images/enchants/obfuscation.png", text: "Obfuscation" },
        { name: "Parasol's Blight", img: "images/enchants/parasol.png", text: "Parasol's Blight" },
        { name: "Providence's Thorn", img: "images/enchants/thorns.png", text: "Providence's Thorn" },
        { name: "Sear", img: "images/placeholder.png", text: "Sear" },
        { name: "Solar", img: "images/enchants/solar.png", text: "Solar" },
        { name: "Stone", img: "images/enchants/stone.png", text: "Stone" },
        { name: "Storm", img: "images/enchants/storm.png", text: "Storm" },
        { name: "Stormbreaker", img: "images/enchants/stormbreaker.png", text: "Stormbreaker" },
        { name: "Suffocated", img: "images/enchants/suffocated.png", text: "Suffocated" },
        { name: "Tears of the Edenkite", img: "images/enchants/edenkite.png", text: "Tears of the Edenkite" },
        { name: "Umbral Knight", img: "images/enchants/umbralknight.png", text: "Umbral Knight" },
        { name: "Vampirism", img: "images/enchants/vampirism.png", text: "Vampirism" },
        { name: "Wild", img: "images/enchants/wild.png", text: "Wild" },
        { name: "Windswept", img: "images/enchants/windswept.png", text: "Windswept" }
    ] },

    //Attunements
    attunements: { items: [
        { name: "Attunement-less", img: "images/attunements/Attunement-less.png", text: "Attunement-less" },
        { name: "Flamecharm", img: "images/attunements/Flamecharm.png", text: "Flamecharm" },
        { name: "Frostdraw", img: "images/attunements/Frostdraw.png", text: "Frostdraw" },
        { name: "Thundercall", img: "images/attunements/Thundercall.png", text: "Thundercall" },
        { name: "Galebreath", img: "images/attunements/Galebreath.png", text: "Galebreath" },
        { name: "Shadowcast", img: "images/attunements/Shadowcast.png", text: "Shadowcast" },
        { name: "Ironsing", img: "images/attunements/Ironsing.png", text: "Ironsing" },
        { name: "Bloodrend", img: "images/attunements/Bloodrend.png", text: "Bloodrend" },
        { name: "Lava serpent", img: "images/attunements/Lava serpent.png", text: "Lava serpent" },
        { name: "Crystalization", img: "images/attunements/Crystalization.png", text: "Crystalization" },
        { name: "Unstable Capacitor", img: "images/attunements/Unstable Capacitor.png", text: "Unstable Capacitor" },
        { name: "Specter", img: "images/attunements/Specter.png", text: "Specter" },
        { name: "Scrapsinger", img: "images/attunements/Scrapsinger.png", text: "Scrapsinger" },
        { name: "Twisted Puppets", img: "images/attunements/Twisted Puppets.png", text: "Twisted Puppets" }
    ] },
     //Secondary Attunements
    secondaryAttunements: { items: [
        { name: "Flamecharm", img: "images/attunements/Flamecharm.png", text: "Flamecharm" },
        { name: "Frostdraw", img: "images/attunements/Frostdraw.png", text: "Frostdraw" },
        { name: "Thundercall", img: "images/attunements/Thundercall.png", text: "Thundercall" },
        { name: "Galebreath", img: "images/attunements/Galebreath.png", text: "Galebreath" },
        { name: "Shadowcast", img: "images/attunements/Shadowcast.png", text: "Shadowcast" },
        { name: "Ironsing", img: "images/attunements/Ironsing.png", text: "Ironsing" },
        { name: "Bloodrend", img: "images/attunements/Bloodrend.png", text: "Bloodrend" },
        { name: "Lava serpent", img: "images/attunements/Lava serpent.png", text: "Lava serpent" },
        { name: "Crystalization", img: "images/attunements/Crystalization.png", text: "Crystalization" },
        { name: "Unstable Capacitor", img: "images/attunements/Unstable Capacitor.png", text: "Unstable Capacitor" },
        { name: "Specter", img: "images/attunements/Specter.png", text: "Specter" },
        { name: "Scrapsinger", img: "images/attunements/Scrapsinger.png", text: "Scrapsinger" },
        { name: "Twisted Puppets", img: "images/attunements/Twisted Puppets.png", text: "Twisted Puppets" },
        { name: "None", img: "images/placeholder.png", text: "None" }

    ] },

    //Oaths
    oaths: { items: [
        { name: "Oathless", img: "images/oaths/oathless.png", text: "Oathless" },
        { name: "Arcwarder", img: "images/oaths/arcwarder.png", text: "Arcwarder" },
        { name: "Bladeharper", img: "images/oaths/bladeharper.png", text: "Bladeharper" },
        { name: "Blightsurger", img: "images/oaths/blightsurger.png", text: "Blightsurger" },
        { name: "Blindseer", img: "images/oaths/blindseer.png", text: "Blindseer" },
        { name: "Chainwarden", img: "images/oaths/chainwarden.png", text: "Chainwarden" },
        { name: "Contractor", img: "images/oaths/contractor.png", text: "Contractor" },
        { name: "Dawnwalker", img: "images/oaths/dawnwalker.png", text: "Dawnwalker" },
        { name: "Fadetrimmer", img: "images/oaths/fadetrimmer.png", text: "Fadetrimmer" },
        { name: "Jetstriker", img: "images/oaths/jetstriker.png", text: "Jetstriker" },
        { name: "Linkstrider", img: "images/oaths/linkstrider.png", text: "Linkstrider" },
        { name: "Saintsworn", img: "images/oaths/saintsworn.png", text: "Saintsworn" },
        { name: "Saltchemist", img: "images/oaths/saltchemist.png", text: "Saltchemist" },
        { name: "Silentheart", img: "images/oaths/silentheart.png", text: "Silentheart" },
        { name: "Soulbreaker", img: "images/oaths/soulbreaker.png", text: "Soulbreaker" },
        { name: "Starkindred", img: "images/oaths/starkindred.png", text: "Starkindred" },
        { name: "Visionshaper", img: "images/oaths/visionshaper.png", text: "Visionshaper" },
    ] },

    //Resonances
    resonances: { items: [
        { name: "Blood Scourge", img: "images/resonances/resonance.png", text: "Blood Scourge" },
        { name: "Chorus Divide", img: "images/resonances/resonance.png", text: "Chorus Divide" },
        { name: "Crazy Slots", img: "images/resonances/resonance.png", text: "Crazy Slots" },
        { name: "Gravity Field", img: "images/resonances/resonance.png", text: "Gravity Field" },
        { name: "Jar of Souls", img: "images/resonances/resonance.png", text: "Jar of Souls" },
        { name: "Paralitic Dust", img: "images/resonances/resonance.png", text: "Paralitic Dust" },
        { name: "Payback", img: "images/resonances/resonance.png", text: "Payback" },
        { name: "Portals", img: "images/resonances/resonance.png", text: "Portals" },
        { name: "Preservation", img: "images/resonances/resonance.png", text: "Preservation" },
        { name: "Resurrection", img: "images/resonances/resonance.png", text: "Resurrection" },
        { name: "Run it Back", img: "images/resonances/resonance.png", text: "Run it Back" },
        { name: "Sacred Field", img: "images/resonances/resonance.png", text: "Sacred Field" },
        { name: "Shard Bow", img: "images/resonances/resonance.png", text: "Shard Bow" },
        { name: "Skeleton Key", img: "images/resonances/resonance.png", text: "Skeleton Key" },
        { name: "Smite", img: "images/resonances/resonance.png", text: "Smite" },
        { name: "Smokescreen", img: "images/resonances/resonance.png", text: "Smokescreen" },
        { name: "Wind-Up", img: "images/resonances/resonance.png", text: "Wind-Up" },
        { name: "Dimensional Travel", img: "images/resonances/resonance.png", text: "Dimensional Travel" },
        { name: "Teleportation", img: "images/resonances/resonance.png", text: "Teleportation" }
    ] },

    //Origins
    origins: { items: [
        { name: "Castaway", img: "images/origins/Castaway.png", text: "Castaway" },
        { name: "Lone Warrior", img: "images/origins/LoneWarrior.png", text: "Lone Warrior" },
        { name: "Deepbound", img: "images/origins/Deepbound.png", text: "Deepbound" },
        { name: "Voidwalker", img: "images/origins/Voidwalker.png", text: "Voidwalker" },
        { name: "Ignition Delver", img: "images/origins/IgnitionDelver.png", text: "Ignition Delver" },
        { name: "Authority Ensign", img: "images/origins/AuthorityEnsign.png", text: "Authority Ensign" },
        { name: "Justicar", img: "images/origins/Justicar.png", text: "Justicar" }
    ] },

     //Aspects
    aspects: { items: [
        { name: "Adret", img: "images/placeholder.png", text: "Adret" },
        { name: "Canor", img: "images/placeholder.png", text: "Canor" },
        { name: "Capra", img: "images/placeholder.png", text: "Capra" },
        { name: "Celtor", img: "images/placeholder.png", text: "Celtor" },
        { name: "Chrysid", img: "images/placeholder.png", text: "Chrysid" },
        { name: "Etrean", img: "images/placeholder.png", text: "Etrean" },
        { name: "Felinor", img: "images/placeholder.png", text: "Felinor" },
        { name: "Ganymede", img: "images/placeholder.png", text: "Ganymede" },
        { name: "Gremor", img: "images/placeholder.png", text: "Gremor" },
        { name: "Khan", img: "images/placeholder.png", text: "Khan" },
        { name: "Kiron", img: "images/placeholder.png", text: "Kiron" },
        { name: "Tiran", img: "images/placeholder.png", text: "Tiran" },
        { name: "Vesperian", img: "images/placeholder.png", text: "Vesperian" }
    ] },

    //Murmurs
    murmurs: { items: [
        { name: "Ardour", img: "images/placeholder.png", text: "Ardour" },
        { name: "Tacet", img: "images/placeholder.png", text: "Tacet" },
        { name: "Rhythm", img: "images/placeholder.png", text: "Rhythm" }
    ]}
};
