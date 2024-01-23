import {atom, selector} from 'recoil'

export const countAtom = atom({
    key: "countAtom", // uniquely identify the atom
    default: 0 // default value
});

export const evenSelector = selector({
    key:"evenSelector",
    get: ((props)=> {
        const count = props.get(countAtom);
        return count % 2;
    })
})