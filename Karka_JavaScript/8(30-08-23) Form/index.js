const formdata={};
    
function get(){
        const inputfields = document.querySelectorAll("input");
        console.log('hai',inputfields);
        // const inputfield = document.querySelectorAll("textarea");
        inputfields.forEach(input => {
            formdata[input.name] =input.value;
        })
        // inputfield.forEach(textarea => {
        //     formdata[textarea.name] = textarea.value;
        // })
        console.log(formdata)
        str=JSON.stringify(formdata)
        localStorage.setItem("data",str);

    }
