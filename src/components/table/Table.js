import {ExcelComponent} from '@core/ExcelComponent'
import {shouldResizing} from './functions'
import {resizing} from './resizing'
import {createTable} from './table.template'

export class Table extends ExcelComponent {
    static className = 'excel__table'

    constructor($root) {
        super($root, {
            listeners: ['mousedown']
        })
    }

    toHtml() {
        return createTable(20)
    }

    onMousedown(event) {
        if (shouldResizing(event)) {
            resizing(event, this.$root)
        }
    }
}
