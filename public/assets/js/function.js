function openModalNewTache() {
    $("#newTache").modal("show")

    document.querySelector("#form-tache").setAttribute("action", "/project/task/create/" + proje_id)

    fetch("/user/get_all_project_manager").then(resp => resp.json())
        .then(data => {
            // console.log(data);
            let option = ""
            if (data.length > 0) {
                for (let manager of data) {
                    option += `<option value="${manager.id}">${manager.fullname}</option>`
                }
            }

            document.querySelector("#list_scroll_manager").innerHTML = option
        })

}

function openModalNewSubTask(event) {
    $("#newSubTask").modal("show")

    // console.log(event.dataset.projectId);

    let proje_id = event.dataset.projectId

    console.log(proje_id);

    document.querySelector("#form-soustache").setAttribute("action", "/task/subtask/create/" + proje_id + "/" + task_id)

    fetch("/user/get_all_project_manager").then(resp => resp.json())
        .then(data => {
            // console.log(data);
            let option = ""
            if (data.length > 0) {
                for (let manager of data) {
                    option += `<option value="${manager.id}">${manager.fullname}</option>`
                }
            }

            document.querySelector("#list_scroll_manager_subtask").innerHTML = option
        })

}

function dragMoveListener(event) {
    var target = event.target
    // keep the dragged position in the data-x/data-y attributes
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

    // translate the element
    target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

    // update the posiion attributes
    target.setAttribute('data-x', x)
    target.setAttribute('data-y', y)
}

function openTask(id, path) {
    $("#modalDetailTache").modal("show")

    //openTache(${tache.id}, '/projet/tache/getById/')

    fetch(path + id).then(resp => resp.json())
        .then(data => {
            // console.log(data);
            document.querySelector("#titre").innerHTML = data.name
            document.querySelector("#desc").innerHTML = data.description
            document.querySelector("#date").innerHTML = "Date de création : " +data.createdAt
            document.querySelector("#estimation").innerHTML = "Estimation : " +data.estimation +" jour"
            let prof = `
            <img src="${data.user.photo}"/> ${data.user.fullname} ${data.user.roles} 
            `
            document.querySelector("#contributor").innerHTML = "Contributeur : " +prof
            
            // console.log(data);
        })
}

function updateTask(id_tache, status) {
    fetch('/project/update/' + id_tache + '/' + status, {
        method: 'POST',
        // headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json'
        // },
        // body: JSON.stringify({ a: 1, b: 'Textual content' })
    });
}

function updateSubTask(id_tache, status) {
    fetch('/task/update-subtask/' + id_tache + '/' + status, {
        method: 'POST',
        // headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json'
        // },
        // body: JSON.stringify({ a: 1, b: 'Textual content' })
    });
}