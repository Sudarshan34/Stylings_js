
const para = document.getElementById('para');
const Select_color = document.getElementById('Select_color');
const bg_Select_color = document.getElementById('bg_Select_color');
const select_padding = document.getElementById('select_padding');
const select_fontSize = document.getElementById('select_fontSize');
const select_fontWeight = document.getElementById('select_fontWeight');


Select_color.addEventListener('change', () => {
    para.style.color = Select_color.value;
});

bg_Select_color.addEventListener('change', () => {
    para.style.backgroundColor = bg_Select_color.value;
});

select_padding.addEventListener('change', () => {
    para.style.padding = select_padding.value;
});

select_fontSize.addEventListener('change', () => {
    para.style.fontSize = select_fontSize.value;
});

select_fontWeight.addEventListener('change', () => {
    para.style.fontWeight = select_fontWeight.value;
});
