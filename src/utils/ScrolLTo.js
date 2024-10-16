/* ████████████████████████████████████████████████████████████████████████████████████████████████████
ScrollTo function
████████████████████████████████████████████████████████████████████████████████████████████████████ */
export default function ScrollTo(where, behavior = 'auto', block = 'center'){
  /* TOP */
  if(where === 'top') {
      window.scrollTo({
          top: 0,
          behavior: behavior,
      });
  }

  /* ID */
  if(where !== 'top' && where) {
      const whereToScroll = document.getElementById(where);
      if (whereToScroll) {
        whereToScroll.scrollIntoView({ behavior: behavior, block: block });
      } 
  }
}