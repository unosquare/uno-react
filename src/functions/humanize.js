export function humanize(name) {
    return (name || '').replace(/([a-z])([A-Z])/g, '$1 $2');
}
