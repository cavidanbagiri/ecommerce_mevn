
export default {
    beforeMount:(el, binding)=>{
        el.style.fontSize = binding.value+'px';
    }
}
