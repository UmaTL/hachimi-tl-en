# Umamusume English Translations
[![Discord](https://img.shields.io/discord/980222697151807488?logo=discord&logoColor=4bba35&label=Discord)](https://discord.gg/xBMgwh6hHY)

English fan translation repository for the Umamusume: Pretty Derby game.
This is a continuation of the [UmaTL] project's translations for use with the [Hachimi] patch.

Translations provided by [these sources](#translation-sources).  
Please support UmaTL's own translations & related work through [![Patreon](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fwww.patreon.com%2Fapi%2Fcampaigns%2F2559100&query=data.attributes.paid_member_count&suffix=%20trainers&style=flat-square&logo=patreon&logoColor=ff424d&label=Patreon&color=ff424d)](https://patreon.com/noccu) or [![Ko-fi](https://img.shields.io/badge/Ko--fi-Support-%2300aff1?logo=kofi&logoColor=%2300aff1)](https://ko-fi.com/noccyu)!


# Install / Use
> [!IMPORTANT]
> Uninstall any outdated translation patches you still have (Legacy UmaTL, Carotene).
> For the Legacy UmaTL patch, run update.bat first to get the latest uninstall improvements, followed by uninstall.bat

1. Download and install [Hachimi].
    - If this is your first time, test that your game starts up with Hachimi first! Close the setup popup, then close the game again.
1. Change the translation source URL in Hachimi's config. Premade files and details [here](../../releases/tag/config).
1. Run the game and pick UmaTL in Hachimi's `first time setup`.
    - If it does not appear, open the Hachimi menu and re-run it from there.

**Optional**: It is highly recommended to adjust `Story choice auto select delay` (1.2) and `Story text speed multiplier` (3.0) in Hachimi's menu -> config -> gameplay to something you like. The numbers in brackets are good values.

# Versions
In addition to the normal translations, 2 alternate versions are provided:

1. UmaTL + Skill data. Replaces skill descriptions with converted raw data, otherwise the same.
1. Skill data only. Does the same, but includes no translations. For users preferring Japanese.

> [!WARNING]
> These versions might lag slightly behind the normal version.  
> Skill data only can NOT be used on Global due to many skill effects differing.

# Updating
Hachimi will automatically check for updates when you start the game. If an update is available, you'll be asked if you want to download it and it will be applied immediately, no restart required.

# Philosophy
UmaTL tries to maintain natural, accurate, and complete translations for even less common parts of the game. It is less concerned with long-term and historical community usage. While long-term stability is still an ideal goal, UmaTL will not shy away from changing existing or even established terms to improve its translations. This is also why UmaTL uses many of its own translations. Official terms might be picked up if they contribute to this philosophy.
For game usage, UmaTL includes a modified version of the original font, with edits for English usage, formatting, and optimization of the limited space.

# Translation sources
UmaTL does many of its own translations and is an original source. The remaining translations are sourced from various members & projects of the fan community.
Check [in-depth credits on the wiki](../../wiki/Translation-Progress) and support the contributors if you can!

UmaTL is the original full game translation project, lending its translations to many other projects over the years. 
This includes Hachimi: its default translations are mostly imported from older UmaTL material. 

# Contributing translations
Use the [UmaTL] tools and contribute them there (I will take care of transferring them), or use [Carotene] or [ZokuZoku] and contribute the Hachimi format files here as a PR. Join our Discord or open an Issue for further discussion or help.

[UmaTL]: https://github.com/noccu/umamusu-translate
[Hachimi]: https://hachimi.leadrdrk.com/
[ZokuZoku]: https://marketplace.visualstudio.com/items?itemName=LeadRDRK.zokuzoku
[Carotene]: https://github.com/KevinVG207/Uma-Carotene-TL