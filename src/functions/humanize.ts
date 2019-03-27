export function humanize(name: string) {
    return (name || '')
        .replace(/^./, (str) => str.toUpperCase())
        .replace(/([a-z])([A-Z])/g, '$1 $2');
}
