const x_class = 'x';
const cricle_class = 'circle'
const CellElements = document.querySelectorAll('[data-cell]');
CellElements.forEach(cell=>{
    cell.addEventListener('click', handleClick, {once:true})
})
function handleClick(e){
    console.log('clicked')
}