import React from 'react'
import './HomePage.css'
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import { Container } from '@material-ui/core'
import Header from '../../Header/Header'
import Trending from '../Trending/Trending'
import Movies from '../Movies/Movies'
import Series from '../Series/Series'
import Search from '../Search/Search'
import SimpleBottomNavigation from '../../MainNav/MainNav'



function HomePage() {
  
  return (
    
<BrowserRouter>
<Header/>
    <div className='app'>
      <Container>
          <Switch>
              <Route path='/' component={Trending} exact/>
              <Route path='/movies' component={Movies}/>
              <Route path='/series' component={Series}/>
              <Route path='/search' component={Search}/>
             
        </Switch>
        
      </Container>
     
    </div>
   <SimpleBottomNavigation/>
    </BrowserRouter>
 
  )
}

export default HomePage
