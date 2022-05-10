class Keyboard {
  constructor() {
    this.capslock = false;
    this.keyboard = null;
    this.textfield = null;
    this.keys = [];
    this.language = 'EN';
  }

  initKeyboard() {
    const main = document.createElement('div');
    this.keyboard = document.createElement('div');
    this.textfield = document.createElement('textarea');
    this.keyboard.classList.add('keyboard');
    main.classList.add('main');
    this.textfield.classList.add('textfield');
    const winType = document.createElement('div');
    winType.classList.add('winType');
    winType.textContent = 'Клавиатура разработана под операционную систему Windows';
    const langKeys = document.createElement('div');
    langKeys.classList.add('langKeys');
    langKeys.textContent = 'Для переключения языка нажмите Shift + Alt';
    document.body.append(main);
    main.append(this.textfield, this.keyboard, winType, langKeys);
    this.textfield.setAttribute('cols', '150');
    this.textfield.focus();
    this.initKeys();
    this.changeLang();
  }

  initKeys() {
    const keyButtons = [
      '`',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '0',
      '-',
      '=',
      'Backspace',
      'Tab',
      'q',
      'w',
      'e',
      'r',
      't',
      'y',
      'u',
      'i',
      'o',
      'p',
      '[',
      ']',
      '\\',
      'Delete',
      'CapsLock',
      'a',
      's',
      'd',
      'f',
      'g',
      'h',
      'j',
      'k',
      'l',
      ';',
      "'",
      'Enter',
      'ShiftLeft',
      '\\',
      'z',
      'x',
      'c',
      'v',
      'b',
      'n',
      'm',
      ',',
      '.',
      '/',
      'ArrowUp',
      'ShiftRight',
      'ControlLeft',
      'Meta',
      'Alt',
      ' ',
      'ControlRight',
      'ArrowLeft',
      'ArrowDown',
      'ArrowRight',
    ];
    keyButtons.forEach((k) => {
      const keyButton = document.createElement('button');
      keyButton.classList.add('key');
      keyButton.setAttribute('type', 'button');

      keyButton.textContent = k;
      this.keys.push(keyButton);
      this.keyboard.append(keyButton);

      switch (k) {
        case 'CapsLock':
          keyButton.classList.add('capslock');
          keyButton.addEventListener('click', (e) => {
            if (this.capslock === false) {
              this.capslock = true;
            } else {
              this.capslock = false;
            }
            this.textfield.focus();
            if (this.capslock === true) {
              for (const item of this.keys) {
                item.textContent.length < 2
                  ? (item.textContent = item.textContent.toUpperCase())
                  : (item.textContent = item.textContent);
              }
              const round = document.createElement('div');
              round.classList.add('round');
              round.classList.add('active');
              keyButton.append(round);
            } else {
              for (const item of this.keys) {
                item.textContent.length < 2
                  ? (item.textContent = item.textContent.toLowerCase())
                  : (item.textContent = item.textContent);
              }
            }
          });

          break;

        case 'Enter':
          keyButton.classList.add('enter');
          keyButton.addEventListener('click', () => {
            this.textfield.value += '\n';
            this.textfield.focus();
          });

          break;

        case ' ':
          keyButton.classList.add('space');

          keyButton.addEventListener('click', () => {
            this.textfield.value += ' ';
            this.textfield.focus();
          });
          break;

        case 'Tab':
          keyButton.classList.add('tab');
          keyButton.addEventListener('click', () => {
            this.textfield.value += '   ';
            this.textfield.focus();
          });
          break;
        case 'ShiftLeft':
          keyButton.classList.add('shift');
          keyButton.setAttribute('name', 'ShiftLeft');
          keyButton.textContent = 'Shift ';
          break;
        case 'ShiftRight':
          keyButton.setAttribute('name', 'ShiftRight');
          keyButton.textContent = 'Shift ';
          break;

        case 'ControlLeft':
          keyButton.classList.add('ctrl');
          keyButton.setAttribute('name', 'ControlLeft');
          keyButton.textContent = 'Ctrl ';
          break;
        case 'ControlRight':
          keyButton.classList.add('ctrl');
          keyButton.setAttribute('name', 'ControlRight');
          keyButton.textContent = 'Ctrl ';
          break;

        case 'Delete':
          keyButton.setAttribute('name', 'Delete');
          keyButton.textContent = 'Del';
          keyButton.addEventListener('click', () => {
            this.textfield.value = this.textfield.value.substring(
              0,
              this.textfield.selectionEnd,
            );
            this.textfield.focus();
          });
          break;

        case 'ArrowLeft':
          keyButton.innerHTML = '&#5130';
          keyButton.setAttribute('name', 'ArrowLeft');
          keyButton.addEventListener('click', () => {
            const end = this.textfield.selectionEnd;
            this.textfield.selectionEnd = end - 1;
            this.textfield.focus();
          });
          break;
        case 'ArrowRight':
          keyButton.innerHTML = '&#5125';
          keyButton.setAttribute('name', 'ArrowRight');
          keyButton.addEventListener('click', () => {
            const end = this.textfield.selectionStart;
            this.textfield.selectionStart = end + 1;
            this.textfield.focus();
          });
          break;
        case 'ArrowUp':
          keyButton.innerHTML = '&#5123';
          keyButton.setAttribute('name', 'ArrowUp');
          break;
        case 'ArrowDown':
          keyButton.innerHTML = '&#5121';
          keyButton.setAttribute('name', 'ArrowDown');
          break;
        case 'Alt':
          keyButton.setAttribute('name', 'Alt');
          break;
        case 'Meta':
          keyButton.setAttribute('name', 'Meta');
          keyButton.innerHTML = 'Win';
          break;
        case 'Backspace':
          keyButton.classList.add('backspace');
          keyButton.addEventListener('click', () => {
            this.textfield.value = this.textfield.value.substring(
              0,
              this.textfield.selectionEnd - 1,
            );
            this.textfield.focus();
          });
          break;

        default:
          keyButton.addEventListener('click', () => {
            this.textfield.value += keyButton.innerHTML;
            this.textfield.focus();
          });

          break;
      }
      this.keyPress(keyButton);
    });
  }

  keyPress(key) {
    document.addEventListener('keydown', (e) => {
      for (const item of this.keys) {
        if (
          e.key.toLowerCase() === item.textContent.toLowerCase()
          || e.code === item.getAttribute('name')
        ) {
          item.classList.add('active');
          if (e.getModifierState('CapsLock')) {
            for (const item of this.keys) {
              item.textContent.length < 2
                ? (item.textContent = item.textContent.toUpperCase())
                : (item.textContent = item.textContent);
              const round = document.createElement('div');
              round.classList.add('round');
              round.classList.add('active');
              item.append(round);
            }
          } else {
            for (const item of this.keys) {
              item.textContent.length < 2
                ? (item.textContent = item.textContent.toLowerCase())
                : (item.textContent = item.textContent);
            }
          }
        }
      }
    });
    document.addEventListener('keyup', (e) => {
      key.classList.remove('active');
    });
  }

  changeLang(key) {
    const ruKeys = [
      ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ'],
      ['ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э'],
      ['я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю'],
    ];
    const engKeys = [
      ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
      ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'"],
      ['\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.'],
    ];
    document.addEventListener('keydown', (e) => {
      if (e.shiftKey && e.altKey) {
        if (this.language === 'EN') {
          for (let i = 15, k = 0; i < 27; i += 1) {
            if (this.keys[i].textContent.length === 1) {
              this.keys[i].textContent = ruKeys[0][k];
            }
            k += 1;
          }
          for (let i = 30, k = 0; i < 42; i += 1) {
            if (this.keys[i].textContent.length === 1) {
              this.keys[i].textContent = ruKeys[1][k];
            }
            k += 1;
          }
          for (let i = 43, k = 0; i < 52; i += 1) {
            if (this.keys[i].textContent.length === 1) {
              this.keys[i].textContent = ruKeys[2][k];
            }
            k += 1;
          }

          this.language = 'RU';
        } else {
          for (let i = 15, k = 0; i < 27; i += 1) {
            if (this.keys[i].textContent.length === 1) {
              this.keys[i].textContent = engKeys[0][k];
            }
            k += 1;
          }
          for (let i = 30, k = 0; i < 42; i += 1) {
            if (this.keys[i].textContent.length === 1) {
              this.keys[i].textContent = engKeys[1][k];
            }
            k += 1;
          }
          for (let i = 43, k = 0; i < 52; i += 1) {
            if (this.keys[i].textContent.length === 1) {
              this.keys[i].textContent = engKeys[2][k];
            }
            k += 1;
          }
          this.language = 'EN';
        }
      }
    });
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const a = new Keyboard();
  a.initKeyboard();
});
