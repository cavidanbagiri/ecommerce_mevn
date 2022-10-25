
export const FontSize = {
    beforeMount:(el, binding)=>{
        el.style.fontSize = binding.value+'px';
    }
}

export const Focus = {
    mounted: (el, binding) => {
      el.focus();
    },
  };
  