  const search = document.getElementById('socialSearch');
const scope = document.getElementById('socialScope');

function applyFilter() {

    const q = (search.value || '').trim().toLowerCase();
    const s = scope.value;

    document.querySelectorAll('.social-card').forEach(card => {

        const name = (card.getAttribute('data-name') || '').toLowerCase();
        const handle = (card.getAttribute('data-handle') || '').toLowerCase();
        const type = (card.getAttribute('data-type') || '').toLowerCase();

        const matchesText =
            !q ||
            name.includes(q) ||
            handle.includes(q);

        const matchesScope =
            s === 'all' ||
            type === s;

        // hide/show the COLUMN not the card
        const col = card.closest('.col-md-6');

        if (col) {
            col.style.display =
                (matchesText && matchesScope)
                    ? ''
                    : 'none';
        }

    });

    // hide empty groups
    document.querySelectorAll('.socials-group').forEach(group => {

        const visibleCards = [
            ...group.querySelectorAll('.col-md-6')
        ].some(col => col.style.display !== 'none');

        group.style.display =
            visibleCards
                ? ''
                : 'none';

    });

}

search.addEventListener('input', applyFilter);
scope.addEventListener('change', applyFilter);

applyFilter();