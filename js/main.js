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
   