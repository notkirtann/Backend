const tasks ={
    tasks:[{
        text: 'g',
        completed: true
    },{
        text: 'q',
        completed: false
    },{ 
        text: 'y',
        completed: false
    }],
    getTaskToDo(){
        const answers = this.tasks.filter((element)=>{
            return element.completed===false
        })
        return answers
    }
}

console.log(tasks.getTaskToDo());
