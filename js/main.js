function logEntry(message) {
    let $sel = $('#hst').find('ul.log');
    let html = `<li>${message}</li>`;
    if ($sel.find('li').length > 0) {
        $sel.find('li:eq(0)')
            .before(html);
    } else {
        $sel.append(html);
    }
}

function genNewTask() {
    $('#tsk').html(
        window.numberman
            .gen()
            .task
    );
}

function btnPress(e) {
    if (e.keyCode === 13) { // Enter
        let $inp = $('#input-inp');
        let curr = parseInt($inp.val().trim());
        if (window.numberman.answer === curr) {
            $inp.val('');
            logEntry(curr);
            genNewTask();
        }
    }
}

$( document ).ready(function() {
    $('#input-inp').keypress(btnPress);

    window['numberman'] = new Numberman();
    genNewTask()
});