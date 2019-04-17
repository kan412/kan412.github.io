class ErrorPopupComponent{
    render(error){
        const errorContainer = document.getElementById("errorMessage");
        errorContainer.innerHTML = error.stack;   
    }
}

export default ErrorPopupComponent;