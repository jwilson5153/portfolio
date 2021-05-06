/* Obtain Dynamic Table of Contents */
const link_listURL = 'json/link_list.json'
fetch(link_listURL)
    .then(function (response) {
        return response.json();
    
    })
    .then(function (jsonObject) {
        const link_list = jsonObject['link_list'];
        link_list.forEach(item => {
            const menu_link  = document.createElement("li"); 
            const link_list = document.querySelector("#link_list");
            menu_link.innerHTML = `<a href="${item.url}">  ${item.label}</a>`;
            link_list.append(menu_link);

        })
    })
    /* Notes */
    function loadWeekNotes() {
        var notes = document.getElementById('week').value;
        var notesHTML = localStorage.getItem(notes);
        document.getElementById('notes_editor').value = notesHTML;

    }
    function saveWeekNotes() {
        var notes = document.getElementById('week').value;
        var notesHTML = document.getElementById('notes_editor').value;
        localStorage.setItem(notes, notesHTML);
    }
    function displayWeekNotes() {
        var notesHTML = document.getElementById('notes_editor').value;
        document.getElementById('notes_display').innerHTML = notesHTML;
    }  
    /* QA */
    function loadWeekQA() {
        var qa = document.getElementById('week').value;
        var qaHTML = localStorage.getItem(qa);
        document.getElementById('qa_editor').value = qaHTML;

    }
    function saveWeekQA() {
        var qa = document.getElementById('week').value;
        var qaHTML = document.getElementById('qa_editor').value;
        localStorage.setItem(qa, qaHTML);
    }
    function displayWeekQA() {
        var qaHTML = document.getElementById('qa_editor').value;
        document.getElementById('qa_display').innerHTML = qaHTML;
    }   
    /* Code */   
    function loadWeekCode() {
        var code = document.getElementById('week').value;
        var codeHTML = localStorage.getItem(code);
        document.getElementById('code_editor').value = codeHTML;

    }
    function saveWeekCode() {
        var code = document.getElementById('week').value;
        var codeHTML = document.getElementById('code_editor').value;
        localStorage.setItem(code, codeHTML);
    }
    function displayWeekCode() {
        var codeHTML = document.getElementById('code_editor').value;
        document.getElementById('code_display').innerHTML = codeHTML;
    }   