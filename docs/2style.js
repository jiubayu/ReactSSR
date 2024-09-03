const insertCSS = (...styles) => {
  const removeCSS = styles.map(style => style._insertCss());
  return () => removeCSS.forEach((dispose) => dispose());
}

let style = {
  css: '.theme{color: red}',
  _insertCss() {
    let styleEle = document.createElement('style');
    styleEle.innerText = style.css;
    document.head.appendChild(styleEle);
    return () => {
      styleEle.remove();
    }
  }
}

insertCSS(style);
