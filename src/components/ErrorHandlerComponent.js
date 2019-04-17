import ErrorPopupComponent from './ErrorPopupComponent';

class ErrorHandlerComponent{
    static instance = null;
 
    constructor(error){
        this.loadErrorPopup(error);
    }

    static getInstance(error){
        if (ErrorHandlerComponent.instance === null){
            ErrorHandlerComponent.instance = new ErrorHandlerComponent(error);
        }
        return ErrorHandlerComponent.instance;
    }

    async loadErrorPopup(error){
        const module = await import(/* webpackChunkName: "errorPopup" */ './ErrorPopupComponent');
        const errorPopup = new module.default();
        errorPopup.render(error);
    }
}

export default ErrorHandlerComponent;