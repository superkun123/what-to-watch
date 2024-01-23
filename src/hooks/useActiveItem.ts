import { ref } from "vue"

export function useActiveItem(defaultValue:number = 0) {
    const activeElemIndex = ref<number>(defaultValue)

    const highlightActiveElem = (itemIndex:number) => {
        activeElemIndex.value = itemIndex
    }

    return { activeElemIndex, highlightActiveElem }
}