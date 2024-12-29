document.addEventListener("DOMContentLoaded", () => {
   
    const keyboardSelector = document.getElementById("keyboard-type");
    const tklKeyboard = document.getElementById("tkl-keyboard");
    const fullKeyboard = document.getElementById("full-keyboard");

    
    keyboardSelector.addEventListener("change", (e) => {
        const selectedKeyboard = e.target.value;
        if (selectedKeyboard === "tkl") {
            tklKeyboard.style.display = "block";
            fullKeyboard.style.display = "none";
        } else {
            tklKeyboard.style.display = "none";
            fullKeyboard.style.display = "block";
        }
    });
    //TODO AGREGAR LAS FALTANTES DEL TKL 
    // Función para mapear las teclas especiales 
    const specialKeyMap = {
        " ": "SPACE",
        "CapsLock": "CAPSLOCK",
        "Shift": "SHIFT",
        "Control": "CTRL",
        "Alt": "ALT",
        "Meta": "WIN", 
        "Enter": "ENTER",
        "Backspace": "BACKSPACE",
        "Escape": "ESC",
        "Delete": "DEL", 
        "ArrowUp": "UP",
        "ArrowDown": "DOWN",
        "ArrowLeft": "LEFT",
        "ArrowRight": "RIGHT",
    };

    // Escuchar las teclas presionadas
    document.addEventListener("keydown", (event) => {
        const key = event.key;

        // Comprobar si la tecla es especial y mapearla
        const mappedKey = specialKeyMap[key] || key.toUpperCase();

        const allKeys = document.querySelectorAll("button[data-key]");
        allKeys.forEach((btn) => {
            if (btn.getAttribute("data-key").toUpperCase() === mappedKey) {
                btn.style.backgroundColor = "#00adb5"; // Cambiar color al presionar
                btn.style.color = "#1e1e1e";
            }
        });

        
        if (event.getModifierState("CapsLock")) {
            const capsLockButton = document.querySelector("button[data-key='CAPSLOCK']");
            if (capsLockButton) {
                capsLockButton.style.backgroundColor = "#00adb5";
                capsLockButton.style.color = "#1e1e1e";
            }
        }
    });

    // Restaurar el color al soltar la tecla
    document.addEventListener("keyup", (event) => {
        const key = event.key;
        const mappedKey = specialKeyMap[key] || key.toUpperCase();

        const allKeys = document.querySelectorAll("button[data-key]");
        allKeys.forEach((btn) => {
            if (btn.getAttribute("data-key").toUpperCase() === mappedKey) {
                btn.style.backgroundColor = "#222831"; // Restaurar color
                btn.style.color = "#eeeeee";
            }
        });
    });

    document.addEventListener("keydown", (event) => {
        if (event.getModifierState("CapsLock")) {
            const capsLockButton = document.querySelector("button[data-key='CAPSLOCK']");
            if (capsLockButton) {
                capsLockButton.style.backgroundColor = "#00adb5";
                capsLockButton.style.color = "#1e1e1e";
            }
        }
    });
});
