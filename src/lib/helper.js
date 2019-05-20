
    export function formateDate(dateString){
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const modifiedDate = `${day}/${month}/${year}`;

        return modifiedDate;
    }