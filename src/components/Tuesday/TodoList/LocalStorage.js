
export const saveStateToLocalStorage = (state, key) => {
    // переводим объект в строку
    let stateAsString = JSON.stringify(state);
    // сохраняем нашу строку в localStorage под ключом "our-state"
    localStorage.setItem(key, stateAsString);
}

export const restoreStateLocalStorage = (key, defState) => {
    // объявляем наш стейт стартовый

    let state = defState;
    // считываем сохранённую ранее строку из localStorage
    let stateAsString = localStorage.getItem(key);
    // а вдруг ещё не было ни одного сохранения?? тогда будет null.
    // если не null, тогда превращаем строку в объект
    if (stateAsString != null) {
        state = JSON.parse(stateAsString);
    }
    return state;
    // устанавливаем стейт (либо пустой, либо восстановленный) в стейт
}