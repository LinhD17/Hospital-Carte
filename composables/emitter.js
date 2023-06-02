import mitt from 'mitt'
export const emmiter = mitt()

export const handleClick = (e) => {
    emmiter.emit('handleClick', e)
}