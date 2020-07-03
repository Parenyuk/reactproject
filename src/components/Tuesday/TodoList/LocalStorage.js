
export const saveStateToLocalStorage = (state) => {
    // переводим объект в строку
    let stateAsString = JSON.stringify(state);
    // сохраняем нашу строку в localStorage под ключом "our-state"
    localStorage.setItem("our-state", stateAsString);
}

export const restoreState = () => {
    // объявляем наш стейт стартовый
    let state = {
        tasks: [],
        filterValue: "All"
    };

    // считываем сохранённую ранее строку из localStorage
    let stateAsString = localStorage.getItem("our-state");
    // а вдруг ещё не было ни одного сохранения?? тогда будет null.
    // если не null, тогда превращаем строку в объект
    if (stateAsString != null) {
        state = JSON.parse(stateAsString);
    }
    // устанавливаем стейт (либо пустой, либо восстановленный) в стейт
    this.setState(state, () => {
        this.state.tasks.forEach(t => {
            if (t.id >= this.nextTaskId) {
                this.nextTaskId = t.id + 1;
            }
        })
    });
}