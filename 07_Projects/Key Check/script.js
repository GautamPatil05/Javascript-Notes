// console.log("hello");

const table = document.querySelector('#table')

window.addEventListener('keydown', (e) => {

    table.innerHTML = `
    <div class="table">
    <table style="table-layout: auto;"">
    <tr>
    <th>Key</th>
    <th>Code</th>
    </tr>

    <tr>
    <td>${e.key === " " ? "Space": e.key}</td>
    <td>${e.code}</td>
    </tr>
    </table>
    </div>
    `
})