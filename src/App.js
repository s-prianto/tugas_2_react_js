import React,{Component} from 'react';
import Header from './Page/Header';
import Footer from './Page/Footer';
import MenuUtama from './Page/MenuUtama';
import MenuTentangKami from './Page/MenuTentangKami';
import MenuKontak from './Page/MenuKontak';
import MenuMakanan from './Page/MenuMakanan';

class App extends Component{
  render(){
    return(
      <div>
        <Header />
        <MenuUtama />
        <MenuTentangKami />
        <MenuMakanan />
        <MenuKontak />
        <Footer />
      </div>
    )
  }
}

export default App;
