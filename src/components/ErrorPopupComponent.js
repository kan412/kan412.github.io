class ErrorPopupComponent{
    render(error){
        const errorContainer = document.getElementById("errorMessage");
        errorContainer.innerHTML = error;
        errorContainer.class = "show";   
    }
}

export default ErrorPopupComponent;