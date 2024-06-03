document.addEventListener('DOMContentLoaded', () => {
    const defaultSearchOption = 'left';
    const selectedColumn = 'firstName';
    const defaultSortOption = 'asc';

    const radios = document.getElementsByName('search-option');
    for (const radio of radios) {
        if (radio.value === defaultSearchOption) {
            radio.checked = true;
            break;
        }
    }

    const columsRadios = document.getElementsByName('select-column');
    for (const radio of columsRadios) {
        if (radio.value === selectedColumn) {
            radio.checked = true;
            break;
        }
    }

    const sortRadios = document.getElementsByName('sort-option');
    for (const radio of sortRadios) {
        if (radio.value === defaultSortOption) {
            radio.checked = true;
            break;
        }
    }
});

const handleSorting = () => {
    var input = document.getElementById('searchInput');
    var filter = input.value.toLowerCase();
    const searchRadios = document.getElementsByName('search-option');
    const columnRadios = document.getElementsByName('select-column');
    const sortRadios = document.getElementsByName('sort-option');

    var table = document.getElementById('dataTable');
    var rows = Array.from(table.getElementsByTagName('tr'));
    var sortedData = document.getElementById('sortedData');
    sortedData.innerHTML = '';

    let searchOption, selectedColumn, sortOrder;

    for (const radio of searchRadios) {
        if (radio.checked) {
            searchOption = radio.value;
            break;
        }
    }

    for (const radio of columnRadios) {
        if (radio.checked) {
            selectedColumn = radio.value;
            break;
        }
    }

    for (const radio of sortRadios) {
        if (radio.checked) {
            sortOrder = radio.value;
            break;
        }
    }

    searchOption = searchOption ? searchOption : 'anywhere';
    selectedColumn = selectedColumn ? selectedColumn : 'firstName';
    sortOrder = sortOrder ? sortOrder : 'asc';

    let filteredRows = [];
    let totalAges = 0;
    let personCount = 0;
    let ageLessThan40Count = 0;
    let ageGreaterThan40Count = 0;

    for (var i = 1; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName('td');
        var lastName = cells[0].textContent || cells[0].innerText;
        var middleName = cells[1].textContent || cells[1].innerText;
        var firstName = cells[2].textContent || cells[2].innerText;
        var age = parseInt(cells[3].textContent || cells[3].innerText);
        var matched = false;

        switch (searchOption) {
            case 'left':
                matched = firstName.toLowerCase().startsWith(filter)
                break;
            case 'anywhere':
                matched = firstName.toLowerCase().includes(filter)
                break;
        }

        if (matched) {
            filteredRows.push(rows[i]);
            totalAges += age;
            personCount++;
            if (age < 40) {
                ageLessThan40Count++;
            } else {
                ageGreaterThan40Count++;
            }
        }
    }

    filteredRows.sort((a, b) => {
        var aText = (a.getElementsByTagName('td')[selectedColumnMap[selectedColumn]].textContent || a.getElementsByTagName('td')[selectedColumnMap[selectedColumn]].innerText).toLowerCase();
        var bText = (b.getElementsByTagName('td')[selectedColumnMap[selectedColumn]].textContent || b.getElementsByTagName('td')[selectedColumnMap[selectedColumn]].innerText).toLowerCase();

        if (selectedColumn === 'age') {
            aText = parseInt(aText);
            bText = parseInt(bText);
        }

        if (aText < bText) {
            return sortOrder === 'desc' ? -1 : 1;
        }
        if (aText > bText) {
            return sortOrder === 'asc' ? 1 : -1;
        }
        return 0;
    });

    for (const row of filteredRows) {
        var newRow = sortedData.insertRow();
        var cells = row.getElementsByTagName('td');
        for (var j = 0; j < cells.length; j++) {
            var newCell = newRow.insertCell(j);
            newCell.textContent = cells[j].textContent || cells[j].innerText;
        }
    }

    document.getElementById('totalAges').textContent = totalAges;
    document.getElementById('personCount').textContent = personCount;
    document.getElementById('ageLessThan40Count').textContent = ageLessThan40Count;
    document.getElementById('ageGreaterThan40Count').textContent = ageGreaterThan40Count;
}
const selectedColumnMap = {
    'lastName': 0,
    'middleName': 1,
    'firstName': 2,
    'age': 3
};


