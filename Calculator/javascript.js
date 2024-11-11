    let screen = document.getElementById("input")

        function input(x) {
            screen.value = screen.value + x;
        }

        function allclear() {
            screen.value = '';
        }

        function Del() {
            screen.value = screen.value.slice(0, -1);
        }

        function equal() {
            try {
                screen.value = eval(screen.value);
            }
            catch {
                screen.value = 'Error';
            }
        }
