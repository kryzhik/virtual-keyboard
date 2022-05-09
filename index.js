class Keyboard {
   constructor() {
      this.capslock = false;
      this.keyboard = null;
      this.textfield = null;
      this.keys = [];
   }
  initKeyboard() {
     let main, textfield;
     main = document.createElement('div');
     this.keyboard = document.createElement('div');
     this.textfield = document.createElement('textarea');
     this.keyboard.classList.add('keyboard');
     main.classList.add('main');
     this.textfield.classList.add('textfield');
     document.body.append(main);
     main.append(this.textfield, this.keyboard);
     this.textfield.setAttribute('cols', '150');
     this.textfield.focus();
     this.initKeys(); 
  }
  initKeys() {
        let keyButtons = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'ShiftLeft','\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'Meta', 'Alt', ' ', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
        keyButtons.forEach(k => {
        let keyButton = document.createElement('button');
        keyButton.classList.add('key');
        keyButton.setAttribute('type', 'button');
        
        keyButton.textContent = k;
        this.keys.push(keyButton);
        this.keyboard.append(keyButton);
        
        switch (k) {
           case 'CapsLock':
              keyButton.classList.add('capslock');
              keyButton.addEventListener('click', (e)=> {
                 if (this.capslock === false) {
                    this.capslock = true;
                    
                 }
                 else {
                    this.capslock = false;
                    
                 }
              this.textfield.focus(); 
              if (this.capslock === true) {
                 for (let item of this.keys) {
                    item.textContent.length < 2 ? item.textContent = item.textContent.toUpperCase(): item.textContent = item.textContent;
                    
                 }
                 let round = document.createElement('div');
                 round.classList.add('round');
                 round.classList.add('active');
                 keyButton.append(round);
              } 
              else{
                 for (let item of this.keys) {
                    item.textContent.length < 2 ? item.textContent = item.textContent.toLowerCase(): item.textContent = item.textContent;
                    
                 } 
              }
              
              });
              
           break;
              
           case 'Enter':
              keyButton.classList.add('enter');
              keyButton.addEventListener('click', ()=> {
                 this.textfield.value += '\n';
                 this.textfield.focus();
              });
              
           break;

           case ' ':
           keyButton.classList.add('space');
           
           keyButton.addEventListener('click', ()=> {
              textfield.value += ' ';
              textfield.focus();
           });
           break;

           case 'Tab':
              keyButton.classList.add('tab');
              keyButton.addEventListener('click', ()=> {
                 textfield.value += '   ';
                 textfield.focus();
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

           case "ControlLeft":
              keyButton.classList.add('ctrl');
              keyButton.setAttribute('name', 'ControlLeft');
              keyButton.textContent = 'Ctrl ';
              break;
           case "ControlRight":
              keyButton.classList.add('ctrl');
              keyButton.setAttribute('name', 'ControlRight');
              keyButton.textContent = 'Ctrl ';
              break;
           
           case 'Delete':
              keyButton.setAttribute('name', 'Delete');
              keyButton.textContent = 'Del';
              keyButton.addEventListener('click',()=> {
                 this.textfield.value = this.textfield.value.substring(0, this.textfield.selectionEnd);
                 this.textfield.focus();
              });
              break;
           
           case 'ArrowLeft':
              keyButton.innerHTML = `<i class="large material-icons">keyboard_arrow_left</i>`;
              keyButton.addEventListener('click', ()=> {
                 const end = this.textfield.selectionEnd;
                 this.textfield.selectionEnd = end - 1;
                 this.textfield.focus()
              });
              break;
              case 'ArrowRight':
              keyButton.innerHTML = `<i class="large material-icons">keyboard_arrow_right</i>`;
              keyButton.addEventListener('click', ()=> {
                 const end = this.textfield.selectionStart;
                 this.textfield.selectionStart = end + 1;
                 this.textfield.focus()
              });
              break;
              case 'ArrowUp':
              keyButton.innerHTML = `<i class="large material-icons">keyboard_arrow_left</i>`;
              break;
              case 'ArrowDawn':
              keyButton.innerHTML = `<i class="large material-icons">keyboard_arrow_left</i>`;
              break;
              case 'Backspace':
           keyButton.classList.add('backspace');
           keyButton.addEventListener('click',()=> {
              this.textfield.value = this.textfield.value.substring(0, this.textfield.selectionEnd-1);
              this.textfield.focus();
           });
           break;

           default:
           keyButton.addEventListener('click', ()=> {
           this.textfield.value += keyButton.innerHTML;
           this.textfield.focus();
           });
           
           break;   
              
        }
           this.keyPress(keyButton);
           
        }) 
  }

  keyPress(key) {
     document.addEventListener('keydown', (e)=> {
         
        for (let item of this.keys) {
           if (e.key.toLowerCase() === item.textContent.toLowerCase() || e.code === item.getAttribute('name')) {
           item.classList.add('active');
           if (e.getModifierState('CapsLock')) {
              for (let item of this.keys) {
                 item.textContent.length < 2 ? item.textContent = item.textContent.toUpperCase(): item.textContent = item.textContent;
                 
              }
           } else {
              for (let item of this.keys) {
                 item.textContent.length < 2 ? item.textContent = item.textContent.toLowerCase(): item.textContent = item.textContent; 
              } 
           }
              }    
           }
        })
     document.addEventListener('keyup', (e)=> {
        key.classList.remove('active');
     })
     }

     changeLang(key) {
        let ruKeys = [ 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.']
        let flag = false;
        document.addEventListener('keyup', (e)=> {
           if (e.code == 'ShiftLeft' || e.code == 'ShiftRight') flag = true ;
           if (e.code == 'AltLeft' || e.code == 'AltRight') {
              for (let i = 15; i < this.keys.length; i++) {
                 if (this.keys[i].textContent.length < 2)
                 this.keys[i].textContent = ruKeys[i-15];
              }
              flag = false;
              console.log('done')
           }
        })
     }
}
let a = new Keyboard();
a.initKeyboard();


