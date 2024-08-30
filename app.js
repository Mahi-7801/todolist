let submitbtn=document.getElementById('submit');
submitbtn.addEventListener('click',()=>{
    // event.preventDefault();
    let inputinfo=document.getElementById('inputEl');
    if(!inputinfo.value){
        alert('place enter to do list')
    }else{
        let tasklist=inputinfo.value.trim();
    // local storage getitem //
    let task=localStorage.getItem('task')?JSON.parse(localStorage.getItem('task')):[];
    task.unshift(tasklist);
    // local storage setitem //
    localStorage.setItem('task',JSON.stringify(task));
    showinfo();
    window.reload;
    }
});

function showinfo(){
    let showdata=document.getElementById('showinfo');
    let task=localStorage.getItem('task')?JSON.parse(localStorage.getItem('task')):[];
    if(task.length!==0){
        let eachitem='';
        for (const taskinfo of task) {
                eachitem +=`<li class="list-group-item list-group-item-action list-group-item-success d-flex justify-content-between">
                            <span class="font-weight-bold">${taskinfo}</span>
                           <div class="icon">
                              <i class="bi bi-x-circle-fill"></i>
                           </div>
                          </li>`;
        }
        showdata.innerHTML=eachitem;
    }
}
showinfo();

let listinfo=document.getElementById('showinfo');
listinfo.addEventListener('click',(event)=>{
    let targetEl=event.target;
    if(targetEl.classList.contains('bi-x-circle-fill')){
        let realitem=targetEl.parentElement.parentElement;
        let seleteditem=realitem.innerText;
        let task=localStorage.getItem('task')?JSON.parse(localStorage.getItem('task')):[];
        task=task.filter((task) => {
            return task.trim()!==seleteditem.trim();
        });
        console.log(task);
        localStorage.setItem('task',JSON.stringify(task));
        showinfo();
    }
})