let formatDate = (inputDate) => {
    let day = inputDate.getDate();
    let month = inputDate.getMonth() + 1;
    let year = inputDate.getFullYear();
    
    let formattedDay = day < 10 ? '0' + day : day;
    let formattedMonth = month < 10 ? '0' + month : month;
    
    return `${formattedDay}/${formattedMonth}/${year}`;
}

export default formatDate;
