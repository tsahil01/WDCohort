function getFirstEle <T> (arr: T[]) : T{
    return arr[0];
}

const ele1 = getFirstEle <string> (["sahil", "tiwaskar"])
const ele2 = getFirstEle <number> ([1, 3, 5])