(() => {
  const button=document.getElementById('theme-toggle');
  const preference=matchMedia('(prefers-color-scheme: dark)');
  function update(){const lang=document.documentElement.lang,c=copy[lang]||copy.de,dark=document.documentElement.dataset.theme==='dark';button.setAttribute('aria-pressed',String(dark));button.setAttribute('aria-label',dark?c.themeToLight:c.themeToDark);button.title=dark?c.themeToLight:c.themeToDark;button.querySelector('.theme-label').textContent=dark?c.themeLight:c.themeDark;document.querySelector('meta[name="theme-color"]').content=dark?'#081727':'#f5f9ff';}
  button.addEventListener('click',()=>{const theme=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=theme;try{localStorage.setItem('portfolio-theme',theme)}catch{}update();});
  preference.addEventListener('change',event=>{let saved;try{saved=localStorage.getItem('portfolio-theme')}catch{}if(!saved){document.documentElement.dataset.theme=event.matches?'dark':'light';update();}});
  document.addEventListener('languagechange',update);update();
})();
