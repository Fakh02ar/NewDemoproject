import React from "react";

import './index.css'; 

import Navbar from "./Navbar";
import Text from "./Text";
import  Searchsec  from "./Searchsec";
import Cardsection from "./Cardsection";
import Footer from "./Footer";








function App() {
  return (
    <div>
   <Navbar />
   <Text />
   <Searchsec />
   <Cardsection />
   <Footer />
 
    </div>
  );
}

export default App;
