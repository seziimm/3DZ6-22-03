const btn = document.querySelector('.btn')
const block = document.querySelector('.block')
const btn_prev = document.querySelector('.btn-prev')
let num = 0;
let result = []

const query = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then((json) => {
            console.log(json[num])
            for (let elem of json) {
                result.push(elem)
            }
            console.log(result);
            block.innerHTML = `
                <div class="card">
                    <h3>${json[num].title}</h3>
                    <h3>${json[num].completed}</h3>
                    <h3>${json[num].id}</h3>
                </div>            
            `
        })
    btn.onclick = () => {
        if (num < 200) {
            num++;
            block.innerHTML = `
        <div class="card">
                    <h3>${result[num].title}</h3>
                    <h3>${result[num].completed}</h3>
                    <h3>${result[num].id}</h3>
        </div>     
        `
        }

    }
    btn_prev.onclick = () => {
        if (num > 0) {
            num--;
            block.innerHTML = `
        <div class="card">
                    <h3>${result[num].title}</h3>
                    <h3>${result[num].completed}</h3>
                    <h3>${result[num].id}</h3>
        </div>     
        `
        }
    }
}
query()


fetch( 'https://jsonplaceholder.typicode.com/posts' )
    .then((response) => response.json())
    .then((json) => {
        json.forEach(posts => console.log(posts.title))
    })

