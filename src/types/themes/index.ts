type ButtonTheme = {
  background: string;
  text: string;
  outline: string;
};

export type Theme = {
  id: number;
  name: string;
  colors: {
    primary: string;
    light: string;
    dark: string;
    danger: string;
    white: string;
    grey: {
      600: string;
      400: string;
      200: string;
    };
    text: {
      light: string;
      dark: string;
    };

    button: ButtonTheme;
  };
};
