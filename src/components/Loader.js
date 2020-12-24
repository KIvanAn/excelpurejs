import {$} from '../core/dom'

export function Loader() {
    return $.create('dav', 'loader').html(`
        <div class="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
        </div>
    `)
}
