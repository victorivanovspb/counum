function logEntry(message) {
    $('#hst')
        .find('ul.log li:eq(0)')
        .before(`<li>${message}</li>`);
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