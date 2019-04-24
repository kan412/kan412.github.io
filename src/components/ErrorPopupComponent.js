class ErrorPopupComponent{
    render(error){
        const errorContainer = document.getElementById("errorMessage");

        if( error.status === 400){
            errorContainer.innerHTML = "Bad Request. The request was unacceptable, often due to a missing or misconfigured parameter.";
        }else if( error.status === 401){
            errorContainer.innerHTML = "Unauthorized. Your API key was missing from the request, or wasn't correct.";
        }else if( error.status === 429){
            errorContainer.innerHTML = "Too Many Requests. You made too many requests within a window of time and have been rate limited. Back off for a while.";
        }else if(error.status === 500){
            errorContainer.innerHTML = "Server Error. Something went wrong on our side.";
        }else{
            errorContainer.innerHTML =  error;
        }
      
        errorContainer.className = "show";   
    }
}

export default ErrorPopupComponent;