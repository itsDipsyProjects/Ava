export class Input {

    constructor() {
        this.KeyCode = {
            W: false,
            A: false,
            S: false,
            D: false,
        };

        window.addEventListener("keydown", (event) => {
            switch (event.key.toLowerCase()) {
                case "w": this.KeyCode.W = true; break;
                case "a": this.KeyCode.A = true; break;
                case "s": this.KeyCode.S = true; break;
                case "d": this.KeyCode.D = true; break;
            }
        });

        window.addEventListener("keyup", (event) => {
            switch (event.key.toLowerCase()) {
                case "w": this.KeyCode.W = false; break;
                case "a": this.KeyCode.A = false; break;
                case "s": this.KeyCode.S = false; break;
                case "d": this.KeyCode.D = false; break;
            }
        });
    }

    is_key_pressed(code) {
        return this.KeyCode[code];
    }
}