/*! https://github.com/FranBar1966/bootstrap-5-modal-close-on-back - Licensed under MIT */

// Problems getting window.location.hash in firefox, then use historyOpenModals
var historyOpenModals = [];
var skipModalHiddenEvent = false;
var skipModalHashChangeEvent = false;

window.addEventListener('show.bs.modal', (ev) => {
    // sequential only
    if (!(ev.target.id in historyOpenModals)) {
        historyOpenModals.push(ev.target.id);
        window.history.pushState(null, null, '#' + ev.target.id);
    }
});

window.addEventListener('hide.bs.modal', (ev) => {
    if (skipModalHiddenEvent) {
        skipModalHiddenEvent = false;
        return;
    }

    // if close modal on close button
    skipModalHashChangeEvent = true
    window.history.go(-1);
    historyOpenModals.pop(ev.target.id);
});

window.addEventListener('hashchange', (ev) => {
    if (skipModalHashChangeEvent) {
        skipModalHashChangeEvent = false;
        return;
    }

    // if close modal on back button
    const lastModalId = historyOpenModals.at(-1);
    if (lastModalId) {
        const modal = bootstrap.Modal.getInstance('#' + lastModalId);
        if (modal) {
            skipModalHiddenEvent = true
            historyOpenModals.pop(lastModalId);
            modal.hide();
        }
    }
});
