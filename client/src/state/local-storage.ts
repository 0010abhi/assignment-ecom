export function setLocalStorage(key: string, value: string) {
    window.localStorage.setItem(key, value);
}

export function getValueFromLocalStorage(key: string) {
    return window.localStorage.getItem(key);
}