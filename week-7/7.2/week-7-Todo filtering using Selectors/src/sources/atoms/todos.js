import { atom, selector } from "recoil";

export const todoAtom = atom({
    key: "todoAtom",
    default: []
});

export const searchAtom = atom({
    key: "serchAtom",
    default: ""
});

export const filterSelector = selector({
    key: 'filterSelector',
    get: (({get})=>{
        const todo = get(todoAtom);
        const search = get(searchAtom)
        return todo.filter((data)=>data.includes(search));
    })
})