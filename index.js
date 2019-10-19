class Paginator {
    constructor(data, numberItemPerPage) {
        this._data = data
        this._numberItemPerPage = numberItemPerPage
        this._currentPage = 1
    }

    set data(newData) {
        this._data = newData;
    }
    set numberItemPerPage(newNumberItemPerPage) {
        this._numberItemPerPage = newNumberItemPerPage;
    }

    get data() {
        return this._data;
    }
    get numberItemPerPage() {
        return this._numberItemPerPage;
    }
    page(number) {
        let checkPagesNumber = Math.ceil(this._data.length / this._numberItemPerPage)
        if (number > checkPagesNumber || number <= 0) {
            return "Page Number is incorrect"
        } else {
            let dataStartIndex = (number * this._numberItemPerPage) - this._numberItemPerPage
            let newData = []
            for (let i = dataStartIndex; i < dataStartIndex + this._numberItemPerPage; i++) {
                if (typeof this._data[i] === 'undefined') {
                    break;
                } else {
                    newData.push(this._data[i]);
                }
            }
            this._currentPage = number
            return newData
        }
    }
    lastPage() {
        let lastPageNumber = Math.ceil(this._data.length / this._numberItemPerPage)
        let dataStartIndex = (lastPageNumber * this._numberItemPerPage) - this._numberItemPerPage
        let newData = []
        for (let i = dataStartIndex; i < dataStartIndex + this._numberItemPerPage; i++) {
            if (typeof this._data[i] === 'undefined') {
                break;
            } else {
                newData.push(this._data[i]);
            }
        }
        this._currentPage = lastPageNumber
        return newData
    }
    firstPage() {
        let dataStartIndex = (1 * this._numberItemPerPage) - this._numberItemPerPage
        let newData = []
        for (let i = dataStartIndex; i < dataStartIndex + this._numberItemPerPage; i++) {
            if (typeof this._data[i] === 'undefined') {
                break;
            } else {
                newData.push(this._data[i]);
            }
        }
        this._currentPage = 1
        return newData
    }
    setItemsPerPage(number) {
        if (number <= 0) {
            return "Number is entered incorrect"
        } else {
            this._numberItemPerPage = number
            this._currentPage = 1
        }
    }
    setData(data) {
        this._data = data
        this._currentPage = 1
    }
    nextPage() {
        this._currentPage++
    }
    prevPage() {
        this._currentPage--
    }
    pages() {
        return Math.ceil(this._data.length / this._numberItemPerPage);
    }
    currentPage() {
        return this._currentPage
    }
}