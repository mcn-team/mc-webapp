import { Common } from './common';

const STORAGE_PREFIX_KEY = 'mc.';

export class LocalStorage {
    static hasItem(key) {
        return Boolean(Common.isNullOrUndefined(localStorage.getItem(STORAGE_PREFIX_KEY + key)));
    }

    static getItem(key) {
        return localStorage.getItem(STORAGE_PREFIX_KEY + key) && JSON.parse(localStorage.getItem(STORAGE_PREFIX_KEY + key));
    }

    static setItem(key, data) {
        localStorage.setItem(STORAGE_PREFIX_KEY + key, JSON.stringify(data))
    }

    static removeItem(key) {
        localStorage.removeItem(STORAGE_PREFIX_KEY + key);
    }
}

export class SessionStorage {
    static hasItem(key) {
        return Boolean(Common.isNullOrUndefined(sessionStorage.getItem(STORAGE_PREFIX_KEY + key)));
    }

    static getItem(key) {
        return sessionStorage.getItem(STORAGE_PREFIX_KEY + key) && JSON.parse(sessionStorage.getItem(STORAGE_PREFIX_KEY + key));
    }

    static setItem(key, data) {
        sessionStorage.setItem(STORAGE_PREFIX_KEY + key, JSON.stringify(data))
    }

    static removeItem(key) {
        sessionStorage.removeItem(STORAGE_PREFIX_KEY + key);
    }
}
