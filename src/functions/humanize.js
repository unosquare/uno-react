export function humanize(name) {
    return (name || '').replace(/^./, (str) => str.toUpperCase()).replace(/([a-z])([A-Z])/g, '$1 $2');
}
