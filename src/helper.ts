export function debounce(func: Function, wait: number, immediate: Boolean = false) {
    let timeout: any;
    return function () {
        const context = this
        let args = arguments;
        let later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

type animation = "scale-in" | "fade-slide-up";
export let observer = (animation: animation, rootMargin: string = "5px"): IntersectionObserver => new IntersectionObserver((entries: any[]) => {
    entries.forEach(entry => {
        entry.target.classList.toggle(animation, entry.isIntersecting)
    });
}, {
    root: null,
    rootMargin: rootMargin,
    threshold: 0
});