// import DefaultSideNav from "./defaultSideBar";
// import DefaultTopNav from "./defaultTopBar";
import LegatoNav from "./legatoNav";


class NavThemeFactory {
    operationsFactory;

    factory ={
    //     defaultSideNav: DefaultSideNav.getNavTheme(),
    //    defaultTopNav: DefaultTopNav.getNavTheme(),
    legato: LegatoNav.getNavTheme()
    }

    registerComponents(register){
        this.factory[register.name]= register.component;
    }
    getNavThemeFactory(){
        return this.factory;
    }

   
}
export default new NavThemeFactory();