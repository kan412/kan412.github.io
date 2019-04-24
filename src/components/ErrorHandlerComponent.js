class ErrorHandlerComponent{
    static instance = null;
    static async getInstance(){
        if (ErrorHandlerComponent.instance === null){
            const module = await import(/* webpackChunkName: "errorPopup" */ './ErrorPopupComponent');
            ErrorHandlerComponent.instance = new module.default();
        }
        return ErrorHandlerComponent.instance;
    }

}

export default ErrorHandlerComponent;