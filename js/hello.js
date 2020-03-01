function plus(a, b) {
    return a + b;
}

function print_log(str_name) {
    console.log(`hello.js, print_log, str_name: ${str_name} `);
    console.log(`hello.js, plus(3,4):` + plus(3, 4));
}

function start_vue(str_name) {
    if (str_name == null) {
        str_name = `(記得在HTTP網址設定 str_name 變數喔)`;
    }
    Vue.component('button-counter', {
        data: function () {
            return {
                count: 0
            }
        },
        template: `
            <button v-on:click="count++">
                You clicked me {{ count }} times.
            </button>
        `
    })
    new Vue({
        el: `#vue_block`,
        data: {
            message: `Hello Vue! Hi: ${str_name}`
        }
    });
}

function main() {
    let str_name = `我是一隻🐲`;
    if (typeof process !== `undefined`) {
        if (process.argv.length > 2) {
            str_name = process.argv[2]
        }
    } else {
        let url_search_params = new URLSearchParams(window.location.search);
        str_name = url_search_params.get(`str_name`);
        start_vue(str_name);
    }
    print_log(str_name);
}


main();
