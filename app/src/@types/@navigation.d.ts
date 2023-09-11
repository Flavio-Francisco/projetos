export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Login: undefined;
      CreateCategory: {
        modal: boolean;
        id:string;
      };
      Home: undefined;

      Options: {
        isChecked: boolean;
        modal: boolean;
      };
    }
  }
}
