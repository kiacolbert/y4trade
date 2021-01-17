import React, { createContext, Component } from 'react';

export const ThemeContext = createContext({});

class ThemeProvider extends Component {
  state = { 
    isLightTheme: true,
    light: { content: '#57585E', bg: '#FFFFFF'},
    dark: { content: '#FFFFFF',  bg: '#000000' }
   }
   toggleTheme = () => { 
     this.setState({isLightTheme: !this.state.isLightTheme});
   }

  render() { 
    return ( 
      <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
        {this.props.children}
      </ThemeContext.Provider>
     );
  }
}
 
export default ThemeProvider;