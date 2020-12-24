import {storage} from '@core/utils';

function toHtml(key) {
    const model = storage(key)
    const link = key.replace(':', '/')

    return `
        <li class="db__record">
            <a href="#${link}">${model.title}</a>
            <strong>
                ${new Date(model.openedDate).toLocaleDateString()}
                ${new Date(model.openedDate).toLocaleTimeString()}
            </strong>
        </li>
    `
}

function getAllKeys() {
    const keys = []
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        if (!key.includes('excel')) {
            continue
        }
        keys.push(key)
    }

    return keys
}

export function createRecordsTable() {
    const keys = getAllKeys()
    if (!keys.length) {
        return `<p>No records</p>`
    }

    return `
        <div class="db__list-header">
            <span>Name table</span>
            <span>Date open</span>
        </div>

        <ul class="db__list">
            ${keys.map(toHtml).join('')}
        </ul>
    `
}
