var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Api {
    constructor(url) {
        this.url = url;
    }
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            return fetch(this.url)
                .then((res) => res.json())
                .then((data) => data)
                .catch((err) => console.error("erreur survenue", err));
        });
    }
}
export class UsersApi extends Api {
    constructor(url) {
        super(url);
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.get();
        });
    }
}
