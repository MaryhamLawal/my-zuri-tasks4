let convertFahrToCelsius = (faht) => {
    if (typeof faht == 'number') {

        let celsius = faht - 32 * (5 / 9);
        console.log(celsius.toFixed(4));
        return celsius.toFixed(4);
    } else if (typeof faht == 'object') {
        if (Array.isArray(faht)) {
            
            console.log (`${JSON.stringify(faht)} is not a valid number but an Array`);

           //return `${$JSON.stringify(faht)} is not a valid number but an Array`;
        } else {
            let a = faht;
            console.log (`${JSON.stringify(faht)}  is not a valid number but a ${typeof faht}. type`)

            display = `${JSON.stringify(faht)} is not a valid number but a ${typeof faht}.`
             
            return display;
        
        }
    } else if (typeof faht == 'string') {
        let fahtNumber = Number(faht);
        if (isNaN(fahtNumber)) {
            console.log (`${faht} is not a valid number but a ${typeof faht}. type`)
            return `${faht} is not a valid number but a ${typeof faht}. type`
        } else {
            let celsius = fahtNumber - 32 * (5 / 9);
            console.log (celsius.toFixed(4))
        }
    } else {
        
        console.log(typeof faht);
    }
}

convertFahrToCelsius([1,2,3]);