// !Bold 
document.getElementById('bold_btn').addEventListener('click',function(b){
    const InputArea=document.getElementById('Input_data');
    if(InputArea.style.fontWeight=='bold'){
        InputArea.style.fontWeight='normal';
        b.classList.remove('active');
    }else{
        InputArea.style.fontWeight='bold';
        b.classList.add('active');
    }
})
// !italic
document.getElementById('italic_btn').addEventListener('click',function(I){
    const InputArea=document.getElementById('Input_data');
    if(InputArea.style.fontStyle=='italic'){
        InputArea.style.fontStyle='normal';
        I.classList.remove('active');
    }else{
        InputArea.style.fontStyle='italic';
        I.classList.add('active')
    }
})
// !UnderLine
document.getElementById('U_btn').addEventListener('click',function(U){
    const InputArea=document.getElementById('Input_data');
    if(InputArea.style.textDecoration=='underline'){
        InputArea.style.textDecoration='none';
        U.classList.remove('active');
    }else{
        InputArea.style.textDecoration='underline';
        U.classList.add('active');
    }
})


// !Left align 
document.getElementById('LeftAlign_btn').addEventListener('click',function(){
    const InputArea=document.getElementById('Input_data');
    InputArea.style.textAlign='left'
})
// !center align 
document.getElementById('CenterAlign_btn').addEventListener('click',function(){
    const InputArea=document.getElementById('Input_data');
    InputArea.style.textAlign='center'
})
// !Right align 
document.getElementById('RightAlign_btn').addEventListener('click',function(){
    const InputArea=document.getElementById('Input_data');
    InputArea.style.textAlign='right'
})
// !justify align 
document.getElementById('JustifyAlign_btn').addEventListener('click',function(){
    const InputArea=document.getElementById('Input_data');
    InputArea.style.textAlign='justify'
})
// !Case
document.getElementById('case').addEventListener('click',function(v){
    const InputArea=document.getElementById('Input_data');
    if(InputArea.style.textTransform=='uppercase'){
        InputArea.style.textTransform='none';
        v.classList.remove('active')
    }
    else{
        InputArea.style.textTransform='uppercase';
        v.classList.add('active')
    }
})
// !size
const textarea=document.getElementById('Input_data');
function f1(e){
    const Value=e.value;
    textarea.style.fontSize=Value + 'px';
}
// !color
function f2(c){
    let value=c.value;
    textarea.style.color=value;
}
window.addEventListener('load'),()=>{
    textarea.value='';
}